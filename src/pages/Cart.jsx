// ================= CART =================
// Página responsável pelo carrinho de compras.
// Permite visualizar produtos, calcular frete e simular pagamento.

import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"

function Cart() {

  // Dados do carrinho
  const { cart, removeFromCart, clearCart } = useContext(CartContext)

  // ================= MÉTODO DE PAGAMENTO =================
  const [paymentMethod, setPaymentMethod] = useState("card")

  // ================= DADOS DO CARTÃO =================
  const [cardNumber, setCardNumber] = useState("")
  const [cardName, setCardName] = useState("")
  const [cardDate, setCardDate] = useState("")
  const [cardCvv, setCardCvv] = useState("")

  // ================= FRETE =================
  const [cep, setCep] = useState("")
  const [frete, setFrete] = useState(null)

  // ================= CÁLCULO DE VALORES =================
  // Soma os preços dos produtos
  const subtotal = cart.reduce((acc, item) => acc + item.price, 0)

  // Soma subtotal + frete
  const total = subtotal + (frete || 0)

  // ================= CÁLCULO DE FRETE =================
  function calcularFrete() {

    // Validação simples de CEP
    if (cep.length < 8) {
      alert("Digite um CEP válido")
      return
    }

    // Regra simulada de frete baseada no primeiro dígito
    const firstDigit = parseInt(cep[0])

    if (firstDigit <= 3) {
      setFrete(10)
    } else if (firstDigit <= 6) {
      setFrete(20)
    } else {
      setFrete(30)
    }
  }

  // ================= FINALIZAÇÃO DE COMPRA =================
  function handleCheckout() {

    if (paymentMethod === "card") {

      // Validação simulada de cartão
      if (
        cardNumber === "4111 1111 1111 1111" &&
        cardName.toUpperCase() === "CLIENTE TESTE" &&
        cardDate === "12/30" &&
        cardCvv === "123"
      ) {
        alert("✅ Pagamento aprovado!")
        clearCart && clearCart()
      } else {
        alert("❌ Dados do cartão inválidos")
      }

    } else {
      // Pagamento via Pix (simulado)
      alert("✅ Pagamento via Pix aprovado!")
      clearCart && clearCart()
    }

  }

  // ================= CARRINHO VAZIO =================
  if (cart.length === 0) {
    return (
      <div className="container">
        <h2>Seu carrinho está vazio 🛒</h2>
      </div>
    )
  }

  return (

    <div className="container">

      <h2 style={{ marginBottom: "20px" }}>
        Carrinho
      </h2>

      <div className="cart-container">

        {/* ================= LISTA DE PRODUTOS ================= */}
        <div className="cart-items">

          {cart.map(item => (
            <div key={item.id} className="cart-item">

              <img src={item.image} alt={item.title} />

              <div className="cart-info">
                <h3>{item.title}</h3>
                <p>R$ {item.price}</p>
              </div>

              {/* Remover item */}
              <button onClick={() => removeFromCart(item.id)}>
                Remover
              </button>

            </div>
          ))}

        </div>

        {/* ================= RESUMO E PAGAMENTO ================= */}
        <div className="cart-summary">

          <h3>Pagamento</h3>

          {/* ================= MÉTODOS ================= */}
          <div className="payment-methods">

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
              Pix
            </button>

          </div>

          {/* ================= CARTÃO ================= */}
          {paymentMethod === "card" && (
            <div>

              {/* Visual do cartão */}
              <div className="credit-card">
                <div className="card-number">
                  {cardNumber || "0000 0000 0000 0000"}
                </div>

                <div className="card-bottom">
                  <span>{cardName || "SEU NOME"}</span>
                  <span>{cardDate || "00/00"}</span>
                </div>
              </div>

              {/* Formulário */}
              <div className="payment-form">

                <input
                  type="text"
                  placeholder="Número do cartão"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="Nome no cartão"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                />

                <div className="row">
                  <input
                    type="text"
                    placeholder="Validade (MM/AA)"
                    value={cardDate}
                    onChange={(e) => setCardDate(e.target.value)}
                  />

                  <input
                    type="text"
                    placeholder="CVV"
                    value={cardCvv}
                    onChange={(e) => setCardCvv(e.target.value)}
                  />
                </div>

              </div>

            </div>
          )}

          {/* ================= PIX ================= */}
          {paymentMethod === "pix" && (
            <div className="pix-box">
              <p>Escaneie o QR Code para pagar</p>
              <div className="qr-placeholder">
                QR CODE
              </div>
            </div>
          )}

          {/* ================= FRETE ================= */}
          <div className="frete-box">

            <h4>Calcular Frete</h4>

            <div className="frete-input">
              <input
                type="text"
                placeholder="Digite seu CEP"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              />

              <button onClick={calcularFrete}>
                Calcular
              </button>
            </div>

            {frete !== null && (
              <p className="frete-valor">
                Frete: R$ {frete.toFixed(2)}
              </p>
            )}

          </div>

          {/* ================= TOTAL ================= */}
          <div className="total-box">
            <p>Subtotal: R$ {subtotal.toFixed(2)}</p>
            {frete !== null && <p>Frete: R$ {frete.toFixed(2)}</p>}
            <h2>Total: R$ {total.toFixed(2)}</h2>
          </div>

          {/* ================= FINALIZAR ================= */}
          <button className="checkout-btn" onClick={handleCheckout}>
            Finalizar Compra
          </button>

        </div>

      </div>

    </div>

  )

}

export default Cart