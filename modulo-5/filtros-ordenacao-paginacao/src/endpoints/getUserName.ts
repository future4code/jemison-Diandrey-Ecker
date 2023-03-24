import { Request, Response } from "express"
import { connection } from "../data/connection"


export const getUserName = async ( req: Request,res: Response ): Promise<void> =>{
   let statusCode = 400
   try {
      let name = req.query.name as string

      if(!name) {
         name = "%"
      }
      const nameUsers = await connection("aula48_exercicio")
      .where("name", "like", `%${name}%`)

      if(!nameUsers.length){
         res.statusCode = 404
         throw new Error("Nenhum usuario encontrado")
      }
      res.status(200).send(nameUsers)
   } catch (error: any) {
      console.log(statusCode)
      res.send(error.message || error.sqlMessage)
   }
}