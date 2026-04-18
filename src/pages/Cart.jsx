import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { useNavigate } from "react-router-dom"

function Cart() {

  const { cart, removeFromCart, clearCart } = useContext(CartContext)
  const navigate = useNavigate()

  // CALCULAR TOTAL
  const total = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  if (cart.length === 0) {
    return (
      <div className="container cart-empty">
        <h2>Seu carrinho está vazio 🛒</h2>
        <p>Adicione produtos para continuar comprando</p>

        <button
          className="btn-add"
          onClick={() => navigate("/")}
        >
          Voltar para loja
        </button>
      </div>
    )
  }

  return (

    <div className="container cart-container">

      <h2>🛒 Seu Carrinho</h2>

      <div className="cart-items">

        {cart.map(item => (

          <div key={item.id} className="cart-item">

            <img src={item.image} alt={item.title} />

            <div className="cart-info">
              <h3>{item.title}</h3>
              <p>
                {item.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL"
                })}
              </p>
              <p>Quantidade: {item.quantity}</p>
            </div>

            <button
              className="btn-remove"
              onClick={() => removeFromCart(item.id)}
            >
              ❌ Remover
            </button>

          </div>

        ))}

      </div>

      <div className="cart-summary">

        <h3>
          Total:{" "}
          {total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
          })}
        </h3>

        <button
          className="checkout-btn"
          onClick={() => navigate("/checkout")}
        >
          Finalizar Compra
        </button>

        <button
          className="btn-remove"
          onClick={clearCart}
        >
          Limpar Carrinho
        </button>

      </div>

    </div>

  )

}

export default Cart