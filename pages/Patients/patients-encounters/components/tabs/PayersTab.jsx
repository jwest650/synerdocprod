import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import searchIcon from '../../../../../assets/images/search.png'
import AddPayerModal from './components/payer/AddPayerModal'

const PayersTab = () => {
  let data = [1]
  const [openAddPayer, setOpenAddPayer] = useState(false)
  return (
    <div className='verdana13'>
      <div className='flex'>
        <h1 className=' text-xl font-bold'>Payer</h1>
        <p
          className='ml-5 cursor-pointer text-secondary-color underline'
          onClick={() => setOpenAddPayer(true)}
        >
          <BsPlus className='verdana16  text-green-500' />
          Add Payer
        </p>
      </div>

      <section className=' min-h-[200px]'>
        <table className=' min-w-full overflow-auto'>
          <thead className='thead-primary'>
            <tr>
              <th className=' th-first '></th>
              <th className=' th-middle '></th>
              <th className=' th-middle '>Payer Name</th>
              <th className=' th-middle '>Payer Category</th>
              <th className=' th-middle '>Invoice Type</th>
              <th className=' th-middle '>Invoice Cycle</th>
              <th className=' th-middle '>Status</th>
              <th className=' th-middle '>Profile</th>
              <th className=' th-middle '>Reqs</th>
              <th className=' th-middle '>Auth</th>
              <th className=' th-middle '>Elegibility</th>
              <th className=' th-middle '>Insured</th>
              <th className=' th-middle '>Copays</th>
              <th className=' th-middle '>NOE</th>
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
                <td className=' td-primary'></td>
                <td className=' td-primary'>1</td>
                <td className=' td-primary'>Tampa Home Health</td>
                <td className=' td-primary'>Medicare</td>
                <td className=' td-primary'>UB04</td>
                <td className=' td-primary'>Monthly</td>
                <td className=' td-primary'>
                  <p className='text-green-700'>Active</p>
                </td>
                <td className=' td-primary'></td>
                <td className=' td-primary'></td>
                <td className=' td-primary'>N/A</td>
                <td className=' td-primary'></td>
                <td className=' td-primary'>N/A</td>
                <td className=' td-primary'>N/A</td>
                <td className=' td-primary'></td>
                <td className=' td-primary'>
                  <Image src={searchIcon} height={20} width={20} alt='icon' />{' '}
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

      {/* Payer modal */}
      <AddPayerModal
        openAddPayer={openAddPayer}
        setOpenAddPayer={setOpenAddPayer}
      />
    </div>
  )
}

export default PayersTab
