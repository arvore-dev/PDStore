// ================= PROTECTED ROUTE =================
// Componente responsável por proteger rotas da aplicação.
// Permite acesso apenas para usuários autenticados.
// Caso não esteja logado, redireciona para a página de login.

import { useContext } from "react"
import { Navigate } from "react-router-dom"

// Contexto de autenticação
import { AuthContext } from "../context/AuthContext"

function ProtectedRoute({ children }) {

  // Recupera o usuário logado
  const { user } = useContext(AuthContext)

  // ================= VALIDAÇÃO DE ACESSO =================
  // Se não houver usuário autenticado, redireciona para login
  if (!user) {
    return <Navigate to="/login" />
  }

  // Caso esteja autenticado, renderiza o conteúdo da rota
  return children

}

export default ProtectedRoute