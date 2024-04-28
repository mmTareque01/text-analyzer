import { ResponseConfig } from "../../../../config/response/response.config"
import { ExpressInterface } from "../../../../config/interface/ExpressInterface";
import { countWordService } from "../../service/analyzer/countWords.service";
import { Request, Response } from "express";
import { countParagraphService } from "../../service/analyzer/countParagraph.service";
import { SaveError } from "../../../../utilis/storeError";




export const countParagraph = async (req:Request, res:Response) => {
    const response = new ResponseConfig("This api is used to count the amount of characters within a string. To use this api authentication is mandatory.", 
    {
        currentLink: `${process.env.BASE_URL}/api/v1/analyzer/count-paragraph`,
        singin: `${process.env.BASE_URL}/api/v1/user/signin`,
        signup: `${process.env.BASE_URL}/api/v1/user/signup`
    },
    res);
    try {

        const paragraphCount = await countParagraphService(req.body.content, req.body.jwt);
        response.ER200(paragraphCount, );
    } catch (error) {
        await SaveError(error, req.ip || "", req.body.jwt.uID)
        response.ER500();
    }
};
