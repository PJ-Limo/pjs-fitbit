// src/components/TotalWorkoutsChart.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import dayjs from 'dayjs';

const TotalWorkouts = ({ logs }) => {
  const chartData = logs.map((log, index) => ({
    date: dayjs(log.date).format('DD.MM.YY'),
    totalWorkouts: index + 1 // Increment as the workout is completed
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis label={{ value: 'Total Workouts', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Bar dataKey="totalWorkouts" fill="#ffbC00" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TotalWorkouts;
