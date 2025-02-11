import BusinessCard from './components/BusinessCard'
import Gallery from './components/Gallery'

export default function Home() {
  return (
    <main>
      <BusinessCard
        name="Ezra Cornell"
        email="ezra@cornell.edu"
        logo="/images/cornell-logo.svg"
      />

      <Gallery />

      <h2>Rendered Date</h2>
      <p>{new Date().toLocaleString()}</p>
    </main>
  )
}
