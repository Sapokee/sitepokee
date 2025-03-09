import { useState } from "react";

import BackgroundVideo from "./components/BackgroundVideo";
import NavBar from "./components/NavBar";
import Home from "./pages/home";
import AboutMe from "./pages/aboutme";
import Projects from "./pages/projects";
import Music from "./pages/music";

function App() {
  const [activePage, setActivePage] = useState("HOME");

  return (
    <div>
        <BackgroundVideo/>
        <NavBar setActivePage={setActivePage}/>
        <div style={{
            height: '90vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}>
          
          {activePage === "HOME" && <Home />}
          {activePage === "ABOUT ME" && <AboutMe />}
          {activePage === "CODING" && <Projects />}
          {activePage === "MUSIC" && <Music />}
        </div>
      </div>
  );
}

export default App;
