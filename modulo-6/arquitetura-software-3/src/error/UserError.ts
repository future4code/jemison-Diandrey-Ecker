import { CustomError } from "./CustomError";

export class InvalidEmail extends CustomError {
    constructor() {
        super(400, "Email Invalido")
    }
}

export class InvalidPassword extends CustomError {
    constructor() {
        super(400, "Senha inválida! Precisa conter no minimo 6 caracters")
    }
}