import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { AuthContext } from "../context/AuthContext"

function Header() {

  const { cart } = useContext(CartContext)
  const { user, logout } = useContext(AuthContext)

  const totalItems = cart.reduce((acc, item) => {
    return acc + item.quantity
  }, 0)

  return (

    <header className="header">

      <Link to="/" className="logo">
        DevStore
      </Link>

      <nav className="nav">

        <Link to="/cart">
          🛒 Carrinho {user && `(${totalItems})`}
        </Link>

        {!user && (
          <Link to="/login">
            Login
          </Link>
        )}

        {user && (
          <>
            <span>Olá, {user.email}</span>

            <button onClick={logout}>
              Sair
            </button>
          </>
        )}

      </nav>

    </header>

  )

}

export default Header