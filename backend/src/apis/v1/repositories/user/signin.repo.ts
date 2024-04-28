import { SignInInterface } from "../../../../config/interface/User.interface";
import { User } from "../../../../model/user";

export const signInRepo = async (email: string) => {
    return await User.findOne({ email: email });
}