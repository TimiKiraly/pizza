import "./App.css";
import * as ReactDOM from 'react-dom';
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contacts";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import { Component } from "react";
import {Route, Routes} from "react-router-dom"
import Layout from "./Components/Layout";


// export default function App() {
//   return (
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="menu" element={<Menu />} />
//         </Route>
//       </Routes>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

function App () {
  
  return (
    
        <div className="App">
          <Home/>
          <Contact />
          <Footer />
        
        </div>
   
  )
}

export default App;