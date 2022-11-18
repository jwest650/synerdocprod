import { Input, Select, Tooltip } from '@chakra-ui/react'
import Link from 'next/link'
import { BiPlus } from 'react-icons/bi'
import { RiBook2Fill } from 'react-icons/ri'
import SearchIcon from '../../../assets/images/search.png'
import Image from 'next/image'
import { FcUnlock } from 'react-icons/fc'
import CustomToolTipLabel from './components/CustomToolTipLabel'
import MoreInfo from './components/MoreInfo'

const PatientsEncounters = () => {
  let data = [1, 1, 1, 1]

  return (
    <div className='verdana13 w-full '>
      <section className='flex items-center justify-between capitalize'>
        <div className='flex items-center'>
          <h1 className='verdana18  font-bold capitalize text-black dark:text-white'>
            Patient Encounters
          </h1>
          <Link href={'/Patients/add-referral'}>
            <button className='dark:text-[#E77654px-6 ml-3 flex cursor-pointer items-center rounded bg-orange-600 py-[2px] px-3 text-sm capitalize text-[#fff]'>
              <BiPlus />
              <span className='ml-1'>Add Referal/Patient</span>
            </button>
          </Link>

          <p className=' ml-2 cursor-pointer text-sm font-bold text-blue-700 underline'>
            Homecare University
          </p>
        </div>

        <div>
          <div className='flex items-center justify-between'>
            <label htmlFor='#'>Censcus Date From:</label>
            <div className='flex '>
              <Input
                placeholder='small size'
                size='xs'
                mr={'3'}
                type={'date'}
              />
              <label htmlFor='#'>To:</label>
              <Input placeholder='xsall size' size='xs' type={'date'} />
            </div>
          </div>
        </div>

        <div className='flex items-center space-x-3'>
          <div className='flex items-center space-x-2'>
            <Select name='' id='' size='xs' className='rounded text-black'>
              <option value='pdf'>PDF Summary</option>
              <option value='spreadsheet'>Spreadsheet Summary</option>
            </Select>
            <button className='text-medium rounded  border bg-orange-600 px-2 py-1 text-white'>
              Export
            </button>
          </div>
        </div>
      </section>

      <section className='flex items-center justify-between'>
        <div className='flex justify-between'>
          <label htmlFor='#' className='w-[40%]'>
            Birth Date:
          </label>
          <div className='flex w-[60%]'>
            <Input placeholder='xsall size' size='xs' type={'date'} />
          </div>
        </div>

        <div className='flex justify-between'>
          <label htmlFor='#' className='w-[40%]'>
            MRN:
          </label>
          <div className='flex w-[60%]'>
            <Input placeholder='xsall size' size='xs' />
          </div>
        </div>

        <div className='flex justify-between'>
          <label htmlFor='#' className='w-[40%]'>
            Identifier#:
          </label>
          <div className='flex w-[60%]'>
            <Input placeholder='xsall size' size='xs' />
          </div>
        </div>

        <div className='flex items-center space-x-5'>
          <div className='my-2 flex  items-center'>
            <div>
              <Input placeholder='xsall size' size='xs' width={300} />
            </div>
            <button className='text-medium ml-3 rounded border  bg-orange-600 px-2 py-1 text-white'>
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div>
          <table className=' min-w-full overflow-auto text-xs'>
            <thead className='border bg-primary-color text-[18px] tracking-wider text-white'>
              <tr className='border border-primary-color'>
                <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'></th>
                <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                  Patient Name
                </th>
                <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                  Latest cert period
                </th>
                <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                  Agency{' '}
                </th>
                <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                  Agency Type
                </th>
                <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                  Team
                </th>
                <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                  Admit Date
                </th>
                <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                  Non Admit
                </th>
                <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                  Status
                </th>
                <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                  Payer Name
                </th>
                <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                  Payer Category
                </th>
                <th className=' border-l border-gray-400 py-1 px-2  text-left text-xs'></th>
              </tr>
            </thead>
            <tbody>
              <tr className='border border-gray-400 bg-light-blue'>
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
                  <FcUnlock className='mx-auto h-[20px] w-[20px]' />
                </td>
              </tr>

              {data.map((data, i) => (
                <tr
                  key={i}
                  className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
                >
                  <td className=' max-h-[20px] min-w-[20px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
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
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    <Link href={'/Patients/patients-encounters/1'}>
                      <p className=' cursor-pointer text-sm font-bold text-orange-500 underline'>
                        James Gordon
                      </p>
                    </Link>
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    23/4/2022 8:43 AM
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    Tampa Home Health
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    <Tooltip
                      label={
                        <CustomToolTipLabel text='Homecare Health Center' />
                      }
                      aria-label='A tooltip'
                      placement='top'
                      bg='#c6d8ffe1'
                      color='black'
                    >
                      Home Health...
                    </Tooltip>
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    Amess Alicia
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    23/4/2022 8:43 AM
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    23/4/2022 8:43 AM
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    pending
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    James Gordon
                  </td>
                  <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    Medicare
                  </td>
                  <td className=' max-h-[20px] min-w-[30px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                    <Link href={'/Patients/patients-encounters/1'}>
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

export default PatientsEncounters
