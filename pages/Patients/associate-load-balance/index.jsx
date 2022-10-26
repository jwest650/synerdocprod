import {
  Button,
  Checkbox,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const AssociateLoadBalance = () => {
  return (
    <div className='space-y-4 p-5 text-gray-800 dark:text-white'>
      <section>
        <div className='flex justify-between'>
          <div className='flex'>
            <label htmlFor='#'>Choose Discipline:</label>
            <div className='flex '>
              <Select size={'sm'} name='' id='' className='rounded text-black'>
                <option value='pdf'>discipline one</option>
                <option value='pdf'>discipline two</option>
              </Select>
            </div>
          </div>
          <div className='flex'>
            <label htmlFor='#'>Agency:</label>
            <div className='flex '>
              <Select size={'sm'} name='' id='' className='rounded text-black'>
                <option value='pdf'>Agency one</option>
                <option value='pdf'>Agency two</option>
              </Select>
            </div>
          </div>
          <div className='flex'>
            <label htmlFor='#'>Ranking:</label>
            <div className='flex '>
              <Select size={'sm'} name='' id='' className='rounded text-black'>
                <option value='pdf'>discipline one</option>
                <option value='pdf'>discipline two</option>
              </Select>
            </div>
          </div>
        </div>

        <div className='flex items-center py-5'>
          <Checkbox>Show All</Checkbox>
          <div className='ml-6 flex items-center'>
            <label htmlFor='#'>Patient Team:</label>
            <div className='flex'>
              <Select size={'sm'} name='' id='' className='rounded text-black'>
                <option value='pdf'>discipline one</option>
                <option value='pdf'>discipline two</option>
              </Select>
            </div>
          </div>
        </div>
        <div>
          <Checkbox colorScheme='green' defaultChecked>
            Assign
          </Checkbox>
          <Checkbox className='ml-6' colorScheme='orange' defaultChecked>
            Verified
          </Checkbox>
        </div>
      </section>

      <section className=' h-96 border-2'>
        <div className=' border-3'>
          <div className='flex justify-between bg-gray-200 p-1'>
            <div className='flex items-center'>
              <Button mr={1} size='sm'>
                <BsChevronLeft />
              </Button>
              <Button mr={1} size='sm'>
                <BsChevronRight />
              </Button>
              <Button size='sm'>today</Button>
              <p className='ml-6'>23/12/05 - 23/12/05</p>
            </div>

            <div>
              <Button size='sm'>Day</Button>
              <Button size='sm' ml={1}>
                Timeline
              </Button>
            </div>
          </div>
          <TableContainer className='w-[95%] pr-3'>
            <Table variant='striped' colorScheme='gray' size='sm'>
              <Thead backgroundColor={'#432366'} color={'#fff'}>
                <Tr>
                  <Th color={'#selecto'}>James Gordon</Th>
                  <Th color={'#selecto'}>James Gordon</Th>
                  <Th color={'#selecto'}>James Gordon</Th>
                  <Th color={'#selecto'}>James Gordon </Th>
                  <Th color={'#selecto'}>James Gordon</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr className='dark:text-white'>
                  <Td>23/12/05</Td>
                  <Td>23/12/05</Td>
                  <Td>23/12/05</Td>
                  <Td>23/12/05</Td>
                  <Td>23/12/05</Td>
                </Tr>

                <Tr className='dark:text-white'>
                  <Td>23/12/05</Td>
                  <Td>23/12/05</Td>
                  <Td>23/12/05</Td>
                  <Td>23/12/05</Td>
                  <Td>23/12/05</Td>
                </Tr>

                <Tr className='dark:text-white'>
                  <Td>23/12/05</Td>
                  <Td>23/12/05</Td>
                  <Td>23/12/05</Td>
                  <Td>23/12/05</Td>
                  <Td>23/12/05</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </section>
    </div>
  );
};

export default AssociateLoadBalance;
