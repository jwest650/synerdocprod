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
        <table className='w-full text-left  capitalize'>
          <thead className='thead-primary'>
            <tr>
              <th className='th-first '>type</th>
              <th className='th-middle '>created</th>
              <th className='th-middle '>performed by</th>
              <th className='th-middle '>revised by</th>
              <th className='th-middle '>status</th>
              <th className='th-last '></th>
            </tr>
          </thead>
          <tbody>
            <tr className=' bg-light-blue'>
              <td className='td-primary'>
                <Select size={'xs'} css={{ backgroundColor: '#ccc' }}>
                  <option value=''>option</option>
                </Select>
              </td>
              <td className='td-primary'></td>
              <td className='td-primary'></td>
              <td className='td-primary'></td>
              <td className='td-primary'></td>
              <td className='td-primary'></td>
            </tr>
            {obj.map((val, i) => (
              <tr
                key={i}
                className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
              >
                <td className='td-primary'></td>
                <td className='td-primary'></td>
                <td className='td-primary'></td>
                <td className='td-primary'></td>
                <td className='td-primary'></td>
                <td className='td-primary'></td>
              </tr>
            ))}
            <tr className=''>
              <td className='td-primary'>no record to display</td>
              <td className='td-primary'></td>
              <td className='td-primary'></td>
              <td className='td-primary'></td>
              <td className='td-primary'></td>
              <td className='td-primary'></td>
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
