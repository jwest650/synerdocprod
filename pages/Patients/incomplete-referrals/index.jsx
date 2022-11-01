import React, { useState } from 'react';
import { Input } from '@chakra-ui/react';
import EditReferral from './components/EditReferral';
import { BsSearch } from 'react-icons/bs';
import { BiPlus } from 'react-icons/bi';

const IncompleteReferrals = () => {
  let data = [1, 1, 1, 1];
  const [openAddReferral, setOpenAddReferral] = useState(false);

  return (
    <div className='w-full'>
      <div className='space-y-5'>
        <section className='flex items-center justify-between space-x-5'>
          <div className='flex items-center space-x-5'>
            <h1 className='text-2xl font-bold capitalize text-black dark:text-white'>
              Incomplete Referrals
            </h1>
            <div className='flex cursor-pointer items-center space-x-2'>
              <button
                className='dark:text-[#E77654px-6 flex cursor-pointer items-center rounded bg-orange-600 py-1 px-3 text-sm capitalize text-[#fff]'
                onClick={() => setOpenAddReferral(true)}
              >
                <BiPlus />
                <span className='ml-1'>Create Referral Patient</span>
              </button>
            </div>
          </div>

          <div className='flex items-center space-x-5'>
            <div className='my-2 flex '>
              <div>
                <Input placeholder='small size' size='xs' width={300} />
              </div>
              <button className='ml-3 rounded border bg-orange-600 px-3 font-medium text-white'>
                Search
              </button>
            </div>
          </div>
        </section>
        <hr />
        <section>
          <div>
            <table className='mt-3 min-w-full overflow-auto'>
              <thead className='border-b bg-[#32164A] text-[18px] tracking-wider text-white'>
                <tr>
                  <th className=' border-gray-100  pl-2 text-left'>Created</th>
                  <th className=' border-gray-100  pl-2 text-left'>Agency</th>
                  <th className=' border-gray-100  pl-2 text-left'>
                    Agency Type
                  </th>
                  <th className=' border-gray-100  pl-2 text-left'>
                    Referral Contact
                  </th>
                  <th className=' border-gray-100  pl-2 text-left'>
                    Contact Phone
                  </th>
                  <th className=' border-gray-100  pl-2 text-left'>
                    Referral Source
                  </th>
                  <th className=' border-gray-100  pl-2 text-left'></th>
                </tr>
              </thead>
              <tbody>
                {data.map((data, i) => (
                  <tr
                    key={i}
                    className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
                  >
                    <td className=' max-h-[20px] min-w-[120px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                      23/4/2022 8:43 AM
                    </td>
                    <td className=' max-h-[20px] min-w-[120px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                      Tampa Home Health
                    </td>
                    <td className=' max-h-[20px] min-w-[120px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                      Home Health
                    </td>
                    <td className=' max-h-[20px] min-w-[120px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                      Amess Alicia
                    </td>
                    <td className=' max-h-[20px] min-w-[120px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'></td>
                    <td
                      className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'
                      onClick={() => setOpenAddReferral(true)}
                    >
                      James Gordon
                    </td>
                    <td className=' max-h-[20px] max-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                      <BsSearch />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <EditReferral
        openAddReferral={openAddReferral}
        setOpenAddReferral={setOpenAddReferral}
      />
    </div>
  );
};

export default IncompleteReferrals;
