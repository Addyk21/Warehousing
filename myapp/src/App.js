// import logo from './logo.svg';
// import './App.css';
// import Home from './Add&Show/Home';
// import Contact from './Add&Show/Contact';
// import About from './Add&Show/About';
// import Error from './Add&Show/Error';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
// function App() {
//   return (
//     <div className="App">

//       <Router>
//         <nav className='Navbar'>
//           <span style={{ margin: "5%" }}>LOGO </span>
//           <Link style={{ margin: "5%" }} to="/">Home</Link>
//           <Link style={{ margin: "5%" }} to="/about">About</Link>
//           <Link style={{ margin: "5%" }} to="/Contact">Contact</Link>
//         </nav>// import logo from './logo.svg';
// import './App.css';

//         <Routes>

//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/*" element={<Error />} />
//         </Routes>
//       </Router>

//     </div>
//   );
// }

// export default App;



import logo from './logo.svg';
import './App.css';
import React from "react";
import Book from './BookStore/Book';
import Add from './BookStore/Add'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
function App(){
    return(
      <div>
        <Router>
<Routes>
  <Route exact path='/' element={<Book/>} />
  <Route exact path='/add' element={<Add/>} />
</Routes>

        </Router>
      </div>
    )
  }
  export default App;