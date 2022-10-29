import { Checkbox, Input, Select } from '@chakra-ui/react';
import React from 'react';

const VerifyServiceInMass = () => {
  let data = [1, 1, 1, 1];

  return (
    <div className='ar w-full space-y-4 bg-[#F6F8FC] p-5 text-gray-800 dark:text-white'>
      <div className='flex items-center'>
        <h1 className='text-2xl font-bold capitalize text-black dark:text-white'>
          Verify Service in mass
        </h1>
        <button className='ml-3 rounded border px-3'>Verify All Checked</button>
        <button className='ml-3 rounded border px-3'>
          View All Unverified Service
        </button>
      </div>
      <hr />
      <div className='flex items-center'>
        <div className='flex'>
          <p>Agency:</p>
          <div className='flex space-x-2'>
            <Select name='' id='' className='rounded text-black' size='xs'>
              <option value='pdf'>Accra Home Care</option>
              <option value='pdf'>Accra Home Care</option>
              <option value='pdf'>Accra Home Care</option>
            </Select>
          </div>
        </div>

        <div className='flex'>
          <p>Associate:</p>
          <div className='flex space-x-2'>
            <Select name='' id='' className='rounded text-black' size='xs'>
              <option value='pdf'>All</option>
              <option value='pdf'>All</option>
              <option value='pdf'>All</option>
            </Select>
          </div>
        </div>

        <div className='flex'>
          <p>Patient:</p>
          <div className='flex space-x-2'>
            <Select name='' id='' className='rounded text-black' size='xs'>
              <option value='pdf'>James Lane</option>
              <option value='pdf'>James Lane</option>
              <option value='pdf'>James Lane</option>
            </Select>
          </div>
        </div>
        <div className='flex'>
          <p>Service Date From:</p>
          <div className='flex '>
            <Input placeholder='small size' size='xs' ml={'3'} type={'date'} />
          </div>
        </div>
        <div className='flex'>
          <div className='flex'>
            <p>To:</p>
            <div className='flex '>
              <Input
                placeholder='small size'
                size='xs'
                ml={'3'}
                type={'date'}
              />
            </div>
          </div>
          <div>
            <button className='ml-3 rounded border px-3'>Search</button>
          </div>
        </div>
      </div>

      <div className='flex items-center'>
        <div className='flex'>
          <p>Patient Team:</p>
          <div className='flex space-x-2'>
            <Select name='' id='' className='rounded text-black' size='xs'>
              <option value='pdf'>Accra Home Care</option>
              <option value='pdf'>Accra Home Care</option>
              <option value='pdf'>Accra Home Care</option>
            </Select>
          </div>
        </div>

        <div className='flex'>
          <p>Service Category:</p>
          <div className='flex space-x-2'>
            <Select name='' id='' className='rounded text-black' size='xs'>
              <option value='pdf'>All</option>
              <option value='pdf'>All</option>
              <option value='pdf'>All</option>
            </Select>
          </div>
        </div>
      </div>

      <section>
        <table className='min-w-full overflow-auto'>
          <thead className='border-b bg-[#32164A] text-[18px] tracking-wider text-white'>
            <tr>
              <th className=' border-gray-100  pl-2 text-left'></th>
              <th className=' border-gray-100  pl-2 text-left'></th>
              <th className=' border-gray-100  pl-2 text-left'></th>
              <th className=' border-gray-100  pl-2 text-left'></th>
              <th className=' border-gray-100  pl-2 text-left'>
                Associate Name
              </th>
              <th className=' border-gray-100  pl-2 text-left'>Service</th>
              <th className=' border-gray-100  pl-2 text-left'>Service Date</th>
              <th className=' border-gray-100  pl-2 text-left'>Time In</th>
              <th className=' border-gray-100  pl-2 text-left'>Time Out</th>
              <th className=' border-gray-100  pl-2 text-left'>Reimb Type</th>
              <th className=' border-gray-100  pl-2 text-left'>
                Travel Duration
              </th>
              <th className=' border-gray-100  pl-2 text-left'>Miles</th>
              <th className=' border-gray-100  pl-2 text-left'>Pay</th>
              <th className=' border-gray-100  pl-2 text-left'>Unites</th>
              <th className=' border-gray-100  pl-2 text-left'>Rate</th>
              <th className=' border-gray-100  pl-2 text-left'>Bill</th>
              <th className=' border-gray-100  pl-2 text-left'>Units</th>
              <th className=' border-gray-100  pl-2 text-left'>Reimb Rate</th>
              <th className=' border-gray-100  pl-2 text-left'>Charge Rate</th>
              <th className=' border-gray-100  pl-2 text-left'>Payer</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, i) => (
              <tr
                key={i}
                className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
              >
                <td className='border border-gray-400'>
                  <Checkbox defaultChecked></Checkbox>
                </td>
                <td className='border border-gray-400'></td>
                <td className='border border-gray-400'>
                  <div className='flex space-x-2'>
                    <Select className='rounded text-black' size='xs'>
                      <option value='pdf'></option>
                      <option value='pdf'></option>
                      <option value='pdf'></option>
                    </Select>
                  </div>
                </td>
                <td className='border border-gray-400'></td>
                <td className='border border-gray-400'>Nick Jones</td>
                <td className='border border-gray-400'>
                  <div className='flex space-x-2'>
                    <Select
                      name=''
                      id=''
                      className='rounded text-black'
                      size='xs'
                    >
                      <option value='pdf'>All</option>
                      <option value='pdf'>All</option>
                      <option value='pdf'>All</option>
                    </Select>
                  </div>
                </td>
                <td className='border border-gray-400'>
                  <Input size='xs' type='date' />
                </td>
                <td className='border border-gray-400'>
                  <Input size='xs' type='text' />
                </td>
                <td className='border border-gray-400'>
                  <Input size='xs' type='text' />
                </td>
                <td className='border border-gray-400'>
                  <div className='flex space-x-2'>
                    <Select
                      name=''
                      id=''
                      className='rounded text-black'
                      size='xs'
                    >
                      <option value='pdf'>All</option>
                      <option value='pdf'>All</option>
                      <option value='pdf'>All</option>
                    </Select>
                  </div>
                </td>
                <td className='border border-gray-400'>
                  <Input size='xs' type='text' />
                </td>
                <td className='border border-gray-400'>
                  <Input size='xs' type='text' />
                </td>
                <td className='border border-gray-400'>
                  <Checkbox defaultChecked></Checkbox>
                </td>
                <td className='border border-gray-400'>
                  <Input size='xs' type='text' />
                </td>
                <td className='border border-gray-400'>
                  <Input size='xs' type='text' />
                </td>
                <td className='border border-gray-400'>
                  <Checkbox defaultChecked></Checkbox>
                </td>
                <td className='border border-gray-400'>
                  <Input size='xs' type='text' />
                </td>
                <td className='border border-gray-400'>
                  <Input size='xs' type='text' />
                </td>
                <td className='border border-gray-400'>
                  <Input size='xs' type='text' />
                </td>

                <td className='border border-gray-400'>
                  <div className='flex space-x-2'>
                    <Select
                      name=''
                      id=''
                      className='rounded text-black'
                      size='xs'
                    >
                      <option value='pdf'>All</option>
                      <option value='pdf'>All</option>
                      <option value='pdf'>All</option>
                    </Select>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default VerifyServiceInMass;
