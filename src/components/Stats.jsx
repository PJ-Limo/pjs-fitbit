import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Stats = () => {
  // Retrieve logged workouts from local storage
  const workouts = JSON.parse(localStorage.getItem('workouts')) || [];

  // Calculate total duration and top workouts
  const totalDuration = workouts.reduce((sum, workout) => sum + workout.duration, 0);
  
  const workoutCounts = workouts.reduce((acc, workout) => {
    acc[workout.name] = (acc[workout.name] || 0) + 1;
    return acc;
  }, {});

  const topWorkouts = Object.entries(workoutCounts)
    .sort(([, countA], [, countB]) => countB - countA)
    .slice(0, 4);

  // Prepare data for the bar chart
  const chartData = {
    labels: topWorkouts.map(([name]) => name),
    datasets: [
      {
        label: 'Workout Count',
        data: topWorkouts.map(([, count]) => count),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">User Statistics</h2>

      <h3 className="text-xl font-semibold mb-2">Total Workout Duration: {totalDuration} minutes</h3>

      <h3 className="text-xl font-semibold mb-2">Top Workouts</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {topWorkouts.map(([name, count]) => (
          <div key={name} className="bg-gray-200 rounded-lg p-4 text-center shadow">
            <h4 className="font-bold">{name}</h4>
            <p>Count: {count}</p>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-semibold mb-2">Workout Count Bar Chart</h3>
      <Bar data={chartData} options={{ responsive: true }} />
    </div>
  );
};

export default Stats;
