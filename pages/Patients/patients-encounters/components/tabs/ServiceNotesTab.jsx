import { Input, Select } from '@chakra-ui/react'
import React from 'react'
import { FcUnlock } from 'react-icons/fc'

const ServiceNotesTab = () => {
  let data = []

  return (
    <div className='verdana13 '>
      <div className='flex justify-between'>
        <div className='flex'>
          <h1 className='verdana16 font-bold'>Service Note</h1>
          <button className='btn-primary ml-3'>
            <p>Add Service Note/Assignment</p>
          </button>
          <button className='btn-primary ml-3'>
            <p>Attach Document</p>
          </button>
          <button className='btn-primary ml-3'>
            <p>Min/Max</p>
          </button>
        </div>
        <p>Set Default</p>

        <div className='flex'>
          <Select size={'xs'}>
            <option>PDF</option>
          </Select>
          <button className='rounde btn-primary ml-2 '>Export</button>
        </div>
      </div>

      <div className='my-4 flex justify-between'>
        <div className='flex'>
          <p className='rounde mr-2  '>Selection:</p>
          <div>
            <Select size={'xs'}>
              <option>Selection</option>
            </Select>
          </div>
        </div>
        <div className='flex'>
          <p className='rounde mr-2'>Item:</p>
          <div>
            <Select size={'xs'}>
              <option>Item</option>
            </Select>
          </div>
        </div>
        <div className='flex'>
          <p className='rounde mr-2 '>Date Range:</p>
          <div>
            <Input type='date' size={'xs'} />
          </div>
          <p className='rounde mr-2 '>To:</p>
          <div>
            <Input type='date' size={'xs'} />
          </div>
        </div>

        <div className='flex'>
          <Input type='text' size={'xs'} />

          <button className='btn-primary ml-2 '>Search</button>
        </div>
      </div>

      <section>
        <div>
          <table className=' min-w-full overflow-auto'>
            <thead className='thead-primary'>
              <tr>
                <th className=' th-first'>Type</th>
                <th className=' th-middle'>Created</th>
                <th className=' th-middle'>Form Entered By</th>
                <th className=' th-middle'>Revised By</th>
                <th className=' th-middle'>Service provided By</th>
                <th className=' th-middle'>Service Date</th>
                <th className=' th-middle'>Time in</th>
                <th className=' th-middle'>Time out</th>
                <th className=' th-middle'>Service</th>
                <th className=' th-middle'>Status</th>
                <th className=' th-middle'>QA Status</th>
                <th className=' th-middle'></th>
                <th className=' th-middle'></th>
                <th className=' th-last'></th>
              </tr>
            </thead>
            <tbody>
              <tr className='bg-light-blue'>
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
                <td className='td-primary'></td>
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
                <td className='td-primary'></td>
                <td className='td-primary'></td>
                <td className='td-primary'></td>
              </tr>

              {data.map((data, i) => (
                <tr
                  key={i}
                  className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
                >
                  <td className=' td-primary'></td>
                  <td className=' td-primary'></td>
                  <td className=' td-primary'></td>
                  <td className=' td-primary'></td>
                  <td className=' td-primary'></td>
                  <td className=' td-primary'></td>
                  <td className=' td-primary'></td>
                  <td className=' td-primary'></td>
                  <td className=' td-primary'></td>
                  <td className=' td-primary'></td>
                  <td className=' td-primary'></td>
                  <td className=' td-primary'></td>
                  <td className=' td-primary'></td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className='w-[100%] bg-gray-300  p-2 text-sm'>
            No Homecare Item set found
          </p>
        </div>
      </section>
    </div>
  )
}

export default ServiceNotesTab
