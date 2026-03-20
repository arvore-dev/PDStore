import { useEffect, useState } from "react"
import api from "../services/api"

function useProducts() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {

    api.get("/products")
      .then(response => {
        setProducts(response.data)
        setLoading(false)
      })
      .catch(() => {
        setError("Erro ao carregar produtos")
        setLoading(false)
      })

  }, [])

  return { products, loading, error }
}

export default useProducts