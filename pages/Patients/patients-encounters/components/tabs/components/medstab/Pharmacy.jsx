import React, { useState } from 'react'
import { GrNotes } from 'react-icons/gr'

const Pharmacy = ({}) => {
  const [showActions, setShowActions] = useState(false)

  return (
    <div className='  relative '>
      {showActions ? (
        <div
          className='absolute right-[20px] top-[-15px] z-10  min-w-[200px] border bg-secondary-blue p-2'
          onMouseLeave={() => setShowActions(false)}
          onMouseOver={() => setShowActions(true)}
        >
          <p>Homecare Pharmacy</p>
        </div>
      ) : null}

      <div
        onMouseOver={() => setShowActions(true)}
        onMouseLeave={() => setShowActions(false)}
      >
        <GrNotes />
      </div>
    </div>
  )
}

export default Pharmacy
