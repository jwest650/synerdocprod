import { Input, Select } from '@chakra-ui/react'
import React from 'react'

const AutomatedServiceVerificationErrors = () => {
  let data = [1, 1, 1, 1]

  return (
    <div className='verdana13  w-full space-y-4 bg-[#F6F8FC] p-5 text-gray-800 dark:text-white'>
      <section className='flex items-center justify-between capitalize'>
        <div>
          <h1 className='verdana18  font-bold capitalize text-black dark:text-white'>
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
              <button className='ml-3 rounded border bg-secondary-color px-2 text-sm font-medium text-white'>
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <table className='min-w-full overflow-auto text-xs'>
            <thead className='border bg-primary-color text-[18px] tracking-wider text-white'>
              <tr className='border border-primary-color'>
                <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                  Patient Name
                </th>
                <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                  Payer Name
                </th>
                <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                  Associate Name
                </th>
                <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                  Transaction
                </th>
                <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                  Error
                </th>
                <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                  Solution
                </th>
                <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                  Service Date
                </th>
                <th className=' border-l border-gray-400 py-1 px-2  text-left text-xs'>
                  Time In/Out
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='border border-primary-color bg-light-blue'>
                <td>
                  <Select
                    size='xs'
                    css={{ backgroundColor: '#eee', border: 'none' }}
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
                    css={{ backgroundColor: '#eee', border: 'none' }}
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
                    css={{ backgroundColor: '#eee', border: 'none' }}
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
                  <Select
                    size='xs'
                    css={{ backgroundColor: '#eee', border: 'none' }}
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
              </tr>
              {data.map((data, i) => (
                <tr
                  key={i}
                  className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
                >
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    Nick Jones
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    James Gordon
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    Routine
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    23344
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    Home Health
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    Tampa Home Health
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    15/12/2022
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default AutomatedServiceVerificationErrors
