// ================= API SERVICE =================
// Configuração central da API utilizando Axios.
// Permite padronizar requisições HTTP em toda a aplicação.

import axios from "axios"

// Criação de uma instância do Axios com URL base
const api = axios.create({
  baseURL: "https://fakestoreapi.com"
})

// Exporta a instância para uso em outros arquivos
export default api