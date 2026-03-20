import { useEffect } from "react"

function Notification({ message, show, setShow }) {

  useEffect(() => {

    if (show) {

      const timer = setTimeout(() => {
        setShow(false)
      }, 2000)

      return () => clearTimeout(timer)

    }

  }, [show])

  if (!show) return null

  return (

    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        background: "#28a745",
        color: "#fff",
        padding: "12px 20px",
        borderRadius: "5px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
      }}
    >
      {message}
    </div>

  )

}

export default Notification