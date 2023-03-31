import { ProductDataBase } from './../database/ProductDataBase';
import { Request, Response } from "express"

export const getProductById = async (req: Request, res: Response) => {

    let errorCode = 400

    try {
        const productId = req.params.productId

        const productDataBase= new ProductDataBase()
        const getProductId = await productDataBase.getProductById(productId)

        res.status(200).send(getProductId)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}