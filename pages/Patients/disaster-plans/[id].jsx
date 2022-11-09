import React from 'react'

const DisasterPlanDetails = () => {
  return (
    <div className='w-full'>
      <h1 className='text-2xl font-bold capitalize text-black dark:text-white'>
        Disaster Plans
      </h1>
      <div className='flex'>
        <div>
          <p className='px-2 py-2 text-secondary-color underline'>Edit</p>
        </div>

        <div className='flex w-[75%]'>
          <div className='w-[25%] border-r-2'>
            <p className=' bg-primary-color px-2 py-1 text-white'>
              Disaster Plan
            </p>

            <div>
              <p>Patients Does Not Need Assistance</p>
            </div>
          </div>
          <div className='w-[75%]'>
            <p className=' bg-primary-color px-2 py-1 text-white'>
              Plan Details
            </p>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisasterPlanDetails
