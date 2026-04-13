// ================= HEADER =================
// Componente responsável pelo topo da aplicação.
// Exibe logo, controle de tema (dark/light),
// informações do usuário e acesso ao carrinho.

import { useContext, useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

// Contextos globais
import { AuthContext } from "../context/AuthContext"
import { CartContext } from "../context/CartContext"

// Logos (modo claro e escuro)
import logoLight from "../assets/logo1.png"
import logoDark from "../assets/logo2.png"

function Header() {

  // Dados de autenticação
  const { user, logout } = useContext(AuthContext)

  // Dados do carrinho
  const { cart } = useContext(CartContext)

  // Navegação entre páginas
  const navigate = useNavigate()

  // Estado do tema (dark mode)
  const [darkMode, setDarkMode] = useState(false)

  // ================= TEMA =================
  // Carrega o tema salvo no localStorage ao iniciar
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")

    if (savedTheme === "dark") {
      document.body.classList.add("dark")
      setDarkMode(true)
    }
  }, [])

  // ================= CARRINHO =================
  // Calcula o total de itens no carrinho
  const totalItems = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  )

  // ================= LOGOUT =================
  // Encerra sessão do usuário e redireciona para login
  function handleLogout() {
    logout()
    navigate("/login")
  }

  // ================= DARK MODE =================
  // Alterna entre tema claro e escuro
  function toggleTheme() {

    if (darkMode) {
      document.body.classList.remove("dark")
      localStorage.setItem("theme", "light")
    } else {
      document.body.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }

    setDarkMode(!darkMode)
  }

  return (

    <header className="header">

      {/* ================= LOGO =================
          Logo muda conforme o tema */}
      <div className="logo">
        <Link to="/">
          <img
            src={darkMode ? logoDark : logoLight}
            alt="PDStore"
          />
        </Link>
      </div>

      {/* ================= AÇÕES DO USUÁRIO ================= */}
      <div className="header-actions">

        {/* Botão de alternar tema */}
        <button onClick={toggleTheme} className="btn">
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* ================= LOGIN / LOGOUT ================= */}
        {user ? (
          <>
            <span className="user-info">
              Olá, {user.email}
            </span>

            <button onClick={handleLogout} className="btn">
              Sair
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn">
              Entrar
            </button>
          </Link>
        )}

        {/* ================= CARRINHO ================= */}
        {user && (
          <Link to="/cart" className="cart-button">
            🛒

            {/* Badge com quantidade de itens */}
            {totalItems > 0 && (
              <span className="cart-count">
                {totalItems}
              </span>
            )}
          </Link>
        )}

      </div>

    </header>

  )

}

export default Header