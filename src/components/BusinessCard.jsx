export default function BusinessCard(
  { name, email, logo = undefined }
) {
  return (
    <div className="business-card">
      {!!logo &&
        <img src={logo} alt="logo" />
      }

      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}
