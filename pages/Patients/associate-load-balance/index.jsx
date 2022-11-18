import { Button, Checkbox, Select } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import Calender from './components/Calendar'

const AssociateLoadBalance = () => {
  let data = [1, 1, 1, 1]

  return (
    <div className='verdana13 w-full space-y-4 bg-[#F6F8FC] p-5 text-gray-800 dark:text-white'>
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
          <p className='flex items-center bg-gray-200 p-2'>
            <AiOutlineClockCircle />
            show business hours
          </p>
        </div>
      </section>
    </div>
  )
}

export default AssociateLoadBalance
