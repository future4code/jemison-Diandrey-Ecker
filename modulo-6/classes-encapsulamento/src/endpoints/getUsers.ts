import { Request, Response } from "express"
import connection from "../database/connection"
import { UserDataBase } from './../class/UserDataBase';

export const getUsers = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const userDB = new UserDataBase(connection)
        const result = await userDB.getUsers()

        res.status(200).send({ users: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}