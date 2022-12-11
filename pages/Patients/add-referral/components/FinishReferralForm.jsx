import { Input, Select } from '@chakra-ui/react'
import { useState } from 'react'
import FindPhysicianModal from './FindPhysicianModal'

const FinishReferralForm = () => {
  const [openFindPhysician, setOpenFindPhysician] = useState(false)

  return (
    <div className='verdana13 '>
      <section>
        <h1 className='verdana18  font-bold capitalize text-black dark:text-white'>
          Finish Referral - Nick Jones
        </h1>
        <hr />
        <h1 className='verdana16 py-2  text-black dark:text-white'>
          Initial Physician Order
        </h1>
        <hr />

        <div>
          <div className='flex py-2'>
            <div className='w-[150px]'>
              <h1 className='mr-5'>Primary Physician: </h1>
            </div>
            <div className='flex items-center'>
              <div>
                <input className='input-primary' size={'xs'} type='text' />
              </div>
              <button
                onClick={() => setOpenFindPhysician(true)}
                className='ml-3 rounded border bg-secondary-color px-3  text-white'
              >
                Find Physician
              </button>
            </div>
          </div>

          <div className='flex py-2'>
            <div className='w-[150px]'>
              <h1 className='mr-5'>Physician Type: </h1>
            </div>
            <div>
              <Select className='input-primary' size='xs'>
                <option value='option1' className='text-gray-800'>
                  Option 1
                </option>
                <option value='option2' className='text-gray-800'>
                  Option 2
                </option>
                <option value='option3' className='text-gray-800'>
                  Option 3
                </option>
              </Select>
            </div>
          </div>
          <div className='flex py-2'>
            <div className='w-[150px]'>
              <h1 className='mr-5'>Requested start of care: </h1>
            </div>
            <div>
              <input className='input-primary' size={'xs'} type='date' />
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <FindPhysicianModal
        openFindPhysician={openFindPhysician}
        setOpenFindPhysician={setOpenFindPhysician}
      />
    </div>
  )
}

export default FinishReferralForm
