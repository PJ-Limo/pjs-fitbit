import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const LinkItem = ({ href, icon: Icon, text, isSidebarOpen }) => {
    const location = useLocation()
    const isActive = href === location.pathname
    return (
        <li>
            <NavLink
                className={
                    `flex gap-4 items-center p-2 text-Navy dark:text-white hover:bg-Navy hover:text-Yellow dark:hover:bg-Yellow
                    ${isActive
                        ? 'text-Yellow bg-Navy'
                        : ''}`
                }
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
