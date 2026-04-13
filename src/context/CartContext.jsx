// ================= CART CONTEXT =================
// Responsável por gerenciar o carrinho de compras.
// Cada usuário possui um carrinho independente,
// armazenado no localStorage.

import { createContext, useState, useEffect, useContext } from "react"
import { AuthContext } from "./AuthContext"

// Criação do contexto global do carrinho
export const CartContext = createContext()

export function CartProvider({ children }) {

  // Usuário logado (necessário para separar os carrinhos)
  const { user } = useContext(AuthContext)

  // Estado do carrinho
  const [cart, setCart] = useState([])

  // ================= CARREGAR CARRINHO =================
  // Sempre que o usuário mudar, carrega o carrinho correspondente
  useEffect(() => {

    if (user) {
      const savedCart = JSON.parse(
        localStorage.getItem(`cart_${user.email}`)
      ) || []

      setCart(savedCart)
    } else {
      // Se não houver usuário, limpa o carrinho
      setCart([])
    }

  }, [user])

  // ================= SALVAR CARRINHO =================
  // Sempre que o carrinho mudar, salva no localStorage
  useEffect(() => {

    if (user) {
      localStorage.setItem(
        `cart_${user.email}`, // chave única por usuário
        JSON.stringify(cart)
      )
    }

  }, [cart, user])

  // ================= ADICIONAR PRODUTO =================
  function addToCart(product) {

    // Verifica se o produto já está no carrinho
    const exists = cart.find(item => item.id === product.id)

    if (exists) {
      // Se já existe, incrementa a quantidade
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    } else {
      // Se não existe, adiciona com quantidade inicial 1
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  // ================= REMOVER PRODUTO =================
  function removeFromCart(productId) {

    setCart(cart.filter(item => item.id !== productId))
  }

  // ================= ATUALIZAR QUANTIDADE =================
  function updateQuantity(productId, amount) {

    setCart(
      cart.map(item =>
        item.id === productId
          // Garante que a quantidade mínima seja 1
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    )
  }

  // ================= LIMPAR CARRINHO =================
  function clearCart() {
    setCart([])
  }

  // Disponibiliza dados e funções para toda a aplicação
  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}