import React from 'react'
import { FaMoon , FaSun } from 'react-icons/fa'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { MdSpaceDashboard } from 'react-icons/md'

const Header = ({ darkMode, toggleDarkMode, toggleSidebar }) => {
  return (
    <nav className='fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-Navy dark:border-gray-700'>
    <div className='px-3 py-3 lg:px-5 lg:pl-3'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center justify-center rtl:justify-end'>
                <button onClick={toggleSidebar} className='inline-flex items-center p-2 text-sm text-white rounded-lg hover: bg-Yellow focus:outline-none focus:ring-2 focus:ring-offset-white dark:text-Navy dark:hover:bg-Yellow dark:focus:ring-offset-white' 
                >
                    <HiOutlineMenuAlt2  className='text-2xl text-Navy'/>
                </button>
                <a href="#" className='flex ms-2 md:me-24'>
                    <MdSpaceDashboard className='h-8 me-3 text-xl text-Navy dark:text-Yellow'/>
                    <span className='self-center text-xl font-semibold sm:text-xl whitespace-nowrap dark:text-Yellow'>PJ's Fitbit</span>
                </a>
            </div>

            <button className='dark:bg-Navy dark:text-Yellow rounded-full p-2' onClick={toggleDarkMode}>{darkMode ? <FaSun /> : <FaMoon />}</button>
        </div>
    </div>
    </nav>
  )
}

export default Header
