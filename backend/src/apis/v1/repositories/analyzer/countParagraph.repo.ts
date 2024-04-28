import { TextInterface } from "../../../../config/interface/TextMode.interface"
import { Text } from "../../../../model/text"

export const countParagraphRepo = async (data: TextInterface) => {
    const existingDoc = await Text.findOne({ totalParagraph: data.totalParagraph })

    if (existingDoc) {
        return Text.findOneAndUpdate({ _id: existingDoc._id }, { totalParagraph: data.totalParagraph, userId: data.userId }, { new: true })
    }
    return new Text(data).save()
}