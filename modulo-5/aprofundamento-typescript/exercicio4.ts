/*a) Crie um arquivo chamado exercicio-4.ts , cole o código abaixo e use comentários para responder as questões*/

type pokemon = {
    name: string,
    types: string,
    healthPoints: number
}

const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28
}

const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31
}

const pokemon3: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35
}

/*b) Como você faria, já com a extensão instalada, para transpilar(converter) 
esse arquivo typescript em um arquivo javascript?*/

/*Resposta: Criaria um novo script "exercicio4" no package.json e executaria o comando "npm run exercicio4".  */

/*c) E se este arquivo estivesse dentro de uma pasta chamada `src`.
O processo seria diferente? Se sim, descreva as diferenças. */

/*Resposta: Sim, se o arquivo estiver na pasta "src" teria que configurar previamente o "rootDir" no arquivo "tsconfig.json"
para informar o programa onde se encontra o arquivo que será transpilado */

/*d)Existe alguma maneira de transpilar múltilplos arquivos de uma vez só? Caso conheça, explique como fazer. */

/*Resposta: desconheço essa maneira, pesquisei, mas, nao encontrei nada claro sobre o assunto.*/
