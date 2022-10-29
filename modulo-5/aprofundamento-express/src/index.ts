import express, { Request, Response } from "express"
import cors from 'cors'
import { afazer } from "./data"

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

// EXERCICIO 1
app.get("/ping", (req: Request, res: Response) => {
    res.status(200).send("Pong 🏓")
})

//EXERCICIO 4

//Construa um endpoint que retorne todos os afazeres de uma determinada id de usuário.

// app.get("/todo/completed", (req: Request, res: Response) => {
//     const afazerCompleto = req.body.completed

//     const afazerFilter = afazer.filter((completed) => {
//         return completed.concluido === true
//     })
// })

// EXERCICIO 5
// Construa um endpoint de criação de afazeres. A resposta deve retornar o array de afazeres atualizado.



// EXERCICIO 6
// Construa um endpoint de edição do status de um afazer, ou seja, de completo para incompleto e vice-versa.



// EXERCICIO 7
// Construa um endpoint que deleta um determinado afazer de acordo com sua id.



// EXERCICIO 8
// Construa um endpoint que retorne todos os afazeres de uma determinada id de usuário.