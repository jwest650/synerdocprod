import { Button, Input, Select } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { FcUnlock } from 'react-icons/fc'
import { RiBook2Fill } from 'react-icons/ri'
import SearchIcon from '../../../assets/images/search.png'

const PatientSchedules = () => {
  let data = [1, 1, 1, 1]

  return (
    <div className='w-full '>
      <section className='flex items-center justify-between capitalize'>
        <div>
          <h1 className='text-2xl font-bold capitalize text-black dark:text-white'>
            Patient Schedules
          </h1>
        </div>

        <div className='flex items-center'>
          <div className='flex'>
            <div className='flex '>
              <Input
                placeholder='small size'
                size='xs'
                ml={'3'}
                type={'date'}
              />
              <Input placeholder='small size' size='xs' type={'date'} ml={3} />
            </div>
          </div>
          <div className='flex items-center'>
            <div className='flex '>
              <Input placeholder='small size' size='xs' type={'text'} ml={3} />
            </div>
            <button className='text-medium ml-3 rounded border bg-secondary-color px-2  text-white'>
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div>
          <table className='mt-2 min-w-full overflow-auto'>
            <thead className='border-b bg-primary-color text-[18px] tracking-wider text-white'>
              <tr>
                <th className=' border-gray-100  pl-2 text-left'></th>
                <th className=' border-gray-100  pl-2 text-left'>
                  Patient Name
                </th>
                <th className=' border-gray-100  pl-2 text-left'>Agency </th>
                <th className=' border-gray-100  pl-2 text-left'>
                  Agency Type
                </th>
                <th className=' border-gray-100  pl-2 text-left'>Admit Date</th>
                <th className=' border-gray-100  pl-2 text-left'>
                  Service Category
                </th>
                <th className=' border-gray-100  pl-2 text-left'>Status</th>
                <th className=' border-gray-100  pl-2 text-left'>
                  Payer Reporting Group
                </th>
                <th className=' border-gray-100  pl-2 text-left'>
                  Service Status
                </th>
                <th className=' border-gray-100  pl-2 text-left'></th>
              </tr>
            </thead>
            <tbody>
              <tr className='bg-light-blue'>
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

                <td className='px-2'>
                  <FcUnlock className='mx-auto h-[20px] w-[20px]' />
                </td>
              </tr>

              {data.map((data, i) => (
                <tr
                  key={i}
                  className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
                >
                  <td className=' max-h-[20px] min-w-[20px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    <RiBook2Fill />
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    <p className=' cursor-pointer text-sm font-bold text-secondary-color underline'>
                      James Gordon
                    </p>
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    1.High priority requires
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'></td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    Tampa Home Health
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    Home Health
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    10/8/19
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    <p className=' cursor-pointer text-sm font-bold text-green-700 '>
                      Active
                    </p>
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    Winn
                  </td>
                  <td className=' max-h-[20px] min-w-[20px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    <Link href={'#'}>
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
