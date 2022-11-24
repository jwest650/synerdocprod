import { Input, Select } from '@chakra-ui/react'
import React from 'react'

const GovernmentReferralForm = () => {
  return (
    <div>
      <div className='my-2 flex '>
        <label htmlFor='#' className='mr-3 w-[20%] text-right font-semibold'>
          <span className='font-bold text-secondary-color'>*</span>
          Referral Company:{' '}
        </label>
        <div className='w-[70%]'>
          <Input placeholder='small size' size='xs' />
        </div>
      </div>
      <div className='my-2 flex '>
        <label htmlFor='#' className='mr-3 w-[20%] text-right font-semibold'>
          Email:{' '}
        </label>
        <div className='w-[70%]'>
          <Input placeholder='small size' size='xs' />
        </div>
      </div>

      <div className='my-2 flex'>
        <label htmlFor='#' className='mr-3 w-[20%] text-right font-semibold'>
          Sales Rep:{' '}
        </label>
        <div className='w-[70%]'>
          <Select size='xs'>
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
      <div className='my-2 flex '>
        <label htmlFor='#' className='mr-3 w-[20%] text-right font-semibold'>
          <span className='font-bold text-secondary-color'>*</span>
          Start Date:{' '}
        </label>
        <div className='w-[70%]'>
          <Input placeholder='Select Date and Time' size='xs' type='date' />
        </div>
      </div>
      <div className='my-2 flex '>
        <label htmlFor='#' className='mr-3 w-[20%] text-right font-semibold'>
          End Date:{' '}
        </label>
        <div className='w-[70%]'>
          <Input placeholder='Select Date and Time' size='xs' type='date' />
        </div>
      </div>
    </div>
  )
}

export default GovernmentReferralForm
