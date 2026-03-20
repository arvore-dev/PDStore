import { createContext, useState, useEffect } from "react"

export const AuthContext = createContext()

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null)

  useEffect(() => {

    const storedUser = localStorage.getItem("user")

    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }

  }, [])

  function login(email, password) {

    const validEmail = "admin@devstore.com"
    const validPassword = "123456"

    if (email === validEmail && password === validPassword) {

      const user = { email }

      setUser(user)

      localStorage.setItem("user", JSON.stringify(user))

      return true

    } else {

      return false

    }

  }

  function logout() {

    setUser(null)

    localStorage.removeItem("user")

  }

  return (

    <AuthContext.Provider
      value={{
        user,
        login,
        logout
      }}
    >

      {children}

    </AuthContext.Provider>

  )

}