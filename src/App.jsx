import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import Sidebar from './components/Sidebar'; 
import Home from './components/Home'; 
import LogWorkout from './components/LogWorkout';
import History from './components/History';
import Stats from './components/Stats'; 
import WorkoutGuide from './components/WorkoutGuide';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className={`${darkMode && "dark"} flex h-screen`}>
      <Router>
        {/* Header and Sidebar visible on all pages */}
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} toggleSidebar={toggleSidebar} />
        {isSidebarOpen && <Sidebar />}

        {/* Main Content Area */}
        <div className="flex-grow p-4">
          <Routes>
            <Route index element={<Home />} />
              <Route path="/logworkout" element={<LogWorkout />} />
              <Route path="/history" element={<History />} />
              <Route path="/stats" element={<Stats />} />
              <Route path="/workoutguide" element={<WorkoutGuide />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
