import { Request, Response } from "express"
import { UserDatabase } from './../database/UserDatabase';

export const getUsers = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const useDB = new UserDatabase()
        const result = await useDB.getAllUsers()

        res.status(200).send({ users: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}