import { Request, Response } from "express"
import { connection } from "../data/connection"


// Gere uma cópia do endpoint original, e faça com que ele exiba apenas 5 users por vez, 
// e permita que o usuário possa passar a página que deseja ver. O número da página deve ser 
// passado por query params.

export const getUserPage = async (req: Request, res: Response): Promise<void> => {
   let statusCode = 400
   try {

      let page = Number(req.query.page)

      if (!page) {
         page = 1
      }

      let offset = 5 * (page - 1)

      const nameUsers = await connection("aula48_exercicio")
         .select("*")
         .limit(5)
         .offset(offset)

      if (!nameUsers.length) {
         res.statusCode = 404
         throw new Error("Nenhum usuario encontrado")
      }
      res.status(200).send(nameUsers)
   } catch (error: any) {
      console.log(statusCode)
      res.send(error.message || error.sqlMessage)
   }
}