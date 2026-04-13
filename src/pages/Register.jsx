// ================= REGISTER =================
// Página de cadastro de usuários.
// Realiza validações de formulário e armazena dados no localStorage.

import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

function Register() {

  // ================= ESTADOS =================
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  // Controla visibilidade da senha
  const [showPassword, setShowPassword] = useState(false)

  // Mensagem de erro
  const [error, setError] = useState("")

  // Navegação
  const navigate = useNavigate()

  // ================= CADASTRO =================
  function handleRegister(e) {
    e.preventDefault()

    // Validação de campos vazios
    if (!email || !password || !confirmPassword) {
      setError("Preencha todos os campos")
      return
    }

    // Validação de confirmação de senha
    if (password !== confirmPassword) {
      setError("As senhas não coincidem")
      return
    }

    // Recupera usuários existentes
    const users = JSON.parse(localStorage.getItem("users")) || []

    // Verifica se o usuário já existe
    const userExists = users.find(user => user.email === email)

    if (userExists) {
      setError("Usuário já cadastrado")
      return
    }

    // Cria novo usuário
    const newUser = { email, password }

    // Salva no localStorage
    localStorage.setItem("users", JSON.stringify([...users, newUser]))

    alert("Cadastro realizado com sucesso!")

    // Redireciona para login
    navigate("/login")
  }

  return (

    <div className="auth-container">

      <div className="auth-box">

        <h2>Criar conta</h2>

        <form onSubmit={handleRegister}>

          {/* ================= EMAIL ================= */}
          <input
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* ================= SENHA ================= */}
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* ================= CONFIRMAR SENHA ================= */}
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirmar senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            {/* Toggle de visibilidade */}
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          {/* ================= ERRO ================= */}
          {error && <p className="error">{error}</p>}

          {/* ================= BOTÃO ================= */}
          <button type="submit">
            Cadastrar
          </button>

        </form>

        {/* Link para login */}
        <p>
          Já tem conta? <Link to="/login">Entrar</Link>
        </p>

      </div>

    </div>

  )

}

export default Register