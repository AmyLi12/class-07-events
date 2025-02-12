export default function BusinessCard(
  { name, email, logo = undefined }
) {
  function flipCard() {
    alert("Ezra Cornell co-founded Cornell University in 1865.")
  }

  return (
    <div className="business-card">
      {!!logo &&
        <img src={logo} alt="logo" />
      }

      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>

      <button onClick={flipCard}>
        More
      </button>
      {/* can also define an arrow function instead of an actual function to perform this functionality */}
    </div>
  )
}
