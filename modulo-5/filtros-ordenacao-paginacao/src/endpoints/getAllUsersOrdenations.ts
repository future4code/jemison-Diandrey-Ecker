import { Request, Response } from "express"
import { connection } from "../data/connection"


export const getUsersOrdenations = async (req: Request, res: Response): Promise<void> => {
   let statusCode = 400
   try {
      let name = req.query.name as string
      let type = req.query.type as string

      let ordenation = "" as string

      if (name) {
         ordenation = "name"
      } else if (type) {
         ordenation = "type"
      } else {
         ordenation = "email"
      }

      const typeUser = await connection("aula48_exercicio")
         .select("*")
         .orderBy(ordenation, "ASC")

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

// Faça uma cópia do endpoint original, e adicione a ele a funcionalidade de ordenação que possa receber 
// nome ou tipo de user. A ordenação padrão deve ser crescente, e caso o usuário não passe nenhum parâmetro, 
// a ordenação deve ser por email.