import {
  IoIosLogIn,
  IoIosLogOut,
} from "react-icons/io";
import {
  FaChartBar,
  FaHistory,
} from "react-icons/fa";
import { PiNotePencilBold, PiBowlFood } from "react-icons/pi";
import { GiWeightLiftingUp } from "react-icons/gi";

export const links = [
  {
    href: "/Home",
    icon: PiNotePencilBold,
    text: "Home",
  },
  {
    href: "/LogWorkout",
    icon: PiNotePencilBold,
    text: "Log Workout",
  },
  {
    href: "/History",
    icon: FaHistory,
    text: "History",
    badge: {
      text: "OpenSans",
      color: "bg-gray-100 text-gray-800",
      darkColor: "dark:bg-gray-700 dark:text-gray-300",
    },
  },
  {
    href: "/Stats",
    icon: FaChartBar,
    text: "Stats",
    badge: {
      text: "OpenSans",
      color: "bg-blue-100 text-blue-800",
      darkColor: "dark:bg-bl-900 dark:text-blue-300",
    },
  },
  {
    href: "/WorkoutGuide",
    icon: GiWeightLiftingUp,
    text: "Workout guide",
  },
  {
    href: "Nutrition",
    icon: PiBowlFood,
    text: "Nutrition",
  },
  {
    href: "#",
    icon: IoIosLogIn,
    text: "Sign In",
  },
  {
    href: "#",
    icon: IoIosLogOut,
    text: "Sign Up",
  },
];
