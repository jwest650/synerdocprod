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
            <thead className='thead-primary'>
              <tr>
                <th className='th-first'>Patient Name</th>
                <th className='th-middle'>Payer Name</th>
                <th className='th-middle'>Associate Name</th>
                <th className='th-middle'>Transaction</th>
                <th className='th-middle'>Error</th>
                <th className='th-middle'>Solution</th>
                <th className='th-middle'>Service Date</th>
                <th className='th-last'>Time In/Out</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border border-primary-color bg-light-blue'>
                <td className='td-primary'>
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
                <td className='td-primary'>
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
                <td className='td-primary'>
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
                <td className='td-primary'></td>
                <td className='td-primary'>
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
                <td className='td-primary'></td>
                <td className='td-primary'></td>
                <td className='td-primary'></td>
              </tr>
              {data.map((data, i) => (
                <tr
                  key={i}
                  className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
                >
                  <td className=' td-primary'>Nick Jones</td>
                  <td className=' td-primary'>James Gordon</td>
                  <td className=' td-primary'>Routine</td>
                  <td className=' td-primary'>23344</td>
                  <td className=' td-primary'>Home Health</td>
                  <td className=' td-primary'>Tampa Home Health</td>
                  <td className=' td-primary'>15/12/2022</td>
                  <td className=' td-primary'></td>
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
