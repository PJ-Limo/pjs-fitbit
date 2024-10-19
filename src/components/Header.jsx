import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'

const Header = ({ darkMode, toggleDarkMode, toggleSidebar }) => {
    return (
        <nav className="fixed px-3 py-3 lg:px-5 lg:pl-3 w-full bg-slate-100 border-b border-gray-200 dark:bg-Navy dark:border-gray-700">
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-center rtl:justify-end">
                    <button
                        onClick={toggleSidebar}
                        className="inline-flex items-center p-2 text-sm text-white rounded-lg dark:text-Navy dark:hover:bg-Yellow dark:focus:ring-offset-white"
                    >
                        <HiOutlineMenuAlt2 className="text-2xl text-Navy" />
                    </button>
                    <span className="self-center text-xl font-extrabold sm:text-xl whitespace-nowrap dark:text-Yellow">
                        PJ's Fitbit
                    </span>
                </div>

                <button className="dark:bg-Navy dark:text-Yellow rounded-full p-2" onClick={toggleDarkMode}>
                    {darkMode ? <FaSun /> : <FaMoon />}
                </button>
            </div>
        </nav>
    )
}

export default Header
