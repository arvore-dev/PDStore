function Rating({ rate, count }) {

  const stars = []

  const roundedRate = Math.round(rate)

  for (let i = 1; i <= 5; i++) {

    if (i <= roundedRate) {
      stars.push("⭐")
    } else {
      stars.push("☆")
    }

  }

  return (
    <div style={{ marginBottom: "8px" }}>
      {stars.join(" ")} ({count})
    </div>
  )

}

export default Rating