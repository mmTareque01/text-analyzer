import { TextInterface } from "../../../../config/interface/TextMode.interface"
import { Text } from "../../../../model/text"

export const countWordRepo = async (data: TextInterface) => {
    const existingDoc = await Text.findOne({ content: data.content })

    if (existingDoc) {
        return Text.findOneAndUpdate({ _id: existingDoc._id }, { totalWords: data.totalWords, userId: data.userId }, { new: true })
    }
    return new Text(data).save()
}