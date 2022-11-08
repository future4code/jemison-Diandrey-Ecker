// EXERCICIO 2

import { userInfo } from "os";

export type Users = {
    id: number;
    name: string;
    phone: number;
    email: string;
    website: string;
}

// EXERCICIO 5
export type Posts = {
    id: number;
    title: string;
    body: string;
    userId: number;
}

// EXXERCICIO 3

export const usuarios: Users[] = [
    {
        id: 1,
        name: "Diandrey",
        phone: 99999999,
        email: "diandrey@teste.com",
        website: "www.diandrey.com.br",
    },
    {
        id: 2,
        name: "Marcos",
        phone: 8888888,
        email: "marcos@teste.com",
        website: "www.marcos.com.br",
    },
    {
        id: 3,
        name: "Joao",
        phone: 77777777,
        email: "Joao@teste.com",
        website: "www.joao.com.br",
    },
    {
        id: 4,
        name: "Maria",
        phone: 444444444,
        email: "maria@teste.com",
        website: "www.maria.com.br",
    }
]

// EXERCICIO 6 - Criei fora porque achei que fica mais organizado a base de dados.
export const post: Posts[] = [
    {
        id: 1,
        title: "qui est esse",
        body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        userId: 1,
    },
    {
        id: 2,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
        userId: 1,
    }, {
        id: 3,
        title: "eum et est occaecati",
        body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
        userId: 1,
    }, {
        id: 4,
        title: "nesciunt quas odio",
        body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
        userId: 1,
    }, {
        id: 5,
        title: "dolorem eum magni eos aperiam quia",
        body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
        userId: 1,
    }
]