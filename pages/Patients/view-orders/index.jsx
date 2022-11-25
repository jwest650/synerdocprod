import { Input, Checkbox, Select } from '@chakra-ui/react'
import { BsFillCalendarDateFill } from 'react-icons/bs'

const ViewOrders = () => {
  let data = [1, 1, 1, 1]
  return (
    <div className='verdana13 w-full '>
      <div className='space-y-5'>
        <section className='flex items-center justify-between space-x-5'>
          <div className='flex items-center space-x-5'>
            <h1 className='verdana18 font-bold capitalize text-black dark:text-white'>
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
              <thead className='thead-primary'>
                <tr>
                  <th className=' th-first'>Print</th>
                  <th className=' th-middle'>Fax</th>
                  <th className=' th-middle'>Email</th>
                  <th className=' th-middle'>Patient Name</th>
                  <th className=' th-middle'>Team</th>
                  <th className=' th-middle'>Types</th>
                  <th className=' th-middle'>Cert From</th>
                  <th className=' th-middle'>To</th>
                  <th className=' th-middle'>Associate</th>
                  <th className=' th-middle'>Status</th>
                  <th className=' th-middle'>Physician</th>
                  <th className=' th-last'>Sent</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border border-gray-400 bg-light-blue'>
                  <td className='td-primary'></td>
                  <td className='td-primary'></td>
                  <td className='td-primary'></td>
                  <td className='td-primary'>
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
                  <td className='td-primary'>
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
                  <td className='td-primary'></td>
                  <td className='td-primary'></td>
                  <td className='td-primary'></td>
                  <td className='td-primary'>
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
                  <td className='td-primary'></td>
                  <td className='td-primary'>
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
                  <td className='td-primary'></td>
                </tr>
                {data.map((data, i) => (
                  <tr
                    key={i}
                    className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
                  >
                    <td className=' td-primary'>
                      <Checkbox></Checkbox>
                    </td>
                    <td className=' td-primary'>
                      <Checkbox></Checkbox>
                    </td>
                    <td className=' td-primary'>
                      <Checkbox></Checkbox>
                    </td>
                    <td className=' td-primary'>
                      <p className=' cursor-pointer  text-secondary-color underline'>
                        Amess Alicia
                      </p>
                    </td>
                    <td className=' td-primary'>Accra</td>
                    <td className=' td-primary'>Wound care</td>
                    <td className=' td-primary'>23/4/2022 8:43 AM</td>
                    <td className=' td-primary'>23/4/2022 8:43 AM</td>
                    <td className=' td-primary'>Printed and Mailed</td>
                    <td className=' td-primary'>Dickson Janet</td>
                    <td className=' td-primary'>Dickson Janet</td>
                    <td className=' td-primary'>23/4/2022 8:43 AM</td>
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
