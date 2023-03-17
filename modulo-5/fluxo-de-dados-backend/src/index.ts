import express from "express"
import { Request, Response } from "express"

import cors from 'cors'
import { Product } from "./types"
import { products } from './data';

const app = express()

app.use(express.json())

app.use(cors())

// -----------------------------------------------------------------------------//

app.get("/test", (req: Request, res: Response) => {
    res.status(200).send("Servidor rodandoo na porta 3003")
})

// --------------------------- CRIAR PRODUTO ------------------------------------//

app.post("/product/create", (req: Request, res: Response) => {

    const { name, price } = req.body

    try {
        if (!name) {
            const erro = new Error("O nome do produto não foi informado");
            erro.name = "DataProductNotFound"
            throw erro;
        } else if (!price) {
            const erro = new Error("O preço do produto não foi informado");
            erro.name = "DataProductNotFound"
            throw erro;
        }
        const newProduct: Product = {
            id: Date.now().toString(),
            name,
            price
        }
        products.push(newProduct)

        res.status(201).send(products)

    } catch (err: any) {
        if (err.name === "DataProductNotFound") {
            res.status(401).send(err.message)
        }
    }
})

// ------------------------ RETORNA PRODUTOS -----------------------------------//

app.get("/products", (req: Request, res: Response) => {
    res.status(200).send(products)
})

// ------------------------ EDITAR PREÇO -----------------------------------//

app.put("/products/price", (req: Request, res: Response) => {

    const id = req.headers.id
    const newPrice = Number(req.query.newPrice)

    try {
        if (!id) {
            const erro = new Error("O ID do produto não foi informado")
            erro.name = "DataProductNotFound"
            throw erro;
        } else if (!newPrice) {
            const erro = new Error("O novo valor do produto não foi informado")
            erro.name = "DataProductNotFound"
            throw erro;
        }

        let productsFiltered = products.find((product) => {
            return product.id === id
        })

        if (!productsFiltered) {
            const erro = new Error("Produto não encontrado")
            erro.name = "AutotizationError"
            throw erro;
        } else {
            const newProductPrice = products.map((product) => {
                if (product.id === productsFiltered?.id) {
                    product.price = newPrice
                    return product
                } else {
                    return product
                }
            })
            res.status(201).send(newProductPrice)
        }

    } catch (err: any) {
        if (err.name === "DataProductNotFound") {
            res.status(422).send(err.message)
        } else if (err.name === "AutotizationError")
            res.status(401).send(err.message)
    }
})

// ------------------------ DELETAR PRODUTO -----------------------------------//

// app.delete("/product/delete/:id", (req: Request, res: Response) => {

//     const id = req.params.id

//     try {
//         if (!id) {
//             const erro = new Error("O ID do produto não foi informado");
//             erro.name = "DataProductNotFound"
//             throw erro;
//         }

//         const productFiltered = products.find((product) => {
//             return product.id === id
//         })

//         if (!productFiltered) {
//             const erro = new Error("Produto não encontrado")
//             erro.name = "AutotizationError"
//             throw erro;
//         } else {

//         }

//     } catch (err: any) {
//         if (err.name === "DataProductNotFound") {
//             res.status(422).send(err.message)
//         } else if (err.name === "AutotizationError") {
//             res.status(401).send(err.message)
//         }
//     }
// })


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});