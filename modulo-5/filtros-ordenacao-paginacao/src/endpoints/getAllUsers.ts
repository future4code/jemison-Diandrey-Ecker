// import { Request, Response } from "express"
// import { connection } from "../data/connection"


// export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
//    let statusCode = 400
//    try {

//       let name = req.query.name as string
//       let type = req.query.type as string
//       let page = Number(req.query.page)
//       let order = req.query.order as string

//       let filter = "" as string


//       if (!name && !type) {
//          filter = "name"
//       }

//       if (name && type) {
//          filter = "name"
//       }

//       if (!page) {
//          page = 1
//       }

//       if (order && order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC") {
//          filter = "name"
//          order = "DESC"
//       }

//       let offset = 5 * (page - 1)

//       const nameUsers = await connection("aula48_exercicio")
//          .select("*")
//          .orderBy(filter, order)
//          .limit(5)
//          .offset(offset)

//       if (!nameUsers.length) {
//          res.statusCode = 404
//          throw new Error("Nenhum usuario encontrado")
//       }
//       res.status(200).send(nameUsers)
//    } catch (error: any) {
//       console.log(statusCode)
//       res.send(error.message || error.sqlMessage)
//    }
// }

//Crie um último endpoint que possua todas as funcionalidades acima (as duas filtragens, 
//a ordenação e a paginação). Atribua valores padrão para filtragem, ordenação e paginação para que:

//- Caso o usuário não forneça parâmetro de filtragem, o endpoint busque todos os users;
//- Caso o usuário não forneça parâmetro de ordenação, o endpoint ordene por **nome** em ordem 
//**decrescente;**
//- Caso o usuário não forneça número de página, deve começar na página 1