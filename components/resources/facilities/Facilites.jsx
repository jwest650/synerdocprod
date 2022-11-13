import { Select } from '@chakra-ui/react';
import { facilitiesTableData, physicianTableData } from '../../../assets/data';
import Link from 'next/link';
import MorePhysicianInfo from './MoreFacilitiesInfo';
import CreateFacilities from './CreateFacilites';
import { FiTrash2 } from 'react-icons/fi';
import MoreFacilitiesInfo from './MoreFacilitiesInfo';

const Facilities = () => {
  return (
    <section className="mx-10 mt-10">
      <div className="flex items-center justify-between border-b border-gray-600 pb-2">
        <div className="flex items-center gap-8">
          <h2 className="text-xl font-semibold tracking-wider">Facilities</h2>
          <CreateFacilities />
        </div>
        <div>
          <input
            placeholder="Enter first or last name"
            className="rounded px-3 py-[2px] text-black outline-none"
            type="text"
          />
          <button className="ml-4 rounded bg-orange-600 px-2 py-[1px] font-medium text-white">
            Search
          </button>
        </div>
      </div>

      <table className="mt-10 min-w-full overflow-auto">
        <thead className="border-b bg-[#0141CF] text-[18px] tracking-wider text-white">
          <tr>
            <th className=" border-gray-400  pl-2 text-left"></th>
            <th className=" border-gray-400 pl-2 text-left">Name</th>
            <th className=" border-gray-400 pl-2 text-left">Facility Type</th>
            <th className=" border-gray-400 pl-2 text-left">Email</th>
            <th className=" border-gray-400 pl-2 text-left">
              Preferred Numbers
            </th>
            <th className=" border-gray-400 pl-2 text-left">Status</th>
            <th className=" border-gray-400 pl-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="w-full bg-[#c6d8ffe1]">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className=" w-full border border-gray-400">
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
          {facilitiesTableData.map((facility, i) => (
            <tr key={i} className={`border  even:bg-[#eeeeee] `}>
              <td className=" max-h-[20px] min-w-[50px] border border-gray-400 py-1 px-2 font-medium">
                <span className="cursor-pointer">
                  <MoreFacilitiesInfo />
                </span>
              </td>
              <td className=" max-h-[20px] min-w-[270px] cursor-pointer border border-gray-400 py-1 px-2 font-medium text-orange-600 underline decoration-orange-600">
                <Link
                  href={`/Resources/facilities/${facility.url}/contactsinfo`}
                >
                  {facility.name}
                </Link>
              </td>
              <td className=" max-h-[20px] min-w-[270px] cursor-pointer border border-gray-400 py-1 px-2 font-medium">
                {facility.facilityType}
              </td>
              <td className=" max-h-[20px] min-w-[270px] cursor-pointer border border-gray-400 py-1 px-2 font-medium">
                {facility.email}
              </td>
              <td className=" max-h-[20px] min-w-[180px] cursor-pointer border border-gray-400 py-1 px-2 font-medium">
                {facility.preferredNumber}
              </td>
              <td
                className={`max-h-[20px] min-w-[100px] border border-gray-400 py-1 px-2 font-semibold  ${
                  facility.status === 'Active' && 'text-green-600'
                }`}
              >
                {facility.status}
              </td>
              <td className=" max-h-[20px] min-w-[50px] cursor-pointer border border-gray-400 py-1 px-2 text-lg font-medium text-red-600">
                <FiTrash2 />

                {/* <PhysicianTableAction
                  physicianUrl={physician.url}
                  physicianName={physician.name}
                /> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Facilities;
