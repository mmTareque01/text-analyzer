import { SignInInterface } from "../../../../config/interface/User.interface";
import { generateJWT } from "../../../../utilis/generateJWT";
import { signInRepo } from "../../repositories/user/signin.repo";
const bcrypt = require('bcryptjs');

export const signInService = async (data: SignInInterface) => {
    const userData = await signInRepo(data.email);
    if (userData) {
        const isMatched = await bcrypt.compare(data.password, userData.password);

        if(isMatched){
            return {
                email: userData.email,
                id: userData.id,
                token: generateJWT({ uID: userData.id, uEmail: userData.email })
            }
        }
    return false
       
    }
    return userData
}