import axios from 'axios'

const VIA_CEP_URL = 'https://viacep.com.br/ws'

export const searchCep = async (cep) => {
  try {
    const response = await axios.get(\\/\/json/\)
    return response.data
  } catch (error) {
    throw new Error('Erro ao consultar a API de CEP')
  }
}
