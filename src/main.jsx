// Importa bibliotecas principais do React
import React from "react"
import ReactDOM from "react-dom/client"

// Importa o componente principal da aplicação
import App from "./App"

// Importa o CSS global (estilos do projeto)
import "./styles/global.css"

// Importa os contextos globais
import { CartProvider } from "./context/CartContext"
import { AuthProvider } from "./context/AuthContext"

// ================= RENDERIZAÇÃO DA APLICAÇÃO =================
ReactDOM.createRoot(document.getElementById("root")).render(

  // StrictMode ajuda a identificar problemas durante o desenvolvimento
  <React.StrictMode>

    {/* ================= CONTEXTO DE AUTENTICAÇÃO ================= */}
    {/* Disponibiliza dados do usuário (login/logout) para toda a aplicação */}
    <AuthProvider>

      {/* ================= CONTEXTO DO CARRINHO ================= */}
      {/* Gerencia os produtos adicionados ao carrinho */}
      <CartProvider>

        {/* Componente principal da aplicação */}
        <App />

      </CartProvider>

    </AuthProvider>

  </React.StrictMode>

)