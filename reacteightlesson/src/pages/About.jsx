// export default function About(){
// return(
//     <div>
//     <h1>About</h1>
//     <p>Hz</p>
//     </div>
// )
// }
import "./About.css"

function About() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>Rick and Morty</h1>
        <p className="tagline">An animated sci-fi sitcom about infinite universes</p>
      </div>
      <div className="about-grid">
        <div className="about-card">
          <span className="about-icon">📺</span>
          <h2>Series</h2>
          <p>American animated series created by Justin Roiland and Dan Harmon in 2013</p>
        </div>
        <div className="about-card">
          <span className="about-icon">🌌</span>
          <h2>Universe</h2>
          <p>The show spans infinite dimensions, timelines and alternate realities</p>
        </div>
        <div className="about-card">
          <span className="about-icon">🎭</span>
          <h2>Genre</h2>
          <p>Sci-fi, Comedy, Adventure, Dark humor</p>
        </div>
        <div className="about-card">
          <span className="about-icon">⭐</span>
          <h2>Rating</h2>
          <p>9.2/10 on IMDb — one of the highest rated animated series ever</p>
        </div>
      </div>
    </div>
  )
}

export default About