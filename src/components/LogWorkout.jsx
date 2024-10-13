//I'm having a chellenge in fetching workout data from the API while also fetching logged workout from the local storage
// How do I display both of these simultanously??? TODO



import { useState } from "react";

const WorkoutLog = ({ addWorkout }) => {
  const [workout, setWorkout] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [equipment, setEquipment] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const log = {
      workout,
      sets,
      reps,
      weight,
      equipment,
      notes,
      date: new Date().toLocaleDateString(),
    };

    addWorkout(log); // Add the new workout via the prop function

    // Clear form fields
    setWorkout("");
    setSets("");
    setReps("");
    setWeight("");
    setEquipment("");
    setNotes("");
    alert("Workout Logged Successfully!");
    setLoading(false);
  };

  return (
    <div className="my-8 p-6 bg-[url('/src/assets/Fitness-image-1.png')] bg-cover bg-center flex-col justify-center items-center rounded-lg">
      <h1 className="text-5xl font-extrabold mb-4 text-center text-white mt-14">Welcome!!</h1>
      <p className="text-lg font-thin mb-4 text-center text-white">Track your progress, crush your goals, and unlock a fitter you-one workout at a time!</p>
      <h2 className="text-2xl font-bold mb-6 text-center text-Yellow">Log latest Workout</h2>

      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">

        <div className="flex flex-wrap justify-center w-full  items-center space-x-4 mb-4">

          <select 
            id="workout"
            value={workout}
            onChange={(e) => setWorkout(e.target.value)}
            className="w-[150px] rounded-md shadow-none text-center text-[15px] bg-[#071629] text-white mix-blend-screen border border-[#FFBC00] p-2"
            required
          >
            <option value="">Select Workout</option>
            <option value="Biceps">Biceps</option>
            <option value="Triceps">Triceps</option>
            <option value="Leg day">Running</option>
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
            className="w-[150px] rounded-md shadow-none text-center text-[15px] bg-[#071629] text-white mix-blend-screen border border-[#FFBC00] p-2"
            required
          >
            <option value="">Add sets</option>
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
            className="w-[150px] rounded-md shadow-none text-center text-[15px] bg-[#071629] text-white mix-blend-screen border border-[#FFBC00] p-2"
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
            className="w-[150px] rounded-md shadow-none text-center text-[15px] bg-[#071629] text-white mix-blend-screen border border-[#FFBC00] p-2"
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
            className="w-[150px] rounded-md shadow-none text-center text-[15px] bg-[#071629] text-white mix-blend-screen border border-[#FFBC00] p-2"
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
          className="w-96 p-2 border border-gray-300 rounded-md bg-[#e6e8ea] text-Navy mt-10 mb-10" 
          rows="4" 
          placeholder="Add notes..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>

        <button
          type="submit"
          className="bg-Yellow text-Navy  font-semibold border border-white px-4 py-2 rounded-2xl hover:bg-Yellow transition duration-200"
          disabled={loading}
        >
          {loading ? "Logging Workout..." : "Log Workout"}
        </button>
        </div>
      </form>
    </div>
  );
};

export default WorkoutLog;