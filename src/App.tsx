import './App.css'
import LandingPage from './pages/Landing/Landing'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
