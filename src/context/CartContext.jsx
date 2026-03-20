import { createContext, useState, useEffect } from "react"

export const CartContext = createContext()

export function CartProvider({ children }) {

  const [cart, setCart] = useState([])

  useEffect(() => {

    const storedCart = localStorage.getItem("cart")

    if (storedCart) {
      setCart(JSON.parse(storedCart))
    }

  }, [])

  useEffect(() => {

    localStorage.setItem("cart", JSON.stringify(cart))

  }, [cart])

  function addToCart(product) {

    const productExists = cart.find(item => item.id === product.id)

    if (productExists) {

      const updatedCart = cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )

      setCart(updatedCart)

    } else {

      setCart([
        ...cart,
        { ...product, quantity: 1 }
      ])

    }

  }

  function decreaseQuantity(productId) {

    const product = cart.find(item => item.id === productId)

    if (product.quantity === 1) {

      removeFromCart(productId)

    } else {

      const updatedCart = cart.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )

      setCart(updatedCart)

    }

  }

  function removeFromCart(productId) {

    const updatedCart = cart.filter(item => item.id !== productId)

    setCart(updatedCart)

  }

  function clearCart() {

    setCart([])

    localStorage.removeItem("cart")

  }

  return (

    <CartContext.Provider
      value={{
        cart,
        addToCart,
        decreaseQuantity,
        removeFromCart,
        clearCart
      }}
    >

      {children}

    </CartContext.Provider>

  )

}