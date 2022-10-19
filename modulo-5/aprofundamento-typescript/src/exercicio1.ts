//Exercicio 1

/*a) Crie uma variável minhaString do tipo string e atribua um valor a ela. 
Tente atribuir um número a esta variável. O que acontece?*/

//const minhastring: string = 10;

/*Resposta: O tipo number nao pode ser atribuido ao tipo string*/

//----------//--------------//-------------//--------------//---

/*b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. 
Como fazer para que essa variável também aceite strings? 
Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?*/

const meuNumero: number | string = "10";

//Resposta: atribuindo o tipo NUMBER colocodando o caractere PIPE e adicionando o tipo STRING.

//----------//--------------//-------------//--------------//---

/*c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
    nome, que é uma string;
    idade, que é um número;
    corFavorita, que é uma string;

Crie mais três objetos, que também precisam ter apenas os campos definidos acima. 
Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.*/

/*d) Modifique a propriedade corFavorita para que apenas seja possível escolher entre as cores do arco-íris. 
Utilize um enum para isso.*/

/*Resposta*/

enum CoresArcoiris  {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}

type Pessoa = {
    nome: string;
    idade: number;
    corFavorita: CoresArcoiris;
}

const pessoa1: Pessoa = {
    nome: "Diandrey",
    idade: 32,
    corFavorita: CoresArcoiris.AZUL
}

const pessoa2 = {
    nome: "João",
    idade: 23,
    corFavorita: CoresArcoiris.VERDE
}

const pessoa3 = {
    nome: "Maria",
    idade: 19,
    corFavorita: CoresArcoiris.VIOLETA
}
