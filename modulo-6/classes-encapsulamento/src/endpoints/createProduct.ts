import { Request, Response } from "express"
import connection from "../database/connection"
import { Products } from './../class/Products';
import { ProductDataBase } from './../class/ProductDataBase';

export const createProduct = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name = req.body.name
        const price = req.body.price

        if (!name || !price) {
            throw new Error("Body inválido.")
        }

        const id = Date.now().toString()
        const newProduct = new Products(id, name, price)
        
        const productBD = new ProductDataBase(connection)
        productBD.insertProduct(newProduct)

        res.status(201).send({ message: "Produto criado", product: newProduct })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}