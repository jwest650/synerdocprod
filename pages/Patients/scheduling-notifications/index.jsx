import React, { useState } from 'react';
import { ar } from '../../../assets/ardata';
import { Input, Checkbox } from '@chakra-ui/react';
import { BsFillCalendarDateFill } from 'react-icons/bs';

const SchedulingNotifications = () => {
  let data = [1, 1, 1, 1];
  return (
    <div className='w-full '>
      <div className='space-y-5'>
        <section className='flex items-center justify-between space-x-5'>
          <div className='flex items-center space-x-5'>
            <h1 className='text-2xl font-bold capitalize text-black dark:text-white'>
              Scheduling Notifications
            </h1>
          </div>

          <div className='flex items-center space-x-5'>
            <div className='my-2 flex '>
              <div>
                <Input placeholder='small size' size='xs' />
              </div>
              <button className='ml-2 rounded  border px-2'>Search</button>
            </div>
          </div>
        </section>
        <hr />
        <section>
          <div>
            <table className=' min-w-full overflow-auto'>
              <thead className='border-b bg-[#32164A] text-[18px] tracking-wider text-white'>
                <tr>
                  <th color={'#selecto'}>
                    <Checkbox></Checkbox>
                  </th>
                  <th className=' border-gray-100  pl-2 text-left'>Dates</th>
                  <th className=' border-gray-100  pl-2 text-left'>Agency</th>
                  <th className=' border-gray-100  pl-2 text-left'>
                    Patient Name
                  </th>
                  <th className=' border-gray-100  pl-2 text-left'>
                    Change Reason
                  </th>
                  <th className=' border-gray-100  pl-2 text-left'>
                    Change Date
                  </th>
                  <th className=' border-gray-100  pl-2 text-left'>
                    Associate Name
                  </th>
                  <th className=' border-gray-100  pl-2 text-left'>
                    Associate Phone
                  </th>
                  <th className=' border-gray-100  pl-2 text-left'>
                    Associate Email/Mobile
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((data, i) => (
                  <tr
                    key={i}
                    className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
                  >
                    <td className='border border-gray-400'>
                      <Checkbox></Checkbox>
                    </td>
                    <td className='border border-gray-400'>
                      <BsFillCalendarDateFill />
                    </td>
                    <td className='border border-gray-400'>
                      Tampa Home Health
                    </td>
                    <td className='border border-gray-400'>Amess Alicia</td>
                    <td className='border border-gray-400'>new reason</td>
                    <td className='border border-gray-400'>
                      23/4/2022 8:43 AM
                    </td>
                    <td
                      className='border border-gray-400'
                      onClick={() => setOpenAddReferral(true)}
                    >
                      James Gordon
                    </td>
                    <td className='border border-gray-400'>233-445-565-666</td>
                    <td className='border border-gray-400'>
                      destiny@synerdoc.com
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='flex justify-end p-5'>
            <button className='rounded border  px-2'>Save</button>
            <button className='ml-3 rounded  border px-2'>Cancel</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SchedulingNotifications;
