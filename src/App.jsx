import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { useState } from 'react'



const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  const toggleDarkMode=() => {
    setDarkMode( !darkMode );
  };
  return (
    <div className={`${darkMode && "dark"}`}>
       <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </div>
  )
}

export default App
