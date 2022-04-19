// Exercícios de interpretação de código

// 1 -  Indique todas as mensagens impressas no console.

// a. null
// b. null
// c. 11
// d. 3
// e. [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f. 8

// 2 -

// SUBI NUM ÔNIBUS EM MIRROCOS 27


// Exercícios de escrita de código

// 1 - 


let nome = prompt("Qual seu nome completo")

let email = prompt("Qual seu endereço de e-mail?")

    console.log("O e-mail", email.trim(), "foi cadastrado com sucesso. Seja bem-vinda(o),", nome,"!")


// 2 - 


let comidasPreferidas = ["churrasco", "macarronada", "lasanha", "strogonoff", "bolo de chocolate"]

    console.log(comidasPreferidas)

    console.log("Essas são as minhas comidas preferidas:", comidasPreferidas)

let escolhaUmaComida = prompt("Qual é a sua comida preferida?")

    console.log(comidasPreferidas.replaceAll(comidasPreferidas[1], escolhaUmaComida))


// Não consegui fazer a substituição no array, sempre fica igual.


// 3 - 


let listaDeTarefas = [prompt("Digite 3 tarefas que voce precisa realizar hoje.")]

    console.log (listaDeTarefas)

let indice = prompt("Digite o número de uma tarefa")

    console.log(listaDeTarefas = (listaDeTarefas.splice(indice, 1)))
 

// Não consegui apagar um item, sempre retorna o array completo.
