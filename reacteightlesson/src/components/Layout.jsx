// import { Outlet } from "react-router-dom"
// import Navbar from "./Navbar"

// function Layout() {
//   return (
//     <div>
//       <Navbar />
//       <main>
//         <Outlet /> 
//       </main>
//       <Footer />
//     </div>
//   )
// }

// export default Layout

import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

function Layout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout