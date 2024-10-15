import React, { useState } from 'react'

const WorkoutGuide = () => {
    const [targetArea, setTargetArea] = useState('')
    const [exercises, setExercises] = useState([])
    const [loading, setLoading] = useState(false)

    const targetAreaToCategoryId = {
        abs: 10,
        chest: 11,
        back: 12,
        shoulders: 13,
        arms: 14,
        legs: 15
    }

    const fetchExercisesByTargetArea = async (targetAreaId) => {
        setLoading(true)
        try {
            const apiUrl = `${import.meta.env.VITE_BASE_API_URL}/exercise/?language=2&category=${targetAreaId}`
            const response = await fetch(apiUrl)
            const data = await response.json()
            setExercises(data.results)
        } catch (error) {
            console.error('Error fetching exercises:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleInputChange = (e) => {
        setTargetArea(e.target.value)
    }

    const handleSearch = () => {
        const categoryId = targetAreaToCategoryId[targetArea.toLowerCase()]
        if (categoryId) {
            fetchExercisesByTargetArea(categoryId)
        } else {
            alert('Target area not recognized')
        }
    }

    return (
        <div className="dark:bg-Navy">
            <div className="flex flex-col items-center mb-4">
                <h1 className="text-3xl font-bold mt-24 mb-9 dark:text-Yellow">Workout Guide</h1>
                <input
                    type="text"
                    placeholder="Enter target area (e.g., abs, chest)"
                    value={targetArea}
                    onChange={handleInputChange}
                    className="border-b border-gray-300 focus:border-Yellow focus:outline-none placeholder-NavyC p-2 pl-8 w-80 mb-7 dark:border-b dark:border-white dark:bg-transparent dark:text-white"
                />
                <button
                    onClick={handleSearch}
                    className="bg-Navy text-Yellow rounded-lg px-4 py-2 hover:bg-NavyB transition"
                >
                    Search
                </button>
            </div>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className=" bg-[url('/src/assets/Fitness-image-3.png')] grid grid-cols-1 md:grid-cols-2 p-8 gap-4 w-full">
                    {exercises.length > 0 ? (
                        exercises.map((exercise) => (
                            <div
                                key={exercise.id}
                                className="exercise-card border border-gray-200 bg-Navy mix-blend-screen rounded-lg p-4 hover:shadow-lg transition"
                            >
                                <h3 className="text-xl text-Yellow font-bold">{exercise.name}</h3>
                                <p
                                    dangerouslySetInnerHTML={{ __html: exercise.description || '<i>No description available</i>' }}
                                    className="text-white font-light"
                                />
                                <ul className="list-disc pl-5 mt-2 text-NavyC">
                                    <li>Category: {exercise.category}</li>
                                    <li>Difficulty: {exercise.difficulty}</li>
                                </ul>
                            </div>
                        ))
                    ) : (
                        <div className="text-Yellow flex w-full text-center justify-center ">
                            <p>No exercises found</p>
                        </div>
                    )}
                </div>
            )}
            <p className="text-sm italic  text-center font-thin mt-10 mb-10 text-Navy dark:text-Yellow">
                “Unleash your potential—find a new challenge with every search!”
            </p>
        </div>
    )
}

export default WorkoutGuide
