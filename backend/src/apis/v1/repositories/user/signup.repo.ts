import { UserInterface } from "../../../../config/interface/User.interface";
import { User } from "../../../../model/user"

export const signUpRepo = async (data: UserInterface) => {
    const exitingDoc = await User.findOne({ email: data.email })
    if (exitingDoc) {
        return exitingDoc
    }
    return new User(data).save();
}