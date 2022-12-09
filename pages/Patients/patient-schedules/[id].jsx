import { Checkbox, Select } from '@chakra-ui/react';
import React from 'react';
import { TiPlus } from 'react-icons/ti';
import { BsCalendar2Fill } from 'react-icons/bs';
import { FaBook } from 'react-icons/fa';
import Calendar from './components/Calendar';

const PatientScheduleDetails = () => {
  const data = [1, 1, 1, 1];
  return (
    <div className="verdana13 w-full ">
      <div>
        <section>
          <div className="mb-4 flex">
            <div className="w-[33%]">
              <h1 className="font-bold">Patient Infomation</h1>

              <div className="flex items-center">
                <BsCalendar2Fill className="text-black" />
                <p className="ml-3 text-secondary-color underline">
                  John Mason
                </p>
              </div>
              <p>1234 Lane Accra Ghana</p>
              <p>Tema, Com25</p>
              <p>Home: (2344545465645)</p>
            </div>

            <div className="w-[33%]">
              <h1 className="font-bold">Physician Infomation</h1>

              <div className="flex items-center">
                <BsCalendar2Fill className="text-black" />
                <p className="ml-3 ">John Mason</p>
              </div>
              <p>Work: (2344545465645)</p>
              <p className="text-secondary-color underline">View Orders</p>
              <p className="text-secondary-color underline">
                Therapy Utilization Check
              </p>
              <p className="text-secondary-color underline">Schedule PRN</p>
            </div>

            <div className="w-[33%]">
              <h1 className="text-center font-bold">Encounter Infomation</h1>

              <div className="flex py-1">
                <div className="mr-3 w-[200px] text-right">
                  <p className="font-semibold">Requested/Verbal SOC: </p>
                </div>
                <div>
                  <p>9/02/2019</p>
                </div>
              </div>
              <div className="flex py-1">
                <div className="mr-3 w-[200px] text-right">
                  <p className="font-semibold">Start of Care: </p>
                </div>
                <div>
                  <p>3/12/1990 </p>
                </div>
              </div>

              <div className="flex items-end">
                <div className="flex ">
                  <div className="mr-3 w-[200px] text-right">
                    <p className="font-semibold">Hold Dates: </p>
                  </div>

                  <div>
                    <p>3/12/1990- 10/12/1990 </p>
                  </div>
                </div>
              </div>
              <div className="flex py-1">
                <div className="mr-3 w-[200px] text-right">
                  <p className="font-semibold">Message sent: </p>
                </div>
                <div>
                  <div className="ml-3 flex">
                    <span>0</span>
                    <p className="ml-3 flex items-center text-secondary-color">
                      <TiPlus /> Send Message
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-2">
          <div className="flex justify-between">
            <p className="flex items-center text-secondary-color">
              <TiPlus /> Mass Cancel
            </p>

            <div className="flex justify-between">
              <p className="ml-3 flex items-center text-secondary-color">
                <TiPlus /> Add Pay Only
              </p>
              <p className="ml-3 flex items-center text-secondary-color">
                <TiPlus /> Schedule To Teams
              </p>
              <p className="ml-3 flex items-center text-secondary-color">
                <TiPlus /> Authorizations
              </p>
            </div>

            <div className="flex w-[50%] justify-end">
              <p className="ml-2 flex items-center text-secondary-color">
                <TiPlus /> Mass Notes
              </p>
              <p className="ml-2 flex items-center text-secondary-color">
                <TiPlus /> Remove Deactivated Notes
              </p>

              <div className="ml-2 flex  items-center">
                <p className="font-xs">Patient schedule for:</p>
                <div>
                  <Select size={'xs'}>
                    <option>John Mason</option>
                    <option>John Mason</option>
                    <option>John Mason</option>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />

        <section className="mt-1">
          <div className=" flex justify-between">
            <div className="flex ">
              <div className="ml-2 flex  items-center">
                <p className="font-xs">Choose Disipline:</p>
                <div>
                  <Select size={'xs'}>
                    <option>Skilled Nurse</option>
                    <option>Skilled Nurse</option>
                    <option>Skilled Nurse</option>
                  </Select>
                </div>
              </div>
            </div>

            <div className="flex w-[60%] flex-wrap justify-end">
              <p className=" text-secondary-color"> Red Text = Non-Billable</p>
              <Checkbox className="my-1 " size={'sm'}>
                Cert Start
              </Checkbox>
              <Checkbox className="my-1 " size={'sm'}>
                Cert End
              </Checkbox>
              <Checkbox className="my-1 " size={'sm'}>
                assigned
              </Checkbox>
              <Checkbox className="my-1 " size={'sm'}>
                unassigned
              </Checkbox>
              <Checkbox className="my-1 " size={'sm'}>
                unassigned selected
              </Checkbox>
              <Checkbox className="my-1 " size={'sm'}>
                verified
              </Checkbox>
              <Checkbox className="my-1 " size={'sm'}>
                assigned to CM
              </Checkbox>
              <Checkbox className="my-1 " size={'sm'} defaultChecked>
                show canceled
              </Checkbox>
              <Checkbox className="my-1 " size={'sm'}>
                show service Code
              </Checkbox>
              <Checkbox className="my-1 " size={'sm'}>
                show service Description
              </Checkbox>
            </div>
          </div>
        </section>

        <section className="flex justify-between">
          <div className="">
            <table className="min-w-full overflow-auto">
              <thead className="thead-primary">
                <tr>
                  <th className="th-first"></th>
                  <th className="th-middle">Associate</th>
                  <th className="th-middle">Match</th>
                  <th className="th-middle">Disc</th>
                  <th className="th-middle"></th>
                  <th className="th-last"></th>
                </tr>
              </thead>
              <tbody>
                {data.map((data, i) => (
                  <tr
                    key={i}
                    className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
                  >
                    <td className=" td-primary">
                      <FaBook />
                    </td>
                    <td className=" td-primary">Patients needs Assistance</td>
                    <td className=" td-primary"></td>
                    <td className=" td-primary"></td>
                    <td className=" td-primary">
                      <BsCalendar2Fill />
                    </td>
                    <td className=" td-primary">
                      <BsCalendar2Fill />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-5">
              <div className="flex">
                <p>scheduling conflicts</p>
                <p className="ml-4 flex items-center text-secondary-color">
                  <TiPlus /> Add Sched. conflict
                </p>
              </div>

              <table className="min-w-full overflow-auto">
                <thead className="thead-primary">
                  <tr>
                    <th className="th-first"></th>
                    <th className="th-middle">Associate</th>
                    <th className="th-middle">Notes</th>
                    <th className="th-middle"></th>
                    <th className="th-last"></th>
                  </tr>
                </thead>
                <tbody>
                  {/* {data.map((data, i) => (
                    <tr
                      key={i}
                      className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
                    >
                      <td className=' td-primary'>
                        <FaBook />
                      </td>
                      <td className=' td-primary'>
                        Patients needs Assistance
                      </td>
                      <td className=' td-primary'></td>
                      <td className=' td-primary'>
                        <BsCalendar2Fill />
                      </td>
                      <td className=' td-primary'>
                        <BsCalendar2Fill />
                      </td>
                    </tr>
                  ))} */}
                </tbody>
              </table>
              <p className="w-full bg-gray-300 p-2 text-black">
                No conflicts found
              </p>
            </div>
          </div>

          <div className="w-[60%]">
            <Calendar />
          </div>
        </section>
      </div>
    </div>
  );
};

export default PatientScheduleDetails;
