import { facilitiesTableData, physicianTableData } from '../../../assets/data';
import Link from 'next/link';
import CreateFacilities from './CreateFacilites';
import MoreFacilitiesInfo from './MoreFacilitiesInfo';
import TableSelect from '../../structure/TableSelect';
import { useState } from 'react';
import { FcEmptyTrash } from 'react-icons/fc';

const Facilities = () => {
  const [facilityStatus, setFacilityStatus] = useState('');

  return (
    <section className="mx-10 mt-10">
      <div className="flex items-center justify-between border-b border-gray-600 pb-2">
        <div className="flex items-center gap-8">
          <h2 className="verdana18 font-semibold tracking-wider">Facilities</h2>
          <CreateFacilities />
        </div>
        <div className="space-x-3">
          <input
            placeholder="Enter first or last name"
            className="input-primary"
            type="text"
          />
          <button className="btn-primary">Search</button>
        </div>
      </div>

      <table className="mt-10 min-w-full overflow-auto">
        <thead className="thead-primary">
          <tr>
            <th className="th-first"></th>
            <th className="th-middle">Name</th>
            <th className="th-middle">Facility Type</th>
            <th className="th-middle">Email</th>
            <th className="th-middle">Preferred Numbers</th>
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
            <td></td>
            <td className=" w-full border border-primary-gray">
              <TableSelect
                setSelectedOption={setFacilityStatus}
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
          {facilitiesTableData.map((facility, i) => (
            <tr key={i} className={`border even:bg-[#eeeeee]`}>
              <td className="td-primary min-w-[50px]  ">
                <MoreFacilitiesInfo />
              </td>
              <td className="td-primary min-w-[270px] text-orange-600 underline decoration-orange-600">
                <Link
                  href={`/Resources/facilities/${facility.url}/contactsinfo`}
                >
                  {facility.name}
                </Link>
              </td>
              <td className="td-primary min-w-[270px]">
                {facility.facilityType}
              </td>
              <td className="td-primary min-w-[270px]">{facility.email}</td>
              <td className="td-primary min-w-[180px]">
                {facility.preferredNumber}
              </td>
              <td
                className={`td-primary min-w-[100px] font-semibold  ${
                  facility.status === 'Active' && 'text-green-600'
                }`}
              >
                {facility.status}
              </td>
              <td className="td-primary min-w-[30px] text-primary-orange ">
                <FcEmptyTrash className="mx-auto" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Facilities;
