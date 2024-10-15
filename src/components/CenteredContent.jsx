import React from 'react'

const CenteredContent = (props) => {
    const classes = 'w-full h-full flex flex-col justify-center items-center bg-gray-100 dark:bg-Navy p-2' + ' ' + props.className; 
  return (
    <div className={classes}>
      {props.children}
    </div>
  )
}

export default CenteredContent
