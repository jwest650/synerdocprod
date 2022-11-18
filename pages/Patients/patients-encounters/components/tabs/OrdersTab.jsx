import { Input, Select } from '@chakra-ui/react'
import React from 'react'
import { GoNote } from 'react-icons/go'

const OrdersTab = () => {
  let data = []
  return (
    <div className='verdana13 '>
      <div className='flex'>
        <h1 className=' font-bold'>Orders</h1>
        <p className='ml-5 text-secondary-color underline'>View Orders</p>
        <p className='ml-5 text-secondary-color underline'>Unlock Orders</p>
      </div>

      <div>
        <div className='my-2 flex items-center'>
          <p className=' w-[150px] font-semibold'>Certificate from:</p>
          <div className='my-2 flex items-center'>
            <Input type='date' size={'xs'} />
            <button className='mx-3 rounded border px-2'>Search</button>
            <Select size={'xs'}>
              <option>PDF-(Order)</option>
              <option>option 2</option>
              <option>option 3</option>
            </Select>
            <button className='ml-3 rounded border px-2'>Export</button>
          </div>
        </div>

        <div className='mb-6'>
          <p>
            This encounter does not have certifications or interim orders for
            selected certifications date from
          </p>
        </div>
      </div>

      <div>
        <div className='flex'>
          <h1 className=' text-xl font-bold'>Homecare Item Set</h1>
          <p className='ml-5 text-secondary-color underline'>
            Add Homecare Item Set
          </p>
          <p className='ml-5 text-red-500'>
            Start of Care required to add Homecare item set
          </p>
        </div>

        <section className=' min-h-[200px]'>
          <table className=' min-w-full overflow-auto'>
            <thead className='border-b bg-primary-color text-xs tracking-wider text-white'>
              <tr className='border border-primary-color'>
                <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                  Reason Type
                </th>
                <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                  Status
                </th>
                <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                  Locked
                </th>
                <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                  Transmited
                </th>
                <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                  Response
                </th>
                <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                  Created
                </th>
                <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                  Created By
                </th>
                <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                  Modified By
                </th>
                <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                  Completed By
                </th>
                <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'></th>
                <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'></th>
                <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'></th>
                <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'></th>
              </tr>
            </thead>
            <tbody>
              {data.map((data, i) => (
                <tr
                  key={i}
                  className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
                >
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    James Gordon
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    1.High priority requires
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    Tampa Home Health
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    10/8/19
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'></td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'></td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    Home Health
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    <p className=' cursor-pointer text-sm font-bold text-green-700 '>
                      Assigned
                    </p>
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'></td>
                  <td className=' max-h-[20px] min-w-[100px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'></td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className='w-[100%] bg-gray-300  p-2 text-sm'>
            No Homecare Item set found
          </p>
        </section>
      </div>
    </div>
  )
}

export default OrdersTab
