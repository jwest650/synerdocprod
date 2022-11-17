import { Input, Select } from '@chakra-ui/react'
import TableAction from './TableAction'

const AdjustVerifiedService = () => {
  let data = [1, 1, 1, 1]

  return (
    <div className='w-full space-y-4 bg-[#F6F8FC] p-5 text-xs text-gray-800 dark:text-white'>
      <section className='flex items-center justify-between capitalize'>
        <div>
          <h1 className='text-2xl font-bold capitalize text-black dark:text-white'>
            Adjusted Verified Service
          </h1>
        </div>

        <div className='flex items-center'>
          <div className='flex'>
            <p>Service Date From:</p>
            <div className='flex '>
              <Input
                placeholder='small size'
                size='xs'
                ml={'3'}
                type={'date'}
              />
            </div>
          </div>

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

          <div className='ml-2 flex items-center space-x-3'>
            <div className='flex space-x-2'>
              <Select name='' id='' className='rounded text-black' size='xs'>
                <option value='pdf'>all patient/Team</option>
                <option value='pdf'>all patient/Team</option>
                <option value='pdf'>all patient/Team</option>
              </Select>
            </div>
          </div>

          <div className='ml-2 flex items-center space-x-3'>
            <div className='flex space-x-2'>
              <Select name='' id='' className='rounded text-black' size='xs'>
                <option value='pdf'>Skilled Nurse</option>
                <option value='pdf'>Skilled Nurse</option>
                <option value='pdf'>Skilled Nurse</option>
              </Select>
            </div>
          </div>

          <div className='ml-2 flex items-center space-x-3'>
            <div className='flex space-x-2'>
              <Select name='' id='' className='rounded text-black' size='xs'>
                <option value='pdf'>Pay all of bill service</option>
                <option value='pdf'>Pay all of bill service</option>
                <option value='pdf'>Pay all of bill service</option>
              </Select>
            </div>
          </div>

          <div>
            <button className='ml-3 rounded border bg-orange-600 px-3 py-1 font-medium text-white'>
              Search
            </button>
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
                  Agency Name
                </th>
                <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                  Payer Name
                </th>
                <th className=' border-l border-gray-400 py-1 px-2  text-left text-xs'></th>
              </tr>
            </thead>
            <tbody>
              <tr className='border border-gray-400 bg-light-blue'>
                <td>
                  <Select
                    size='xs'
                    css={{ border: 'none', backgroundColor: '#eee' }}
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
                    css={{ border: 'none', backgroundColor: '#eee' }}
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
                <td></td>
                <td>
                  <Select
                    size='xs'
                    css={{ border: 'none', backgroundColor: '#eee' }}
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
                    css={{ border: 'none', backgroundColor: '#eee' }}
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
                <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'></td>
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
                    15/12/2022
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    Home Health
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    Tampa Home Health
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'></td>
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
    </div>
  )
}

export default AdjustVerifiedService
