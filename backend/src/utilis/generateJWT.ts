import jwt from "jsonwebtoken"

export function generateJWT(payload: any, duration: string = "1d") {

    console.log(payload)
    const token = jwt.sign(payload, process.env.JWT_TOKEN || "key", { expiresIn: duration });
    return token;
}