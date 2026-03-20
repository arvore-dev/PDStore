import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

function Cart() {

  const {
    cart,
    addToCart,
    decreaseQuantity,
    removeFromCart
  } = useContext(CartContext)

  const total = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  if (cart.length === 0) {

    return (

      <div className="container">

        <h2>Seu carrinho está vazio</h2>

        <Link to="/">
          <button style={{ marginTop: "20px" }}>
            Voltar para loja
          </button>
        </Link>

      </div>

    )

  }

  return (

    <div className="container">

      <h2>Seu Carrinho</h2>

      {cart.map((item) => (

        <div
          key={item.id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "15px",
            display: "flex",
            alignItems: "center",
            gap: "20px"
          }}
        >

          <img
            src={item.image}
            alt={item.title}
            style={{
              width: "60px",
              height: "60px",
              objectFit: "contain"
            }}
          />

          <div style={{ flex: 1 }}>

            <h4>{item.title}</h4>

            <p>R$ {item.price.toFixed(2)}</p>

          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}
          >

            <button onClick={() => decreaseQuantity(item.id)}>
              -
            </button>

            <span>{item.quantity}</span>

            <button onClick={() => addToCart(item)}>
              +
            </button>

          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            style={{
              background: "red",
              color: "white",
              border: "none",
              padding: "8px 12px",
              cursor: "pointer"
            }}
          >
            Remover
          </button>

        </div>

      ))}

      <h3>

        Total: R$ {total.toFixed(2)}

      </h3>

      <Link to="/checkout">
        <button style={{ marginTop: "15px" }}>
          Finalizar compra
        </button>
      </Link>

      <Link to="/">
        <button style={{ marginTop: "10px" }}>
          Voltar para loja
        </button>
      </Link>

    </div>

  )

}

export default Cart