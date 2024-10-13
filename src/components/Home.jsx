import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleNavigate = () => {
    navigate('/logworkout'); // Navigate to the LogWorkouts page
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Fitness Tracker</h1>
      <p className="text-lg mb-4">Track your progress and log your workouts here.</p>
      
      {/* Button that navigates to LogWorkouts */}
      <button
        onClick={handleNavigate}
        className="bg-Navy text-Yellow px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Go to Log Workouts
      </button>
    </div>
  );
};

export default Home;
