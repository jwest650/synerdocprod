import { Select } from '@chakra-ui/react'
import React from 'react'

const PhysicianForm = () => {
  return (
    <div>
      <div className='my-2 flex'>
        <p className='mr-3 w-[20%] text-right font-semibold'>
          <span className='font-bold text-secondary-color'>*</span>
          First Name:
        </p>

        <div className='w-[70%]'>
          <input className='input-primary' placeholder='small size' size='xs' />
        </div>
      </div>
      <div className='my-2 flex '>
        <label htmlFor='#' className='mr-3 w-[20%] text-right font-semibold'>
          Middle initial:{' '}
        </label>
        <div className='w-[70%]'>
          <input className='input-primary' placeholder='small size' size='xs' />
        </div>
      </div>
      <div className='my-2 flex '>
        <label htmlFor='#' className='mr-3 w-[20%] text-right font-semibold'>
          <span className='font-bold text-secondary-color'>*</span>
          Last Name:{' '}
        </label>
        <div className='w-[70%]'>
          <input className='input-primary' placeholder='small size' size='xs' />
        </div>
      </div>
      <div className='my-2 flex '>
        <label htmlFor='#' className='mr-3 w-[20%] text-right font-semibold'>
          Email:{' '}
        </label>
        <div className='w-[70%]'>
          <input
            className='input-primary'
            placeholder='small size'
            type={'email'}
            size='xs'
          />
        </div>
      </div>
      <div className='my-2 flex'>
        <label htmlFor='#' className='mr-3 w-[20%] text-right font-semibold'>
          Sales Rep:{' '}
        </label>
        <div className='w-[70%]'>
          <Select size='xs' className='input-primary'>
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
          <input
            className='input-primary'
            placeholder='Select Date and Time'
            size='xs'
            type='date'
          />
        </div>
      </div>
      <div className='my-2 flex '>
        <label htmlFor='#' className='mr-3 w-[20%] text-right font-semibold'>
          End Date:{' '}
        </label>
        <div className='w-[70%]'>
          <input
            className='input-primary'
            placeholder='Select Date and Time'
            size='xs'
            type='date'
          />
        </div>
      </div>
      <div className='my-2 flex '>
        <label htmlFor='#' className='mr-3 w-[20%] text-right font-semibold'>
          Physician Group:{' '}
        </label>
        <div className='w-[70%]'>
          <input className='input-primary' placeholder='small size' size='xs' />
        </div>
      </div>
      <div className='my-2 flex'>
        <label htmlFor='#' className='mr-3 w-[20%] text-right font-semibold'>
          Specialty:{' '}
        </label>
        <div className='w-[70%]'>
          <Select size='xs' className='input-primary'>
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
      <div className='my-2 flex'>
        <label htmlFor='#' className='mr-3 w-[20%] text-right font-semibold'>
          Title:{' '}
        </label>
        <div className='w-[70%]'>
          <Select size='xs' className='input-primary'>
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
    </div>
  )
}

export default PhysicianForm
