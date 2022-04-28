// Exercícios de interpretação de código.

// 1 - 
// a) O codigo verifica se o numero dividido por 2 tem a divisao exata ou não.
// b) Números pares.
// c) Números ímpares.


// 2 - 
// a) O codigo serve para mostrar para o cliente o valor da fruta escolhida.
// b) O preço da fruta Maçã, é R$ 2.25 
// c) O preço da fruta Pêra, é R$ 5.5
//    O preço da fruta Pêra, é R$ 5  


// 3 - 
// a) Pedindo ao usuário para digitar um numero.

// b) Se o numero fosse 10 - Esse número passou no teste
//    Se o numero fosse -10 -  Nao apareceria nenhuma mensagem.

// c) Sera exibido undefined no segundo console.log,
// por quê, a variavem mensagem esta dentro do bloco do if e dentro do escopo local, 
// por isso o console nao consegue acessar essa informação.


// Exercícios de escrita de código

// 1 -

// let idade = Number(prompt("Qual é a sua idade?"))

// if (idade < 18) {
//     console.log("Você não pode dirigir")
// }else{
//     console.log("Você pode dirigir")
// }


// 2 -

// let turnoDeAula = prompt("Qual turno você estuda? M (matutino) V (vespertino) N (noturno)").toUpperCase()

// if (turnoDeAula === "M"){
//     console.log("Bom Dia")
// }else if (turnoDeAula === "V"){
//     console.log("Boa Tarde")
// }else{
//     console.log("Boa noite")
// }


// 3 - 

// let turnoDeAula = prompt("Qual turno você estuda? M (matutino) V (vespertino) N (noturno)").toUpperCase()
// let saudacao
// switch(turnoDeAula){
//     case "M":
//         saudacao = "Bom Dia"
//         break
//     case "V":
//         saudacao = "Boa Tarde"
//         break
//     case "N":
//         saudacao = "Boa Noite"
//         break
//     default:
//         saudacao = "Periodo Inválido"
// }
// console.log(saudacao)

// 4 -

// let generoFilme = prompt('Qual gênero de filme vocês querem assistir').toLowerCase()
// let valorIngresso = Number(prompt('Qual o valor máximo do ingresso você quer pagar?'))

// if (generoFilme === 'fantasia' && valorIngresso <= 15){
//     console.log('Bom Filme')
// }else{
//     console.log('Escolha outro filme :(')
// }

// Desafio

// 1 - 

// let generoFilme = prompt('Qual gênero de filme vocês querem assistir').toLowerCase()
// let valorIngresso = Number(prompt('Qual o valor máximo do ingresso você quer pagar?'))

// if (generoFilme === 'fantasia' && valorIngresso <= 15){
//     let comida = prompt('Qual lanche você quer comer?')
//     console.log(`Bom Filme e aproveite sua ${comida} !`)
// }else{
//     console.log('Escolha outro filme :(')
// }


// 2 - 

let nomeCompleto = prompt('Qual é o seu nome completo?')
let tipoJogo = prompt('Qual é o tipo de jogo: IN internacional e DO Doméstico').toUpperCase()
let etapaJogo = prompt('Qual a etapa do jogo: SF semi-final, DT decisão terceiro lugar e FI final.').toUpperCase()
let categoria = Number(prompt('Qual a catagoria: 1, 2, 3 ou 4?'))
let qtdeIngressos = Number(prompt('Qual a quantidade de ingressos?'))

let ingressoSFCat1 = 1320
let ingressoSFCat2 = 880
let ingressoSFCat3 = 550
let ingressoSFCat4 = 220

let ingressoDTCat1 = 660
let ingressoDTCat2 = 440
let ingressoDTCat3 = 330
let ingressoDTCat4 = 170

let ingressoFICat1 = 1980
let ingressoFICat2 = 1320
let ingressoFICat3 = 880
let ingressoFICat4 = 330

console.log('--- Dados da compra---')
console.log(`Nome do cliente: ${nomeCompleto}`)

if (tipoJogo === 'IN'){
    console.log(`Tipo de jogo: Internacional`)
}else{
    console.log(`Tipo de jogo: Nacional`)
}

if (etapaJogo === 'SF'){
    console.log(`Etapa do jogo: Semi-final`)
}else if(etapaJogo === 'DT'){
    console.log(`Etapa jogo: Decisão terceiro lugar`)
}else{
    console.log('Etapa jogo: Final')
}

console.log(`Categoria: ${categoria}`)
console.log(`Quantidade de ingressos: ${qtdeIngressos} ingressos`)
console.log('--- Valores---')

if (tipoJogo === 'DO'|| categoria === 1 || 'SF'){
    console.log(`Valor do ingresso: ${ingressoSFCat1})
} else if
    (tipoJogo === 'DO'|| categoria === 2 || 'SF'){

    }
