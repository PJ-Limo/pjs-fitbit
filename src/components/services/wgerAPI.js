import axios from "axios";

const WGER_API_URL = "https://wger.de/api/v2";

export const fetchExercisesByTargetArea = (exercise) => {
    return axios.get(`${WGER_API_URL}/${exercise}`);
};