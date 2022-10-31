import { Input, Select } from '@chakra-ui/react';
import React from 'react';

const FacilityForm = () => {
  return (
    <div>
      <div className='my-2 flex '>
        <label htmlFor='#' className='w-[20%]'>
          Facility Name:{' '}
        </label>
        <div className='w-[70%]'>
          <Input placeholder='small size' size='sm' />
        </div>
      </div>

      <div className='my-2 flex'>
        <label htmlFor='#' className='w-[20%]'>
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
        <label htmlFor='#' className='w-[20%]'>
          Email:{' '}
        </label>
        <div className='w-[70%]'>
          <Input placeholder='small size' size='sm' />
        </div>
      </div>

      <div className='my-2 flex'>
        <label htmlFor='#' className='w-[20%]'>
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
        <label htmlFor='#' className='w-[20%]'>
          Start Date:{' '}
        </label>
        <div className='w-[70%]'>
          <Input placeholder='small size' size='sm' type='date' />
        </div>
      </div>

      <div className='my-2 flex '>
        <label htmlFor='#' className='w-[20%]'>
          End Date:{' '}
        </label>
        <div className='w-[70%]'>
          <Input placeholder='small size' size='sm' type='date' />
        </div>
      </div>
    </div>
  );
};

export default FacilityForm;
