import { useState } from 'react'
import CenteredContent from './CenteredContent'

const WorkoutLog = ({ addWorkout }) => {
    const [workout, setWorkout] = useState('')
    const [sets, setSets] = useState('')
    const [reps, setReps] = useState('')
    const [weight, setWeight] = useState('')
    const [equipment, setEquipment] = useState('')
    const [notes, setNotes] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    // Function to save workout to local storage
    const saveWorkoutLog = (log) => {
        const savedLogs = JSON.parse(localStorage.getItem('workoutLogs')) || []
        savedLogs.push(log)
        localStorage.setItem('workoutLogs', JSON.stringify(savedLogs))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        const log = {
            workout,
            sets,
            reps,
            weight,
            equipment,
            notes,
            date: new Date().toISOString()
        }

        saveWorkoutLog(log)

        // Clear form fields
        setWorkout('')
        setSets('')
        setReps('')
        setWeight('')
        setEquipment('')
        setNotes('')
        alert('Workout Logged Successfully!')
        setLoading(false)
    }

    return (
        <CenteredContent className="bg-[url('/src/assets/Fitness-image-1.png')] bg-cover bg-center">
            <h1 className="font-extrabold mb-4 text-white sm:text-7xl md:text-7xl lg:text-8xl">Welcome!!</h1>
            <p className="font-thin mb-14 text-white sm:text-xl md:text-xl lg:text-2xl">
                Track your progress, crush your goals, and unlock a fitter you-one workout at a time!
            </p>
            <h2 className="text-4xl font-bold mb-16 text-Yellow">Log latest Workout</h2>
            {error && <p className="text-red-500 text-center">{error}</p>}

            <form id="logWorkout-form" onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-4 grid grid-cols-5 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    <select
                        id="workout"
                        value={workout}
                        onChange={(e) => setWorkout(e.target.value)}
                        className="w-[180px] rounded-md shadow-none text-center text-[15px] bg-[#071629] text-white mix-blend-screen border border-[#FFBC00] p-2"
                        required
                    >
                        <option value="">Select Workout</option>
                        <option value="Biceps">Biceps</option>
                        <option value="Triceps">Triceps</option>
                        <option value="Leg day">Leg Day</option>
                        <option value="Back">Back</option>
                        <option value="Shoulders">Shoulders</option>
                        <option value="Core">Core</option>
                        <option value="Chest">Chest</option>
                        <option value="Cardio">Cardio</option>
                    </select>

                    <select
                        id="sets"
                        value={sets}
                        onChange={(e) => setSets(e.target.value)}
                        className="w-[180px] rounded-md shadow-none text-center text-[15px] bg-[#071629] text-white mix-blend-screen border border-[#FFBC00] p-2"
                        required
                    >
                        <option value="">Add sets</option>
                        <option value="0">N/A</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="failure">To failure</option>
                    </select>

                    <select
                        id="reps"
                        value={reps}
                        onChange={(e) => setReps(e.target.value)}
                        className="w-[180px] rounded-md shadow-none text-center text-[15px] bg-[#071629] text-white mix-blend-screen border border-[#FFBC00] p-2"
                        required
                    >
                        <option value="">Add reps</option>
                        <option value="3">3</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="failure">To failure</option>
                    </select>

                    <select
                        id="weight"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="w-[180px] rounded-md shadow-none text-center text-[15px] bg-[#071629] text-white mix-blend-screen border border-[#FFBC00] p-2"
                        required
                    >
                        <option value="">Add Weight</option>
                        <option value="5">5kg</option>
                        <option value="7.5">7.5kg</option>
                        <option value="10">10kg</option>
                        <option value="12.5">12.5kg</option>
                        <option value="15">15kg</option>
                        <option value="17.5">17.5kg</option>
                        <option value="20">20kg</option>
                        <option value="25">25kg</option>
                        <option value="30">30kg</option>
                        <option value="35">35kg</option>
                        <option value="40">40kg</option>
                        <option value="45">45kg</option>
                        <option value="50">50kg</option>
                        <option value="55">55kg</option>
                        <option value="60">60kg</option>
                        <option value="65">65kg</option>
                        <option value="70">70kg</option>
                        <option value="75">75kg</option>
                        <option value="80">80kg</option>
                        <option value="85">85kg</option>
                        <option value="90">90kg</option>
                        <option value="95">95kg</option>
                        <option value="100">100kg</option>
                    </select>

                    <select
                        id="equipment"
                        value={equipment}
                        onChange={(e) => setEquipment(e.target.value)}
                        className="w-[180px] rounded-md shadow-none text-center text-[15px] bg-[#071629] text-white mix-blend-screen border border-[#FFBC00] p-2"
                        required
                    >
                        <option value="">Equipment used</option>
                        <option value="none">Body weight</option>
                        <option value="dumbbells">Dumbbells</option>
                        <option value="kettlebells">Kettlebells</option>
                        <option value="barbells">Barbells</option>
                        <option value="chestPress">Chest Press</option>
                        <option value="legPress">Leg Press</option>
                        <option value="latPulldown">Lat Pulldown</option>
                        <option value="seatedRow">Seated Row</option>
                        <option value="legExtension">Leg Extension</option>
                        <option value="legCurl">Leg Curl</option>
                        <option value="shoulderPress">Shoulder Press</option>
                        <option value="chestFly">Chest Fly</option>
                        <option value="backExtension">Back Extension</option>
                        <option value="weightPlates">Weight Plates</option>
                        <option value="treadmills">Treadmills</option>
                        <option value="spinBikes">Spin Bikes</option>
                        <option value="pullupBar">Pull-Up Bar</option>
                        <option value="dipBars">Dip Bars</option>
                    </select>
                </div>
                <div className="flex flex-wrap flex-col justify-center w-full  items-center space-x-4 mb-4">
                    <textarea
                        id="notes"
                        className="w-[500px] p-2 border border-gray-300 rounded-md bg-[#e6e8ea] text-Navy mt-10 mb-10 dark:bg-NavyB"
                        rows="4"
                        placeholder="Add notes..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-Yellow text-Navy  font-semibold border border-white px-4 py-2 rounded-2xl hover:bg-YellowB transition duration-200 w-[150px]"
                        disabled={loading}
                    >
                        {loading ? 'Logging Workout...' : 'Log Workout'}
                    </button>
                </div>
            </form>

            <p className="text-sm italic  text-center font-thin mt-10 mb-10 text-white dark:text-Yellow">
                “The only bad workout is the one that didn’t happen.”
            </p>
        </CenteredContent>
    )
}

export default WorkoutLog
