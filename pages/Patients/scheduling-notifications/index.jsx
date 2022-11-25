import React, { useState } from 'react'
import { ar } from '../../../assets/ardata'
import { Input, Checkbox } from '@chakra-ui/react'
import { BsFillCalendarDateFill } from 'react-icons/bs'

const SchedulingNotifications = () => {
  let data = [1, 1, 1, 1]
  return (
    <div className='verdana13 w-full '>
      <div className='space-y-5'>
        <section className='flex items-center justify-between space-x-5'>
          <div className='flex items-center space-x-5'>
            <h1 className='verdana18  font-bold capitalize text-black dark:text-white'>
              Scheduling Notifications
            </h1>
          </div>

          <div className='flex items-center space-x-5'>
            <div className='my-2 flex '>
              <div>
                <Input placeholder='small size' size='xs' />
              </div>
              <button className='ml-2 rounded  border bg-secondary-color px-2 font-medium text-white'>
                Search
              </button>
            </div>
          </div>
        </section>
        <hr />
        <section>
          <div>
            <table className=' min-w-full overflow-auto'>
              <thead className='thead-primary'>
                <tr>
                  <th color={'#selecto'} className='th-first'>
                    <Checkbox></Checkbox>
                  </th>
                  <th className='th-middle'>Dates</th>
                  <th className='th-middle'>Agency</th>
                  <th className='th-middle'>Patient Name</th>
                  <th className='th-middle'>Change Reason</th>
                  <th className='th-middle'>Change Date</th>
                  <th className='th-middle'>Associate Name</th>
                  <th className='th-middle'>Associate Phone</th>
                  <th className='th-last'>Associate Email/Mobile</th>
                </tr>
              </thead>
              <tbody>
                {data.map((data, i) => (
                  <tr
                    key={i}
                    className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
                  >
                    <td className=' td-primary '>
                      <div className='flex justify-center'>
                        <Checkbox></Checkbox>
                      </div>
                    </td>
                    <td className=' td-primary'>
                      <div className='flex justify-center'>
                        <BsFillCalendarDateFill />
                      </div>
                    </td>
                    <td className=' td-primary'>Tampa Home Health</td>
                    <td className=' td-primary'>Amess Alicia</td>
                    <td className=' td-primary'>new reason</td>
                    <td className=' td-primary'>23/4/2022 8:43 AM</td>
                    <td
                      className=' td-primary'
                      onClick={() => setOpenAddReferral(true)}
                    >
                      James Gordon
                    </td>
                    <td className=' td-primary'>233-445-565-666</td>
                    <td className=' td-primary'>destiny@synerdoc.com</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='flex justify-end p-5'>
            <button className='rounded border  bg-secondary-color px-2 font-medium text-white'>
              Save
            </button>
            <button className='ml-3 rounded  border bg-secondary-color px-2 font-medium text-white'>
              Cancel
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default SchedulingNotifications
