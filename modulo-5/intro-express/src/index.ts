import express, { Request, Response } from "express"
import cors from 'cors'
import * as tipo from "./data"

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

// EXERCICIO 1

app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Hello from Express")
})

// EXERCICIO 4
app.get("/users", (req: Request, res: Response) => {
    const usuarios = tipo.usuarios.map((user) => {
        return tipo.usuarios
    })
    res.status(400).send(usuarios)
})

// EXERCICIO 7
app.get("/posts", (req: Request, res: Response) => {
    const posts = tipo.post.map((user) => {
        return tipo.post    
    })
    res.status(400).send(posts)
})

// EXERCICIO 8

