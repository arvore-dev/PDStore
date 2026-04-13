// ================= AUTH CONTEXT =================
// Responsável por gerenciar autenticação de usuários na aplicação.
// Controla login, logout e persistência de dados no localStorage.

import { createContext, useState, useEffect } from "react"

// Criação do contexto global de autenticação
export const AuthContext = createContext()

export function AuthProvider({ children }) {

  // Estado do usuário logado
  const [user, setUser] = useState(null)

  // ================= INICIALIZAÇÃO =================
  // Executa ao carregar a aplicação
  useEffect(() => {

    // Verifica se já existem usuários cadastrados
    const storedUsers = localStorage.getItem("users")

    if (!storedUsers) {

      // Usuários padrão para testes
      const defaultUsers = [
        { email: "admin@email.com", password: "admin123" },
        { email: "user@email.com", password: "user123" },
        { email: "teste@email.com", password: "teste123" }
      ]

      // Salva usuários no localStorage
      localStorage.setItem("users", JSON.stringify(defaultUsers))
    }

    // Recupera usuário logado anteriormente
    const savedUser = JSON.parse(localStorage.getItem("loggedUser"))

    if (savedUser) {
      setUser(savedUser)
    }

  }, [])

  // ================= LOGIN =================
  // Armazena o usuário logado no estado e no localStorage
  function login(userData) {
    setUser(userData)
    localStorage.setItem("loggedUser", JSON.stringify(userData))
  }

  // ================= LOGOUT =================
  // Remove o usuário do sistema
  function logout() {
    setUser(null)
    localStorage.removeItem("loggedUser")
  }

  // Disponibiliza dados e funções para toda a aplicação
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}