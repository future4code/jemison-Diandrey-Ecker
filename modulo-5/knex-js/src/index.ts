import express, { Request, Response } from "express"
import cors from 'cors'
import { connection } from "./dataBase/connection"

const app = express()
app.use(express.json())
app.use(cors())

//-------------- EXERCICIOS TEORICOS ---------------------------------
// 1-A: Quando utilizamos a query feita com raw a resposta devolve todos os resultados da busca e nao apenas
// a primeira opção que seria a resposta solicitada.

// 1-B - Faça uma função que busque um ator pelo nome;: 
const getActor = async (name: string): Promise<any> => {
    const result = await connection.raw(
        `
        SELECT * 
        FROM Actor
        WHERE name = ${name}
        `
    )
};

// 1-C - Faça uma função que receba um gender retorne a quantidade de itens na tabela Actor com esse gender. Para atrizes, female e para atores male.:
const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(
        `
        SELECT COUNT(*) as count
        FROM Actor
        WHERE gender = ${gender}
        `
    )
    const count = result[0][0].count
    return count
}

// 2-A - Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão: 
const updateActor = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
        .update({
            salary: salary,
        })
        .where("id", id)
}

//deletar chave estrangeira

app.delete("dell", async (req: Request, res: Response): Promise<void> => {
    const id = req.query.id

    try {
        //Desativar checagem de chave estrangeira
        await connection.raw(
            `
            SET foreign_key_checks = 0
            `
        )
        // deleta registro
        await connection("Users")
            .delete()
            .where("id", id)

        // desativar checagem de chave estrangeira    
        await connection.raw(
            `
        SET foreign_key_cheks = 0
        `
        )
        res.send("OK")

    } catch (error: any) {
        console.log(error.message)
    }
})

// 2-B - Uma função que receba um id e delete um ator da tabela:
const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
        .delete()
        .where("id", id)
}

// 2-C - Uma função que receba um gender e devolva a média dos salários de atrizes ou atores desse gender:
const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
        .avg("salary as average")
        .where({ gender })

    return result[0].average
}

// 3-A - Crie um endpoint com as especificações acima:
app.get("/actor", async (req: Request, res: Response) => {
    try {
        const count = await countActors(req.query.gender as string);
        res.status(200).send(count);
    } catch (error: any) {
        res.status(400).send(error.message);
    }
});

//3-B - Crie um endpoint agora com as seguintes especificações:
// Deve ser um GET (/actor)
// Receber o gênero como um *query param* (`/actor?gender=`)
// Devolver a quantidade de atores/atrizes desse gênero

app.get("/actor", async (req: Request, res: Response) => {
    try {
        const count = await countActors(req.query.gender as string);
        res.status(200).send(count);
    } catch (error: any) {
        res.status(400).send(error.message);
    }
});

//4 - Crie um endpoint para cada uma das especificações abaixo:
//A - Endpoint para atualizar salário com id
app.put("/actor", async (req: Request, res: Response) => {
    try {
        const updateSalary = await (req.body.id, req.body.salary);
        res.status(200).send("Success");
    } catch (error: any) {
        res.status(400).send(error.message);
    }
});

//B - Endpoint para deletar ator da tabela:
app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
        await deleteActor(req.params.id);
    } catch (error: any) {
        res.status(400).send(error.message);
    }
});

// -------------------PORTA PARA VERIFICAR O SERVIDOR------------------------------
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});