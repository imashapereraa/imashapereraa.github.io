import './App.css'

import LandingPage from './pages/Landing/Landing';
import Projects from './pages/Projects/Projects';
import BoidsGamePage from './pages/Projects/BoidsGame';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/boids" element={<BoidsGamePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
