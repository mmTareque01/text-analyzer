import { Error } from "../model/error"
import { v4 as uuidv4 } from 'uuid'

export const SaveError = (error: any, ip: string, userId: string) => {
    return new Error({
        id: uuidv4(),
        userId,
        ip, error
    }).save()
}