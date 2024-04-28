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

    ER200(data = {}, message = "Data retrive successfull") {
        return this.response(200, { data }, message)
    }

    // ER200_Paginate(data = {}, totalData: number, pageNo: number) {
    //     return this.response(200, {
    //         data, paginate: {
    //             totalData,
    //             pageNo,
    //             totalPage: Math.ceil(totalData / pageNo),
    //             next: this.BASE_URL,
    //             previous: this.BASE_URL,
    //         }
    //     })
    // }

    ER201(data = {}, message = "Record created successfull") {
        return this.response(201, { data }, message)
    }

    ER400() {
        console.log("this is console");
        return { info: this.info, links: this.links, error: "" };
    }

    ER404() {
        console.log("this is console");
        return { info: this.info, links: this.links, error: "" };
    }

    ER402() {
        console.log("this is console");
        return { info: this.info, links: this.links, error: "" };
    }

    ER401(data: any, message: string, error: string) {
        return this.response(401, { error: error, ...data }, message)
    }

    ER500(error: string = "Something went wrong. Try again later!") {
        return this.response(500, { error }, "Faild to process!")
    }
}
