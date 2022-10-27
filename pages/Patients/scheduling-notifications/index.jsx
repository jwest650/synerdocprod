import React, { useState } from 'react';
import { ar } from '../../../assets/ardata';
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
} from '@chakra-ui/react';
import { BsFillCalendarDateFill } from 'react-icons/bs';

const SchedulingNotifications = () => {
  return (
    <div className='ar w-full bg-[#F6F8FC] p-5 text-gray-600'>
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
          <TableContainer>
            <Table variant='striped' colorScheme='gray' size='sm'>
              <Thead backgroundColor={'#432366'} color={'#fff'}>
                <Tr>
                  <Th color={'#selecto'}>
                    <Checkbox></Checkbox>
                  </Th>
                  <Th color={'#selecto'}>Dates</Th>
                  <Th color={'#selecto'}>Agency</Th>
                  <Th color={'#selecto'}>Patient Name</Th>
                  <Th color={'#selecto'}>Change Reason</Th>
                  <Th color={'#selecto'}>Change Date</Th>
                  <Th color={'#selecto'}>Associate Name</Th>
                  <Th color={'#selecto'}>Associate Phone</Th>
                  <Th color={'#selecto'}>Associate Email/Mobile</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr className='dark:text-white'>
                  <Td>
                    <Checkbox></Checkbox>
                  </Td>
                  <Td>
                    <BsFillCalendarDateFill />
                  </Td>
                  <Td>Tampa Home Health</Td>
                  <Td>Amess Alicia</Td>
                  <Td>new reason</Td>
                  <Td>23/4/2022 8:43 AM</Td>
                  <Td onClick={() => setOpenAddReferral(true)}>James Gordon</Td>
                  <Td>233-445-565-666</Td>
                  <Td>destiny@synerdoc.com</Td>
                </Tr>
                <Tr className='dark:text-white'>
                  <Td>
                    <Checkbox></Checkbox>
                  </Td>
                  <Td>
                    <BsFillCalendarDateFill />
                  </Td>
                  <Td>Tampa Home Health</Td>
                  <Td>Amess Alicia</Td>
                  <Td>new reason</Td>
                  <Td>23/4/2022 8:43 AM</Td>
                  <Td onClick={() => setOpenAddReferral(true)}>James Gordon</Td>
                  <Td>233-445-565-666</Td>
                  <Td>destiny@synerdoc.com</Td>
                </Tr>
                <Tr className='dark:text-white'>
                  <Td>
                    <Checkbox defaultChecked></Checkbox>
                  </Td>
                  <Td>
                    <BsFillCalendarDateFill />
                  </Td>
                  <Td>Tampa Home Health</Td>
                  <Td>Amess Alicia</Td>
                  <Td>new reason</Td>
                  <Td>23/4/2022 8:43 AM</Td>
                  <Td onClick={() => setOpenAddReferral(true)}>James Gordon</Td>
                  <Td>233-445-565-666</Td>
                  <Td>destiny@synerdoc.com</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>

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
