import { Link } from "react-router-dom"
import "./NotFound.css"

function NotFound() {
  return (
    <div className="notfound">
      <h1>404</h1>
      <p>Oops! This dimension doesn't exist</p>
      <Link to="/" className="home-btn">Go Home</Link>
    </div>
  )
}

export default NotFound