import { Button, Checkbox, Input, Select } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { BsSearch } from 'react-icons/bs'
import SearchIcon from '../../../assets/images/search.png'

const VerifiedServices = () => {
  let data = [1, 1, 1, 1]
  return (
    <div className='verdana13  w-full space-y-4 bg-[#F6F8FC] p-5 text-gray-800 dark:text-white'>
      <section className='flex items-center justify-between capitalize'>
        <div>
          <h1 className='verdana18  font-bold capitalize text-black dark:text-white'>
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
            <thead className='thead-primary'>
              <tr>
                <th className='th-first'>Patient</th>
                <th className='th-middle'>Associates</th>
                <th className='th-middle'>Service</th>
                <th className='th-middle'>Service Date </th>
                <th className='th-middle'>Time In</th>
                <th className='th-middle'>Time Out</th>
                <th className='th-middle'>Payer Name</th>
                <th className='th-middle'>Status</th>
                <th className=' th-last'></th>
              </tr>
            </thead>
            <tbody>
              <tr className='border border-gray-400 bg-light-blue'>
                <td className='td-primary'>
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
                <td className='td-primary'>
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
                <td className='td-primary'>
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
                <td className='td-primary'></td>
                <td className='td-primary'></td>
                <td className='td-primary'></td>
                <td className='td-primary'>
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
                <td className='td-primary'>
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
                <td className='td-primary'></td>
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
                    <p className=' cursor-pointer  text-green-700'>Verified</p>
                  </td>
                  <td className=' td-primary'>
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
