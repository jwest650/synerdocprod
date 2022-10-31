import { Checkbox, Input, Select } from '@chakra-ui/react';
import { data } from 'autoprefixer';
import React, { useState } from 'react';
import ReAdmitPatientModal from './ReAdmitPatientModal';

const SetupPatientForm = () => {
  let data = [1, 1, 1, 1];
  const [openReAdmit, setOpenReAdmit] = useState(false);
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
          <div className='flex items-center '>
            <label htmlFor='#' className='mr-3'>
              Presentation to be done:{' '}
            </label>
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

          <div className='flex py-5'>
            <div className='w-[150px]'>
              <h1 className='mr-5'>Additional Information: </h1>
            </div>
            <div>
              <Input size={'xs'} />
            </div>
          </div>

          <div className='flex items-center '>
            <label htmlFor='#' className='mr-3'>
              Place of Admission:{' '}
            </label>
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

          <div className='flex py-5'>
            <div className='w-[150px]'>
              <h1 className='mr-5'>Admission Date: </h1>
            </div>
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

        <div className='flex py-5'>
          <div className='w-[150px]'>
            <h1 className='mr-5'>Last/First: </h1>
          </div>
          <div className='flex'>
            <Input size={'xs'} type='text' />
            <Input size={'xs'} className='ml-3' type='text' />
          </div>
        </div>

        <div className='flex py-5'>
          <div className='w-[150px]'>
            <h1 className='mr-5'>Birth Date: </h1>
          </div>
          <div>
            <Input size={'xs'} type='date' />
          </div>
        </div>

        <div className='flex py-5'>
          <div className='w-[150px]'>
            <h1 className='mr-5'>Medical Record N0: </h1>
          </div>
          <div>
            <Input size={'xs'} type='type' />
          </div>
        </div>

        <div className='flex py-5'>
          <div className='w-[150px]'>
            <h1 className='mr-5'>Patient Identifier No: </h1>
          </div>
          <div>
            <Input size={'xs'} type='type' />
          </div>
        </div>
        <button className='rounded border px-3'>Search</button>

        <h1 className='py-5 text-xl text-black dark:text-white'>
          Re-Admit Patient
        </h1>
        <hr />
        <table className=' min-w-full overflow-auto'>
          <thead className='border-b bg-[#32164A] text-[18px] tracking-wider text-white'>
            <tr>
              <th className=' border-gray-100  pl-2 text-left'>Select</th>
              <th className=' border-gray-100  pl-2 text-left'>Name</th>
              <th className=' border-gray-100  pl-2 text-left'>Birth Date</th>
              <th className=' border-gray-100  pl-2 text-left'>Gender</th>
              <th className=' border-gray-100  pl-2 text-left'>Status</th>
              <th className=' border-gray-100  pl-2 text-left'>Start</th>
              <th className=' border-gray-100  pl-2 text-left'>Discharged</th>
              <th className=' border-gray-100  pl-2 text-left'>Declined</th>
              <th className=' border-gray-100  pl-2 text-left'>
                Medical Record No
              </th>
              <th className=' border-gray-100  pl-2 text-left'>
                Patient Identifier No
              </th>
              <th className=' border-gray-100  pl-2 text-left'>Agency Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr
                key={i}
                className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
              >
                <td className='border border-gray-400'>
                  <Checkbox></Checkbox>
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
          <button className='rounded border px-3'>Continue</button>
        </div>
      </section>

      <section>
        <h1 className='py-5 text-xl text-black dark:text-white'>
          Or Add Patient
        </h1>
        <hr />

        <div className='flex py-5'>
          <div className='w-[150px]'>
            <h1 className='mr-5'>*Last/*First/Middle: </h1>
          </div>
          <div className='flex'>
            <Input size={'xs'} type='text' />
            <Input size={'xs'} className='ml-3' type='text' />
            <Input size={'xs'} className='ml-3' type='text' />
          </div>
        </div>

        <div className='flex py-5'>
          <div className='w-[150px]'>
            <h1 className='mr-5'>Birth Date: </h1>
          </div>
          <div>
            <Input size={'xs'} type='date' />
          </div>
        </div>

        <div className='flex py-5'>
          <div className='w-[150px]'>
            <h1 className='mr-5'>Gender: </h1>
          </div>
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

        <div className='flex py-5'>
          <div className='w-[150px]'>
            <h1 className='mr-5'>Race: </h1>
          </div>
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
        <div className='flex py-5'>
          <div className='w-[150px]'>
            <h1 className='mr-5'>Marital Status: </h1>
          </div>
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

        <div className='flex py-5'>
          <div className='w-[150px]'>
            <h1 className='mr-5'>Email: </h1>
          </div>
          <div>
            <Input size={'xs'} type='text' />
          </div>
        </div>
        <div className='my-3 flex justify-end'>
          <button className='rounded border px-3'>Continue</button>
        </div>
      </section>

      {/* ReAdmit Modal */}
      <ReAdmitPatientModal
        openReAdmit={openReAdmit}
        setOpenReAdmit={setOpenReAdmit}
      />
    </div>
  );
};

export default SetupPatientForm;
