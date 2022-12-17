import { Input, Select } from '@chakra-ui/react'
import React from 'react'
import { GoNote } from 'react-icons/go'
import { FcCalendar, FcPrint } from 'react-icons/fc'
import { BsPencilSquare } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'

const OrdersTab = () => {
  let data = [1, 1, 1, 1]
  return (
    <div className='verdana13 '>
      <div className='flex'>
        <h1 className=' verdana18'>Orders</h1>

        <div className='ml-5 flex'>
          <button className='btn-primary ml-4'>
            <p>Add Order</p>
          </button>
          <button className='btn-primary ml-4'>
            <p>View Orders</p>
          </button>
          <button className='btn-primary ml-4'>
            <p>Unlock Orders</p>
          </button>
        </div>
      </div>

      <div>
        <div className='my-2 flex items-center'>
          <p className=' w-[150px] font-semibold'>Certificate from:</p>
          <div className='my-2 flex items-center'>
            <Input type='date' size={'xs'} />
            <button className='mx-3 rounded border px-2'>Search</button>
            <Select size={'xs'}>
              <option>PDF-(Order)</option>
              <option>option 2</option>
              <option>option 3</option>
            </Select>
            <button className='ml-3 rounded border px-2'>Export</button>
          </div>
        </div>
      </div>

      <section className=' min-h-[200px]'>
        <table className=' min-w-full overflow-auto'>
          <thead className='thead-primary'>
            <tr>
              <th className=' th-first'>Type</th>
              <th className=' th-first'>Cert From</th>
              <th className=' th-first'>Cert To</th>
              <th className=' th-middle'>Status</th>
              <th className=' th-middle'>Info</th>
              <th className=' th-middle'>ID</th>
              <th className=' th-middle'>Associate</th>
              <th className=' th-middle'>Physician</th>
              <th className=' th-middle'>Sent</th>
              <th className=' th-middle'>Received</th>
              <th className=' th-middle'>FTF Sent</th>
              <th className=' th-middle'>FTF Visit</th>
              <th className=' th-middle'></th>
              <th className=' th-middle'></th>
              <th className=' th-middle'></th>
              <th className=' th-middle'></th>
            </tr>
          </thead>
          <tbody>
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
                  <p className=' cursor-pointer  text-green-700 '>Assigned</p>
                </td>
                <td className=' td-primary'></td>
                <td className=' td-primary'></td>
                <td className=' td-primary'></td>
                <td className=' td-primary'></td>

                <td className=' td-primary'>
                  <BsPencilSquare />
                </td>
                <td className=' td-primary'>
                  <FcPrint />
                </td>
                <td className=' td-primary'>
                  <FcCalendar />
                </td>
                <td className=' td-primary'>
                  <IoIosArrowDown />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <p className='w-[100%] bg-gray-300  p-2 text-sm'>
            No Homecare Item set found
          </p> */}
      </section>

      <section>
        <div>
          <div className='flex'>
            <h1 className='verdana18 font-bold'>Oasis</h1>
          </div>

          <section>
            <p>
              This Encounter does not have any Oasis record for selected
              certification
            </p>
          </section>
        </div>
      </section>

      <section className='mt-20'>
        <div>
          <div className='flex items-center justify-between'>
            <div className='flex'>
              <h1 className='verdana18 font-bold'>Service Requested</h1>
              <button className='btn-primary ml-5'>Add Service</button>
            </div>

            <div className='flex items-center'>
              <div className='my-2 flex items-center'>
                <p className='   font-semibold'>Start Date Range:</p>
                <div className='my-2 flex items-center'>
                  <Input type='date' size={'xs'} />
                </div>
              </div>
              <div className='my-2 flex items-center'>
                <p className='  font-semibold'>To:</p>
                <div className='my-2 flex items-center'>
                  <Input type='date' size={'xs'} />
                </div>
              </div>
              <button className='btn-primary ml-3'>Search</button>
            </div>
          </div>

          <section>
            <table className=' mt-5 min-w-full overflow-auto'>
              <thead className='thead-primary'>
                <tr>
                  <th className=' th-first w-[25%]'>Service</th>
                  <th className=' th-middle'>Monday</th>
                  <th className=' th-middle'>Tuesday</th>
                  <th className=' th-middle'>Wednesday</th>
                  <th className=' th-middle'>Thursday</th>
                  <th className=' th-middle'>Friday</th>
                  <th className=' th-middle'>Saturday</th>
                  <th className=' th-middle'>Sunday</th>
                  <th className=' th-middle'>Bi-Weekly</th>
                  <th className=' th-middle'>Start Date</th>
                  <th className=' th-middle'>End Date</th>
                  <th className=' th-middle'>Start Time</th>
                  <th className=' th-middle'>End Time</th>
                  <th className=' th-middle'></th>
                  <th className=' th-last'></th>
                </tr>
              </thead>
              <tbody>
                {/* {data.map((data, i) => (
                  <tr
                    key={i}
                    className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
                  >
                    <td className=' td-primary '>Service</td>
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
                    <td className=' td-primary'></td>
                  </tr>
                ))} */}
              </tbody>
            </table>
            <p className='w-[100%] bg-gray-300  p-2 text-sm'>
              No service schedule
            </p>
          </section>
        </div>
      </section>

      <section className='mt-20'>
        <div>
          <div className='flex items-center justify-between'>
            <div className='flex'>
              <h1 className='verdana18 font-bold'>
                Diagnosis Code for Paraprofessional Service
              </h1>
              <button className='btn-primary ml-5'>
                Add Diagnosis Code For Service Requested
              </button>
            </div>
          </div>

          <section>
            <table className=' mt-5 min-w-full overflow-auto'>
              <thead className='thead-primary'>
                <tr>
                  <th className=' th-first '></th>
                  <th className=' th-middle'>Sequence</th>
                  <th className=' th-middle'>Diagnosis Code</th>
                  <th className=' th-middle w-[50%]'>Diagnosis Description</th>
                  <th className=' th-middle'>Start Date</th>
                  <th className=' th-middle'></th>
                  <th className=' th-last'></th>
                </tr>
              </thead>
              <tbody>
                {/* {data.map((data, i) => (
                  <tr
                    key={i}
                    className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
                  >
                    <td className=' td-primary '>Service</td>
                    <td className=' td-primary'></td>
                    <td className=' td-primary'></td>
                    <td className=' td-primary'></td>
                    <td className=' td-primary'></td>
                    <td className=' td-primary'></td>
                    <td className=' td-primary'></td> 
                  </tr>
                ))} */}
              </tbody>
            </table>
            <p className='w-[100%] bg-gray-300  p-2 text-sm'>
              No service schedule
            </p>
          </section>
        </div>
      </section>
    </div>
  )
}

export default OrdersTab
