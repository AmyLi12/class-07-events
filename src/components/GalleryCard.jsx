import Citation from "./Citation";

function handleClick() {
  console.log("Got clicked!");
  alert("Clicked me")
}

export default function GalleryCard({ imgUri, altText, citation = undefined, caption = undefined, color = '#e2e8f0' }) {
  return (
    <div
      className="card"
      style={{ backgroundColor: color }}
      onClick = {handleClick}
    >
      <img src={imgUri} alt={altText} />

      <div className="caption">
        {!!caption &&

          <p style={{ borderBottom: "1px solid #000000", paddingBottom: "2px" }}>
            {caption}
          </p>

        }
        {citation
        ? <Citation citation={citation} align="center" /> : undefined}

      </div>
    </div>
  )
}
