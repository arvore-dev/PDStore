import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { useNavigate } from "react-router-dom"

function Checkout() {

  const { cart, clearCart } = useContext(CartContext)
  const navigate = useNavigate()

  // ================= ESTADOS =================
  const [paymentMethod, setPaymentMethod] = useState("card")

  const [card, setCard] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: ""
  })

  const [cep, setCep] = useState("")
  const [frete, setFrete] = useState(0)

  // ================= TOTAL =================
  const subtotal = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  const total = subtotal + frete

  // ================= INPUT CARTÃO =================
  function handleChange(e) {
    setCard({
      ...card,
      [e.target.name]: e.target.value
    })
  }

  // ================= FRETE =================
  function calcularFrete() {
    if (cep.length < 8) {
      alert("Digite um CEP válido")
      return
    }

    // Simulação simples
    const valorFrete = 20
    setFrete(valorFrete)
  }

  // ================= FINALIZAR =================
  function finalizarCompra() {

    if (paymentMethod === "card") {
      if (!card.number || !card.name || !card.expiry || !card.cvv) {
        alert("Preencha todos os dados do cartão")
        return
      }
    }

    alert("✅ Compra realizada com sucesso!")

    clearCart()
    navigate("/")
  }

  // ================= SE CARRINHO VAZIO =================
  if (cart.length === 0) {
    return (
      <div className="container">
        <h2>Seu carrinho está vazio 🛒</h2>
        <button className="btn" onClick={() => navigate("/")}>
          Voltar para loja
        </button>
      </div>
    )
  }

  return (

    <div className="container checkout-container">

      <h2>💳 Pagamento</h2>

      <div className="checkout-content">

        {/* ================= RESUMO ================= */}
        <div className="cart-summary">

          <h3>Resumo do pedido</h3>

          {cart.map(item => (
            <p key={item.id}>
              {item.title} x{item.quantity}
            </p>
          ))}

          <hr />

          <p>Subtotal: R$ {subtotal.toFixed(2)}</p>
          <p>Frete: R$ {frete.toFixed(2)}</p>

          <h3>Total: R$ {total.toFixed(2)}</h3>

        </div>

        {/* ================= PAGAMENTO ================= */}
        <div className="payment-section">

          {/* MÉTODO */}
          <div className="payment-method">

            <button
              className={paymentMethod === "card" ? "active" : ""}
              onClick={() => setPaymentMethod("card")}
            >
              Cartão
            </button>

            <button
              className={paymentMethod === "pix" ? "active" : ""}
              onClick={() => setPaymentMethod("pix")}
            >
              PIX
            </button>

          </div>

          {/* ================= CARTÃO ================= */}
          {paymentMethod === "card" && (

            <div className="payment-form">

              <input
                type="text"
                name="number"
                placeholder="Número do cartão"
                value={card.number}
                onChange={handleChange}
              />

              <input
                type="text"
                name="name"
                placeholder="Nome no cartão"
                value={card.name}
                onChange={handleChange}
              />

              <div className="row">
                <input
                  type="text"
                  name="expiry"
                  placeholder="Validade (MM/AA)"
                  value={card.expiry}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={card.cvv}
                  onChange={handleChange}
                />
              </div>

            </div>

          )}

          {/* ================= PIX ================= */}
          {paymentMethod === "pix" && (

            <div className="pix-box">
              <h3>Pague com PIX</h3>

              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=PDStorePagamento"
                alt="QR Code PIX"
              />

              <p>Escaneie o QR Code para pagar</p>
            </div>

          )}

          {/* ================= FRETE ================= */}
          <div className="frete-box">

            <input
              type="text"
              placeholder="Digite seu CEP"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            />

            <button onClick={calcularFrete}>
              Calcular Frete
            </button>

          </div>

          {/* ================= FINALIZAR ================= */}
          <button
            className="checkout-btn"
            onClick={finalizarCompra}
          >
            Finalizar Compra
          </button>

        </div>

      </div>

    </div>

  )

}

export default Checkout