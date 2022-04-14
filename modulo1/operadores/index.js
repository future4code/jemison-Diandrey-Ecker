// Exercícios de interpretação de código

// 1 - a, false
//     b, false
//     c, true
//     d, boolean 

// 2 - Quando é utlizado o comando prompt, sempre é retornado uma string, mesmo se for digitado um numero.
//     Sera exibito o erro null.

// 3 - Antes do comando prompt colocar o comando number para transformar a string em number.

// let primeiroNumero = number (prompt("Digite um numero!"))
// let segundoNumero = number (prompt("Digite outro numero!"))

// const soma = number(primeiroNumero + segundoNumero)

// console.log(soma)



// Exercícios de escrita de código

// 1 - 

let minhaIdade = prompt("Qual é a sua idade?")
let idadeDoAmigo = prompt ("Qual é a idade do seu melhor amigo ou amiga?")

let idadeMaior = minhaIdade > idadeDoAmigo

console.log ("Sua idade é maior do que a do seu melhor amigo?", idadeMaior)

let diferencaDeIdade = minhaIdade - idadeDoAmigo

console.log("A diferença de idade é ", diferencaDeIdade)


// 2 - 

let numeroPar = prompt("Digite um numero par")

console.log(numeroPar % 2)


// 3 - 

let idadeEmAnos = prompt("Você tem quantos anos?")

let idadeEmMeses = (idadeEmAnos * 12)

console.log("Você tem" ,idadeEmMeses, "meses de idade")

let idadeEmHoras = (idadeEmMeses * 30 * 24)

console.log("Você tem", idadeEmHoras, "horas de idade")


// 4 -

let numero1 = prompt("Digite um número")
let numero2 = prompt("Digite outro número")

const primeiroMaiorSegundo = numero1 > numero2

console.log("O primeiro numero é maior que segundo?", primeiroMaiorSegundo)

const primeiroIgualSegundo = numero1 == numero2

console.log("O primeiro numero é igual ao segundo?", primeiroIgualSegundo)

const primeiroDivisivelSegundo = numero1 % numero2
const restoDaDivisao1 = primeiroDivisivelSegundo == 0

console.log("O primeiro numero é divisível pelo segundo?", restoDaDivisao1)

const segundoDivisivelPrimeiro = numero2 % numero1
const restoDaDivisao2 = segundoDivisivelPrimeiro > 0

console.log("O segundo numero é divisível pelo primeiro?", restoDaDivisao2)

