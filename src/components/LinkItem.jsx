import React from 'react'

const LinkItem = ({href, icon: Icon, text, badge}) => {
  return (
    <li>
      <a href={href} className='flex items-center p-2 text-Nav rounded-lg dark:text-white hover:bg-navy hover:text-Yellow dark:hover:bg-Yellow '>
        <Icon className='mr-2'/>
        <span className='flex-1 me-3'>{text}</span>
      </a>
    </li>
  )
}

export default LinkItem
