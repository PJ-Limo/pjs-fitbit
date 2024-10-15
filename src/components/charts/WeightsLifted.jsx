// src/components/WeightProgressChart.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import dayjs from 'dayjs'

const WeightsLifted = ({ logs }) => {
  const chartData = logs.map(log => ({
    date: dayjs(log.date).format('DD.MM.YY'),
    totalWeight: log.weight * log.reps * log.sets
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis label={{ value: 'Total Weight (kg)', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Line type="monotone" dataKey="totalWeight" stroke="#ffbC00" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default WeightsLifted;
