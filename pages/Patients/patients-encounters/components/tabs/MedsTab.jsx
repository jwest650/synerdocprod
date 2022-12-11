import { Select } from '@chakra-ui/react'
import React from 'react'
import { TiWarningOutline } from 'react-icons/ti'
import { FcCalendar, FcPrint } from 'react-icons/fc'
import { GrNotes } from 'react-icons/gr'
import { FaStarOfLife } from 'react-icons/fa'
import { AiFillWarning } from 'react-icons/ai'
import { useState } from 'react'
import PrintModal from './components/medstab/PrintModal'
import Actions from './components/medstab/Actions'
import Pharmacy from './components/medstab/Pharmacy'

const MedsTab = () => {
  let data = [1, 1, 1, 1, 1]
  const [openPrint, setOpenPrint] = useState(false)

  return (
    <div className='verdana13 '>
      <h1>Alergies: Penicillin</h1>
      <div className='flex items-center'>
        <h1 className='verdana18 font-bold'>Medications</h1>

        <button className='btn-primary ml-3'>
          <p>Add Medication</p>
        </button>
        <button className='btn-primary ml-3'>
          <p>Print Medication Profile</p>
        </button>
        <button className='btn-primary ml-3'>
          <p>Approve Medication Profile</p>
        </button>

        <button className='btn-primary ml-3'>
          <p>Fax Medications</p>
        </button>

        <div className='flex'>
          <p className='mx-2 font-bold'>Status:</p>
          <Select size={'xs'}>
            <option>Active</option>
          </Select>
        </div>
        <button className='btn-primary ml-3'>
          <p>Mass Inactive</p>
        </button>
      </div>

      <section className=' mt-4 min-h-[200px]'>
        <table className=' min-w-full overflow-auto '>
          <thead className='thead-primary'>
            <tr>
              <th className='th-first w-[300px]'>Medication</th>
              <th className=' th-middle '>Alert</th>
              <th className=' th-middle '>Dosage</th>
              <th className=' th-middle '>Freq</th>
              <th className=' th-middle '>Route</th>
              <th className=' th-middle '>QTY</th>
              <th className=' th-middle '>Start</th>
              <th className=' th-middle '>End</th>
              <th className=' th-middle '>Type</th>
              <th className=' th-middle '>Phycisian</th>
              <th className=' th-middle '>Administered</th>
              <th className=' th-middle '>Pharmacy</th>
              <th className=' th-middle '></th>
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
                <td className=' td-primary flex items-center'>
                  <AiFillWarning className='ml-2' />
                  <FaStarOfLife className='ml-2' />
                  {/* <TfiReload className='ml-2' /> */}
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

                <td className=' td-primary'></td>
                <td className=' td-primary'>
                  <Pharmacy />
                </td>
                <td className=' td-primary  '>
                  <Actions />
                </td>
                <td className=' td-primary' onClick={() => setOpenPrint(true)}>
                  <FcPrint />
                </td>
                <td className=' td-primary'></td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <p className='w-[100%] bg-gray-300  p-2 text-sm'>
          No Homecare Item set found
        </p> */}
      </section>

      <section className=' mt-10'>
        <h1 className='verdana18'>Drug to Drug Interaction</h1>
        <table className=' min-w-[500px]'>
          <thead className='thead-primary'>
            <tr>
              <th className='th-first '>Sevierity</th>
              <th className=' th-middle '>Drug 1</th>
              <th className=' th-middle '>Drug 2</th>
              <th className=' th-last '></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className=' td-primary'>
                <Select size={'xs'} css={{ backgroundColor: '#eee' }}>
                  <option value=''>Select</option>
                </Select>
              </td>
              <td className=' td-primary'> </td>
              <td className=' td-primary'> </td>
              <td className=' td-primary'></td>
            </tr>
            {data.map((data, i) => (
              <tr
                key={i}
                className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
              >
                <td className=' td-primary'>Warfa in tablet</td>
                <td className=' td-primary'>perscription</td>
                <td className=' td-primary'>Robert</td>
                <td className=' td-primary'>
                  <FcCalendar />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <p className='w-[100%] bg-gray-300  p-2 text-sm'>
          No Homecare Item set found
        </p> */}
      </section>

      <PrintModal openPrint={openPrint} setOpenPrint={setOpenPrint} />
    </div>
  )
}

export default MedsTab
