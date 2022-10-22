
enum Cargos {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"
}

type Colaboradores = [{
    nome: string,
    salario: Number,
    setor: Cargos,
    presencial: boolean
}]

const listaColaboradores = [
	{ nome: "Marcos", salário: 2500, setor: Cargos.MARKETING, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: Cargos.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: Cargos.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor: Cargos.MARKETING, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: Cargos.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: Cargos.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: Cargos.MARKETING, presencial: true}
]

function buscarColaborador ([]) {

            return listaColaboradores.filter
                (funcionario => funcionario.setor === Cargos.MARKETING && funcionario.presencial === true)
}

console.log(buscarColaborador([]))