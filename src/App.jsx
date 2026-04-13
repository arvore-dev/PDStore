// Importa ferramentas de roteamento do React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// ================= COMPONENTES GLOBAIS =================
import Header from "./components/Header"
import Footer from "./components/Footer"

// ================= PÁGINAS =================
import Home from "./pages/Home"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import About from "./pages/About"
import Contact from "./pages/Contact"
import ProductDetail from "./pages/ProductDetail" // 👈 IMPORT ADICIONADO

function App() {

  return (

    // ================= ROTEADOR PRINCIPAL =================
    <Router>

      {/* ================= HEADER ================= */}
      <Header />

      {/* ================= ROTAS ================= */}
      <Routes>

        {/* Página inicial */}
        <Route path="/" element={<Home />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Carrinho */}
        <Route path="/cart" element={<Cart />} />

        {/* Checkout */}
        <Route path="/checkout" element={<Checkout />} />

        {/* 👇 NOVA ROTA DE DETALHE DO PRODUTO */}
        <Route path="/product/:id" element={<ProductDetail />} />

        {/* ================= PÁGINAS INSTITUCIONAIS ================= */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

      {/* ================= FOOTER ================= */}
      <Footer />

    </Router>

  )

}

export default App