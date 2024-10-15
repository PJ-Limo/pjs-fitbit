import React, { useEffect, useState } from 'react';

const History = () => {
  const [workoutLogs, setWorkoutLogs] = useState([]);
  const [searchDate, setSearchDate] = useState('');

  useEffect(() => {
    // Load logs from local storage
    const savedLogs = JSON.parse(localStorage.getItem('workoutLogs')) || [];
    setWorkoutLogs(savedLogs);
  }, []);

  const handleSearch = () => {
    // Filter logs by date
    const filteredLogs = JSON.parse(localStorage.getItem('workoutLogs')) || [];
    const filteredByDate = filteredLogs.filter(log => log.date === searchDate);
    
    setWorkoutLogs(filteredByDate);
  };

  const clearLogsFromState = () => {
    // Clear logs from the state, but not from local storage
    setWorkoutLogs([]);
  };


  return (
    <div className="w-full h-full dark:bg-Navy">
      <h1 className="font-bold mt-42 mb-10 text-5xl dark:text-Yellow">Workout History</h1>

      <div className='flex flex-col bg-Navy p-4 rounded-lg items-center justify-center '>
        <input
            type="date"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
            className="border border-gray-300 rounded-md p-2 mb-4 dark:border-none"
        />

        <button onClick={handleSearch} className="bg-none border border-[#FFBC00] text-white px-4 py-2 rounded-2xl w-28 hover:bg-NavyB">
            Search
        </button>
      </div>

      <h2 className='font-bold text-xl mt-10 dark:text-white'>Workouts logged that day:</h2>

      {workoutLogs.length === 0 ? (
        <p className='dark:text-white'>No logs found.</p>
      ) : (
        <ul className="mt-4 bg-[#e6e8ea] p-4 dark:bg-NavyB dark:text-white">
          {workoutLogs.map((log, index) => (
              <div key={index} className="flex flex-row justify-between items-center border-b py-2 space-x-6">
              <p><strong>Date:</strong> {log.date}</p>
              <p><strong>Workout:</strong> {log.workout}</p>
              <p><strong>Sets:</strong> {log.sets}</p>
              <p><strong>Reps:</strong> {log.reps}</p>
              <p><strong>Weight:</strong> {log.weight} kg</p>
              <p><strong>Notes:</strong> {log.notes}</p>
            </div>
          ))}
        </ul>
      )}
    {workoutLogs.length > 0 && (
            <button
                onClick={clearLogsFromState}
                className="bg-Yellow text-Navy px-4 py-2 mt-4 rounded-xl"
            >
                Refresh
            </button>
            )}
      <p className="text-sm italic  text-center font-thin mt-10 mb-10 text-Navy dark:text-Yellow">“Small steps lead to big changes. Keep moving forward!”</p>

    </div>
  );
};

export default History;
