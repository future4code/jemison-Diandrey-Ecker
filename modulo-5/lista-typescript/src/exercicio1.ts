function nome (nome : string, nascimento : string) : void {
    const nascimento2 = nascimento.split("/", 3)

console.log(`Olá, me chamo ${nome}, nasci no dia ${nascimento2[0]} do mês ${nascimento2[1]} do ano de ${nascimento2[2]}` )

}

nome("Diandrey", "07/01/1990")