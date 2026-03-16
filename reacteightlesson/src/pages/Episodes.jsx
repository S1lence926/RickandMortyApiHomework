import { useState, useEffect } from "react"
import "./Episodes.css"

function Episodes() {
  const [episodes, setEpisodes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then(res => res.json())
      .then(data => {
        setEpisodes(data.results)
        setLoading(false)
      })
  }, [])

  if (loading) return <div className="status">Загрузка...</div>

  return (
    <div className="episodes-page">
      <h1>Episodes</h1>
      <div className="episodes-grid">
        {episodes.map(ep => (
          <div key={ep.id} className="ep-card">
            <span className="ep-code">{ep.episode}</span>
            <h2>{ep.name}</h2>
            <p>📅 {ep.air_date}</p>
            <p>👥 {ep.characters.length} characters</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Episodes