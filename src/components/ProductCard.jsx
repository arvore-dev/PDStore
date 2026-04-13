import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import Rating from "./Rating"

function ProductCard({ product }) {

  const { addToCart } = useContext(CartContext)
  const navigate = useNavigate()

  // Função para adicionar ao carrinho
  function handleAdd(e) {
    e.stopPropagation() // 🚫 evita abrir a página do produto
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.thumbnail
    })
  }

  return (

    <div
      className="product-card"
      onClick={() => navigate(`/product/${product.id}`)}
    >

      {/* IMAGEM */}
      <img
        src={product.thumbnail}
        alt={product.title}
      />

      {/* NOME */}
      <h3>
        {product.title}
      </h3>

      {/* ⭐ AVALIAÇÃO */}
      <Rating rate={product.rating} />

      {/* PREÇO */}
      <p>
        R$ {product.price}
      </p>

      {/* BOTÃO */}
      <button onClick={handleAdd}>
        Adicionar ao carrinho
      </button>

    </div>

  )

}

export default ProductCard