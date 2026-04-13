// ================= LOGIN =================
// Página responsável por autenticação e cadastro de usuários.
// Permite alternar entre login e registro.

import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

function Login() {

  // Função de login do contexto
  const { login } = useContext(AuthContext)

  // Navegação entre páginas
  const navigate = useNavigate()

  // ================= ESTADOS =================
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // Controla se está em modo cadastro ou login
  const [isRegister, setIsRegister] = useState(false)

  // ================= SUBMIT =================
  function handleSubmit(e) {
    e.preventDefault()

    // Recupera usuários do localStorage
    const users = JSON.parse(localStorage.getItem("users")) || []

    // ================= CADASTRO =================
    if (isRegister) {

      // Verifica se usuário já existe
      const userExists = users.find(u => u.email === email)

      if (userExists) {
        alert("Usuário já existe")
        return
      }

      // Cria novo usuário
      const newUser = { email, password }

      users.push(newUser)

      // Salva no localStorage
      localStorage.setItem("users", JSON.stringify(users))

      alert("Cadastro realizado com sucesso!")

      // Volta para login
      setIsRegister(false)
      return
    }

    // ================= LOGIN =================
    const user = users.find(
      u => u.email === email && u.password === password
    )

    if (user) {
      login(user) // salva no contexto
      navigate("/") // redireciona para home
    } else {
      alert("Email ou senha inválidos")
    }
  }

  return (

    <div className="login-container">

      <div className="login-card">

        {/* TÍTULO DINÂMICO */}
        <h2>
          {isRegister ? "Cadastro" : "Login"}
        </h2>

        {/* FORMULÁRIO */}
        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            {isRegister ? "Cadastrar" : "Entrar"}
          </button>

        </form>

        {/* TOGGLE LOGIN / CADASTRO */}
        <p onClick={() => setIsRegister(!isRegister)}>
          {isRegister
            ? "Já tem conta? Fazer login"
            : "Não tem conta? Cadastre-se"}
        </p>

      </div>

    </div>

  )

}

export default Login