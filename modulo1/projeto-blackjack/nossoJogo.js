/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

   console.log('Bem-vindo ao jogo BlackJack!')

if (confirm('Quer começar o jogo?') === false){
   console.log('O jogo acabou')

}else{

   // Cartas do Ususario

   const cartaUsuario1 = comprarCarta()
   const cartaUsuario2 = comprarCarta()
   const textoCartaUsusario1 = cartaUsuario1.texto
   const textoCartaUsusario2 = cartaUsuario2.texto
   const valorCartasUsuario1 = cartaUsuario1.valor
   const valorCartasUsuario2 = cartaUsuario2.valor
   const somaValoresUsuario = valorCartasUsuario1 + valorCartasUsuario2

   // Cartas do Computador

   const cartaComputador1 = comprarCarta()
   const cartaComputador2 = comprarCarta()
   const textoCartaComputador1 = cartaComputador1.texto
   const textoCartaComputador2 = cartaComputador2.texto
   const valorCartasComputador1 = cartaComputador1.valor
   const valorCartasComputador2 = cartaComputador2.valor
   const somaValoresComputador = valorCartasComputador1 + valorCartasComputador2

   // Resultado

   console.log(`Usuário - cartas: ${textoCartaUsusario1} ${textoCartaUsusario2} - pontuação ${somaValoresUsuario}`)
   console.log(`Computador - cartas: ${textoCartaComputador1} ${textoCartaComputador2} - pontuação ${somaValoresComputador}`)


if(somaValoresUsuario > somaValoresComputador){
      console.log('Você Ganhou!!!')
}else if(somaValoresUsuario < somaValoresComputador){
      console.log('Você Perdeu :(')
}else{
   console.log('Empate')
}
}

