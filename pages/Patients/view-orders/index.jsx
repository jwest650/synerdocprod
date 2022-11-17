import { Input, Checkbox, Select } from '@chakra-ui/react'
import { BsFillCalendarDateFill } from 'react-icons/bs'

const ViewOrders = () => {
  let data = [1, 1, 1, 1]
  return (
    <div className='w-full '>
      <div className='space-y-5'>
        <section className='flex items-center justify-between space-x-5'>
          <div className='flex items-center space-x-5'>
            <h1 className='text-2xl font-bold capitalize text-black dark:text-white'>
              Orders
            </h1>
            <button className='mx-3 ml-2  rounded border bg-secondary-color px-2 font-medium text-white'>
              Send
            </button>
            <Checkbox>Consolidate Physician Intern orders</Checkbox>
          </div>

          <div className='flex items-center space-x-5'>
            <div className='my-2 flex '>
              <div>
                <Input placeholder='small size' size='xs' />
              </div>
              <button className='ml-2 rounded  border bg-secondary-color px-2 font-medium text-white'>
                Search
              </button>
            </div>
          </div>
        </section>
        <div className='flex items-center space-x-5'>
          <div className='flex '>
            <p>Filter By Agency:</p>
            <div>
              <Select size='xs'>
                <option>Homecare center</option>
                <option>Homecare center</option>
                <option>Homecare center</option>
              </Select>
            </div>
          </div>
        </div>
        <hr />
        <section>
          <div>
            <table className=' min-w-full overflow-auto text-xs'>
              <thead className='border bg-primary-color text-[18px] tracking-wider text-white'>
                <tr className='border border-primary-color '>
                  <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                    Print
                  </th>
                  <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                    Fax
                  </th>
                  <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                    Email
                  </th>
                  <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                    Patient Name
                  </th>
                  <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                    Team
                  </th>
                  <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                    Types
                  </th>
                  <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                    Cert From
                  </th>
                  <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                    To
                  </th>
                  <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                    Associate
                  </th>
                  <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                    Status
                  </th>
                  <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                    Physician
                  </th>
                  <th className=' border-l border-gray-400 py-1 px-2  text-left text-xs'>
                    Sent
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className='border border-gray-400 bg-light-blue'>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <Select
                      size='xs'
                      css={{ border: 'none', backgroundColor: '#eee' }}
                      className='bg-gray-400 shadow outline-none'
                    >
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
                    <Select
                      size='xs'
                      css={{ border: 'none', backgroundColor: '#eee' }}
                      className='bg-gray-400 shadow outline-none'
                    >
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
                    <Select
                      size='xs'
                      css={{ border: 'none', backgroundColor: '#eee' }}
                      className='bg-gray-400 shadow outline-none'
                    >
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
                    <Select
                      size='xs'
                      css={{ border: 'none', backgroundColor: '#eee' }}
                      className='bg-gray-400 shadow outline-none'
                    >
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
                    <td className=' max-h-[20px] min-w-[20px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                      <Checkbox></Checkbox>
                    </td>
                    <td className=' max-h-[20px] min-w-[20px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                      <Checkbox></Checkbox>
                    </td>
                    <td className=' max-h-[20px] min-w-[20px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                      <Checkbox></Checkbox>
                    </td>
                    <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                      <p className=' cursor-pointer text-sm font-bold text-secondary-color underline'>
                        Amess Alicia
                      </p>
                    </td>
                    <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                      Accra
                    </td>
                    <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                      Wound care
                    </td>
                    <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                      23/4/2022 8:43 AM
                    </td>
                    <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                      23/4/2022 8:43 AM
                    </td>
                    <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                      Printed and Mailed
                    </td>
                    <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                      Dickson Janet
                    </td>
                    <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                      Dickson Janet
                    </td>
                    <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                      23/4/2022 8:43 AM
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='flex justify-end p-5'>
            <button className='rounded border  bg-secondary-color px-2 text-white'>
              Save
            </button>
            <button className='ml-3 rounded  border bg-secondary-color px-2 text-white'>
              Cancel
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ViewOrders
