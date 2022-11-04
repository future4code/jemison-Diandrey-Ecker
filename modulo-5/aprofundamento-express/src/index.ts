import express, { Request, Response } from "express"
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

// EXERCICIO 1

app.get("/teste", (req: Request, res: Response) => {
    res.status(200).send("Servidor rodando na porta 3003!")
})

// EXERCICIO 4

app.post("/createproducts", (req: Request, res: Response) => {
    const createproduct = req.body.name
})

