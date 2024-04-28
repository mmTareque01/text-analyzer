import { signUpRepo } from "../../repositories/user/signup.repo"
import bcrypt from "bcryptjs"
import { v4 as uuidv4 } from "uuid"
import { generateJWT } from "../../../../utilis/generateJWT";

interface SignUpService {
    email: string;
    password: string;
    confirmPassword: string;
}

export const signUpService = async (data: SignUpService) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.password, salt);

    const newUser = await signUpRepo({ id: uuidv4(), email: data.email, password: hashedPassword })

    if (newUser) {
        return { email: newUser.email, id: newUser.id, token: generateJWT({ uID: newUser.id, uEmail: newUser.email }) }
    }

    return newUser;

}