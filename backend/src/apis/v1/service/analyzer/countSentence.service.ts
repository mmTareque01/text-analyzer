import { countSentenceRepo } from "../../repositories/analyzer/countSentence.repo";
import { v4 as uuidv4 } from 'uuid'

export const countSentenceService = async (data: string, jwtPayload: any) => {
    const sentenceEndRegex = /[.!?]+/g;
    const spliteSentence = data.split(sentenceEndRegex)


    const result = await countSentenceRepo({
        id: uuidv4(),
        content: data,
        totalSentence: spliteSentence.length,
        userId: jwtPayload.uID
    })
    return { id: result.id, content: result.content, totalSentence: result.totalSentence, userId: result.userId }
}