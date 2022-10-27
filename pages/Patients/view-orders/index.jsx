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

const ViewOrders = () => {
  return (
    <div className='ar w-full bg-[#F6F8FC] p-5 text-gray-600'>
      <div className='space-y-5'>
        <section className='flex items-center justify-between space-x-5'>
          <div className='flex items-center space-x-5'>
            <h1 className='text-2xl font-bold capitalize text-black dark:text-white'>
              Orders
            </h1>
            <button className='mx-3 ml-2  rounded border px-2'>Send</button>
            <Checkbox>Consolidate Physician Intern orders</Checkbox>
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
                  <Th color={'#selecto'}>Print</Th>
                  <Th color={'#selecto'}>Fax</Th>
                  <Th color={'#selecto'}>Email</Th>
                  <Th color={'#selecto'}>Patient Name</Th>
                  <Th color={'#selecto'}>Team</Th>
                  <Th color={'#selecto'}>Types</Th>
                  <Th color={'#selecto'}>Cert From</Th>
                  <Th color={'#selecto'}>To</Th>
                  <Th color={'#selecto'}>Associate</Th>
                  <Th color={'#selecto'}>Status</Th>
                  <Th color={'#selecto'}>Physician</Th>
                  <Th color={'#selecto'}>Sent</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td>
                    <Select size='xs'>
                      <option value='option1' className='text-gray-800'>
                        All
                      </option>
                      <option value='option1' className='text-gray-800'>
                        All
                      </option>
                      <option value='option1' className='text-gray-800'>
                        All
                      </option>
                    </Select>
                  </Td>
                  <Td>
                    <Select size='xs'>
                      <option value='option1' className='text-gray-800'>
                        All
                      </option>
                      <option value='option1' className='text-gray-800'>
                        All
                      </option>
                      <option value='option1' className='text-gray-800'>
                        All
                      </option>
                    </Select>
                  </Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td>
                    <Select size='xs'>
                      <option value='option1' className='text-gray-800'>
                        All
                      </option>
                      <option value='option1' className='text-gray-800'>
                        All
                      </option>
                      <option value='option1' className='text-gray-800'>
                        All
                      </option>
                    </Select>
                  </Td>
                  <Td></Td>
                  <Td>
                    <Select size='xs'>
                      <option value='option1' className='text-gray-800'>
                        All
                      </option>
                      <option value='option1' className='text-gray-800'>
                        All
                      </option>
                      <option value='option1' className='text-gray-800'>
                        All
                      </option>
                    </Select>
                  </Td>
                  <Td></Td>
                </Tr>
                <Tr className='dark:text-white'>
                  <Td>
                    <Checkbox></Checkbox>
                  </Td>
                  <Td>
                    <Checkbox></Checkbox>
                  </Td>
                  <Td>
                    <Checkbox></Checkbox>
                  </Td>
                  <Td>Amess Alicia</Td>
                  <Td>Accra</Td>
                  <Td>Wound care</Td>
                  <Td>23/4/2022 8:43 AM</Td>
                  <Td>23/4/2022 8:43 AM</Td>
                  <Td>Printed and Mailed</Td>
                  <Td>Dickson Janet</Td>
                  <Td>Dickson Janet</Td>
                  <Td>23/4/2022 8:43 AM</Td>
                </Tr>
                <Tr className='dark:text-white'>
                  <Td>
                    <Checkbox></Checkbox>
                  </Td>
                  <Td>
                    <Checkbox></Checkbox>
                  </Td>
                  <Td>
                    <Checkbox></Checkbox>
                  </Td>
                  <Td>Amess Alicia</Td>
                  <Td>Accra</Td>
                  <Td>Wound care</Td>
                  <Td>23/4/2022 8:43 AM</Td>
                  <Td>23/4/2022 8:43 AM</Td>
                  <Td>Printed and Mailed</Td>
                  <Td>Dickson Janet</Td>
                  <Td>Dickson Janet</Td>
                  <Td>23/4/2022 8:43 AM</Td>
                </Tr>
                <Tr className='dark:text-white'>
                  <Td>
                    <Checkbox></Checkbox>
                  </Td>
                  <Td>
                    <Checkbox></Checkbox>
                  </Td>
                  <Td>
                    <Checkbox></Checkbox>
                  </Td>
                  <Td>Amess Alicia</Td>
                  <Td>Accra</Td>
                  <Td>Wound care</Td>
                  <Td>23/4/2022 8:43 AM</Td>
                  <Td>23/4/2022 8:43 AM</Td>
                  <Td>Printed and Mailed</Td>
                  <Td>Dickson Janet</Td>
                  <Td>Dickson Janet</Td>
                  <Td>23/4/2022 8:43 AM</Td>
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

export default ViewOrders;
