import { Input, Select } from '@chakra-ui/react';
import React from 'react';

const AutomatedServiceVerificationErrors = () => {
  let data = [1, 1, 1, 1];

  return (
    <div className='ar w-full space-y-4 bg-[#F6F8FC] p-5 text-gray-800 dark:text-white'>
      <section className='flex items-center justify-between capitalize'>
        <div>
          <h1 className='text-2xl font-bold capitalize text-black dark:text-white'>
            Transaction Errors
          </h1>
        </div>

        <div className='flex items-center'>
          <div className='ml-2 flex items-center space-x-3'>
            <p>Agency: </p>
            <div className='ml-3 flex w-[150px] space-x-2'>
              <Select name='' id='' className='rounded text-black' size='xs'>
                <option value='pdf'>All </option>
                <option value='pdf'>All </option>
                <option value='pdf'>All </option>
              </Select>
            </div>
          </div>

          <div className='ml-3 flex items-center space-x-5'>
            <div className='my-2 flex '>
              <div>
                <Input placeholder='small size' size='xs' width={300} />
              </div>
              <button className='ml-3 rounded border px-2 text-sm'>
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <table className='min-w-full overflow-auto'>
            <thead className='border-b bg-[#32164A] text-[18px] tracking-wider text-white'>
              <tr>
                <th className=' border-gray-100  pl-2 text-left'>
                  Patient Name
                </th>
                <th className=' border-gray-100  pl-2 text-left'>Payer Name</th>
                <th className=' border-gray-100  pl-2 text-left'>
                  Associate Name
                </th>
                <th className=' border-gray-100  pl-2 text-left'>
                  Transaction
                </th>
                <th className=' border-gray-100  pl-2 text-left'>Error</th>
                <th className=' border-gray-100  pl-2 text-left'>Solution</th>
                <th className=' border-gray-100  pl-2 text-left'>
                  Service Date
                </th>
                <th className=' border-gray-100  pl-2 text-left'>
                  Time In/Out
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='bg-[#6b3e9280]'>
                <td>
                  <Select size='xs'>
                    <option value='option1' className='text-gray-800'>
                      All 1
                    </option>
                    <option value='option2' className='text-gray-800'>
                      All 2
                    </option>
                    <option value='option3' className='text-gray-800'>
                      All 3
                    </option>
                  </Select>
                </td>
                <td>
                  <Select size='xs'>
                    <option value='option1' className='text-gray-800'>
                      All 1
                    </option>
                    <option value='option2' className='text-gray-800'>
                      All 2
                    </option>
                    <option value='option3' className='text-gray-800'>
                      All 3
                    </option>
                  </Select>
                </td>
                <td>
                  <Select size='xs'>
                    <option value='option1' className='text-gray-800'>
                      All 1
                    </option>
                    <option value='option2' className='text-gray-800'>
                      All 2
                    </option>
                    <option value='option3' className='text-gray-800'>
                      All 3
                    </option>
                  </Select>
                </td>
                <td></td>
                <td>
                  <Select size='xs'>
                    <option value='option1' className='text-gray-800'>
                      All 1
                    </option>
                    <option value='option2' className='text-gray-800'>
                      All 2
                    </option>
                    <option value='option3' className='text-gray-800'>
                      All 3
                    </option>
                  </Select>
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              {data.map((data, i) => (
                <tr
                  key={i}
                  className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
                >
                  <td className='border border-gray-400'>Nick Jones</td>
                  <td className='border border-gray-400'>James Gordon</td>
                  <td className='border border-gray-400'>Routine</td>
                  <td className='border border-gray-400'>23344</td>
                  <td className='border border-gray-400'>Home Health</td>
                  <td className='border border-gray-400'>Tampa Home Health</td>
                  <td className='border border-gray-400'>15/12/2022</td>
                  <td className='border border-gray-400'></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AutomatedServiceVerificationErrors;
