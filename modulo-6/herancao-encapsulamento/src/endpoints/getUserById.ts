import { Request, Response } from "express"
import { UserDataBase } from './../database/UserDataBase';

export const getUserById = async (req: Request, res: Response) => {
    let errorCode = 400

    try {

        const userId = req.params.userId.toString()

        const findUserId = new UserDataBase()
        const resultUserId = await findUserId.getUserById(userId)

        res.status(200).send(resultUserId)
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}