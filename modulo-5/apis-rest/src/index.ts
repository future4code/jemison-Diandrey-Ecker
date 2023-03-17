import express, { Request, Response } from 'express'
import cors from 'cors'
import { users } from './data';
import { User } from './types';


//------- CONFIG. INICIAIS EXPRESS ----------

const app = express()
app.use(express.json())
app.use(cors())

//------- PERGUNTAS TEORICAS ----------

// 1.A - Neste caso o metodo que deve ser utilizado é o GET.
// 1.B - /users

//2.A - Foi passado via query parameters, porque, é o mais recomendado para realizar consulta.
//2.B - Foram feitos algumas condiçoes para que isso aconteça.

//3.A - Utilizei via query parameters.
//3.B - Esta comentado no codigo

//4.A - Nada mudou
//4.B - Mesmo o resultado sendo o mesmo o mais recomendado para esta situaçao seria metodo POST, 
//para facilitar a leitura do codigo por outro pessoa, fincando mais claro qual a funcao do endpoint.


//---------------- EXERCICIO 1 ------------------------
app.get("/users", (req: Request, res: Response) => {
    res.status(200).send(users)
})

//---------------- EXERCICIO 2 ------------------------
app.get("/users/type", (req: Request, res: Response) => {

    let errorCode = 400

    try {

        const userType = req.query.type as string

        if (!userType) {
            errorCode = 422
            throw new Error("Informe o tipo de usuario");
        }
        if (userType.toUpperCase() !== "ADMIN" && userType.toUpperCase() !== "NORMAL") {
            errorCode = 402
            throw new Error("Insira um tipo de usuario valido");
        }
        const userTypeFiltered = users.filter((user) => {
            return user.type.toUpperCase() === userType.toUpperCase()
        })

        res.status(200).send(userTypeFiltered)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

//---------------- EXERCICIO 3 ------------------------

app.get("/user", (req: Request, res: Response) => {

    let errorCode = 400

    try {

        const userName = req.query.userName as string

        if (!userName) {
            errorCode = 422
            throw new Error("Favor informar o nome do usuario");
        }
        const userSearched = users.find((user) => {
            return user.name.toLowerCase() === userName.toLowerCase()
        })
        //---------------- EXERCICIO 3.B ---------------------------------------------------------
        if (!userSearched) {
            errorCode = 404
            throw new Error("Usuario não encontrado");
        }
        //----------------------------------------------------------------------------------------

        res.status(200).send(userSearched)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

//---------------- EXERCICIO 4 ------------------------
app.post("/user/createuser", (req: Request, res: Response) => {

    let errorCode = 400

    try {

        const { userName, userEmail, userType, userAge } = req.body

        if (!userName || !userEmail || !userType || !userAge) {
            errorCode = 422
            throw new Error("Favor passar todos os paramentros");
        }
        if (userType.toUpperCase() !== "ADMIN" && userType.toUpperCase() !== "NORMAL") {
            errorCode = 402
            throw new Error("Tipo de usuario invalido");
        }
        const newUser: User = {
            id: Date.now(),
            name: userName,
            email: userEmail,
            type: userType.toUpperCase(),
            age: userAge
        }
        users.push(newUser)

        res.status(201).send(users)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

//------- CONFIG. INICIAIS EXPRESS PORTA ----------

app.listen(3003, () => {
    console.log('Servidor rodando na porta 3003')
})