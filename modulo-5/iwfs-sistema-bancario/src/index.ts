import express, { Request, Response } from 'express'
import cors from 'cors'
import { users } from './data'



//------- CONFIG. INICIAIS EXPRESS ----------

const app = express()
app.use(express.json())
app.use(cors())

//------- ABRIR NOVA CONTA ----------

app.post("/user/newAccount", (req: Request, res: Response) => {

    let errorCode = 400

    try {
        const { clienteNome, clienteCPF, clienteData } = req.body
        const saldoInicial = 0

        if (!clienteNome || !clienteCPF || !clienteData) {
            errorCode = 422
            throw new Error("Favor inserir todos os dados");
        }

        const verificaCPF = users.find((user) => {
            return user.CPF === clienteCPF
        })

        if (verificaCPF) {
            errorCode = 402
            throw new Error("Cliente ja cadastrado");
        } else {
            users.push({
                id: Date.now().toString(),
                nome: clienteNome,
                CPF: clienteCPF,
                data: clienteData,
                saldo: saldoInicial,
                extrato: []
            })
        }
        res.status(201).send(users.at(- 1))

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

//------- VERIFICAR SALDO ----------
app.get("/user/:cpf", (req: Request, res: Response) => {

    let errorCode = 400

    try {

        const clienteNome = req.query.nome
        const clienteCPF = req.params.cpf

        if (!clienteNome || !clienteCPF) {
            errorCode = 422
            throw new Error("Favor inserir todos os dados");
        }

        const verificaCPF = users.find((user) => {
            return user.CPF === clienteCPF
        })

        if (!verificaCPF) {
            errorCode = 402
            throw new Error("Usuario nao encontrado");
        } else {
            const saldoCliente = users.map((user) => {
                if (user.CPF === clienteCPF) {
                    return user.saldo
                }
            })
            res.status(200).send(`Seu saldo atual é de R$${saldoCliente}`)
            console.log(saldoCliente)
        }
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

//--------------- ADICIONAR SALDO -------------------

app.patch("/user/:cpf", (req: Request, res: Response) => {

    let errorCode = 400

    try {

        const clienteNome = req.query.clienteNome
        const clienteCPF = req.params.cpf
        const novoDeposito = Number(req.query.novoDeposito)

        if (!clienteNome || !clienteCPF || !novoDeposito) {
            errorCode = 422
            throw new Error("Favor inserir todos os dados");
        }

        const verificaCPF = users.find((user) => {
            return user.CPF === clienteCPF
        })

        if (!verificaCPF) {
            errorCode = 401
            throw new Error("Cliente nao encontrado");
        } else {
            const novoSaldo = users.map((user) => {
                if (user.CPF === clienteCPF) {
                    user.saldo = user.saldo + novoDeposito
                    return user.saldo
                }
            })
            res.status(200).send(`Deposito no valor de R$${novoDeposito} efetuado com sucesso. Saldo atual: R$${novoSaldo}`)
        }
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

//------- TRANSFERENCIA INTERNA ----------
app.patch("/user/:cpf/transferencia", (req: Request, res: Response) => {

    let errorCode = 400

    try {

        const clienteNome = req.query.clienteNome
        const clienteCPF = req.params.cpf
        const destinatarioNome = req.query.destinatarioNome
        const destinatarioCPF = req.query.destinatarioCPF
        const valorTransferencia = Number(req.query.valorTransferencia)

        if (!clienteNome || !destinatarioNome || !clienteCPF || !destinatarioCPF || !valorTransferencia) {
            errorCode = 422
            throw new Error("Favor inserir todos os dados");
        }
        const verificaCPFSolicitante = users.find((user) => {
            return user.CPF === clienteCPF
        })
        const verificaCPFDestinatario = users.find((user) => {
            return user.CPF === destinatarioCPF
        })
        if (!verificaCPFSolicitante) {
            errorCode = 401
            throw new Error("Cliente nao encontrado");
        }
        if (!verificaCPFDestinatario) {
            errorCode = 401
            throw new Error("Destinarario nao encontrado");
        }

        //------------------ VERIFICAÇÃO DO SALDO NAO FUNCIONOU --------------------

        const saldoCliente: any = users.find((user) => {
            if (user.CPF === clienteCPF) {
                return user.saldo
            }
        })
        if (saldoCliente < valorTransferencia) {
            errorCode = 401
            throw new Error("Saldo insuficiente para efetuar a transferencia");
            //-------------------------------------------------------------------------

        } else {
            const subtraiValor = users.map((user) => {
                if (user.CPF === clienteCPF) {
                    user.saldo = user.saldo - valorTransferencia
                    return user.saldo
                }
            })
            const somaValor = users.map((user) => {
                if (user.CPF === destinatarioCPF) {
                    user.saldo = user.saldo + valorTransferencia
                    return user.saldo
                }
            })
            res.status(200).send(`Transferência no valor de R$${valorTransferencia} efetuado com sucesso. Saldo atual:${subtraiValor} `)
        }
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})


//------- CONFIG. INICIAIS EXPRESS PORTA ----------

app.listen(3003, () => {
    console.log('Servidor rodando na porta 3003')
})