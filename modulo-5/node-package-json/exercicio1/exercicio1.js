//EXERCICIO 1

// A) Como fazemos para acessar os parâmetros passados na linha de comando para o Node?

// NODE NOME_SCRIPT.EXTENSAO VALOR1, VALOR2 ...

//B)

const nome = process.argv[2];
const idade = Number(process.argv[3]);

const mensagem = (nome, idade) => {
    return (`"Olá, ${nome}! Você tem ${idade} anos."`)
}
const resposta_B = mensagem(nome, idade)

console.log(resposta_B)

//C)

console.log(`${resposta_B}. Em sete anos você terá ${idade + 7}`)