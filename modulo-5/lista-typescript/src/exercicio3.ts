enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

function streaming (
    nomeFilme: string, 
    anoLancamento: Number, 
    genero: GENERO, 
    pontuacao?: Number): void {

        const filme = {
            nome: nomeFilme,
            ano: anoLancamento,
            generoFilme: GENERO.ACAO,
            pontuacao: pontuacao
        } 
  
   console.table(filme)
}

streaming ("Duna", 2021, GENERO.ACAO, 74)