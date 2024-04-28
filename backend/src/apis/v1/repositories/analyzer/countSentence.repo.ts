import { TextInterface } from "../../../../config/interface/TextMode.interface"
import { Text } from "../../../../model/text"

export const countSentenceRepo = async (data: TextInterface) => {
    const existingDoc = await Text.findOne({ totalSentence: data.totalSentence })

    if (existingDoc) {
        return Text.findOneAndUpdate({ _id: existingDoc._id }, { totalSentence: data.totalSentence, userId: data.userId }, { new: true })
    }
    return new Text(data).save()
}