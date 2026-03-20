import { useEffect, useState } from "react"
import api from "../services/api"
import ProductCard from "../components/ProductCard"

function Home() {

  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")

  useEffect(() => {

    getAllProducts()

    api.get("/products/categories")
      .then(response => {
        setCategories(response.data)
      })

  }, [])

  function getAllProducts() {

    setLoading(true)

    api.get("/products")
      .then(response => {
        setProducts(response.data)
        setLoading(false)
      })

  }

  function filterCategory(category) {

    setLoading(true)

    api.get(`/products/category/${category}`)
      .then(response => {
        setProducts(response.data)
        setLoading(false)
      })

  }

  function filteredProducts() {

    return products.filter(product =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )

  }

  if (loading) {
    return <p className="container">Carregando produtos...</p>
  }

  return (

    <div className="container">

      {/* Busca */}

      <div style={{ marginBottom: "20px" }}>

        <input
          type="text"
          placeholder="Buscar produto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            width: "100%",
            maxWidth: "350px",
            marginBottom: "10px"
          }}
        />

      </div>

      {/* Categorias */}

      <div style={{ marginBottom: "20px" }}>

        <button onClick={getAllProducts}>
          Todos
        </button>

        {categories.map(category => (

          <button
            key={category}
            onClick={() => filterCategory(category)}
            style={{ marginLeft: "10px" }}
          >
            {category}
          </button>

        ))}

      </div>

      {/* Produtos */}

      <div className="products-grid">

        {filteredProducts().map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </div>

  )

}

export default Home