import { TextInterface } from "../../../../config/interface/TextMode.interface"
import { Text } from "../../../../model/text"

export const longestWordRepo = async (data: TextInterface) => {
    const existingDoc = await Text.findOne({ longestWord: data.longestWord })

    if (existingDoc) {
        return Text.findOneAndUpdate({ _id: existingDoc._id }, { longestWord: data.longestWord, userId: data.userId }, { new: true })
    }
    return new Text(data).save()
}