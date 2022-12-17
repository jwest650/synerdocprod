import { Input, Select } from '@chakra-ui/react'
import TableAction from './TableAction'

const AdjustVerifiedService = () => {
  let data = [1, 1, 1, 1]

  return (
    <div className='verdana13 w-full space-y-4 bg-[#F6F8FC] p-5  text-gray-800 dark:text-white'>
      <section className='flex items-center justify-between capitalize'>
        <div>
          <h1 className='verdana18  font-bold capitalize text-black dark:text-white'>
            Adjusted Verified Service
          </h1>
        </div>

        <div className='flex items-center'>
          <div className='flex'>
            <p>Service Date From:</p>
            <div className='flex '>
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
            <p>To:</p>
            <div className='flex '>
              <input
                className='input-primary'
                placeholder='small size'
                size='xs'
                ml={'3'}
                type={'date'}
              />
            </div>
          </div>

          <div className='ml-2 flex items-center space-x-3'>
            <div className='flex space-x-2'>
              <Select
                name=''
                id=''
                className='input-primary rounded text-black'
                size='xs'
              >
                <option value='pdf'>all patient/Team</option>
                <option value='pdf'>all patient/Team</option>
                <option value='pdf'>all patient/Team</option>
              </Select>
            </div>
          </div>

          <div className='ml-2 flex items-center space-x-3'>
            <div className='flex space-x-2'>
              <Select
                name=''
                id=''
                className='input-primary rounded text-black'
                size='xs'
              >
                <option value='pdf'>Skilled Nurse</option>
                <option value='pdf'>Skilled Nurse</option>
                <option value='pdf'>Skilled Nurse</option>
              </Select>
            </div>
          </div>

          <div className='ml-2 flex items-center space-x-3'>
            <div className='flex space-x-2'>
              <Select
                name=''
                id=''
                className='input-primary rounded text-black'
                size='xs'
              >
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
          <table className='verdana13 min-w-full overflow-auto '>
            <thead className='thead-primary'>
              <tr>
                <th className=' th-first'>Patient Name</th>
                <th className=' th-middle'>Associate Name</th>
                <th className=' th-middle'>Service</th>
                <th className=' th-middle'>Service Date</th>
                <th className=' th-middle'>Time In</th>
                <th className=' th-middle'>Time Out</th>
                <th className=' th-middle'>Agency Name</th>
                <th className=' th-middle'>Payer Name</th>
                <th className=' th-last '></th>
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
                <td className='td-primary'></td>
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
                <td className=' td-primary'></td>
              </tr>
              {data.map((data, i) => (
                <tr
                  key={i}
                  className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
                >
                  <td className=' td-primary'>Nick Jones</td>
                  <td className=' td-primary'>James Gordon</td>
                  <td className=' td-primary'>Routine</td>
                  <td className=' td-primary'>15/12/2022</td>
                  <td className=' td-primary'>Home Health</td>
                  <td className=' td-primary'>Tampa Home Health</td>
                  <td className=' td-primary'></td>
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
    </div>
  )
}

export default AdjustVerifiedService
