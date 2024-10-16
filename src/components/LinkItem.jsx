import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const LinkItem = ({ href, icon: Icon, text, isSidebarOpen }) => {
    const location = useLocation()
    const isActive = href === location.pathname
    return (
        <li>
            <NavLink
                className={`flex gap-4 items-center p-2 text-Navy hover:bg-Navy hover:text-Yellow dark:hover:bg-YellowB rounded-lg
                    ${isActive ? 'text-Yellow bg-Navy dark:text-Navy dark:bg-Yellow' : 'dark:text-white'}`}
                to={href}
                end
            >
                <Icon />
                <span className={`${isSidebarOpen ? '' : 'hidden'}`}>{text}</span>
            </NavLink>
        </li>
    )
}

export default LinkItem
