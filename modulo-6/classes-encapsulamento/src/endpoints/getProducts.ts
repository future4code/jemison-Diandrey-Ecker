import { Request, Response } from "express"
import connection from "../database/connection"
import { ProductDataBase } from './../class/ProductDataBase';

export const getProducts = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const procutsDB = new ProductDataBase(connection)
        const result = await procutsDB.getProducts()

        res.status(200).send({ products: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}