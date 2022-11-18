import Image from 'next/image'
import React from 'react'
import searchIcon from '../../../../../assets/images/search.png'

const PayersTab = () => {
  let data = [1]
  return (
    <div className='verdana13'>
      <div className='flex'>
        <h1 className=' text-xl font-bold'>Payer</h1>
        <p className='ml-5 text-secondary-color underline'>Add Payer</p>
      </div>

      <section className=' min-h-[200px]'>
        <table className=' min-w-full overflow-auto'>
          <thead className='verdana13 border-b  bg-primary-color  tracking-wider text-white'>
            <tr className='border border-primary-color'>
              <th className=' verdana13 border-r border-gray-400 py-1  px-2 text-left '></th>
              <th className=' verdana13 border-r border-gray-400 py-1  px-2 text-left '></th>
              <th className=' verdana13 w-[25%] border-r border-gray-400 py-1  px-2 text-left '>
                Payer Name
              </th>
              <th className=' verdana13 border-r border-gray-400 py-1  px-2 text-left '>
                Payer Category
              </th>
              <th className=' verdana13 border-r border-gray-400 py-1  px-2 text-left '>
                Invoice Type
              </th>
              <th className=' verdana13 border-r border-gray-400 py-1  px-2 text-left '>
                Invoice Cycle
              </th>
              <th className=' verdana13 border-r border-gray-400 py-1  px-2 text-left '>
                Status
              </th>
              <th className=' verdana13 border-r border-gray-400 py-1  px-2 text-left '>
                Profile
              </th>
              <th className=' verdana13 border-r border-gray-400 py-1  px-2 text-left '>
                Reqs
              </th>
              <th className=' verdana13 border-r border-gray-400 py-1  px-2 text-left '>
                Auth
              </th>
              <th className=' verdana13 border-r border-gray-400 py-1  px-2 text-left '>
                Elegibility
              </th>
              <th className=' verdana13 border-r border-gray-400 py-1  px-2 text-left '>
                Insured
              </th>
              <th className=' verdana13 border-r border-gray-400 py-1  px-2 text-left '>
                Copays
              </th>
              <th className=' verdana13 border-r border-gray-400 py-1  px-2 text-left '>
                NOE
              </th>
              <th className=' verdana13 border-r border-gray-400 py-1  px-2 text-left '></th>
              <th className=' verdana13 border-r border-gray-400 py-1  px-2 text-left '></th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, i) => (
              <tr
                key={i}
                className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
              >
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'></td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                  1
                </td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                  Tampa Home Health
                </td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                  Medicare
                </td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                  UB04
                </td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                  Monthly
                </td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                  <p className='text-green-700'>Active</p>
                </td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'></td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'></td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                  N/A
                </td>
                <td className=' max-h-[20px] min-w-[100px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'></td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                  N/A
                </td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                  N/A
                </td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'></td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                  <Image src={searchIcon} height={20} width={20} alt='icon' />{' '}
                </td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'></td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <p className='w-[100%] bg-gray-300  p-2 text-sm'>
          No Homecare Item set found
        </p> */}
      </section>
    </div>
  )
}

export default PayersTab
