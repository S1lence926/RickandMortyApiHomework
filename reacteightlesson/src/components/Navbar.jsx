// import { Link } from "react-router-dom"
// export default function Navbar(){
//     <nav style={{display: "flex", gap: "20px"}}>
//         <Link to="/">Main</Link>
//         <Link to="/about">About</Link>
//         <Link to="/courses">Courses</Link>
//         <Link to="/contacts">Contacts</Link>
//     </nav>
// }

import { NavLink } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <span className="logo">Rick & Morty</span>
      <div className="nav-links">
        <NavLink to="/" end>Characters</NavLink>
      </div>
    </nav>
  )
}

export default Navbar