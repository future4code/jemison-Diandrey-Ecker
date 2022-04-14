/*Exerciocios de interpretação

1 - Sera impresso o numero 10
    Serao impressos os numeros 10, 5
    
2 - Serao impressos os numeros 10, 10, 10

3 - let horasTrabalhadasNoDia = prompt("Quantas horas você trabalha por dia?")
    let valorDeUmDiaDeSalario = prompt("Quanto você recebe por dia?")
    alert(`Voce recebe ${valorDeUmDiaDeSalario/horasTrabalhadasNoDia} por hora`)
*/

//Exercicios de escrita de codigo

// Exerciocio 1

let nome = prompt("Qual é o seu nome?")
let idade = prompt("Qual é a sua idade?")

console.log (typeof nome)
console.log (typeof idade)

//Ambas as variaveis sao strings, por quê, quando utlizado o prompt o tipo da variavel sempre é string.

console.log ("Olá", nome, "você tem", idade, "anos")

// Exercicio 2

let chuva = prompt("Está chovendo agora?")
let camisaVerde = prompt("A sua camisa é verde?")
let ceuAzul = prompt("O céu é azul?")

console.log("Está chovendo agora?", chuva);
console.log("A sua camisa é verde?", camisaVerde);
console.log("O céu é azul?", ceuAzul);


//Exercicio 3

let a = 10 
let b = 25
const c = a

a = b
b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)