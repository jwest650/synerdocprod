import { Input, Select } from '@chakra-ui/react';
import React from 'react';

const PhysicianForm = () => {
  return (
    <div>
      <div className='my-2 flex '>
        <label htmlFor='#' className='w-[20%]'>
          First Name:{' '}
        </label>
        <div className='w-[70%]'>
          <Input placeholder='small size' size='sm' />
        </div>
      </div>
      <div className='my-2 flex '>
        <label htmlFor='#' className='w-[20%]'>
          Middle initial:{' '}
        </label>
        <div className='w-[70%]'>
          <Input placeholder='small size' size='sm' />
        </div>
      </div>
      <div className='my-2 flex '>
        <label htmlFor='#' className='w-[20%]'>
          Last Name:{' '}
        </label>
        <div className='w-[70%]'>
          <Input placeholder='small size' size='sm' />
        </div>
      </div>
      <div className='my-2 flex '>
        <label htmlFor='#' className='w-[20%]'>
          Email:{' '}
        </label>
        <div className='w-[70%]'>
          <Input placeholder='small size' type={'email'} size='sm' />
        </div>
      </div>
      <div className='my-2 flex'>
        <label htmlFor='#' className='w-[20%]'>
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
        <label htmlFor='#' className='w-[20%]'>
          Start:{' '}
        </label>
        <div className='w-[70%]'>
          <Input placeholder='Select Date and Time' size='sm' type='date' />
        </div>
      </div>
      <div className='my-2 flex '>
        <label htmlFor='#' className='w-[20%]'>
          End Date:{' '}
        </label>
        <div className='w-[70%]'>
          <Input placeholder='Select Date and Time' size='sm' type='date' />
        </div>
      </div>
      <div className='my-2 flex '>
        <label htmlFor='#' className='w-[20%]'>
          Physician Group:{' '}
        </label>
        <div className='w-[70%]'>
          <Input placeholder='small size' size='sm' />
        </div>
      </div>
      <div className='my-2 flex'>
        <label htmlFor='#' className='w-[20%]'>
          Specialty:{' '}
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
      <div className='my-2 flex'>
        <label htmlFor='#' className='w-[20%]'>
          Title:{' '}
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
    </div>
  );
};

export default PhysicianForm;
