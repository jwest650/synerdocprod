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
            <thead className='thead-primary'>
              <tr>
                <th className=' th-first'>Reason Type</th>
                <th className=' th-middle'>Status</th>
                <th className=' th-middle'>Locked</th>
                <th className=' th-middle'>Transmited</th>
                <th className=' th-middle'>Response</th>
                <th className=' th-middle'>Created</th>
                <th className=' th-middle'>Created By</th>
                <th className=' th-middle'>Modified By</th>
                <th className=' th-middle'>Completed By</th>
                <th className=' th-middle'></th>
                <th className=' th-middle'></th>
                <th className=' th-middle'></th>
                <th className=' th-last'></th>
              </tr>
            </thead>
            <tbody>
              {data.map((data, i) => (
                <tr
                  key={i}
                  className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
                >
                  <td className=' td-primary'>James Gordon</td>
                  <td className=' td-primary'>1.High priority requires</td>
                  <td className=' td-primary'>Tampa Home Health</td>
                  <td className=' td-primary'>10/8/19</td>
                  <td className=' td-primary'></td>
                  <td className=' td-primary'></td>
                  <td className=' td-primary'>Home Health</td>
                  <td className=' td-primary'>
                    <p className=' cursor-pointer  text-green-700 '>Assigned</p>
                  </td>
                  <td className=' td-primary'></td>
                  <td className=' td-primary'></td>
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
