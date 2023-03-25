import axios from "axios"


//função para pegar trabalhar com CEP - VIACEP
export const getAdressInfo = async (cep: string): Promise<any> => {

    try {
        const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json`)

        return `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`

    } catch (error: any) {
        throw new Error(error.message);
    }
}