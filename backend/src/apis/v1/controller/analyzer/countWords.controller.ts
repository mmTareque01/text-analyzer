import { ResponseConfig } from "../../../../config/response/response.config"
import { SaveError } from "../../../../utilis/storeError";
import { countWordService } from "../../service/analyzer/countWords.service";
import { Request, Response } from "express";


export const countWord = async (req: Request, res: Response) => {
    const response = new ResponseConfig("This api is used to count the amount of words within a string. To use this api authentication is mandatory.", 
    {
        currentLink: `${process.env.BASE_URL}/api/v1/analyzer/count-word`,
        singin: `${process.env.BASE_URL}/api/v1/user/signin`,
        signup: `${process.env.BASE_URL}/api/v1/user/signup`
    },
    res);

    try {
        const wordCount = await countWordService(req.body.content, req.body.jwt);
        response.ER200(wordCount, "Successfully counted the words!", true);
    } catch (error) {
        await SaveError(error, req.ip || "", req.body.jwt.uID)
        response.ER500();
    }
};
