import { Request, Response } from "express";
import { ResponseConfig } from "../../../../config/response/response.config";
import { signUpService } from "../../service/user/signup.service";
import { signInService } from "../../service/user/signin.service";

export const signIn = async (req: Request, res: Response) => {
    const response = new ResponseConfig(
        "This is sign in api. User will be able to singin into the system by providing email and password!",
        {
            currentLink: `${process.env.BASE_URL}/api/v1/user/signin`,
            signup: `${process.env.BASE_URL}/api/v1/user/signup`
        },
        res);

    try {
        const singupData = await signInService({ email: req.body.email, password: req.body.password })

        if (singupData) {
            return response.ER200(singupData, "Singin successfully!")
        }

        return response.ER401({email:req.body.email}, "Faild to login", "Invalid email or password!")


    }
    catch (error) {
        console.log(error)
        return response.ER500()
    }
}