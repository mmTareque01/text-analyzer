import { updateTextRepositories } from "../../repositories/text/updateText.repositories"

interface CreateTextService {

}
export const deleteTextService = async (clue:any) => {
    const newText = await updateTextRepositories(clue)

    return newText
}