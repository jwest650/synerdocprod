import { Input, Checkbox, Select } from '@chakra-ui/react';
import { BsFillCalendarDateFill } from 'react-icons/bs';

const ViewOrders = () => {
  let data = [1, 1, 1, 1];
  return (
    <div className='w-full '>
      <div className='space-y-5'>
        <section className='flex items-center justify-between space-x-5'>
          <div className='flex items-center space-x-5'>
            <h1 className='text-2xl font-bold capitalize text-black dark:text-white'>
              Orders
            </h1>
            <button className='mx-3 ml-2  rounded border px-2'>Send</button>
            <Checkbox>Consolidate Physician Intern orders</Checkbox>
          </div>

          <div className='flex items-center space-x-5'>
            <div className='my-2 flex '>
              <div>
                <Input placeholder='small size' size='xs' />
              </div>
              <button className='ml-2 rounded  border px-2'>Search</button>
            </div>
          </div>
        </section>
        <hr />
        <section>
          <div>
            <table className=' min-w-full overflow-auto'>
              <thead className='border-b bg-[#32164A] text-[18px] tracking-wider text-white'>
                <tr>
                  <th className=' border-gray-100  pl-2 text-left'>Print</th>
                  <th className=' border-gray-100  pl-2 text-left'>Fax</th>
                  <th className=' border-gray-100  pl-2 text-left'>Email</th>
                  <th className=' border-gray-100  pl-2 text-left'>
                    Patient Name
                  </th>
                  <th className=' border-gray-100  pl-2 text-left'>Team</th>
                  <th className=' border-gray-100  pl-2 text-left'>Types</th>
                  <th className=' border-gray-100  pl-2 text-left'>
                    Cert From
                  </th>
                  <th className=' border-gray-100  pl-2 text-left'>To</th>
                  <th className=' border-gray-100  pl-2 text-left'>
                    Associate
                  </th>
                  <th className=' border-gray-100  pl-2 text-left'>Status</th>
                  <th className=' border-gray-100  pl-2 text-left'>
                    Physician
                  </th>
                  <th className=' border-gray-100  pl-2 text-left'>Sent</th>
                </tr>
              </thead>
              <tbody>
                <tr className='bg-[#6b3e9280]'>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <Select size='xs'>
                      <option value='option1' className='text-gray-800'>
                        All
                      </option>
                      <option value='option1' className='text-gray-800'>
                        All
                      </option>
                      <option value='option1' className='text-gray-800'>
                        All
                      </option>
                    </Select>
                  </td>
                  <td>
                    <Select size='xs'>
                      <option value='option1' className='text-gray-800'>
                        All
                      </option>
                      <option value='option1' className='text-gray-800'>
                        All
                      </option>
                      <option value='option1' className='text-gray-800'>
                        All
                      </option>
                    </Select>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <Select size='xs'>
                      <option value='option1' className='text-gray-800'>
                        All
                      </option>
                      <option value='option1' className='text-gray-800'>
                        All
                      </option>
                      <option value='option1' className='text-gray-800'>
                        All
                      </option>
                    </Select>
                  </td>
                  <td></td>
                  <td>
                    <Select size='xs'>
                      <option value='option1' className='text-gray-800'>
                        All
                      </option>
                      <option value='option1' className='text-gray-800'>
                        All
                      </option>
                      <option value='option1' className='text-gray-800'>
                        All
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
                    <td className='border border-gray-400'>
                      <Checkbox></Checkbox>
                    </td>
                    <td className='border border-gray-400'>
                      <Checkbox></Checkbox>
                    </td>
                    <td className='border border-gray-400'>
                      <Checkbox></Checkbox>
                    </td>
                    <td className='border border-gray-400'>Amess Alicia</td>
                    <td className='border border-gray-400'>Accra</td>
                    <td className='border border-gray-400'>Wound care</td>
                    <td className='border border-gray-400'>
                      23/4/2022 8:43 AM
                    </td>
                    <td className='border border-gray-400'>
                      23/4/2022 8:43 AM
                    </td>
                    <td className='border border-gray-400'>
                      Printed and Mailed
                    </td>
                    <td className='border border-gray-400'>Dickson Janet</td>
                    <td className='border border-gray-400'>Dickson Janet</td>
                    <td className='border border-gray-400'>
                      23/4/2022 8:43 AM
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='flex justify-end p-5'>
            <button className='rounded border  px-2'>Save</button>
            <button className='ml-3 rounded  border px-2'>Cancel</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ViewOrders;
