import { useState } from 'react'
import './App.scss'
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import ChosenCountry from './components/ChosenCountry'
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {

  const [colorMode, setColorMode] = useState(true)

  function toggleMode() {
    setColorMode(prevState => !prevState)
  }


  return (
    <div className={colorMode ? "black app-container" : "light app-container"}>
      <Header 
      toggleMode={toggleMode}
      colorMode={colorMode}
      />
      <BrowserRouter>
      <Routes>
        <Route path="*" element={<MainContent  toggleMode={toggleMode} colorMode={colorMode} />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
