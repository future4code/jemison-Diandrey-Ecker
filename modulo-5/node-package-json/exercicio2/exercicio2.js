const operation = process.argv[2]
const n1 = Number(process.argv[3]);
const n2 = Number(process.argv[4]);
let resultado = [];

    switch (operation) {
        case "soma":
            resultado = n1 + n2
            console.log(resultado)
            break;
        case "sub":
            resultado = n1 - n2
            console.log(resultado)
            break;
        case "mult":
            resultado = n1 * n2
            console.log(resultado);
            break
        case "div":
            resultado = n1 / n2
            console.log(resultado)
            break
        default:
            console.log("Operação Inválida")
    }