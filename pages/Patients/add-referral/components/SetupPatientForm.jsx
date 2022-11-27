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
        <h1 className='verdana18 font-bold capitalize text-black dark:text-white'>
          Set Up Patient
        </h1>
        <hr />
        <h1 className='py-5 text-xl text-black dark:text-white'>
          Admission Criteria
        </h1>
        <hr />

        <div>
          <div className='my-2 flex'>
            <p className=' verdana13 mr-3 w-[200px] text-right font-semibold'>
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
            <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
              Additional Information:
            </p>

            <div>
              <Input size={'xs'} />
            </div>
          </div>
          <div className='my-2 flex'>
            <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
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
            <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
              Admission Date:
            </p>

            <div>
              <Input size={'xs'} type='date' />
            </div>
          </div>
        </div>
      </section>

      <section>
        <h1 className='verdana16 py-5  text-black dark:text-white'>
          Search Patient
        </h1>
        <hr />

        <div className='my-2 flex'>
          <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
            Last/First:
          </p>

          <div className='flex'>
            <Input size={'xs'} type='text' />
            <Input size={'xs'} className='ml-3' type='text' />
          </div>
        </div>

        <div className='my-2 flex'>
          <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
            Birth Date:
          </p>

          <div>
            <Input size={'xs'} type='date' />
          </div>
        </div>

        <div className='my-2 flex'>
          <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
            Medical Record No:
          </p>

          <div>
            <Input size={'xs'} type='type' />
          </div>
        </div>

        <div className='my-2 flex'>
          <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
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

        <h1 className='verdana16 py-2 text-xl text-black dark:text-white'>
          Re-Admit Existing Patient
        </h1>
        <hr />
        <table className=' min-w-full overflow-auto'>
          <thead className='thead-primary'>
            <tr>
              <th className='th-first'>Select</th>
              <th className='th-middle'>Name</th>
              <th className='th-middle'>Birth Date</th>
              <th className='th-middle'>Gender</th>
              <th className='th-middle'>Status</th>
              <th className='th-middle'>Start</th>
              <th className='th-middle'>Discharged</th>
              <th className='th-middle'>Declined</th>
              <th className='th-middle'>Medical Record No</th>
              <th className='th-middle'>Patient Identifier No</th>
              <th className='th-last'>Agency Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr
                key={i}
                className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
              >
                <td className='td-primary'>
                  <Checkbox
                    onChange={(e) => setOpenReAdmit(e.target.checked)}
                  ></Checkbox>
                </td>
                <td className='td-primary'>Nick, Jones</td>
                <td className='td-primary'>23/12/05</td>
                <td className='td-primary'>Male</td>
                <td className='td-primary'>Pending</td>
                <td className='td-primary'></td>
                <td className='td-primary'>23/12/03</td>
                <td className='td-primary'>23</td>
                <td className='td-primary'></td>
                <td className='td-primary'>Labour of love</td>
                <td className='td-primary'></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h1 className='verdana16 py-5 text-xl text-black dark:text-white'>
          Or Add Patient
        </h1>
        <hr />

        <div className='my-2 flex'>
          <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
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
          <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
            Birth Date:
          </p>

          <div className='flex'>
            <Input size={'xs'} type='date' />
          </div>
        </div>

        <div className='my-2 flex'>
          <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
            Gender:
          </p>

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
          <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
            Race:
          </p>

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
          <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
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
          <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
            Email:
          </p>

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
