import {
  Button,
  Checkbox,
  Input,
  Select,
  Table,
  TableContainer,
} from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'
import AddPayerModal from './AddPayerModal'
import TableAction from './TableAction'
import { useState } from 'react'
import { BiPlus } from 'react-icons/bi'
import { FcUnlock } from 'react-icons/fc'

const SchedulesDetailListing = () => {
  let data = [1, 1, 1, 1]
  const [openAddPayer, setOpenAddPayer] = useState(false)

  return (
    <div className='verdana13  w-full space-y-4 bg-[#F6F8FC] p-5 text-gray-800 dark:text-white'>
      <section className='flex items-center justify-between capitalize'>
        <div className='flex items-center'>
          <h1 className='verdana18  font-bold capitalize text-black dark:text-white'>
            Schedules
          </h1>
          <button
            className='dark:text-[#E77654px-6 verdana13 ml-3 flex cursor-pointer items-center rounded bg-secondary-color py-[2px] px-3  capitalize text-[#fff]'
            onClick={() => setOpenAddReferral(true)}
          >
            <BiPlus />
            <span className='ml-1'>Add Pay Only</span>
          </button>
        </div>

        <div className='flex items-center'>
          <div className='flex items-center space-x-3'>
            <div className='flex items-center space-x-2'>
              <Select
                name=''
                id=''
                className='input-primary rounded text-black'
                size='xs'
              >
                <option value='pdf'>PDF Summary</option>
                <option value='spreadsheet'>Spreadsheet Summary</option>
              </Select>
              <button className='ml-2 rounded  border bg-secondary-color px-2 text-white'>
                Export
              </button>
            </div>
          </div>
          <div className='ml-3 flex items-center space-x-3'>
            <div className='flex items-center space-x-2'>
              <p>From:</p>
              <input
                className='input-primary'
                placeholder='small size'
                size='xs'
                ml={'3'}
                type={'date'}
              />
              <p>To:</p>
              <input
                className='input-primary'
                placeholder='small size'
                size='xs'
                ml={'3'}
                type={'date'}
              />
            </div>
          </div>
          <div className='flex'>
            <div className='flex '>
              <input
                className='input-primary'
                placeholder='small size'
                size='xs'
                type={'text'}
                ml={3}
              />
            </div>
            <button className='ml-2 rounded  border bg-secondary-color px-2 text-white'>
              Search
            </button>
          </div>
        </div>
      </section>

      <section className='flex justify-between'>
        <div></div>
        <div className='flex'>
          <span className='verdana13 '>
            show activities without a service date attache
          </span>
          <Checkbox>
            <span className='verdana13 '>Payer report Group</span>
          </Checkbox>
          <Select size='xs' className='input-primary'>
            <option value='option1' className='text-gray-800'>
              All
            </option>
            <option value='option2' className='text-gray-800'>
              All
            </option>
            <option value='option3' className='text-gray-800'>
              All
            </option>
          </Select>
        </div>
      </section>

      <section>
        <div>
          <table className=' min-w-full overflow-auto'>
            <thead className='thead-primary'>
              <tr>
                <th className=' th-first'>Patient</th>
                <th className=' th-middle'>Associates</th>
                <th className=' th-middle'>Service</th>
                <th className=' th-middle'>Service Date </th>
                <th className=' th-middle'>Time In</th>
                <th className=' th-middle'>Time Out</th>
                <th className=' th-middle'>Agency</th>
                <th className=' th-middle'>Status</th>
                <th className=' th-middle'>Auth</th>
                <th className=' th-last'></th>
              </tr>
            </thead>
            <tbody>
              <tr className='border border-gray-400 bg-light-blue'>
                <td className='td-primary'>
                  <Select
                    size='xs'
                    css={{ border: 'none', backgroundColor: '#eee' }}
                    className='input-primary shadow outline-none'
                  >
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
                <td className='td-primary'>
                  <Select
                    size='xs'
                    css={{ border: 'none', backgroundColor: '#eee' }}
                    className='input-primary shadow outline-none'
                  >
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
                <td className='td-primary'>
                  <Select
                    size='xs'
                    css={{ border: 'none', backgroundColor: '#eee' }}
                    className='input-primary shadow outline-none'
                  >
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
                <td className='td-primary'></td>
                <td className='td-primary'></td>
                <td className='td-primary'></td>
                <td className='td-primary'>
                  <Select
                    size='xs'
                    css={{ border: 'none', backgroundColor: '#eee' }}
                    className='input-primary shadow outline-none'
                  >
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
                <td className='td-primary'>
                  <Select
                    size='xs'
                    css={{ border: 'none', backgroundColor: '#eee' }}
                    className='input-primary shadow outline-none'
                  >
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
                <td className='td-primary'></td>
                <td className='td-primary'>
                  <div className='flex items-center justify-center text-2xl'>
                    <FcUnlock />
                  </div>
                </td>
              </tr>

              {data.map((data, i) => (
                <tr
                  key={i}
                  className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
                >
                  <td className=' td-primary'>James Gordon</td>
                  <td className=' td-primary'>1.High priority requires</td>
                  <td className=' td-primary'>Tampa Home Health</td>
                  <td className=' td-primary'>10/8/19</td>
                  <td className=' td-primary'></td>
                  <td className=' td-primary'></td>
                  <td className=' td-primary'>Home Health</td>
                  <td className=' td-primary'>
                    <p className='  cursor-pointer   text-green-700 '>
                      Assigned
                    </p>
                  </td>
                  <td className=' td-primary'></td>
                  <td className=' td-primary'>
                    <TableAction />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {/* Modal */}
      <AddPayerModal
        openAddPayer={openAddPayer}
        setOpenAddPayer={setOpenAddPayer}
      />
    </div>
  )
}

export default SchedulesDetailListing
