export type Extrato = {
    valor: number
    data: string,
    descricao: string
}

export type Users = {
    id: string,
    nome: string,
    CPF: string,
    data: string,
    saldo: number,
    extrato: Extrato[]
}