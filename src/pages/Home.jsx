// ================= HOME =================
// Página principal da aplicação.
// Responsável por listar produtos, filtrar por categoria
// e exibir destaque (banner).

import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"

function Home() {

  // ================= ESTADOS =================
  const [products, setProducts] = useState([]) // todos os produtos
  const [filteredProducts, setFilteredProducts] = useState([]) // produtos filtrados
  const [categories, setCategories] = useState([]) // lista de categorias
  const [selectedCategory, setSelectedCategory] = useState("all") // categoria ativa

  const [loading, setLoading] = useState(true) // controle de carregamento
  const [error, setError] = useState(null) // controle de erro

  // ================= BUSCA DE PRODUTOS =================
  useEffect(() => {

    async function fetchProducts() {

      try {

        // Requisição à API
        const response = await fetch("https://dummyjson.com/products")
        const data = await response.json()

        // Salva produtos
        setProducts(data.products)
        setFilteredProducts(data.products)

        // Extrai categorias únicas
        const uniqueCategories = [
          "all",
          ...new Set(data.products.map(p => p.category))
        ]

        setCategories(uniqueCategories)

      } catch (err) {
        setError("Erro ao carregar produtos")
      } finally {
        setLoading(false)
      }

    }

    fetchProducts()

  }, [])

  // ================= FILTRO POR CATEGORIA =================
  function handleFilter(category) {

    setSelectedCategory(category)

    if (category === "all") {
      setFilteredProducts(products)
    } else {
      const filtered = products.filter(
        p => p.category === category
      )
      setFilteredProducts(filtered)
    }
  }

  // ================= LOADING =================
  if (loading) {
    return (
      <div className="container">
        <p>Carregando...</p>
      </div>
    )
  }

  // ================= ERRO =================
  if (error) {
    return (
      <div className="container">
        <p>{error}</p>
      </div>
    )
  }

  return (

    <div>

      {/* ================= BANNER ================= */}
      <div className="banner">
        <div className="banner-content">
          <h2>🔥 Ofertas imperdíveis</h2>
          <p>Descontos de até 50% hoje</p>
          <button>Ver produtos</button>
        </div>
      </div>

      <div className="container">

        <h2 style={{ marginBottom: "20px" }}>
          Produtos
        </h2>

        {/* ================= CATEGORIAS ================= */}
        <div className="categories">

          {categories.map(category => (
            <button
              key={category}
              className={selectedCategory === category ? "active" : ""}
              onClick={() => handleFilter(category)}
            >
              {category}
            </button>
          ))}

        </div>

        {/* ================= LISTA DE PRODUTOS ================= */}
        <div className="products-grid">

          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
          ) : (
            <p>Nenhum produto encontrado</p>
          )}

        </div>

      </div>

    </div>

  )

}

export default Home