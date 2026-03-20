import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { useNavigate } from "react-router-dom"

function Checkout() {

  const { cart, clearCart } = useContext(CartContext)
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [payment, setPayment] = useState("")

  const total = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  function handleOrder(e) {

    e.preventDefault()

    alert("Pedido realizado com sucesso!")

    clearCart()

    navigate("/")

  }

  if (cart.length === 0) {

    return (
      <div className="container">
        <h2>Seu carrinho está vazio</h2>
      </div>
    )

  }

  return (

    <div className="container">

      <h2>Checkout</h2>

      <form onSubmit={handleOrder}>

        <h3>Dados do cliente</h3>

        <input
          type="text"
          placeholder="Nome completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Endereço de entrega"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <select
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
          required
        >

          <option value="">Forma de pagamento</option>
          <option value="credit">Cartão de crédito</option>
          <option value="debit">Cartão de débito</option>
          <option value="pix">PIX</option>

        </select>

        <h3 style={{ marginTop: "20px" }}>

          Total: R$ {total.toFixed(2)}

        </h3>

        <button type="submit" style={{ marginTop: "20px" }}>

          Finalizar Pedido

        </button>

      </form>

    </div>

  )

}

export default Checkout