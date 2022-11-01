/*a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetro*/
/*Resposta: Entrada: numeros - Saida: estatisticas*/ 

/*b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas */
/*Resposta: numerosOrdenados: Number
            soma: Number
            num: Number
            estatisticas: Number
            maior: Number
            menor: Number
            media: Number */

/*c) Crie um *type* chamado **amostra** de dados, isto é, um objeto com as propriedades **numeros** e **obterEstatisticas**.
Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript: */

/*Resposta: */

function obterEstatisticas(numeros) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}