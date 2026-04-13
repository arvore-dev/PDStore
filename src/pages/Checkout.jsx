// ================= CHECKOUT =================
// Página responsável por finalizar o pedido.
// Coleta dados do cliente, forma de pagamento
// e conclui a compra limpando o carrinho.

import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { useNavigate } from "react-router-dom"

function Checkout() {

  // Dados do carrinho
  const { cart, clearCart } = useContext(CartContext)

  // Navegação entre páginas
  const navigate = useNavigate()

  // ================= DADOS DO CLIENTE =================
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [payment, setPayment] = useState("")

  // ================= CÁLCULO TOTAL =================
  // Soma preço * quantidade de cada item
  const total = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  // ================= FINALIZAR PEDIDO =================
  function handleOrder(e) {

    e.preventDefault() // evita recarregar a página

    alert("Pedido realizado com sucesso!")

    clearCart() // limpa o carrinho após compra

    navigate("/") // redireciona para home
  }

  // ================= CARRINHO VAZIO =================
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

        {/* ================= DADOS DO CLIENTE ================= */}
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

        {/* ================= PAGAMENTO ================= */}
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

        {/* ================= TOTAL ================= */}
        <h3 style={{ marginTop: "20px" }}>
          Total: R$ {total.toFixed(2)}
        </h3>

        {/* ================= FINALIZAR ================= */}
        <button type="submit" style={{ marginTop: "20px" }}>
          Finalizar Pedido
        </button>

      </form>

    </div>

  )

}

export default Checkout