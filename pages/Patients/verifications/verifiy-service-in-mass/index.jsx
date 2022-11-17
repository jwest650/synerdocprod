import { Checkbox, Input, Select } from '@chakra-ui/react'
import React from 'react'
import { BiNotepad } from 'react-icons/bi'
import { GrEdit } from 'react-icons/gr'

const VerifyServiceInMass = () => {
  let data = [1, 1, 1, 1]

  return (
    <div className='w-full space-y-4 bg-[#F6F8FC] p-5 text-xs text-gray-800 dark:text-white'>
      <div className='flex items-center'>
        <h1 className='text-2xl font-bold capitalize text-black dark:text-white'>
          Verify Service in mass
        </h1>
        <button className=' ml-3 rounded border bg-secondary-color py-1 px-3 font-medium text-white'>
          Verify All Checked
        </button>
        <button className=' ml-3 rounded border bg-secondary-color py-1 px-3 font-medium text-white'>
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
            <button className=' ml-3 rounded border bg-secondary-color py-1 px-3 font-medium text-white'>
              Search
            </button>
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
        <table className='min-w-full overflow-auto text-xs'>
          <thead className='border bg-primary-color text-[18px] tracking-wider text-white'>
            <tr className='border border-primary-color'>
              <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'></th>
              <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'></th>
              <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'></th>
              <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'></th>
              <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                Associate Name
              </th>
              <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                Service
              </th>
              <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                Service Date
              </th>
              <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                Time In
              </th>
              <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                Time Out
              </th>
              <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                Reimb Type
              </th>
              <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                Travel Duration
              </th>
              <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                Miles
              </th>
              <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                Pay
              </th>
              <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                Unites
              </th>
              <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                Rate
              </th>
              <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                Bill
              </th>
              <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                Units
              </th>
              <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                Reimb Rate
              </th>
              <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                Charge Rate
              </th>
              <th className=' border-l border-gray-400 py-1 px-2  text-left text-xs'>
                Payer
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, i) => (
              <tr
                key={i}
                className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
              >
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                  <Checkbox defaultChecked></Checkbox>
                </td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                  <GrEdit />
                </td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                  <div className='flex space-x-2'>
                    <Select className='rounded text-black' size='xs'>
                      <option value='pdf'></option>
                      <option value='pdf'></option>
                      <option value='pdf'></option>
                    </Select>
                  </div>
                </td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                  <BiNotepad />
                </td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                  Nick Jones
                </td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
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
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                  <Input size='xs' type='date' />
                </td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                  <Input size='xs' type='text' />
                </td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                  <Input size='xs' type='text' />
                </td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
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
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                  <Input size='xs' type='text' />
                </td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                  <Input size='xs' type='text' />
                </td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                  <Checkbox defaultChecked></Checkbox>
                </td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                  <Input size='xs' type='text' />
                </td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                  <Input size='xs' type='text' />
                </td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                  <Checkbox defaultChecked></Checkbox>
                </td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                  <Input size='xs' type='text' />
                </td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                  <Input size='xs' type='text' />
                </td>
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                  <Input size='xs' type='text' />
                </td>

                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
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
  )
}

export default VerifyServiceInMass
