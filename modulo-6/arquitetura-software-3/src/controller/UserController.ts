import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from './../model/userDTO';

export class UserController {
  public create = async (req: Request, res: Response): Promise<void> => {

    try {
      const input: UserInputDTO = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }

      const userBusiness = new UserBusiness();

      await userBusiness.create(input);

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });

    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
    }
  }

  getAllUsers = async (req: Request, res: Response): Promise<void> => {

    try {
      const users = new UserBusiness()
      const result = await users.getAllUsers()

      res.send(result).status(200)
    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
    }
  }
}
