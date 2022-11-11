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
    <div className='ar w-full space-y-4 bg-[#F6F8FC] p-5 text-gray-800 dark:text-white'>
      <section className='flex items-center justify-between capitalize'>
        <div className='flex items-center'>
          <h1 className='text-2xl font-bold capitalize text-black dark:text-white'>
            Schedules
          </h1>
          <button
            className='dark:text-[#E77654px-6 ml-3 flex cursor-pointer items-center rounded bg-secondary-color py-1 px-3 text-sm capitalize text-[#fff]'
            onClick={() => setOpenAddReferral(true)}
          >
            <BiPlus />
            <span className='ml-1'>Add Pay Only</span>
          </button>
        </div>

        <div className='flex items-center'>
          <div className='flex items-center space-x-3'>
            <div className='flex items-center space-x-2'>
              <Select name='' id='' className='rounded text-black' size='xs'>
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
              <Input
                placeholder='small size'
                size='xs'
                ml={'3'}
                type={'date'}
              />
              <p>To:</p>
              <Input
                placeholder='small size'
                size='xs'
                ml={'3'}
                type={'date'}
              />
            </div>
          </div>
          <div className='flex'>
            <div className='flex '>
              <Input placeholder='small size' size='xs' type={'text'} ml={3} />
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
          <span className='text-sm'>
            show activities without a service date attache
          </span>
          <Checkbox>
            <span className='text-sm'>Payer report Group</span>
          </Checkbox>
          <Select size='xs'>
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
            <thead className='border-b bg-primary-color text-[18px] tracking-wider text-white'>
              <tr>
                <th className=' border-gray-100  pl-2 text-left'>Patient</th>
                <th className=' border-gray-100  pl-2 text-left'>Associates</th>
                <th className=' border-gray-100  pl-2 text-left'>Service</th>
                <th className=' border-gray-100  pl-2 text-left'>
                  Service Date{' '}
                </th>
                <th className=' border-gray-100  pl-2 text-left'>Time In</th>
                <th className=' border-gray-100  pl-2 text-left'>Time Out</th>
                <th className=' border-gray-100  pl-2 text-left'>Agency</th>
                <th className=' border-gray-100  pl-2 text-left'>Status</th>
                <th className=' border-gray-100  pl-2 text-left'>Auth</th>
                <th className=' border-gray-100  pl-2 text-left'></th>
              </tr>
            </thead>
            <tbody>
              <tr className='bg-light-blue'>
                <td>
                  <Select
                    size='xs'
                    css={{ border: 'none' }}
                    className='shadow outline-none'
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
                <td>
                  <Select
                    size='xs'
                    css={{ border: 'none' }}
                    className='shadow outline-none'
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
                <td>
                  <Select
                    size='xs'
                    css={{ border: 'none' }}
                    className='shadow outline-none'
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
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <Select
                    size='xs'
                    css={{ border: 'none' }}
                    className='shadow outline-none'
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
                <td>
                  <Select
                    size='xs'
                    css={{ border: 'none' }}
                    className='shadow outline-none'
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
                <td></td>
                <td>
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
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    James Gordon
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    1.High priority requires
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    Tampa Home Health
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    10/8/19
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'></td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'></td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    Home Health
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    <p className=' cursor-pointer text-sm font-bold text-green-700 '>
                      Assigned
                    </p>
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'></td>
                  <td className=' max-h-[20px] min-w-[100px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
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
