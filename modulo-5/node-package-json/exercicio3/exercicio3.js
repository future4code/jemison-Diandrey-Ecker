const listaDeCompras = [
    "Tomate",
    "Alface",
    "Feijao",
    "Arroz"
]

const novaLista = process.argv[2]

listaDeCompras.push(novaLista)

console.log("Tarefa adicionada com sucesso!")

console.table(listaDeCompras)