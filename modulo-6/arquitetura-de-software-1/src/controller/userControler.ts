import { Request, Response } from 'express';
import { UserBusiness } from './../business/userBusiness';

export class UserControler {
    createUser = async (req: Request, res: Response): Promise<void> => {

        try {
            const input: any = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            await userBusiness.createUser(input);

            res.status(201).send({ message: "Usuário criado!" });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }

    getAllUsers = async (req: Request, res: Response): Promise<void> => {

        try {
            const users = new UserBusiness()
            await users.getAllUsers()

            res.send(users).status(200);

        } catch (error: any) {
            res.send({ message: error.message }).status(error.status);
        }
    }

    deleteUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const input = {
                id: req.params.id
            }

            await new UserBusiness().deleteUser(input)

            res.status(200).send({ message: "Usuário apagado com sucesso" });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }
}