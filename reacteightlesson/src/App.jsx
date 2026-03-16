// import React, { useReducer, useRef } from 'react';
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TASK':
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };

// const TodoApp = () => {

//   const [tasks, dispatch] = useReducer(reducer, []);
  

//   const inputRef = useRef(null);

//   const addTask = () => {
//     const taskText = inputRef.current.value.trim();

//     if (taskText !== "") {

//       dispatch({ type: 'ADD_TASK', payload: taskText });
      
//       inputRef.current.value = "";
//     }
//   };

//   const focusInput = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
//       <h2>Практика: Todo List</h2>
      
//       <div style={{ marginBottom: '20px' }}>
//         <input 
//           ref={inputRef} 
//           type="text" 
//           placeholder="Введите задачу" 
//         />
//         <button onClick={addTask} style={{ marginLeft: '10px' }}>
//           Добавить
//         </button>
//         <button onClick={focusInput} style={{ marginLeft: '10px' }}>
//           Фокус
//         </button>
//       </div>

//       <h3>Список задач:</h3>
//       {tasks.length === 0 ? (
//         <p>Список пуст</p>
//       ) : (
//         <ol>
//           {tasks.map((task, index) => (
//             <li key={index}>{task}</li>
//           ))}
//         </ol>
//       )}
//     </div>
//   );
// };

// export default TodoApp;

// import { Routes,Route,Link,NavLink, } from 'react-router-dom'

// function Home(){
//   return <h2>Главная Страница</h2>
// }
// function About(){
//   return <h2>О нас</h2>
// }
// function Contacts(){
//   return <h2>Контакты</h2>
// }
// function Courses(){
//   <div>
// <Link to="/">Home</Link>
//     <Link to="/about">About</Link>
//     <Link to="/contacts">Contacts</Link>
//     <Link to="/courses">Курсы</Link>
//   </div>
// }
// function NotFound(){
//   return(
//     <h2>Страница не найдена</h2>
//   )
// }

// function Layout(){
//   return(
//     <div>
//       <header>
//         <h1>React Courses site</h1>
//         <nav style={{display: "flex", gap: "20px"}}>
//         <NavLink to="/">Main</NavLink>
//         <NavLink to="/about">About</NavLink>
//         <NavLink to="/contacts">Contacts</NavLink>
//         <NavLink to="/courses">Courses</NavLink>
//         </nav>
//       </header>
//       <main style={{marginTop: "20px"}}><Outlet/></main>
//       <footer style={{marginTop: "20px"}}><p>Footer</p></footer>
//     </div>
//   )
// }

// export default function App(){
//   return(
//     <div style={{display:"flex", gap: "20px", marginBottom: "20px"}}> 
//     <Link to="/">Home</Link>
//     <Link to="/about">About</Link>
//     <Link to="/contacts">Contacts</Link>
//     <Link to="/Courses">Courses</Link>

//     <Routes>
//       <Route path="/" index element = {<Layout/>}/>
//       <Route path="/about" element = {<About/>}/>
//       <Route path="/contacts" element = {<Contacts/>}/>
//       <Route path="/courses" element = {<Courses/>}/>
//       <Route path="/*" element = {<NotFound/>}/>
//     </Routes> 
//     </div>

//   )
// }

// import { Routes, Route } from "react-router-dom"

// import Layout from "./components/Layout"
// import Navbar from "./Navbar"
// import Home from "./pages/Home"
// import About from "./pages/About"
// import Courses from "./pages/Courses"
// import Contacts from "./pages/Contacts"


// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="contacts" element={<Contacts />} />
//       </Route>
//     </Routes>
//   )
// }

// export default App

import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Characters from "./pages/Characters"
import Episodes from "./pages/Episodes"
import About from "./pages/About"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Characters />} />
        <Route path="episodes" element={<Episodes />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App