// ================= NOTIFICATION =================
// Componente responsável por exibir mensagens temporárias
// na tela (ex: produto adicionado ao carrinho).

import { useEffect } from "react"

function Notification({ message, show, setShow }) {

  // ================= CONTROLE DE TEMPO =================
  // Quando a notificação aparece, inicia um timer
  // para escondê-la automaticamente após 2 segundos
  useEffect(() => {

    if (show) {

      const timer = setTimeout(() => {
        setShow(false)
      }, 2000)

      // Limpa o timer ao desmontar ou atualizar
      return () => clearTimeout(timer)

    }

  }, [show])

  // Se não estiver visível, não renderiza nada
  if (!show) return null

  return (

    <div
      style={{
        position: "fixed", // fixa na tela
        top: "20px",
        right: "20px",
        background: "#28a745", // verde (sucesso)
        color: "#fff",
        padding: "12px 20px",
        borderRadius: "5px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
      }}
    >
      {message}
    </div>

  )

}

export default Notification