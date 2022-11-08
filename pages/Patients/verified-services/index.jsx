import { Button, Checkbox, Input, Select } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { BsSearch } from 'react-icons/bs'
import SearchIcon from '../../../assets/images/search.png'

const VerifiedServices = () => {
  let data = [1, 1, 1, 1]
  return (
    <div className='ar w-full space-y-4 bg-[#F6F8FC] p-5 text-gray-800 dark:text-white'>
      <section className='flex items-center justify-between capitalize'>
        <div>
          <h1 className='text-2xl font-bold capitalize text-black dark:text-white'>
            Verified Services
          </h1>
        </div>

        <div className='flex items-center space-x-3'>
          <div className='flex space-x-2'>
            <Select size={'xs'} name='' id='' className='rounded text-black'>
              <option value='pdf'>PDF Summary</option>
              <option value='spreadsheet'>Spreadsheet Summary</option>
            </Select>
            <button className='rounded border  bg-secondary-color px-2 font-medium text-white'>
              Export
            </button>
          </div>
        </div>
      </section>

      <section className='flex items-center justify-end'>
        <div className='flex justify-between'>
          <label htmlFor='#'>Service start Date:</label>
          <div className='flex '>
            <Input placeholder='small size' size='xs' type={'date'} />
          </div>
        </div>

        <div className='flex justify-between'>
          <label htmlFor='#'>To:</label>
          <div className='flex '>
            <Input placeholder='small size' size='xs' type={'date'} />
          </div>
        </div>

        <div className='flex justify-between'>
          <label htmlFor='#'>Verification Date From:</label>
          <div className='flex '>
            <Input placeholder='small size' size='xs' type={'date'} />
          </div>
        </div>

        <div className='flex justify-between'>
          <label htmlFor='#'>To:</label>
          <div className='flex '>
            <Input placeholder='small size' size='xs' type={'date'} />
          </div>
        </div>

        <div className='ml-3 flex items-center space-x-5'>
          <div className='my-2 flex items-center'>
            <div>
              <Input placeholder='small size' size='xs' />
            </div>
            <button className='ml-3 rounded  border bg-orange-600 px-2 font-medium text-white'>
              Search
            </button>
          </div>
        </div>
      </section>

      <section className='flex items-center justify-end '>
        <Checkbox defaultChecked className='text-xs' size={'xs'}>
          Bill Only
        </Checkbox>
        <Checkbox defaultChecked className='text-xs' size={'xs'}>
          Pay Only{' '}
        </Checkbox>
        <Checkbox defaultChecked className='text-xs' size={'xs'}>
          Auto Verified Only{' '}
        </Checkbox>
        <Checkbox defaultChecked className='text-xs' size={'xs'}>
          Include Attachments
        </Checkbox>
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
                <th className=' border-gray-100  pl-2 text-left'>Payer Name</th>
                <th className=' border-gray-100  pl-2 text-left'>Status</th>
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
                    <p className=' cursor-pointer text-sm font-bold text-green-700'>
                      Verified
                    </p>
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

export default VerifiedServices
