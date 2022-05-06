// Exercicios de Leitura de Código

// 1 -
// a)
// { nome: "Amanda Rangel", apelido: "Mandi" },
// { nome: "Laís Petra", apelido: "Laura" },
// { nome: "Letícia Chijo", apelido: "Chijo" }

// 2 -
// a)
// {nome: "Amanda Rangel"}
// {nome: "Laís Petra"}
// {nome: "Letícia Chijo"}

// 3 - 
// a)
// {nome: "Letícia Chijo", apelido: "Chijo"}




// Exercicios de escrita de codigo.
// 1 -

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
const nomeDogs = pets.map((pets) => {
    return pets.nome
})
    console.log(nomeDogs)

const dogSalsicha = pets.filter((pets, indice, array) =>{
    return pets.raca === 'Salsicha'
})
    console.log(dogSalsicha)

const dogPoodle = pets.filter((pets, indice, array) =>{
    return pets.raca === 'Poodle'
}

// Consegui resolver ate aqui pesquisando na internet.




// 2 - 

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 const nomeProduto = produtos.map((produtos) => {
     return produtos.nome
 })

    console.log(nomeProduto)

// Esse aqui ficou muito complicado sem ver a aula, mas, 
// vou continuar pesquisando ate conseguir.