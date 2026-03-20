import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"

function ProductCard({ product }) {

  const { addToCart } = useContext(CartContext)

  return (

    <div className="product-card">

      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} />
      </Link>

      <h3>{product.title}</h3>

      <p>R$ {product.price.toFixed(2)}</p>

      <button onClick={() => addToCart(product)}>
        🛒 Adicionar ao carrinho
      </button>

    </div>

  )

}

export default ProductCard