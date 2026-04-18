function Rating({ value = 0 }) {

  // Garante que sempre seja número válido
  const rating = Number(value) || 0

  const stars = []

  for (let i = 1; i <= 5; i++) {

    if (i <= Math.floor(rating)) {
      // estrela cheia
      stars.push(<span key={i}>⭐</span>)
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      // meia estrela (simulada)
      stars.push(<span key={i}>⭐</span>)
    } else {
      // estrela vazia
      stars.push(<span key={i}>☆</span>)
    }

  }

  return (
    <div style={{ margin: "8px 0" }}>
      {stars}
      <span style={{ marginLeft: "5px", fontSize: "14px" }}>
        ({rating})
      </span>
    </div>
  )

}

export default Rating