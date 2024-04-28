import { countWordRepo } from "../../repositories/analyzer/countWord.repo"
import { v4 as uuidv4 } from 'uuid'


export const countWordService = async (data: string, jwtPayload: any) => {
    const splitedWords = data.split(" ")
    const result = await countWordRepo({
        id: uuidv4(),
        content: data,
        totalWords: splitedWords.length,
        userId: jwtPayload.uID
    })
    return { id: result.id, content: result.content, totalWords: result.totalWords, userId: result.userId }
}