import React from 'react'
import { BsPlus } from 'react-icons/bs'
import { Input, Select } from '@chakra-ui/react'
import { GoNote } from 'react-icons/go'

const NotesTab = () => {
  return (
    <div className='text-sm'>
      <section className='flex items-center justify-between py-[1px]'>
        <h1 className='text-xl font-bold'>Notes</h1>
        <button className='flex items-center capitalize text-orange-500 underline '>
          <BsPlus className='text-xl text-green-500' />
          add note
        </button>
        <aside className='flex items-center space-x-[1px]'>
          <div className='flex items-center space-x-[1px]'>
            <label htmlFor=''>Type:</label>
            <Select size={'xs'}>
              <option value=''>All</option>
            </Select>
          </div>
          <div className='flex items-center space-x-1'>
            <label htmlFor=''>From:</label>
            <Input size={'xs'} type={'text'} />
            <label htmlFor=''>To:</label>
            <Input size={'xs'} type={'text'} />
          </div>
        </aside>
        <aside className='flex items-center space-x-[2px]'>
          <input type={'checkbox'} />
          <label htmlFor=''>show inactive</label>
          <div className='flex items-center space-x-3'>
            <Input size={'xs'} type={'text'} placeholder='Search by keyword' />
            <button className=' rounded bg-secondary-color px-3 text-white'>
              Search
            </button>
          </div>
        </aside>
      </section>
      {/* table */}
      <section>
        <table className='w-full text-left text-xs capitalize'>
          <thead>
            <tr className='bg-primary-color text-white'>
              <th className='w-10 border-r border-gray-400 py-1 px-2  text-left text-xs'></th>
              <th className='w-52 border-r border-gray-400 py-1 px-2  text-left text-xs'>
                date
              </th>
              <th className='w-52 border-r border-gray-400 py-1 px-2  text-left text-xs'>
                type
              </th>
              <th className='border-r border-gray-400 py-1 px-2  text-left text-xs'>
                note
              </th>
              <th className='w-20 border-r border-gray-400 py-1 px-2  text-left text-xs'></th>
            </tr>
          </thead>
          <tbody>
            {obj.map((value, i) => (
              <tr
                key={i}
                className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
              >
                <td className='border border-[#a0a0a0] px-[2px] '>
                  {' '}
                  <GoNote className='mx-auto text-xl ' />
                </td>
                <td className='border border-[#a0a0a0] px-[2px]  text-orange-500'>
                  {value.date}
                  <p className='text-black'>by internal</p>
                </td>
                <td className='border border-[#a0a0a0] px-[2px]'>
                  {value.type}
                </td>
                <td className='border border-[#a0a0a0] px-[2px]'>
                  {value.note}
                  <p className='text-orange-500'>release notes.pdf</p>
                </td>
                <td className='border border-[#a0a0a0] px-[2px]'></td>
              </tr>
            ))}
            <tr>
              <td colSpan={5}>displaying 1 0f 1</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default NotesTab

const obj = [
  {
    date: '10/10/19 10:32 -cst',
    type: 'uploaded document',
    note: 'document uploaded',
  },
  {
    date: '10/10/19 10:32 -cst',
    type: 'uploaded document',
    note: 'document uploaded',
  },
  {
    date: '10/10/19 10:32 -cst',
    type: 'uploaded document',
    note: 'document uploaded',
  },
]
