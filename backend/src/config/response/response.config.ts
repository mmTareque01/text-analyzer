import { Response } from "express";

export class ResponseConfig<T> {
    private BASE_URL = process.env.BASE_URL
    constructor(
        public info: string,
        public links: Record<string, string>,

        public res: Response
    ) { }

    private response(statusCode: number, data: any, message: string) {
        return this.res
            .status(statusCode)
            .json({ ...{ info: this.info, links: this.links, message: message }, ...data });
    }

    private setCacheControll(type:string, age:number){
        this.res.setHeader('Cache-Control', `${type}, max-age=${age}`)
    }

    ER200(data = {}, message = "Data retrive successfull", setCache=false, type="public", age=36000) {
        if(setCache){
            this.setCacheControll(type, age)
        }
        return this.response(200, { data }, message)
    }

    ER201(data = {}, message = "Record created successfull") {
        return this.response(201, { data }, message)
    }

 

    ER401(data: any, message: string, error: string) {
        return this.response(401, { error: error, ...data }, message)
    }

    ER500(error: string = "Something went wrong. Try again later!") {
        return this.response(500, { error }, "Faild to process!")
    }
}
