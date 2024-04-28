import { longestWordRepo } from "../../repositories/analyzer/longestWord.repo";
import { v4 as uuidv4 } from 'uuid'

export const longestWordService = async (data: string, jwtPayload: any) => {
    const splitedWords = data.split(" ")
    splitedWords.sort((a: string, b: string) => b.length - a.length)

    const result = await longestWordRepo({ id: uuidv4(), content: data, longestWord: splitedWords[0], userId: jwtPayload.uID })
    return { id: result.id, content: result.content, longestWord: result.longestWord, userId: result.userId }
}