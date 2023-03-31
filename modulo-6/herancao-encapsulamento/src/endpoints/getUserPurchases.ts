import { Request, Response } from "express"
import { PurchaseDataBase } from './../database/PurchaseDataBase';

export const getUserPurchases = async (req: Request, res: Response) => {

    let errorCode = 400

    try {
        const userId = req.params.id

        const userPurchasesId = new PurchaseDataBase()
        const resultUserPurchasesId = await userPurchasesId.getUserPurchases(userId)

        res.status(200).send(resultUserPurchasesId)
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}