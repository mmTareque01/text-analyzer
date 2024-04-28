import { Request, Response } from "express";
import { ResponseConfig } from "../../../../config/response/response.config";
import { signUpService } from "../../service/user/signup.service";

export const signUp = async (req: Request, res: Response) => {
    const response = new ResponseConfig(
        "This is sign up api. User will be able to signup into the system by providing email and password!",
        {
            currentLink: `${process.env.BASE_URL}/api/v1/user/signup`,
            workHistory: `${process.env.BASE_URL}/api/v1/user/signup`,
            signin: `${process.env.BASE_URL}/api/v1/user/signin`
        },
        res);

    try {
        const singupData = await signUpService({ email: req.body.email, password: req.body.password, confirmPassword: req.body.confirmPassword })

        if (singupData) {
            return response.ER201(singupData, "Singup successfully!")
        }

        return 0 //need to handle error


    }
    catch (error) {
        console.log(error)
       return response.ER500()
    }
}