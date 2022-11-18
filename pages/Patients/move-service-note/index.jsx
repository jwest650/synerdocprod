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
          <Select size='xs' minWidth={400}>
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
          <Select size='xs' minWidth={400}>
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
          <Select size='xs' minWidth={400}>
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
            <thead className='border-b bg-primary-color text-[18px] tracking-wider text-white'>
              <tr className='border border-primary-color '>
                <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'></th>
                <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                  Associate Name
                </th>
                <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                  Service
                </th>
                <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                  Service Date
                </th>
                <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                  Time In
                </th>
                <th className=' border-l border-gray-400 py-1 px-2  text-left text-xs'>
                  Time Out
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className='dark:text-white'></tr>
              {data.map((data, i) => (
                <tr
                  key={i}
                  className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
                >
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    <Checkbox defaultChecked></Checkbox>
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    Amess Alicia
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    Wound care
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    23/4/2022 8:43 AM
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    23/4/2022 8:43 AM
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    23/4/2022 8:43 AM
                  </td>
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
