import React, { useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Input,
  Button,
  Checkbox,
  Select,
} from '@chakra-ui/react';
import { BsFillCalendarDateFill } from 'react-icons/bs';

const MoveServiceNote = () => {
  return (
    <div className='ar w-full bg-[#F6F8FC] p-5 text-gray-600'>
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
        <TableContainer>
          <Table variant='striped' colorScheme='gray' size='sm'>
            <Thead backgroundColor={'#432366'} color={'#fff'}>
              <Tr>
                <Th color={'#selecto'}></Th>
                <Th color={'#selecto'}>Associate Name</Th>
                <Th color={'#selecto'}>Service</Th>
                <Th color={'#selecto'}>Service Date</Th>
                <Th color={'#selecto'}>Time In</Th>
                <Th color={'#selecto'}>Time Out</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr className='dark:text-white'>
                <Td>
                  <Checkbox defaultChecked></Checkbox>
                </Td>
                <Td>Amess Alicia</Td>
                <Td>Wound care</Td>
                <Td>23/4/2022 8:43 AM</Td>
                <Td>23/4/2022 8:43 AM</Td>
                <Td>23/4/2022 8:43 AM</Td>
              </Tr>
              <Tr className='dark:text-white'>
                <Td>
                  <Checkbox></Checkbox>
                </Td>
                <Td>Amess Alicia</Td>
                <Td>Wound care</Td>
                <Td>23/4/2022 8:43 AM</Td>
                <Td>23/4/2022 8:43 AM</Td>
                <Td>23/4/2022 8:43 AM</Td>
              </Tr>
              <Tr className='dark:text-white'>
                <Td>
                  <Checkbox></Checkbox>
                </Td>
                <Td>Amess Alicia</Td>
                <Td>Wound care</Td>
                <Td>23/4/2022 8:43 AM</Td>
                <Td>23/4/2022 8:43 AM</Td>
                <Td>23/4/2022 8:43 AM</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

        <div className='flex justify-end py-5'>
          <button className='rounded border  px-2'>Move</button>
        </div>
      </section>
    </div>
  );
};

export default MoveServiceNote;
