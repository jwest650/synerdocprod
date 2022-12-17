import { Button, Input, Select, Tooltip } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { FcUnlock } from 'react-icons/fc'
import { RiBook2Fill } from 'react-icons/ri'
import SearchIcon from '../../../assets/images/search.png'
import CustomToolTipLabel from './components/CustomToolTipLabel'
import MoreInfo from './components/MoreInfo'

const PatientSchedules = () => {
  let data = [1, 1, 1, 1]

  return (
    <div className='verdana13 w-full '>
      <section className='flex items-center justify-between capitalize'>
        <div>
          <h1 className='verdana18 font-bold capitalize text-black dark:text-white'>
            Patient Schedules
          </h1>
        </div>

        <div className='flex items-center'>
          <div className='flex'>
            <div className='flex '>
              <input
                className='input-primary'
                placeholder='small size'
                size='xs'
                ml={'3'}
                type={'date'}
              />
              <input
                className='input-primary'
                placeholder='small size'
                size='xs'
                type={'date'}
                ml={3}
              />
            </div>
          </div>
          <div className='flex items-center'>
            <div className='flex '>
              <input
                className='input-primary'
                placeholder='small size'
                size='xs'
                type={'text'}
                ml={3}
              />
            </div>
            <button className='text-medium ml-3 rounded border bg-secondary-color px-2  text-white'>
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div>
          <table className='mt-2 min-w-full overflow-auto text-xs'>
            <thead className='thead-primary'>
              <tr>
                <th className=' th-first'></th>
                <th className=' th-middle'>Patient Name</th>
                <th className=' th-middle'>Agency </th>
                <th className=' th-middle'>Agency Type</th>
                <th className=' th-middle'>Admit Date</th>
                <th className=' th-middle'>Service Category</th>
                <th className=' th-middle'>Status</th>
                <th className=' th-middle'>Payer Reporting Group</th>
                <th className=' th-middle'>Service Status</th>
                <th className=' th-last'></th>
              </tr>
            </thead>
            <tbody>
              <tr className='border border-gray-400 bg-light-blue'>
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

                <td className='px-2'>
                  <FcUnlock className='mx-auto h-[20px] w-[20px]' />
                </td>
              </tr>

              {data.map((data, i) => (
                <tr
                  key={i}
                  className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
                >
                  <td className=' td-primary'>
                    <Tooltip
                      label={
                        <CustomToolTipLabel>
                          <MoreInfo />
                        </CustomToolTipLabel>
                      }
                      aria-label='A tooltip'
                      placement='right'
                      bg='#c6d8ffe1'
                      color='black'
                    >
                      <span>
                        <RiBook2Fill />
                      </span>
                    </Tooltip>
                  </td>
                  <td className=' td-primary'>
                    <Link href={'/Patients/patient-schedules/1'}>
                      <p className=' cursor-pointer text-secondary-color underline'>
                        James Gordon
                      </p>
                    </Link>
                  </td>
                  <td className=' td-primary'>1.High priority requires</td>
                  <td className=' td-primary'></td>
                  <td className=' td-primary'>Tampa Home Health</td>
                  <td className=' td-primary'>Home Health</td>
                  <td className=' td-primary'>10/8/19</td>
                  <td className=' td-primary'>
                    <p className=' cursor-pointer  text-green-700 '>Active</p>
                  </td>
                  <td className=' td-primary'>Winn</td>
                  <td className=' max-h-[20px] min-w-[20px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    <Link href={'/Patients/patient-schedules/1'}>
                      <Image
                        src={SearchIcon}
                        alt='icon'
                        width={20}
                        height={20}
                      />
                    </Link>
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

export default PatientSchedules
