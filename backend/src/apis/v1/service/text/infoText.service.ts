import { createTextRepositories } from "../../repositories/text/createText.repositories"

interface CreateTextService {

}
export const createTextService = async (data: CreateTextService) => {
    const newText = await createTextRepositories(data)

    return newText
}