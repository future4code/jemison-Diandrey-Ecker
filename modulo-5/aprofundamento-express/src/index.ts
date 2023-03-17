import express, { Request, Response } from 'express'
import { afazeres } from './type'

import cors from 'cors'
import { toDo } from './data'

const app = express()

app.use(express.json())

app.use(cors())

app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong")
})

// -------------- EXERCICIO 4 ----------------

app.get("/todo/concluded/:statusToDo", (req: Request, res: Response) => {

    let statusToDo: any = req.params.statusToDo

    if (!statusToDo) {
        res.status(400).send('Favor informar o status do progresso')
    }

    if (statusToDo === "true") {
        statusToDo = true
    } else if (statusToDo === "false") {
        statusToDo = false
    } else {
        res.status(400).send('Status Inválido')
    }

    const result: any = []

    for (let i = 0; i < toDo.length; i++) {
        if (toDo[i].completed === statusToDo) {
            result.push(toDo[i])
        }
    }
    res.status(200).send(result)
})


// -------------- EXERCICIO 5 ----------------

app.post('/todo/create', (req: Request, res: Response) => {

    const { userId, title } = req.body

    if (!userId || !title) {
        res.status(400).send('Favor informar o usuario e titulo')
    }

    const newToDo: afazeres = {
        userId,
        id: Date.now(),
        title,
        completed: false
    }

    toDo.push(newToDo)

    res.status(200).send(toDo)
})

// // -------------- EXERCICIO 6 ----------------

// app.put("/todo/status", (req: Request, res: Response) => {

//     let statusToDo: any = req.query.status

//     if (!statusToDo) {
//         res.status(400).send('Favor informar o status')
//     }

//     if (statusToDo === "true") {
//         statusToDo = true
//     } else if (statusToDo === "false") {
//         statusToDo = false
//     } else {
//         res.status(400).send('Status Inválido')
//     }

//     const result = []

//     for (let i = 0; i < toDo.length; i++) {
//         if (toDo[i].completed === statusToDo) {
//             toDo[i] = !statusToDo

//             result.push(toDo[i])
//         }
//     }
//     res.status(200).send(result)
// })

// -------------- EXERCICIO 7 ----------------

// app.delete("/todo/delete", (req: Request, res: Response) => {

//     const toDoId = Number(req.headers.toDoId) 

//     if(!toDo) {
//         res.status(400).send('Favor informar o ID do afazer')
//     }

//     const afazerFiltered = toDo.find((afazer) => {
//         return afazer.id === toDoId
//     })

//     let toDoDeleted

//     if(afazerFiltered) {
//         toDoDeleted = afazerFiltered.id.find(())
//     }


//     res.status(200).send()
// })

// -------------- EXERCICIO 8 ----------------

app.get("/todo/user", (req: Request, res: Response) => {

    const userId: any = req.headers.authorization

    console.log(userId)

    if (!userId) {
        res.status(400).send('Favor informar o ID do usuario')
    }
    const result = []

    for (let i = 0; i < toDo.length; i++) {
        if (toDo[i].userId === userId) {
            result.push(toDo[i])
        }
    }
    res.status(200).send(result)
})

// -------------- EXERCICIO 10 ----------------








app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
})