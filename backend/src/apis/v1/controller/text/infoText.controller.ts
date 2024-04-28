import { ExpressInterface } from "../../../../config/interface/ExpressInterface";
import { ResponseConfig } from "../../../../config/response/response.config";
import { createTextService } from "../../service/text/createText.service";

export const createText = async ({ req, res }: ExpressInterface) => {
    const response = new ResponseConfig("this is info", {}, "this is mesage", res)
    try {
        const newText = await createTextService({})
        response.ER200(newText)
    }
    catch (error) {
        response.ER500()
    }
    finally {

    }
}