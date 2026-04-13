// ================= PRODUCT DETAIL =================
// Página responsável por exibir os detalhes de um produto.
// Permite visualizar informações completas e adicionar ao carrinho.

import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import { CartContext } from "../context/CartContext"

function ProductDetail() {

  // ================= PARÂMETROS DA URL =================
  // Captura o ID do produto na rota (/product/:id)
  const { id } = useParams()

  // Função para adicionar ao carrinho
  const { addToCart } = useContext(CartContext)

  // ================= ESTADOS =================
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // ================= BUSCA DO PRODUTO =================
  useEffect(() => {

    async function fetchProduct() {

      try {

        // Requisição para buscar produto específico
        const response = await fetch(
          `https://dummyjson.com/products/${id}`
        )

        const data = await response.json()

        setProduct(data)

      } catch (err) {
        setError("Erro ao carregar produto")
      } finally {
        setLoading(false)
      }

    }

    fetchProduct()

  }, [id])

  // ================= LOADING =================
  if (loading) {
    return (
      <div className="container">
        <p>Carregando produto...</p>
      </div>
    )
  }

  // ================= ERRO =================
  if (error) {
    return (
      <div className="container">
        <p>{error}</p>
      </div>
    )
  }

  // ================= PRODUTO NÃO ENCONTRADO =================
  if (!product) {
    return (
      <div className="container">
        <p>Produto não encontrado</p>
      </div>
    )
  }

  // ================= ADICIONAR AO CARRINHO =================
  function handleAdd() {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.thumbnail
    })
  }

  return (

    <div className="container">

      <div className="product-detail-card">

        {/* ================= IMAGEM ================= */}
        <div className="product-image">
          <img
            src={product.thumbnail}
            alt={product.title}
          />
        </div>

        {/* ================= INFORMAÇÕES ================= */}
        <div className="product-info">

          <h2>{product.title}</h2>

          <p className="description">
            {product.description}
          </p>

          <h3 className="price">
            R$ {product.price}
          </h3>

          {/* Botão de ação */}
          <button onClick={handleAdd}>
            Adicionar ao carrinho
          </button>

        </div>

      </div>

    </div>

  )

}

export default ProductDetail