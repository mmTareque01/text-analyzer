import { NextFunction, Request, Response } from "express";
import { ResponseConfig } from "../config/response/response.config";
import jwt from "jsonwebtoken"


export const checkTokenValid = (req: Request, res: Response, next: NextFunction) => {
    const response = new ResponseConfig(
        "If you get this response, it means, the request is not valid. Make sure you are following the proper way to call the api. If you are still facing the issue visit our documentation, thank you.",
        {
            singin: `${process.env.BASE_URL}/api/v1/user/signin`,
            signup: `${process.env.BASE_URL}/api/v1/user/signup`
        },
        res);
    const { authorization } = req.headers;
    try {
        if (!authorization) {
            return response.ER401({}, "Invalid request. Login first please!", "Invalid request, session expired.")
        }
        const token = authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_TOKEN || "key");

        req.body.jwt = decoded
        next();
    } catch (err) {
        console.log(err)
        return response.ER401({}, "Invalid request. Login first please!", "Invalid request, session expired.")
    }
};

