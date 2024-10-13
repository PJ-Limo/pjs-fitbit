import React from 'react'
import { links } from '../constants'
import LinkItem from './LinkItem'



const Sidebar = ({ isSidebarOpen }) => {
  return (
    <aside className={`fixed top-0 left-o z-40 w-64 h-screen pt-20 bg-white border-r-2 border-gray-200 sm:translate-x-0 dark:bg-NavyB dark:border-Yellow transition transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <div className='h-full px-3 pb-4 overflow-y-auto'>
        <ul className='space-y-2 font-OpenSans font-medium'>
          {
            links.map((link, index) => (
              <LinkItem key={index} {...link}/>
            ))
          }
        </ul>
      </div>
    </aside> 
  )
}

export default Sidebar
