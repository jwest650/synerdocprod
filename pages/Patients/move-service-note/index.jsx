import React, { useState } from 'react';
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
} from '@chakra-ui/react';
import { BsFillCalendarDateFill } from 'react-icons/bs';

const MoveServiceNote = () => {
  let data = [1, 1, 1, 1];

  return (
    <div className='w-full'>
      <h1 className='text-2xl font-bold capitalize text-black dark:text-white'>
        Move Service Note
      </h1>
      <hr />

      <div className='flex py-5'>
        <div className='w-[150px]'>
          <h1 className='mr-5'>* Patient: </h1>
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
      <div className='flex py-5'>
        <div className='w-[150px]'>
          <h1 className='mr-5'>* Service: </h1>
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
      <div className='flex py-5'>
        <div className='w-[150px]'>
          <h1 className='mr-5'>* Move Patient To: </h1>
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
          <table className=' min-w-full overflow-auto'>
            <thead className='border-b bg-[#32164A] text-[18px] tracking-wider text-white'>
              <tr>
                <th className=' border-gray-100  pl-2 text-left'></th>
                <th className=' border-gray-100  pl-2 text-left'>
                  Associate Name
                </th>
                <th className=' border-gray-100  pl-2 text-left'>Service</th>
                <th className=' border-gray-100  pl-2 text-left'>
                  Service Date
                </th>
                <th className=' border-gray-100  pl-2 text-left'>Time In</th>
                <th className=' border-gray-100  pl-2 text-left'>Time Out</th>
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
                  <td className='border border-gray-400'>
                    <Checkbox defaultChecked></Checkbox>
                  </td>
                  <td className='border border-gray-400'>Amess Alicia</td>
                  <td className='border border-gray-400'>Wound care</td>
                  <td className='border border-gray-400'>23/4/2022 8:43 AM</td>
                  <td className='border border-gray-400'>23/4/2022 8:43 AM</td>
                  <td className='border border-gray-400'>23/4/2022 8:43 AM</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className='flex justify-end py-5'>
          <button className='rounded border  px-2'>Move</button>
        </div>
      </section>
    </div>
  );
};

export default MoveServiceNote;
