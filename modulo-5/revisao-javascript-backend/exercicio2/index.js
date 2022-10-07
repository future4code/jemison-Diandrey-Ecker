const clientes = [

    { id: 1, nome: 'Fulano' },
    { id: 2, nome: 'Ciclano' },
    { id: 3, nome: 'Beltrano' },
    { id: 4, nome: 'Fulana' }
]

const cadastraCliente = (num, name) => {

    clientes.push(

        { id: (parseInt(`${ num }`)), nome: (`${ name }`) }
    )

    // if(clientes.id <= num){
    //     console.log ('Erro. Parâmetro inválido (id já existe)')
    // }else{
    //     console.log(clientes)
    // }
}

    cadastraCliente(5, 'Beltrana')

    console.log(clientes)






