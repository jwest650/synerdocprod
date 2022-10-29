import { Checkbox, Input } from '@chakra-ui/react';
import React from 'react';

const FindPhysicianModal = () => {
  let data = [1, 1, 1, 1];
  return (
    <div>
      <section>
        <h1 className='text-2xl font-bold capitalize text-black dark:text-white'>
          Find Physician
        </h1>
        <p>search or add physician</p>
        <hr />
        <div className='flex py-5'>
          <div className='w-[150px]'>
            <h1 className='mr-5'>Last/First: </h1>
          </div>
          <div className='flex'>
            <Input size={'xs'} type='text' />
            <Input size={'xs'} className='ml-3' type='text' />
          </div>
        </div>

        <table className=' min-w-full overflow-auto'>
          <thead className='border-b bg-[#32164A] text-[18px] tracking-wider text-white'>
            <tr>
              <th className=' border-gray-100  pl-2 text-left'>Select</th>
              <th className=' border-gray-100  pl-2 text-left'>Name</th>
              <th className=' border-gray-100  pl-2 text-left'>Type</th>
              <th className=' border-gray-100  pl-2 text-left'>
                Preffered Phone
              </th>
              <th className=' border-gray-100  pl-2 text-left'>
                Referral Address
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr
                key={i}
                className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
              >
                <td className='border border-gray-400'>
                  <Checkbox></Checkbox>
                </td>
                <td className='border border-gray-400'>Nick, Jones</td>
                <td className='border border-gray-400'>23/12/05</td>
                <td className='border border-gray-400'>Male</td>
                <td className='border border-gray-400'>Pending</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='my-3 flex justify-end'>
          <div>
            <button className='rounded border px-3'>Save</button>
            <button className='rounded border px-3'>Cancel</button>
          </div>
          <button className='rounded border px-3'>add physician</button>
        </div>
      </section>
    </div>
  );
};

export default FindPhysicianModal;
