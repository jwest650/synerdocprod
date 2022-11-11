import { Select } from '@chakra-ui/react'
import React from 'react'
import { TiWarningOutline } from 'react-icons/ti'

const MedsTab = () => {
  let data = []
  return (
    <div className='text-xs'>
      <h1>Alergies: Penicillin</h1>
      <div className='flex items-center'>
        <h1 className='font-bold'>Medications</h1>

        <p className='ml-5 text-secondary-color underline'>Add Medication</p>
        <p className='ml-5 text-secondary-color underline'>
          Add Medication kit
        </p>
        <p className='ml-5 text-secondary-color underline'>
          Print Medication Profile
        </p>
        <p className='ml-5 text-secondary-color underline'>
          Approve Medication Profile
        </p>
        <p className='ml-5 text-secondary-color underline'>Med Admin</p>
        <p className='ml-5 text-secondary-color underline'>Med Taken</p>
        <p className='ml-5 text-secondary-color underline'>Fax Medications</p>

        <div className='mx-2'>
          <Select size={'xs'}>
            <option>value</option>
          </Select>
        </div>

        <p className='mx-2'>Status:</p>
        <div>
          <Select size={'xs'}>
            <option>Active</option>
          </Select>
        </div>
      </div>
      <div className='flex items-center'>
        <p className='ml-2 text-secondary-color underline'>
          Approve Medications Taken:
        </p>
        <div className='ml-2'>
          <Select size={'xs'}>
            <option>Active</option>
          </Select>
        </div>
        <p className='ml-2 text-secondary-color underline'>Mass Inactive:</p>
      </div>

      <section className=' mt-4 min-h-[200px]'>
        <table className=' min-w-full overflow-auto '>
          <thead className='border-b bg-primary-color text-[18px] tracking-wider text-white'>
            <tr>
              <th className='w-[300px] border-gray-100  pl-2 text-center'>
                Medication
              </th>
              <th className=' border-gray-100  pl-2 text-left'>Alert</th>
              <th className=' border-gray-100  pl-2 text-left'>Dosage</th>
              <th className=' border-gray-100  pl-2 text-left'>Freq</th>
              <th className=' border-gray-100  pl-2 text-left'>Route</th>
              <th className=' border-gray-100  pl-2 text-left'>QTY</th>
              <th className=' border-gray-100  pl-2 text-left'>Start</th>
              <th className=' border-gray-100  pl-2 text-left'>End</th>
              <th className=' border-gray-100  pl-2 text-left'>Type</th>
              <th className=' border-gray-100  pl-2 text-left'>Phycisian</th>
              <th className=' border-gray-100  pl-2 text-left'>Administer</th>
              <th className=' border-gray-100  pl-2 text-left'>Pharmacy</th>
              <th className=' border-gray-100  pl-2 text-left'>ND</th>
              <th className=' border-gray-100  pl-2 text-left'>C</th>
              <th className=' border-gray-100  pl-2 text-left'></th>
              <th className=' border-gray-100  pl-2 text-left'></th>
              <th className=' border-gray-100  pl-2 text-left'></th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, i) => (
              <tr
                key={i}
                className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
              >
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                  Warfa in tablet
                </td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                  <TiWarningOutline />
                </td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                  325
                </td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                  1 tab
                </td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                  oral
                </td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'></td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                  1/23
                </td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                  perscription
                </td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                  Robert
                </td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                  Self/Patient
                </td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                  Mablis
                </td>

                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                  No
                </td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'></td>
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
      </section>
    </div>
  )
}

export default MedsTab
