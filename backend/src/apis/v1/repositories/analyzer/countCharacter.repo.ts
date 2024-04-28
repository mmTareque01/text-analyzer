import { TextInterface } from "../../../../config/interface/TextMode.interface"
import { Text } from "../../../../model/text"

export const countCharacterRepo = async (data: TextInterface) => {
    const existingDoc = await Text.findOne({ totalCharacters: data.totalCharacters })

    if (existingDoc) {
        return Text.findOneAndUpdate({ _id: existingDoc._id }, { totalCharacters: data.totalCharacters, userId: data.userId }, { new: true })
    }
    return new Text(data).save()
}