import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { useNavigate } from "react-router-dom"
import Rating from "./Rating"

function ProductCard({ product }) {

  const { addToCart } = useContext(CartContext)
  const navigate = useNavigate()

  function handleAdd(e) {
    e.stopPropagation()

    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.thumbnail
    })

    alert("Produto adicionado ao carrinho 🛒")
  }

  return (

    <div
      className="product-card"
      onClick={() => navigate(`/product/${product.id}`)}
    >

      <img src={product.thumbnail} alt={product.title} />

      <h3>{product.title}</h3>

      <p>
        {product.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL"
        })}
      </p>

      <Rating value={product.rating} />

      <button
        className="btn-add"
        onClick={handleAdd}
      >
        🛒 Adicionar ao carrinho
      </button>

    </div>

  )

}

export default ProductCard