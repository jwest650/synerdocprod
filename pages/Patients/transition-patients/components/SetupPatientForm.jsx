import { Checkbox, Input, Select } from '@chakra-ui/react'
import { data } from 'autoprefixer'
import React, { useState } from 'react'
import ReAdmitPatientModal from './ReAdmitPatientModal'

const SetupPatientForm = () => {
  let data = [1, 1, 1, 1]
  const [openReAdmit, setOpenReAdmit] = useState(false)
  return (
    <div>
      <section>
        <h1 className='text-2xl font-bold capitalize text-black dark:text-white'>
          Set Up Patient
        </h1>
        <hr />
        <h1 className='py-5 text-xl text-black dark:text-white'>
          Admission Criteria
        </h1>
        <hr />

        <div>
          <div className='my-2 flex'>
            <p className='mr-3 w-[200px] text-right font-semibold'>
              Presentation to be done:
            </p>
            <div>
              <Select size='xs'>
                <option value='option1' className='text-gray-800'>
                  Option 1
                </option>
                <option value='option2' className='text-gray-800'>
                  Option 2
                </option>
                <option value='option3' className='text-gray-800'>
                  Option 3
                </option>
              </Select>
            </div>
          </div>
          <div className='my-2 flex'>
            <p className='mr-3 w-[200px] text-right font-semibold'>
              Additional Information:
            </p>

            <div>
              <Input size={'xs'} />
            </div>
          </div>
          <div className='my-2 flex'>
            <p className='mr-3 w-[200px] text-right font-semibold'>
              Place of Admission:
            </p>

            <div>
              <Select size='xs'>
                <option value='option1' className='text-gray-800'>
                  Option 1
                </option>
                <option value='option2' className='text-gray-800'>
                  Option 2
                </option>
                <option value='option3' className='text-gray-800'>
                  Option 3
                </option>
              </Select>
            </div>
          </div>
          <div className='my-2 flex'>
            <p className='mr-3 w-[200px] text-right font-semibold'>
              Admission Date:
            </p>

            <div>
              <Input size={'xs'} type='date' />
            </div>
          </div>
        </div>
      </section>

      <section>
        <h1 className='py-5 text-xl text-black dark:text-white'>
          Search Patient
        </h1>
        <hr />

        <div className='my-2 flex'>
          <p className='mr-3 w-[200px] text-right font-semibold'>Last/First:</p>

          <div className='flex'>
            <Input size={'xs'} type='text' />
            <Input size={'xs'} className='ml-3' type='text' />
          </div>
        </div>

        <div className='my-2 flex'>
          <p className='mr-3 w-[200px] text-right font-semibold'>Birth Date:</p>

          <div>
            <Input size={'xs'} type='date' />
          </div>
        </div>

        <div className='my-2 flex'>
          <p className='mr-3 w-[200px] text-right font-semibold'>
            Medical Record No:
          </p>

          <div>
            <Input size={'xs'} type='type' />
          </div>
        </div>

        <div className='my-2 flex'>
          <p className='mr-3 w-[200px] text-right font-semibold'>
            Patient Identifier No:
          </p>

          <div>
            <Input size={'xs'} type='type' />
          </div>
        </div>
        <div className='flex w-[200px] justify-end'>
          <button className='rounded border bg-secondary-color px-3 font-medium text-white'>
            Search
          </button>
        </div>

        <h1 className='py-2 text-xl text-black dark:text-white'>
          Re-Admit Existing Patient
        </h1>
        <hr />
        <table className=' min-w-full overflow-auto'>
          <thead className='border-b bg-primary-color text-xs tracking-wider text-white'>
            <tr className='border border-primary-color'>
              <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                Select
              </th>
              <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                Name
              </th>
              <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                Birth Date
              </th>
              <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                Gender
              </th>
              <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                Status
              </th>
              <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                Start
              </th>
              <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                Discharged
              </th>
              <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                Declined
              </th>
              <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                Medical Record No
              </th>
              <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                Patient Identifier No
              </th>
              <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                Agency Name
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr
                key={i}
                className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
              >
                <td className='border border-gray-400'>
                  <Checkbox
                    onChange={(e) => setOpenReAdmit(e.target.checked)}
                  ></Checkbox>
                </td>
                <td className='border border-gray-400'>Nick, Jones</td>
                <td className='border border-gray-400'>23/12/05</td>
                <td className='border border-gray-400'>Male</td>
                <td className='border border-gray-400'>Pending</td>
                <td className='border border-gray-400'></td>
                <td className='border border-gray-400'>23/12/03</td>
                <td className='border border-gray-400'>23</td>
                <td className='border border-gray-400'></td>
                <td className='border border-gray-400'>Labour of love</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='my-3 flex justify-end'>
          <button className='rounded border bg-secondary-color px-3 font-medium text-white'>
            Continue
          </button>
        </div>
      </section>

      <section>
        <h1 className='py-5 text-xl text-black dark:text-white'>
          Or Add Patient
        </h1>
        <hr />

        <div className='my-2 flex'>
          <p className='mr-3 w-[200px] text-right font-semibold'>
            <span className='font-bold text-secondary-color'>*</span>Last/
            <span className='font-bold text-secondary-color'>*</span>
            First/Middle:
          </p>

          <div className='flex'>
            <Input size={'xs'} type='text' />
            <Input size={'xs'} className='ml-3' type='text' />
            <Input size={'xs'} className='ml-3' type='text' />
          </div>
        </div>

        <div className='my-2 flex'>
          <p className='mr-3 w-[200px] text-right font-semibold'>Birth Date:</p>

          <div className='flex'>
            <Input size={'xs'} type='date' />
          </div>
        </div>

        <div className='my-2 flex'>
          <p className='mr-3 w-[200px] text-right font-semibold'>Gender:</p>

          <div>
            <Select size='xs'>
              <option value='option1' className='text-gray-800'>
                Female
              </option>
              <option value='option2' className='text-gray-800'>
                Option 2
              </option>
              <option value='option3' className='text-gray-800'>
                Option 3
              </option>
            </Select>
          </div>
        </div>

        <div className='my-2 flex'>
          <p className='mr-3 w-[200px] text-right font-semibold'>Race:</p>

          <div>
            <Select size='xs'>
              <option value='option1' className='text-gray-800'>
                white
              </option>
              <option value='option2' className='text-gray-800'>
                Option 2
              </option>
              <option value='option3' className='text-gray-800'>
                Option 3
              </option>
            </Select>
          </div>
        </div>

        <div className='my-2 flex'>
          <p className='mr-3 w-[200px] text-right font-semibold'>
            Marital Status:
          </p>

          <div>
            <Select size='xs'>
              <option value='option1' className='text-gray-800'>
                Married
              </option>
              <option value='option2' className='text-gray-800'>
                Option 2
              </option>
              <option value='option3' className='text-gray-800'>
                Option 3
              </option>
            </Select>
          </div>
        </div>

        <div className='my-2 flex'>
          <p className='mr-3 w-[200px] text-right font-semibold'>Email:</p>

          <div>
            <Input size={'xs'} type='text' />
          </div>
        </div>
      </section>

      {/* ReAdmit Modal */}
      <ReAdmitPatientModal
        openReAdmit={openReAdmit}
        setOpenReAdmit={setOpenReAdmit}
      />
    </div>
  )
}

export default SetupPatientForm
