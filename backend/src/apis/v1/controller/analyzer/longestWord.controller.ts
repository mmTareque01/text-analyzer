import { ResponseConfig } from "../../../../config/response/response.config"
import { Request, Response } from "express";
import { longestWordService } from "../../service/analyzer/longestWord.service";
import { SaveError } from "../../../../utilis/storeError";


export const longestWord = async (req: Request, res: Response) => {
    const response = new ResponseConfig("This api is used to count the amount of characters within a string. To use this api authentication is mandatory.",
        {
            currentLink: `${process.env.BASE_URL}/api/v1/analyzer/longest-word`,
            singin: `${process.env.BASE_URL}/api/v1/user/signin`,
            signup: `${process.env.BASE_URL}/api/v1/user/signup`
        },
        res);
    try {

        const longestWordData = await longestWordService(req.body.content, req.body.jwt);
        response.ER200(longestWordData, );
    } catch (error) {
        // console.log(error)
        await SaveError(error, req.ip || "", req.body.jwt.uID)
        response.ER500();
    }
};
