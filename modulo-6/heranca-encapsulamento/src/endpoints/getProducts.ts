import { Request, Response } from "express"
import { ProductDataBase } from './../database/ProductDataBase';

export const getProducts = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const allProducts = new ProductDataBase()
        const result = await allProducts.getAllProducts()
        
        res.status(200).send({ products: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}