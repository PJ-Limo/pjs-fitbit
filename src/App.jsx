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
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className={`${darkMode && "dark"} flex flex-col h-screen`}>
        {/* Header and Sidebar visible on all pages */}
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} toggleSidebar={toggleSidebar} />

        {/* Main Content Area */}
        <div className="w-full flex-1 flex">

        <Sidebar isSidebarOpen={isSidebarOpen} />
        <div className='flex-1'>
          <Routes>
              <Route index element={<Home />} />
                <Route path="/logworkout" element={<LogWorkout />} />
                <Route path="/history" element={<History />} />
                <Route path="/stats" element={<Stats />} />
                <Route path="/workoutguide" element={<WorkoutGuide />} />
            </Routes>
        </div>
        </div>
    </div>
  );
}

export default App;
