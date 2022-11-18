import { Select } from '@chakra-ui/react'
import React from 'react'
import { BsPlus } from 'react-icons/bs'

const DocsTab = () => {
  return (
    <div className='verdana13 space-y-3 '>
      <section className='flex items-center justify-between'>
        <header className='flex items-center space-x-4'>
          <h1 className='font-bold'>forms</h1>
          <button className='flex items-center capitalize text-orange-500 underline '>
            <BsPlus className='verdana16  text-green-500' />
            add contact info
          </button>
        </header>
        <button className='text-orange-500 underline'>
          show form / document requirement
        </button>
      </section>
      <section>
        <table className='verdana13 w-full text-left  capitalize'>
          <thead>
            <tr className='bg-primary-color text-white'>
              <th className='verdana13 border-r border-gray-400 py-1  px-2 text-left '>
                type
              </th>
              <th className='verdana13 border-r border-gray-400 py-1  px-2 text-left '>
                created
              </th>
              <th className='verdana13 border-r border-gray-400 py-1  px-2 text-left '>
                performed by
              </th>
              <th className='verdana13 border-r border-gray-400 py-1  px-2 text-left '>
                revised by
              </th>
              <th className='verdana13 border-r border-gray-400 py-1  px-2 text-left '>
                status
              </th>
              <th className='verdana13 border-r border-gray-400 py-1  px-2 text-left '></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Select size={'xs'}>
                  <option value=''>option</option>
                </Select>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {obj.map((val, i) => (
              <tr
                key={i}
                className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
              >
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ))}
            <tr className=''>
              <td>no record to display</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default DocsTab

const obj = [
  {
    type: 'dd',
    created: '',
    performed: '',
    revised: '',
    status: '',
  },
]
