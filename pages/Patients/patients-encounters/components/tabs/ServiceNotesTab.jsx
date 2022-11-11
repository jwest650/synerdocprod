import { Input, Select } from '@chakra-ui/react'
import React from 'react'
import { FcUnlock } from 'react-icons/fc'

const ServiceNotesTab = () => {
  let data = []

  return (
    <div>
      <div className='flex'>
        <div className='flex'>
          <h1 className=' font-bold'>Service Note</h1>
          <p className='ml-5 text-secondary-color underline'>View Orders</p>
          <p className='ml-5 text-secondary-color underline'>Unlock Orders</p>
          <p className='ml-5 text-secondary-color underline'>Min/Max</p>
        </div>
        <p className='ml-5 text-secondary-color underline'>Set Default</p>

        <div className='flex'>
          <Select size={'xs'}>
            <option>PDF</option>
          </Select>
          <button className='rounde ml-2 rounded border px-3 '>Export</button>
        </div>
      </div>

      <div className='my-4 flex justify-between'>
        <div className='flex'>
          <p className='rounde mr-2 underline'>Selection</p>
          <Select size={'xs'}>
            <option>Selection</option>
          </Select>
        </div>
        <div className='flex'>
          <p className='rounde mr-2 underline'>Item</p>
          <Select size={'xs'}>
            <option>Item</option>
          </Select>
        </div>
        <div className='flex'>
          <p className='rounde mr-2 underline'>Date Range</p>
          <div className='flex'>
            <Input type='date' size={'xs'} />
            <Input type='date' size={'xs'} />
          </div>
        </div>

        <div className='flex'>
          <Input type='date' size={'xs'} />

          <button className='ml-2 rounded border px-3 '>Search</button>
        </div>
      </div>

      <section>
        <div>
          <table className=' min-w-full overflow-auto'>
            <thead className='border-b bg-primary-color text-[18px] tracking-wider text-white'>
              <tr>
                <th className=' border-gray-100  pl-2 text-left'>Type</th>
                <th className=' border-gray-100  pl-2 text-left'>Createed</th>
                <th className=' border-gray-100  pl-2 text-left'>
                  Form Entered By
                </th>
                <th className=' border-gray-100  pl-2 text-left'>Revised By</th>
                <th className=' border-gray-100  pl-2 text-left'>
                  Service provided By
                </th>
                <th className=' border-gray-100  pl-2 text-left'>
                  Service Date
                </th>
                <th className=' border-gray-100  pl-2 text-left'>Time in</th>
                <th className=' border-gray-100  pl-2 text-left'>Time out</th>
                <th className=' border-gray-100  pl-2 text-left'>Service</th>
                <th className=' border-gray-100  pl-2 text-left'>QA Status</th>
                <th className=' border-gray-100  pl-2 text-left'></th>
                <th className=' border-gray-100  pl-2 text-left'></th>
                <th className=' border-gray-100  pl-2 text-left'></th>
              </tr>
            </thead>
            <tbody>
              <tr className='bg-light-blue'>
                <td>
                  <Select
                    size='xs'
                    css={{ border: 'none' }}
                    className='shadow outline-none'
                  >
                    <option value='option1' className='text-gray-800'>
                      All 1
                    </option>
                    <option value='option2' className='text-gray-800'>
                      All 2
                    </option>
                    <option value='option3' className='text-gray-800'>
                      All 3
                    </option>
                  </Select>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <Select
                    size='xs'
                    css={{ border: 'none' }}
                    className='shadow outline-none'
                  >
                    <option value='option1' className='text-gray-800'>
                      All 1
                    </option>
                    <option value='option2' className='text-gray-800'>
                      All 2
                    </option>
                    <option value='option3' className='text-gray-800'>
                      All 3
                    </option>
                  </Select>
                </td>
                <td>
                  <Select
                    size='xs'
                    css={{ border: 'none' }}
                    className='shadow outline-none'
                  >
                    <option value='option1' className='text-gray-800'>
                      All 1
                    </option>
                    <option value='option2' className='text-gray-800'>
                      All 2
                    </option>
                    <option value='option3' className='text-gray-800'>
                      All 3
                    </option>
                  </Select>
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              {data.map((data, i) => (
                <tr
                  key={i}
                  className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
                >
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'></td>
                  <td className=' max-h-[20px] min-w-[100px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'></td>
                  <td className=' max-h-[20px] min-w-[100px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'></td>
                  <td className=' max-h-[20px] min-w-[100px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'></td>
                  <td className=' max-h-[20px] min-w-[100px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'></td>
                  <td className=' max-h-[20px] min-w-[100px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'></td>
                  <td className=' max-h-[20px] min-w-[100px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'></td>
                  <td className=' max-h-[20px] min-w-[100px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'></td>
                  <td className=' max-h-[20px] min-w-[100px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'></td>
                  <td className=' max-h-[20px] min-w-[100px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'></td>
                  <td className=' max-h-[20px] min-w-[100px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'></td>
                  <td className=' max-h-[20px] min-w-[100px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'></td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className='w-[100%] bg-gray-300  p-2 text-sm'>
            No Homecare Item set found
          </p>
        </div>
      </section>
    </div>
  )
}

export default ServiceNotesTab
