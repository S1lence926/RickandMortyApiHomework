import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./Characters.css"

function Characters() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(res => res.json())
      .then(data => {
        setCharacters(data.results)
        setLoading(false)
      })
      .catch(err => {
        setError("Ошибка загрузки")
        setLoading(false)
      })
  }, [])

  if (loading) return <div className="status">Загрузка...</div>
  if (error)   return <div className="status error">{error}</div>

  return (
    <div className="characters-page">
      <h1>Characters</h1>
      <div className="characters-grid">
        {characters.map(char => (
          <Link to={`/character/${char.id}`} key={char.id} className="card">
            <img src={char.image} alt={char.name} />
            <div className="card-info">
              <h2>{char.name}</h2>
              <span className={`status ${char.status.toLowerCase()}`}>
                ● {char.status}
              </span>
              <p className="species">🧬 {char.species}</p>
              <p className="gender">⚧ {char.gender}</p>
              <p className="origin">📍 {char.origin.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Characters