import { Select } from '@chakra-ui/react'
import React from 'react'
import { TiWarningOutline } from 'react-icons/ti'

const MedsTab = () => {
  let data = []
  return (
    <div className='verdana13 '>
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
          <thead className='thead-primary'>
            <tr>
              <th className='th-first '>Medication</th>
              <th className=' th-middle '>Alert</th>
              <th className=' th-middle '>Dosage</th>
              <th className=' th-middle '>Freq</th>
              <th className=' th-middle '>Route</th>
              <th className=' th-middle '>QTY</th>
              <th className=' th-middle '>Start</th>
              <th className=' th-middle '>End</th>
              <th className=' th-middle '>Type</th>
              <th className=' th-middle '>Phycisian</th>
              <th className=' th-middle '>Administer</th>
              <th className=' th-middle '>Pharmacy</th>
              <th className=' th-middle '>ND</th>
              <th className=' th-middle '>C</th>
              <th className=' th-middle '></th>
              <th className=' th-middle '></th>
              <th className=' th-last '></th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, i) => (
              <tr
                key={i}
                className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
              >
                <td className=' td-primary'>Warfa in tablet</td>
                <td className=' td-primary'>
                  <TiWarningOutline />
                </td>
                <td className=' td-primary'>325</td>
                <td className=' td-primary'>1 tab</td>
                <td className=' td-primary'>oral</td>
                <td className=' td-primary'></td>
                <td className=' td-primary'>1/23</td>
                <td className=' td-primary'>perscription</td>
                <td className=' td-primary'>Robert</td>
                <td className=' td-primary'>Self/Patient</td>
                <td className=' td-primary'>Mablis</td>

                <td className=' td-primary'>No</td>
                <td className=' td-primary'></td>
                <td className=' td-primary'></td>
                <td className=' td-primary'></td>
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
  )
}

export default MedsTab
