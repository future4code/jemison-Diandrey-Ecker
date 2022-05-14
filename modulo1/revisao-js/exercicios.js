// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01 
function retornaTamanhoArray(array){
   let tamanhoDoArray = array.length

    return tamanhoDoArray
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
   let arrayInvertido = array.reverse()

    return arrayInvertido
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  let arrayOrdenado = array.sort((a,b)=> a - b)
    return arrayOrdenado
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
   let numerosPares = array.filter(pares => (pares % 2) == 0)
       return numerosPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numerosPares = array.filter(pares => (pares % 2) == 0)   
        for (let i of numerosPares){
            let numerosParesElevados = []
            numerosParesElevados.push([i]**2)

            return numerosParesElevados
    }
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorValor = Math.max(...array)

  return maiorValor
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB === ladoC){
        return 'Equilátero'
    }else if (ladoA !== ladoB !== ladoC){
        return 'Escaleno'
    }else{
        return 'Isóceles'
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let novoArray = []
  array.sort((a,b) => a-b)
  novoArray.push(array[array.length-2])
  novoArray.push(array[1])
  
    return novoArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   let nomeDoFilme = filme.nome
   let anoDoFilme = filme.ano
   let diretorDofilme = filme.diretor
   let atoresDoFilme = [filme.atores.join(', ')]

    return `Venha assistir ao filme ${nomeDoFilme}, de ${anoDoFilme}, dirigido por ${diretorDofilme} e estrelado por ${atoresDoFilme}. `
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   let pessoaAnonima = {
       ...pessoa,
       nome: 'ANÔNIMO'
   }
        return pessoaAnonima
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   return pessoas.filter(pessoa =>{
       return (pessoa.idade <= 60 && pessoa.idade > 14 && pessoa.altura >= 1.5)

   })
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
     return pessoas.filter(pessoa =>{
       return ((pessoa.idade > 60 || pessoa.idade < 14 ) || pessoa.altura < 1.5)

   })
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}