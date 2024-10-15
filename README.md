# PJ's Fitbit App - ALX Frontend Capstone project

This Fitness Tracker Application allows users to log workouts and track their fitness progress over time. It integrates with the WGER API to fetch exercises and provides users with metrics such as total weight lifted, average reps per set, and total workouts completed. The app is built with React + Vite and styled using Tailwind CSS.

Table of Contents
Features
Installation
Usage
Technologies
API Integration
Screenshots
Future Enhancements

# Features
Workout Logging: Users can log details of their workouts including exercise name, sets, reps, and weight lifted.
Random Exercise Suggestions: Pulls random exercises from the WGER API to suggest workouts to users.
Progress Tracking: Tracks total weight lifted, average reps per set, and total workouts over time.
Visual Charts: Displays user progress using charts and graphs, powered by Recharts.
Responsive UI: Styled with Tailwind CSS to ensure the app looks great on all devices.
user authentication to ensure security of your data.
Dark mode, for days you  need less brightness.

# Installation
To run this project locally, follow these steps:

Prerequisites:
Make sure you have Node.js and npm installed.
Clone the Repository:
bash
Copy code
git clone https://github.com/your-username/fitness-tracker.git
cd fitness-tracker
Install Dependencies:
bash
Copy code
npm install
Set Up Environment Variables:
Create a .env file in the root of your project and add the following line:

bash
Copy code
VITE_BASE_API_URL=https://wger.de/api/v2/
Run the Application:
bash
Copy code
npm start

# Usage
Workout Logging
Go to the Log Workout page to enter workout details like sets, reps, and weight.
You can view previously logged workouts in the Stats page.

Random Exercise Suggestions
Navigate to the Workout guide Page.
Input your targeted area and click search button to pull random exercises from the WGER API and view their details.

Visualizing Progress
Go to the Stats Page to view charts showing total weight lifted, average reps, and the total number of workouts completed over time.

History
Go to the history page to view a detailed log of all your previous workouts.

Technologies
React: Frontend library for building the user interface.
Tailwind CSS: Utility-first CSS framework for responsive and clean styling.
Recharts: Library for building responsive and customizable charts.
WGER API: Provides exercise data used in the application.
LocalStorage: Stores user workout logs and progress metrics persistently in the browser.
API Integration
The app integrates with the WGER API to fetch exercise data. Here’s a simple example of how the exercises are fetched:

# Future Enhancements
Nutrition page to help track those important calorie intakes.
Authentication: Add user authentication to allow multiple users to log and track their workouts.
Exercise Filters: Add filters to view exercises by muscle group, equipment, or difficulty level.
Backend Integration: Integrate a backend to store workout logs in a database for persistent and multi-device access.
Contributing
If you’d like to contribute to this project, feel free to submit a pull request. Any improvements and suggestions are welcome!

License
This project is licensed under the MIT License. See the LICENSE file for more information.

Acknowledgments
WGER API for providing the exercise data.
Recharts for the beautiful charting library.
Tailwind CSS for the styling framework.
