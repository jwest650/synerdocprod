import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const Actions = ({}) => {
  const [showActions, setShowActions] = useState(false)

  return (
    <div className='  relative '>
      {showActions ? (
        <div
          className='absolute right-[20px] top-[-15px] z-10 min-h-[50px] min-w-[200px] border bg-secondary-blue p-2'
          onMouseLeave={() => setShowActions(false)}
          onMouseOver={() => setShowActions(true)}
        >
          <h1 className='my-[5px] text-orange-600 underline'>Side Effects</h1>
          <h1 className='my-[5px] text-orange-600 underline'>Pharmacology</h1>
          <h1 className='my-[5px] text-orange-600 underline'>
            Patient Education
          </h1>
          <h1 className='my-[5px] text-orange-600 underline'>
            Patient Education (Spanish)
          </h1>
          <h1 className='my-[5px] text-orange-600 underline'>
            Manage Hold History
          </h1>
          <h1 className='my-[5px] text-orange-600 underline'>Add/Edit NDC</h1>
        </div>
      ) : null}

      <div
        onMouseOver={() => setShowActions(true)}
        onMouseLeave={() => setShowActions(false)}
      >
        <IoIosArrowDown />
      </div>
    </div>
  )
}

export default Actions
