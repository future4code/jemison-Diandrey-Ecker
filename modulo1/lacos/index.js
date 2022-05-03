/*
Exercícios de interpretação de código

1 - 

O codigo esta somando valores ate um determinado numero para
a variavel valor.

 Irá imprimir o numero: 10

2 -

a) 19 - 21 - 23 - 25 - 27 - 30

b) Poderia ser utilizado apagando a condição IF.


3 - 
O resultado seria: * 

(Essa eu fiquei com muitas duvidas, nao tenho certeza do resultado.)
*/


// Exercícios de escrita de código

// 1 - 

let qtdePets = Number(prompt("Quantos pets você tem?"))

if (qtdePets === 0){
    console.log("Que pena! Você pode adotar um pet!")
} 

for(let nomesPets = 1; nomesPets <= qtdePets; nomesPets++){
    let arrayNomesPets = [prompt("Qual é o nome do seu pet?")]

    console.log(arrayNomesPets)
}

// 2 - Função é um dos comandos que eu nao consegui
// entender direito como utilizar, mas, estou estudando para aprender.