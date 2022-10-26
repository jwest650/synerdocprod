import Image from 'next/image';
import React, { useState } from 'react';
import { ar } from '../../assets/ardata';
import greenplus from '../../assets/images/greenplus.png';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { RiEdit2Line } from 'react-icons/ri';
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
} from '@chakra-ui/react';

const IncompleteReferrals = () => {
  return (
    <div className='ar p-5 text-gray-600'>
      <div className='space-y-5'>
        <section className='flex items-center justify-between space-x-5'>
          <div className='flex items-center space-x-5'>
            <h1 className='text-2xl font-bold capitalize text-black dark:text-white'>
              Incomplete Referrals
            </h1>
            <div
              className='flex cursor-pointer items-center space-x-2'
              onClick={() => setshow(!show)}
            >
              <h1 className='cursor-pointer rounded bg-gray-800 px-6 py-1 text-sm capitalize text-[#fff] dark:bg-white dark:text-gray-800'>
                + Create Referral Patient
              </h1>
            </div>
          </div>

          <div className='flex items-center space-x-5'>
            <div className='my-2 flex '>
              <div>
                <Input placeholder='small size' size='sm' width={300} />
              </div>
              <Button colorScheme='gray' size={'sm'} ml={'3'}>
                Save
              </Button>
            </div>
          </div>
        </section>
        <hr />
        <section>
          <TableContainer>
            <Table variant='striped' colorScheme='[#432366]' size='sm'>
              <Thead backgroundColor={'#432366'} color={'#fff'}>
                <Tr>
                  <Th color={'#selecto'}>Created</Th>
                  <Th color={'#selecto'}>Agency</Th>
                  <Th color={'#selecto'}>Agency Type</Th>
                  <Th color={'#selecto'}>Referral Contact</Th>
                  <Th color={'#selecto'}>Contact Phone</Th>
                  <Th color={'#selecto'}>Referral Source</Th>
                  <Th color={'#selecto'}></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr className='dark:text-white'>
                  <Td>23/4/2022 8:43 AM</Td>
                  <Td>Tampa Home Health</Td>
                  <Td>Home Health</Td>
                  <Td>Amess Alicia</Td>
                  <Td></Td>
                  <Td>James Gordon</Td>
                  <Td>
                    <Image
                      src={greenplus.src}
                      alt='greenplus'
                      width='14px'
                      height='14px'
                    />
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </section>
      </div>
    </div>
  );
};

export default IncompleteReferrals;
