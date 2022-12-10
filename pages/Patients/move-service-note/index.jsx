import React, { useState } from 'react'
import {
  Table,
  thead,
  Tbody,
  tr,
  th,
  td,
  TableContainer,
  Input,
  Button,
  Checkbox,
  Select,
} from '@chakra-ui/react'
import { BsFillCalendarDateFill } from 'react-icons/bs'

const MoveServiceNote = () => {
  let data = [1, 1, 1, 1]

  return (
    <div className='verdana13 w-full '>
      <h1 className='verdana18  font-bold capitalize text-black dark:text-white'>
        Move Service Note
      </h1>
      <hr />

      <div className='flex py-3'>
        <div className='w-[150px]'>
          <h1 className='mr-5'>
            <span className='font-bold text-secondary-color'>*</span> Patient:{' '}
          </h1>
        </div>
        <div>
          <Select className='input-primary' size='xs' minWidth={400}>
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
      <div className='flex py-3'>
        <div className='w-[150px]'>
          <h1 className='mr-5'>
            <span className='font-bold text-secondary-color'>*</span> Service:{' '}
          </h1>
        </div>
        <div>
          <Select className='input-primary' size='xs' minWidth={400}>
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
      <div className='flex py-3'>
        <div className='w-[150px]'>
          <h1 className='mr-5'>
            <span className='font-bold text-secondary-color'>*</span> Move
            Patient To:{' '}
          </h1>
        </div>
        <div>
          <Select className='input-primary' size='xs' minWidth={400}>
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
      <div>
        <Checkbox>Move To Same Patient</Checkbox>
      </div>

      <section>
        <div>
          <table className=' min-w-full overflow-auto text-xs'>
            <thead className='thead-primary'>
              <tr>
                <th className=' th-first'></th>
                <th className=' th-middle'>Associate Name</th>
                <th className=' th-middle'>Service</th>
                <th className=' th-middle'>Service Date</th>
                <th className=' th-middle'>Time In</th>
                <th className=' th-last'>Time Out</th>
              </tr>
            </thead>
            <tbody>
              <tr className='bg-light-blue'>
                <td className='td-primary'></td>
                <td className='td-primary'></td>
                <td className='td-primary'></td>
                <td className='td-primary'></td>
                <td className='td-primary'></td>
                <td className='td-primary'></td>
              </tr>
              <tr className='dark:text-white'></tr>
              {data.map((data, i) => (
                <tr
                  key={i}
                  className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
                >
                  <td className=' td-primary'>
                    <Checkbox defaultChecked></Checkbox>
                  </td>
                  <td className=' td-primary'>Amess Alicia</td>
                  <td className=' td-primary'>Wound care</td>
                  <td className=' td-primary'>23/4/2022 8:43 AM</td>
                  <td className=' td-primary'>23/4/2022 8:43 AM</td>
                  <td className=' td-primary'>23/4/2022 8:43 AM</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className='flex items-center bg-gray-200 p-1 text-sm'>
            show page 1 of 1, rows 1 to 3 of 3
          </p>
        </div>

        <div className='flex justify-end py-5'>
          <button className='rounded border  bg-secondary-color px-2 font-medium text-white '>
            Move
          </button>
        </div>
      </section>
    </div>
  )
}

export default MoveServiceNote
