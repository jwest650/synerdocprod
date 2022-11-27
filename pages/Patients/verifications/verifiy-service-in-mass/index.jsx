import { Checkbox, Input, Select } from '@chakra-ui/react'
import React from 'react'
import { BiNotepad } from 'react-icons/bi'
import { GrEdit } from 'react-icons/gr'

const VerifyServiceInMass = () => {
  let data = [1, 1, 1, 1]

  return (
    <div className='verdana13 w-full space-y-4 bg-[#F6F8FC] p-5  text-gray-800 dark:text-white'>
      <div className='flex items-center'>
        <h1 className='verdana18  font-bold capitalize text-black dark:text-white'>
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
        <table className='verdana13 min-w-full overflow-auto '>
          <thead className='thead-primary'>
            <tr>
              <th className=' th-first '></th>
              <th className=' th-middle '></th>
              <th className=' th-middle '></th>
              <th className=' th-middle '></th>
              <th className=' th-middle '>Associate Name</th>
              <th className=' th-middle '>Service</th>
              <th className=' th-middle '>Service Date</th>
              <th className=' th-middle '>Time In</th>
              <th className=' th-middle '>Time Out</th>
              <th className=' th-middle '>Reimb Type</th>
              <th className=' th-middle '>Travel Duration</th>
              <th className=' th-middle '>Miles</th>
              <th className=' th-middle '>Pay</th>
              <th className=' th-middle '>Unites</th>
              <th className=' th-middle '>Rate</th>
              <th className=' th-middle '>Bill</th>
              <th className=' th-middle '>Units</th>
              <th className=' th-middle '>Reimb Rate</th>
              <th className=' th-middle '>Charge Rate</th>
              <th className=' th-last '>Payer</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, i) => (
              <tr
                key={i}
                className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
              >
                <td className=' td-primary'>
                  <Checkbox defaultChecked></Checkbox>
                </td>
                <td className=' td-primary'>
                  <GrEdit />
                </td>
                <td className=' td-primary'>
                  <div className='flex space-x-2'>
                    <Select className='rounded text-black' size='xs'>
                      <option value='pdf'></option>
                      <option value='pdf'></option>
                      <option value='pdf'></option>
                    </Select>
                  </div>
                </td>
                <td className=' td-primary'>
                  <BiNotepad />
                </td>
                <td className=' td-primary'>Nick Jones</td>
                <td className=' td-primary'>
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
                <td className=' td-primary'>
                  <Input size='xs' type='date' />
                </td>
                <td className=' td-primary'>
                  <Input size='xs' type='text' />
                </td>
                <td className=' td-primary'>
                  <Input size='xs' type='text' />
                </td>
                <td className=' td-primary'>
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
                <td className=' td-primary'>
                  <Input size='xs' type='text' />
                </td>
                <td className=' td-primary'>
                  <Input size='xs' type='text' />
                </td>
                <td className=' td-primary'>
                  <Checkbox defaultChecked></Checkbox>
                </td>
                <td className=' td-primary'>
                  <Input size='xs' type='text' />
                </td>
                <td className=' td-primary'>
                  <Input size='xs' type='text' />
                </td>
                <td className=' td-primary'>
                  <Checkbox defaultChecked></Checkbox>
                </td>
                <td className=' td-primary'>
                  <Input size='xs' type='text' />
                </td>
                <td className=' td-primary'>
                  <Input size='xs' type='text' />
                </td>
                <td className=' td-primary'>
                  <Input size='xs' type='text' />
                </td>

                <td className=' td-primary'>
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
