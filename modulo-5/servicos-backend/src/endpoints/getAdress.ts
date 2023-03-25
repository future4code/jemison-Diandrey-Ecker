import { Request, Response } from 'express';
import { getAdressInfo } from '../services/getAddressInfo';

export const getAdress = (async (req: Request, res: Response) => {

    let errorCode = 400
    try {

        const cep = req.query.cep as string

        if (!cep) {
            res.statusCode = 422
            throw new Error("CEP é obrigatorio");
        }
        const getAddress = await getAdressInfo(cep)
        res.status(200).send(getAddress)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})