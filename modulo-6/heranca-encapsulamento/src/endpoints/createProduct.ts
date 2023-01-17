import { Request, Response } from "express"
import { ProductDataBase } from './../database/ProductDataBase';

export const createProduct = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name = req.body.name
        const price = req.body.price

        if (!name || !price) {
            throw new Error("Body inválido.")
        }
        const id = Date.now.toString()
        const product = new ProductDataBase()
        const result = await product.createNewProduct(id, name, price)
            
        res.status(201).send({ message: "Produto criado", product: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}