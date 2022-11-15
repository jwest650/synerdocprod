import { Select } from '@chakra-ui/react';
import { physicianTableData } from '../../../assets/data';
import Link from 'next/link';
import CreatePhysicians from './CreatePhysicians';
import MorePhysicianInfo from './MorePhysicianInfo';
import PhysicianTableAction from './PhysicianTableAction';

const Physicians = () => {
  return (
    <section className="mx-10 mt-10">
      <div className="flex items-center justify-between border-b border-gray-600 pb-2">
        <div className="flex items-center gap-8">
          <h2 className="text-xl font-semibold tracking-wider">Physicians</h2>
          <CreatePhysicians />
        </div>
        <div className="flex items-center gap-3">
          <Select
            css={{ backgroundColor: '#c6d8ffe1', border: 'none' }}
            className="shadow outline-none"
            size="xs"
          >
            <option value="option1" className="text-gray-800">
              PDF - Patients active or discharged in last 30 days{' '}
            </option>
            <option value="option2" className="text-gray-800">
              PDF - Patient with outstanding orders{' '}
            </option>
            <option value="option3" className="text-gray-800">
              XLS - Patients active or discharged in last 30 days{' '}
            </option>
            <option value="option3" className="text-gray-800">
              XLS - Patients with outstanding orders{' '}
            </option>
            <option value="option3" className="text-gray-800">
              XLS - Patients with outstanding orders{' '}
            </option>
          </Select>
          <button className="rounded bg-orange-600 px-2 py-[1px] font-medium text-white">
            Export
          </button>
          <input
            placeholder="Enter first or last name"
            className="rounded px-3 py-[2px] text-black outline-none"
            type="text"
          />
          <button className="rounded bg-orange-600 px-2 py-[1px] font-medium text-white">
            Search
          </button>
        </div>
      </div>

      <table className="mt-10 min-w-full overflow-auto">
        <thead className="border-b bg-[#0141CF] text-[15px] tracking-wider text-white">
          <tr>
            <th className=" border border-primary-gray border-t-primary-blue border-l-primary-blue  pl-2 text-left"></th>
            <th className=" border border-primary-gray border-t-primary-blue  pl-2 text-left">
              Physician Name
            </th>
            <th className=" border border-primary-gray border-t-primary-blue  pl-2 text-left">
              Email
            </th>
            <th className=" border border-primary-gray border-t-primary-blue  pl-2 text-left">
              Preferred Numbers
            </th>
            <th className=" border border-primary-gray border-t-primary-blue  pl-2 text-left">
              Title
            </th>
            <th className=" border border-primary-gray border-t-primary-blue  pl-2 text-left">
              Status
            </th>
            <th className=" border border-primary-gray border-t-primary-blue  border-r-primary-blue pl-2 text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="w-full border border-primary-gray bg-secondary-blue">
            <td></td>
            <td></td>
            <td></td>

            <td></td>
            <td className="w-full border border-primary-gray">
              <Select
                css={{ backgroundColor: '#c6d8ffe1', border: 'none' }}
                className="cursor-pointer shadow outline-none"
                size="xs"
              >
                <option value="option1" className="text-gray-800">
                  All
                </option>
                <option value="option1" className="text-gray-800">
                  MD
                </option>
                <option value="option3" className="text-gray-800">
                  PA
                </option>
              </Select>
            </td>
            <td className=" w-full border border-primary-gray">
              <Select
                css={{ backgroundColor: '#c6d8ffe1', border: 'none' }}
                className="cursor-pointer shadow outline-none"
                size="xs"
              >
                <option value="option1" className="text-gray-800">
                  All{' '}
                </option>
                <option value="option2" className="text-gray-800">
                  Active
                </option>
                <option value="option3" className="text-gray-800">
                  Inactive
                </option>
              </Select>
            </td>
            <td></td>
          </tr>
          {physicianTableData.map((physician, i) => (
            <tr key={i} className={`border text-[15px]  even:bg-[#eeeeee]`}>
              <td className=" max-h-[20px] min-w-[50px] border border-primary-gray py-1 px-2 font-medium">
                <span className="cursor-pointer">
                  <MorePhysicianInfo />
                </span>
              </td>
              <td className=" max-h-[20px] min-w-[230px] cursor-pointer border border-primary-gray py-1 px-2 font-medium text-orange-600 underline decoration-orange-600">
                <Link
                  href={`/Resources/physicians/${physician.url}/contactsinfo`}
                >
                  {physician.name}
                </Link>
              </td>
              <td className=" max-h-[20px] min-w-[330px] cursor-pointer border border-primary-gray py-1 px-2 font-medium">
                {physician.email}
              </td>
              <td className=" max-h-[20px] min-w-[270px] cursor-pointer border border-primary-gray py-1 px-2 font-medium">
                {physician.preferredNumber}
              </td>
              <td className=" max-h-[20px] min-w-[120px] border border-primary-gray py-1 px-2 font-medium">
                {physician.title}
              </td>
              <td
                className={`max-h-[20px] min-w-[100px] border border-primary-gray py-1 px-2 font-semibold  ${
                  physician.status === 'Active' && 'text-green-600'
                }`}
              >
                {physician.status}
              </td>
              <td className=" max-h-[20px] min-w-[120px] cursor-pointer border  border-primary-gray py-1 px-2 font-medium">
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
