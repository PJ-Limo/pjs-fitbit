import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { useState } from 'react'
import LogWorkout from './components/LogWorkout'



const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleDarkMode =() => {
    setDarkMode( !darkMode );
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`${darkMode && "dark"}`}>
       <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} toggleSidebar={toggleSidebar}/>
       {isSidebarOpen && <Sidebar />}
       <Router>
      <Routes>
        {/* Define the route for the LogWorkout component */}
        <Route path="/logworkout" element={<LogWorkout />} />
        {/* Optionally, add a default route */}
        <Route path="/" element={<h1>Welcome to the Fitness Tracker</h1>} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
