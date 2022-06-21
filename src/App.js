import Contact from "./components/Contact/contact";
import Intro from "./components/Intro/intro";
import Portfolio from "./components/Portfolio/portfolio";
import Topbar from "./components/Topbar/Topbar";
import Works from "./components/Works/works";
import './App.scss'
import { useState } from "react";
import Menu from "./components/menu/Menu";


function App() { 
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <div className="sections">
      <Intro />
      <Portfolio />
      <Works />
      <Contact/>
    </div>
    </div>
  );
}

export default App;
