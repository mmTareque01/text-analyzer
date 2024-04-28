import { countCharacterRepo } from "../../repositories/analyzer/countCharacter.repo";
import { v4 as uuidv4 } from 'uuid'

export const countCharactersService = async (data: string, jwtPayload: any) => {
    const result = await countCharacterRepo({
        id: uuidv4(),
        content: data,
        totalCharacters: data.length,
        userId: jwtPayload.uID
    })
    return { id: result.id, content: result.content, totalCharacters: result.totalCharacters, userId: result.userId }
}