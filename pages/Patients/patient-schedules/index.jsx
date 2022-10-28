import { Button, Input, Select } from '@chakra-ui/react';

const PatientSchedules = () => {
  let data = [1, 1, 1, 1];

  return (
    <div className='w-full '>
      <section className='flex items-center justify-between capitalize'>
        <div>
          <h1 className='text-2xl font-bold capitalize text-black dark:text-white'>
            Patient Schedules
          </h1>
        </div>

        <div className='flex items-center'>
          <div className='flex'>
            <div className='flex '>
              <Input
                placeholder='small size'
                size='xs'
                ml={'3'}
                type={'date'}
              />
              <Input placeholder='small size' size='xs' type={'date'} ml={3} />
            </div>
          </div>
          <div className='flex items-center'>
            <div className='flex '>
              <Input placeholder='small size' size='xs' type={'text'} ml={3} />
            </div>
            <button className='ml-3 rounded border px-2 text-sm'>Search</button>
          </div>
        </div>
      </section>

      <section>
        <div>
          <table className='mt-2 min-w-full overflow-auto'>
            <thead className='border-b bg-[#32164A] text-[18px] tracking-wider text-white'>
              <tr>
                <th className=' border-gray-100  pl-2 text-left'></th>
                <th className=' border-gray-100  pl-2 text-left'>
                  Patient Name
                </th>
                <th className=' border-gray-100  pl-2 text-left'>Agency </th>
                <th className=' border-gray-100  pl-2 text-left'>
                  Agency Type
                </th>
                <th className=' border-gray-100  pl-2 text-left'>Admit Date</th>
                <th className=' border-gray-100  pl-2 text-left'>
                  Service Category
                </th>
                <th className=' border-gray-100  pl-2 text-left'>Status</th>
                <th className=' border-gray-100  pl-2 text-left'>
                  Payer Reporting Group
                </th>
                <th className=' border-gray-100  pl-2 text-left'>
                  Service Status
                </th>
                <th className=' border-gray-100  pl-2 text-left'></th>
              </tr>
            </thead>
            <tbody>
              <tr className='bg-[#6b3e9280]'>
                <td></td>
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
              </tr>

              {data.map((data, i) => (
                <tr
                  key={i}
                  className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
                >
                  <td className='border border-gray-400'></td>
                  <td className='border border-gray-400'>James Gordon</td>
                  <td className='border border-gray-400'>
                    1.High priority requires
                  </td>
                  <td className='border border-gray-400'></td>
                  <td className='border border-gray-400'>Tampa Home Health</td>
                  <td className='border border-gray-400'>Home Health</td>
                  <td className='border border-gray-400'>10/8/19</td>
                  <td className='border border-gray-400'>Active</td>
                  <td className='border border-gray-400'>Winn</td>
                  <td className='border border-gray-400'>+</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default PatientSchedules;
