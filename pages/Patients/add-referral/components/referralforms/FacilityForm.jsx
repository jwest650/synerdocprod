import { Input, Select } from '@chakra-ui/react'
import React from 'react'

const FacilityForm = () => {
  return (
    <div>
      <div className='my-2 flex '>
        <label htmlFor='#' className='mr-3 w-[20%] text-right font-semibold'>
          <span className='font-bold text-secondary-color'>*</span>
          Facility Name:{' '}
        </label>
        <div className='w-[70%]'>
          <Input placeholder='small size' size='xs' />
        </div>
      </div>

      <div className='my-2 flex'>
        <label htmlFor='#' className='mr-3 w-[20%] text-right font-semibold'>
          <span className='font-bold text-secondary-color'>*</span>
          Facility Type:{' '}
        </label>
        <div className='w-[70%]'>
          <Select size='xs' onChange={(e) => setReferralType(e.target.value)}>
            <option value='physician' className='text-gray-800'>
              physician
            </option>
            <option value='facility' className='text-gray-800'>
              facility
            </option>
            <option value='self-referral' className='text-gray-800'>
              self referral
            </option>
          </Select>
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
          <Select size='xs' onChange={(e) => setReferralType(e.target.value)}>
            <option value='physician' className='text-gray-800'>
              physician
            </option>
            <option value='facility' className='text-gray-800'>
              facility
            </option>
            <option value='self-referral' className='text-gray-800'>
              self referral
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
          <Input placeholder='small size' size='xs' type='date' />
        </div>
      </div>

      <div className='my-2 flex '>
        <label htmlFor='#' className='mr-3 w-[20%] text-right font-semibold'>
          End Date:{' '}
        </label>
        <div className='w-[70%]'>
          <Input placeholder='small size' size='xs' type='date' />
        </div>
      </div>
    </div>
  )
}

export default FacilityForm
