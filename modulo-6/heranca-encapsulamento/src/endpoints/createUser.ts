import { Request, Response } from "express"
import { UserDatabase } from './../database/UserDatabase';

export const createUser = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const email = req.body.email
        const password = req.body.password

        if (!email || !password) {
            throw new Error("Body inválido.")
        }

        const id = Date.now.toString()
        const user = new UserDatabase()
        const result = await user.createUser(id, email, password)
        
        res.status(201).send({ message: "Usuário criado", user: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}