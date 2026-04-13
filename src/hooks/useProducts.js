// ================= USE PRODUCTS =================
// Hook customizado responsável por buscar produtos da API.
// Centraliza a lógica de requisição, loading e tratamento de erro.

import { useEffect, useState } from "react"
import api from "../services/api"

function useProducts() {

  // Lista de produtos
  const [products, setProducts] = useState([])

  // Controle de carregamento
  const [loading, setLoading] = useState(true)

  // Controle de erro
  const [error, setError] = useState(null)

  // ================= BUSCA DE PRODUTOS =================
  // Executa ao montar o componente
  useEffect(() => {

    api.get("/products")
      .then(response => {
        setProducts(response.data) // salva produtos
        setLoading(false) // finaliza loading
      })
      .catch(() => {
        setError("Erro ao carregar produtos") // mensagem de erro
        setLoading(false)
      })

  }, [])

  // Retorna os dados para quem usar o hook
  return { products, loading, error }
}

export default useProducts