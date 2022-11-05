import { Button, Checkbox, Select } from '@chakra-ui/react';
import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Calender from './components/Calendar';

const AssociateLoadBalance = () => {
  let data = [1, 1, 1, 1];

  return (
    <div className='w-full space-y-4 bg-[#F6F8FC] p-5 text-gray-800 dark:text-white'>
      <section>
        <div className='flex justify-between'>
          <div className='flex'>
            <label htmlFor='#'>Choose Discipline:</label>
            <div className='flex items-center'>
              <Select size={'xs'} name='' id='' className='rounded text-black'>
                <option value='pdf'>discipline one</option>
                <option value='pdf'>discipline two</option>
              </Select>
            </div>
          </div>
          <div className='flex items-center'>
            <label htmlFor='#'>Agency:</label>
            <div className='flex '>
              <Select size={'xs'} name='' id='' className='rounded text-black'>
                <option value='pdf'>Agency one</option>
                <option value='pdf'>Agency two</option>
              </Select>
            </div>
          </div>
          <div className='flex items-center'>
            <label htmlFor='#'>Ranking:</label>
            <div className='flex '>
              <Select size={'xs'} name='' id='' className='rounded text-black'>
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
              <Select size={'xs'} name='' id='' className='rounded text-black'>
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
          <Calender />
          {/* <div className='flex justify-between bg-gray-200 p-1'>
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
          <div className='pr-3'>
            <table className='min-w-full overflow-auto'>
              <thead className='border-b bg-[#32164A] text-[18px] tracking-wider text-white'>
                <tr>
                  <th className=' border-gray-100  pl-2 text-left'>
                    James Gordon
                  </th>
                  <th className=' border-gray-100  pl-2 text-left'>
                    James Gordon
                  </th>
                  <th className=' border-gray-100  pl-2 text-left'>
                    James Gordon
                  </th>
                  <th className=' border-gray-100  pl-2 text-left'>
                    James Gordon{' '}
                  </th>
                  <th className=' border-gray-100  pl-2 text-left'>
                    James Gordon
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((data, i) => (
                  <tr
                    key={i}
                    className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
                  >
                    <td className='border border-gray-400'>23/12/05</td>
                    <td className='border border-gray-400'>23/12/05</td>
                    <td className='border border-gray-400'>23/12/05</td>
                    <td className='border border-gray-400'>23/12/05</td>
                    <td className='border border-gray-400'>23/12/05</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default AssociateLoadBalance;
