import { Request, Response } from "express"
import { connection } from "../data/connection"


export const getUsersTypes = async (req: Request, res: Response): Promise<void> => {
   let statusCode = 400
   try {
      let type = req.params.type as string

      if (type) {
         type = "%"
      }
      const typeUser = await connection("aula48_exercicio")
         .where("type", "like", `%${type}%`)

      if (!typeUser.length) {
         res.statusCode = 404
         throw new Error("Nenhum usuario encontrado")
      }
      res.status(200).send(typeUser)
   } catch (error: any) {
      console.log(statusCode)
      res.send(error.message || error.sqlMessage)
   }
}