import { Select } from '@chakra-ui/react';
import { physicianTableData } from '../../../assets/data';
import Link from 'next/link';
import CreatePhysicians from './CreatePhysicians';
import MorePhysicianInfo from './MorePhysicianInfo';
import PhysicianTableAction from './PhysicianTableAction';
import TableSelect from '../../structure/TableSelect';
import { useState } from 'react';

const Physicians = () => {
  const [physicianTitle, setPhysicianTitle] = useState('');
  const [physicianStatus, setPhysicianStatus] = useState('');
  return (
    <section className="mx-10 mt-10">
      <div className="flex items-center justify-between border-b border-gray-600 pb-2">
        <div className="flex items-center gap-8">
          <h2 className="verdana18 font-bold tracking-wider">Physicians</h2>
          <CreatePhysicians />
        </div>
        <div className="flex items-center gap-3">
          <Select
            css={{
              backgroundColor: '#c6d8ffe1',
              border: 'none',
              height: '22px',
            }}
            className="verdana11 shadow outline-none"
            size="xs"
          >
            <option value="option1" className="verdana11 text-gray-800">
              PDF - Patients active or discharged in last 30 days{' '}
            </option>
            <option value="option2" className="verdana11 text-gray-800">
              PDF - Patient with outstanding orders{' '}
            </option>
            <option value="option3" className="verdana11 text-gray-800">
              XLS - Patients active or discharged in last 30 days{' '}
            </option>
            <option value="option3" className="verdana11 text-gray-800">
              XLS - Patients with outstanding orders{' '}
            </option>
            <option value="option3" className="verdana11 text-gray-800">
              XLS - Patients with outstanding orders{' '}
            </option>
          </Select>
          <button className="btn-primary">Export</button>
          <input
            placeholder="Enter first or last name"
            className="input-primary"
            type="text"
          />
          <button className="btn-primary">Search</button>
        </div>
      </div>

      <table className="mt-10 min-w-full overflow-auto shadow-md">
        <thead className="thead-primary">
          <tr>
            <th className="th-first"></th>
            <th className="th-middle">Physician Name</th>
            <th className="th-middle">Email</th>
            <th className="th-middle">Preferred Numbers</th>
            <th className="th-middle">Title</th>
            <th className="th-middle">Status</th>
            <th className="th-last">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="w-full border border-primary-gray bg-secondary-blue">
            <td></td>
            <td></td>
            <td></td>

            <td></td>
            <td className="w-full border border-primary-gray">
              <TableSelect
                setSelectedOption={setPhysicianTitle}
                options={['All', 'MD', 'PA']}
              />
            </td>
            <td className=" w-full border border-primary-gray">
              <TableSelect
                setSelectedOption={setPhysicianStatus}
                options={[
                  'All',
                  'Active',
                  'Inactive',
                  'Pending',
                  'Suspended',
                  'Terminated',
                ]}
              />
            </td>
            <td></td>
          </tr>
          {physicianTableData.map((physician, i) => (
            <tr key={i} className={`verdana12 border  even:bg-[#eeeeee]`}>
              <td className="td-primary min-w-[40px] cursor-pointer  ">
                <MorePhysicianInfo />
              </td>
              <td className="td-primary  min-w-[230px]   text-orange-600 underline decoration-orange-600">
                <Link
                  href={`/Resources/physicians/${physician.url}/contactsinfo`}
                >
                  {physician.name}
                </Link>
              </td>
              <td className="td-primary  min-w-[330px]  ">{physician.email}</td>
              <td className="td-primary  min-w-[270px]  ">
                {physician.preferredNumber}
              </td>
              <td className="td-primary  min-w-[120px]  ">{physician.title}</td>
              <td
                className={`td-primary min-w-[100px] font-semibold  ${
                  physician.status === 'Active' && 'text-green-600'
                }`}
              >
                {physician.status}
              </td>
              <td className="td-primary  min-w-[120px]  ">
                <PhysicianTableAction
                  physicianUrl={physician.url}
                  physicianName={physician.name}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex w-fit items-center gap-2 border-x border-b border-primary-gray bg-[#eee] px-5">
        <p>Displaying page 1 of 1, rows 1 to 4 of 4, | Rows per page </p>
        <div>
          <Select
            css={{
              backgroundColor: 'lightgray',
              border: 'none',
              marginBottom: '4px',
            }}
            className="cursor-pointer shadow outline-none"
            size="xs"
          >
            <option value="option1" className="text-gray-800">
              250
            </option>
          </Select>
        </div>
      </div>
    </section>
  );
};

export default Physicians;
