// Exercicios Funções

// Exercícios de interpretação de código

// 1 - a) Sera impresso o numero 10 e 50
// 1 - b) Nada seria impresso no console, mas, a função funcionaria normalmente e 
//        ficaria a disposição do programador para utlizar esse dado gerado por ela em outro momento.

// 2 - a) Pede para o usuario escrever um texto, e sera impresso o texto do usuario em letras maiusculas,
//        seguido por um boolean.
// 2 - b) i - eu gosto de cenoura true
//       ii - cenoura é bom pra vista false
//      iii - cenouras crescem na terra false 

// Exercícios de escrita de código

// 1 - a)

// function mensagem () {
//     console.log("Eu sou Diandrey, tenho 32 anos, moro em Três Barras do Paraná e sou Engenheiro Civil.")
// }
//     mensagem()

// //     b)

// function informacoesPessoais (nome, idade, cidade, profissao){
//    console.log(`Eu sou ${nome}, tenho ${number = (idade)} anos, moro em ${cidade}, e sou ${profissao}.`)

// }
//     informacoesPessoais('Diandrey', 32, 'Três Barras do Paraná', 'Engenheiro Civil')

// 3 - 

const numero1 = Number(prompt('Digite um número'))
const numero2 = Number(prompt('Digite outro número'))

function adicao(numero1, numero2){

    return numero1 + numero2
}
const soma = adicao(numero1, numero2)
console.log(soma)


// function subtracao (num1, num2){

// }

// function multiplicacao (num1, num2){

// }

// function divisao (num1, num2){

// }


// Crie uma função para cada uma das operações básicas 
// (soma, subtração, multiplicação e divisão). 
// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções 
// com esses valores inputados pelo usuário sendo o argumento. 
// Por fim, mostre no console o resultado das operações:
