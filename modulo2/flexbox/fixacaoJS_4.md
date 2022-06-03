```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido){
    let contador = 0
    for (let numero = 0; numero < arrayDeNumeros.lenght; numero++ ){
        if(arrayDeNumeros[numero] === numeroEscolhido){
            contador++
        
        }else if(contador > 0){
            console.log(`O numero ${numeroEscolhido} aparece ${contador} vezes`)
        }else{
            console.log('Numero nao encontrado')
        }
    }
}
```