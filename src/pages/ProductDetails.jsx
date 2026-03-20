import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import api from "../services/api"

function ProductDetails() {

  const { id } = useParams()

  const [product, setProduct] = useState(null)

  useEffect(() => {

    api.get(`/products/${id}`)
      .then(response => {
        setProduct(response.data)
      })

  }, [id])

  if (!product) return <p>Carregando...</p>

  return (

    <div>

      <img src={product.image} width="200" />

      <h2>{product.title}</h2>

      <p>{product.description}</p>

      <p>${product.price}</p>

    </div>

  )
}

export default ProductDetails