// src/components/StatsPage.js
import React, { useState, useEffect } from 'react'
import Reps from './charts/Reps'
import TotalWorkouts from './charts/TotalWorkouts'
import WeightsLifted from './charts/WeightsLifted'
import CenteredContent from './CenteredContent'

const Stats = () => {
    const [workoutLogs, setWorkoutLogs] = useState([])

    // Fetch workout data from localStorage
    useEffect(() => {
        const storedLogs = localStorage.getItem('workoutLogs')
        if (storedLogs) {
            setWorkoutLogs(JSON.parse(storedLogs))
        }
    }, [])

    return (
        <CenteredContent>
                <h1 className="text-3xl font-bold mb-8">Workout Progress</h1>
                <div className='flex flex-row lg:space-x-8'>
                  
                <div>
                    <h2 className="text-lg font-medium mb-6">Total Weight Lifted Over Time</h2>
                    <WeightsLifted logs={workoutLogs} />
                </div>
                <div>
                    <h2 className="text-lg font-medium mb-6">Average Reps per Set Over Time</h2>
                    <Reps logs={workoutLogs} />
                </div>
                <div>
                    <h2 className="text-lg font-medium mb-6">Total Workouts Completed Over Time</h2>
                    <TotalWorkouts logs={workoutLogs} />
                </div>
                </div>
        </CenteredContent>
    )
}

export default Stats
