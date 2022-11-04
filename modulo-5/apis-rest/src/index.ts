import express, { Request, Response } from "express"
import cors from 'cors'
import { users } from "./data"
import { User } from "./types"

const app = express()
app.use(express.json())
app.use(cors())

// EXERCICIO 1 - OK
app.get("/users", (req: Request, res: Response) => {
    const usersList = users.map((user) => {
        return user
    })
    res.status(200).send(usersList)
})

// a. Qual método HTTP você deve utilizar para isso?
// Como era necessario pegar informaçoes da aplicação foi utilizado o metodo GET.

// b. Como você indicaria a entidade que está sendo manipulada?
// Resposta: 

//---------------//---------------//-----------------

// EXERCICIO 2
app.get("/user/:type", (req: Request, res: Response) => {
    let errorCode = 422;

    try {
        const userType = req.params.type as string
        const userSearchedByType = users.filter((user) => {
            return user.type.toUpperCase() === userType.toUpperCase()
        })
        if (!userSearchedByType) { //ESTE ERRO NAO ESTA RETORNANDO CORRETAMENTE
            errorCode = 404;
            throw new Error("Tipo invalido utilizar apenas ADMIN ou NORMAL");
        }
        res.status(200).send(userSearchedByType)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

//---------------//---------------//-----------------

//EXERCICIO 3 - OK
app.get("/user", (req: Request, res: Response) => {
    let errorCode = 400;

    try {
        const userName = req.query.name as string
        if (!userName) {
            errorCode = 401
            throw new Error("Falta passar o nome como parametro");
        }
        const userSeached = users.filter((user) => {
            return user.name.toLowerCase() === userName.toLowerCase()
        })

        // b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado.
        if (!userSeached) { //ESTE ERRO NAO ESTA RETORNANDO CORRETAMENTE
            errorCode = 404;
            throw new Error("Usuario não encontrado");
        }
        res.status(200).send(userSeached)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

// a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?
// Foi utilizado o parametro QUERY, pois, é o tipo mais utilizado para fazer filtros na aplicação, e aceita um ou mais parametros na URL.

//---------------//---------------//-----------------

// EXERCICIO 4
app.post("/users/create", (req: Request, res: Response) => {
    let errorCode = 400;

    try {
        const { userName, userEmail, userType, userAge } = req.body
        if (!userName || !userEmail || !userType || !userAge) {
            errorCode = 400;
            throw new Error("Favor passar parametros, nome, email, tipo, idade");
        }
        if (userType.toUpperCase() !== "ADMIN" && userType.toUpperCase() !== "NORMAL") {
            errorCode = 400;
            throw new Error("Tipo de usuario invalido, utlizar apenas os tipos ADMIN ou NORMAL");
        }
        const newUser: User = {
            id: Math.random(),
            name: userName,
            email: userEmail,
            type: userType,
            age: userAge
        }
        users.push(newUser)
        res.status(201).send(users)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

// a. Mude o método do endpoint para PUT. O que mudou?
// Resposta: Não ocorreu nenhuma mudança.

// b. Você considera o método PUT apropriado para esta transação? Por quê?
// Resposta: Depende, essencialmente eles funcionam de formas parecidads, o PUT normalmente é utilizado para atualizar algo, 
// enquanto, o POST é utilizado para criar algo.
// Entao, na minha visao eu poderia utilizar os dois metodos nesse caso, porquê, analizando a situação eu poderia
// pensar da seguinte forma:
// Estou criando um usuario novo entao poderia utilizar o POST, mas, poderia ser uma atualização do banco de dados,
// ai nesse caso poderia utilizar o PUT. (NAO SEI SE A MINHA ANALISE FEZ SENTIDO).



//------- CONFIG. INICIAIS EXPRESS PORTA ----------
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});