import { ResponseConfig } from "../../../../config/response/response.config"
import { ExpressInterface } from "../../../../config/interface/ExpressInterface";
import { countWordService } from "../../service/analyzer/countWords.service";
import { Request, Response } from "express";
import { countCharactersService } from "../../service/analyzer/countCharacters.service";
import { SaveError } from "../../../../utilis/storeError";


export const countCharacters = async (req:Request, res:Response) => {
    const response = new ResponseConfig("This api is used to count the amount of characters within a string. To use this api authentication is mandatory.", 
    {
        currentLink: `${process.env.BASE_URL}/api/v1/analyzer/count-character`,
        singin: `${process.env.BASE_URL}/api/v1/user/signin`,
        signup: `${process.env.BASE_URL}/api/v1/user/signup`
    },
    res);
    try {
        const characterCount = await countCharactersService(req.body.content, req.body.jwt);
        response.ER200(characterCount, "Successfully counted characters!");
    } catch (error) {
        console.log(error)
        await SaveError(error, req.ip || "", req.body.jwt.uID)
        response.ER500();
    }
};
