import React from 'react'
import { BsPlus } from 'react-icons/bs'
import { Input, Select } from '@chakra-ui/react'
import { GoNote } from 'react-icons/go'

const NotesTab = () => {
  return (
    <div className='verdana13 '>
      <section className='flex items-center justify-between py-[1px]'>
        <h1 className='verdana16  font-bold'>Notes</h1>
        <button className='btn-primary flex items-center'>
          <BsPlus className='verdana16  text-green-500' />
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
          <thead className='thead-primary'>
            <tr>
              <th className='th-first'></th>
              <th className='th-middle'>date</th>
              <th className='th-middle'>type</th>
              <th className='th-middle'>note</th>
              <th className='th-last'></th>
            </tr>
          </thead>
          <tbody>
            {obj.map((value, i) => (
              <tr
                key={i}
                className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
              >
                <td className='td-primary'>
                  {' '}
                  <GoNote className='verdana16 mx-auto  ' />
                </td>
                <td className='td-primary text-orange-500'>
                  {value.date}
                  <p className='text-black'>by internal</p>
                </td>
                <td className='td-primary'>{value.type}</td>
                <td className='td-primary'>
                  {value.note}
                  <p className='text-orange-500'>release notes.pdf</p>
                </td>
                <td className='td-primary'></td>
              </tr>
            ))}
            <tr>
              <td colSpan={5} className='td-primary'>
                displaying 1 0f 1
              </td>
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
