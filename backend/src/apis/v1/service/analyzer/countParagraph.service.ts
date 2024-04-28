import { countParagraphRepo } from "../../repositories/analyzer/countParagraph.repo";
import { v4 as uuidv4 } from 'uuid'

export const countParagraphService = async (data: string, jwtPayload: any) => {
    const splitedParagraph = data.split(/\n\s*\n/)

    const result = await countParagraphRepo({ id: uuidv4(), content: data, totalParagraph: splitedParagraph.length, userId: jwtPayload.uID })
    return { id: result.id, content: result.content, totalParagraph: result.totalParagraph, userId: result.userId }
}