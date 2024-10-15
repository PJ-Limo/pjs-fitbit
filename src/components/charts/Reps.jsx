// src/components/AverageRepsChart.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import dayjs from 'dayjs';

const Reps = ({ logs }) => {
  const chartData = logs.map(log => ({
    date: dayjs(log.date).format('DD.MM.YY'),
    averageReps: log.reps
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis label={{ value: 'Average Reps', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Line type="monotone" dataKey="averageReps" stroke="#071629" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Reps;
