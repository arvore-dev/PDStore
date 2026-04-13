function Rating({ rate }) {

  // Array para armazenar as estrelas
  const stars = []

  // Arredonda a nota (ex: 4.3 → 4)
  const roundedRate = Math.round(rate)

  // Loop para gerar 5 estrelas
  for (let i = 1; i <= 5; i++) {

    if (i <= roundedRate) {
      stars.push("⭐") // estrela cheia
    } else {
      stars.push("☆") // estrela vazia
    }

  }

  return (
    <div style={{ marginBottom: "8px" }}>
      {/* Exibe estrelas + nota formatada */}
      {stars.join(" ")} ({rate.toFixed(1)} / 5)
    </div>
  )

}

export default Rating