console.log("exercicio 1");

const convertTemp = (celsius, unity) => {

    let fahrenheit
    let kelvin

    if (isNaN(celsius)){

        console.log('Digite um valor válido')

    }else if(unity !== 'K'){

        console.log('Digite uma unidade de medida válida')

    }else if(unity !== 'F'){
        
        console.log('Digite uma unidade de medida válida')

    }else if(unity === 'K'){
        
        kelvin = (celsius + 273,15)

    }else if(unity === 'F'){
        
        fahrenheit = ((celsius * 1.8) +32)
    }

    console.log(`${celsius}C é equivalente a ${fahrenheit}F.`)
    console.log(`${celsius}C é equivalente a ${kelvin}K.`)
}

convertTemp(10, 'F')

// NAO SEI O QUE FAÇO, NAO ESTA CERTO PORQUÊ NAO RODOU DA FORMA CORRETA NO TERMINAL.