import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import Dashboard from './components/Dashboard';
import LogWorkout from './components/LogWorkout';

const App = () => {

  return (
    <div>
      <Router>
          <Routes>
        
              <Route index element={<Dashboard />} />
              <Route path='LogWorkouts' element={<LogWorkout />} />
          </Routes>
        </Router> 
    </div>
  )
}

export default App
