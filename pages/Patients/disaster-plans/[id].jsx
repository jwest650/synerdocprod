import React from 'react'
import { useState } from 'react'
import EditDisasterPlan from './components/EditDisasterPlan'

const DisasterPlanDetails = () => {
  const [openEditDisasterPlan, setOpenEditDisasterPlan] = useState(false)
  return (
    <div className='verdana13 w-full '>
      <h1 className='verdana18  font-bold capitalize text-black dark:text-white'>
        Disaster Plans
      </h1>
      <div className='flex'>
        <div>
          <p
            className='cursor-pointer px-2 py-2 text-secondary-color underline'
            onClick={() => setOpenEditDisasterPlan(true)}
          >
            Edit
          </p>
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

      {/* EditDisasterPlan Modal */}
      <EditDisasterPlan
        openEditDisasterPlan={openEditDisasterPlan}
        setOpenEditDisasterPlan={setOpenEditDisasterPlan}
      />
    </div>
  )
}

export default DisasterPlanDetails
