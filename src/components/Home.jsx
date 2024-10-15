import React from 'react'
import { useNavigate } from 'react-router-dom'
import CenteredContent from './CenteredContent'

const Home = () => {
    const navigate = useNavigate() // Hook to navigate programmatically

    const handleNavigate = () => {
        navigate('/logworkout') // Navigate to the LogWorkouts page
    }

    return (
        <CenteredContent>
                <img
                    src="/src/assets/Fitness-image-2.jpg"
                    className="w-52 h-52 rounded-full object-cover object-top mb-10 shadow-xl"
                    alt="home image"
                />
                <h1 className="text-4xl font-bold mb-6 dark:text-Yellow">Welcome to the Fitness Tracker</h1>
                <p className="text-lg mb-4 dark:text-white">Track your progress and log your workouts here.</p>

                {/* Button that navigates to LogWorkouts */}
                <button
                    onClick={handleNavigate}
                    className="bg-Navy text-Yellow px-6 py-3 rounded-lg hover:bg-Yellow hover:text-Navy transition duration-200"
                >
                    Go to Log Workouts
                </button>

                <p className="text-sm italic  text-center font-thin mt-10 mb-10 text-Navy dark:text-Yellow">
                    “Your journey starts today—stay consistent, stay committed.”
                </p>
        </CenteredContent>
    )
}

export default Home
