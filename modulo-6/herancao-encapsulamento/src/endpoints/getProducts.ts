import { Request, Response } from "express"
import { ProductDataBase } from './../database/ProductDataBase';

export const getProducts = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const productDataBase = new ProductDataBase()
        const getProduct = await productDataBase.getAllProducts()
        res.status(200).send({ products: getProduct })

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}