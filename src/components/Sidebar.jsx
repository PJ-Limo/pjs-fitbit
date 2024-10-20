import React from 'react'
import { links } from '../constants'
import LinkItem from './LinkItem'



const Sidebar = ({ isSidebarOpen }) => {
  return (
    <ul className={`fixed h-full bg-slate-100 border-r-2 border-t-2 border-gray-200 dark:bg-NavyB dark:border-Yellow flex flex-col text-lg gap-4 p-4 top-16`}>
          {
            links.map((link, index) => (
              <LinkItem isSidebarOpen={isSidebarOpen} key={index} {...link}/>
            ))
          }
    </ul> 
  )
}

export default Sidebar
