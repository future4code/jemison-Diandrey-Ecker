import { Request, Response } from "express"
import { Purchase } from "../models/Purchase"
import { UserDataBase } from './../database/UserDataBase';
import { ProductDataBase } from './../database/ProductDataBase';
import { PurchaseDataBase } from './../database/PurchaseDataBase';
import { log } from "console";

export const createPurchase = async (req: Request, res: Response) => {

    let errorCode = 400

    try {
        const userId = req.body.userId
        const productId = req.body.productId
        const quantity = req.body.quantity

        if (!userId || !productId || !quantity) {
            throw new Error("Body inválido.")
        }

        const userDataBase = new UserDataBase()
        const findUser = await userDataBase.getUserById(userId)

        if (findUser.length === 0) {
            errorCode = 404
            throw new Error("Usuário não encontrado.")
        }

        const productDataBase = new ProductDataBase()
        const findProduct = await productDataBase.getProductById(productId)
    
        if (findProduct.length === 0) {
            errorCode = 404
            throw new Error("Produto não encontrado.")
        }

        const id = Date.now().toString()

        const total_price = findProduct[0].price * quantity

        console.log(total_price)

        const newPurchase = new Purchase(id, userId, productId, quantity, total_price)
        const resultNewPurchase = new PurchaseDataBase()
        resultNewPurchase.insertPurchase(newPurchase)

        res.status(201).send({ message: "Compra Registrada", product: newPurchase })
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}