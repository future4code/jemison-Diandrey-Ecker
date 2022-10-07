const tabuada = [];

const geraTabuada = (number) => {
    
    for (let i = 1; i <= 10; i++){
       
        const result = (`${number} + ${i} = ${i * number}`)

        if (number < 1 || number > 10){
            console.log('Erro. Parâmetro inválido (número precisa valer entre 1 e 10)')
            break
      
        // }else if(typeof number === "number"){
        //     console.log('Erro. Parâmetro inválido (deve ser um número)')
        //     break

        //NAO CONSEGUI VERIFICAR SE O VALOR DIGITADO É UM NUMERO
       
        }else{
            console.log(result)
        }
    }
}

geraTabuada(3)