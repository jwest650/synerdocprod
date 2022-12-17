import React from 'react'

export const CustomToolTipLabel = ({ children, text }) => {
  return (
    <div className='text-xs'>
      <div>
        {/* <span>
          <SiVercel />
        </span> */}
        {text && <p className='rounded bg-white p-1'>{text}</p>}

        {children}
      </div>
    </div>
  )
}

export default CustomToolTipLabel
