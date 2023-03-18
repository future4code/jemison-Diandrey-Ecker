import { Users } from "./types";


export const users: Users[] = [
    {
        id: "1",
        nome: "Diandrey",
        CPF: "123.456.789-00",
        data: "12/10/2012",
        saldo: 2000,
        extrato: [
            {
                valor: 0,
                data: "",
                descricao: ""
            }
        ]
    },
    {
        id: "2",
        nome: "João",
        CPF: "000.000.000-00",
        data: "23/04/2000",
        saldo: 2000,
        extrato: [
            {
                valor: 0,
                data: "",
                descricao: ""
            }
        ]
    },
    {
        id: "3",
        nome: "Maria",
        CPF: "123.654.332-00",
        data: "07/01/1990",
        saldo: 2000,
        extrato: [
            {
                valor: 0,
                data: "",
                descricao: ""
            }
        ]
    }
]