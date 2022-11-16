import { Select } from '@chakra-ui/react';
import { organizationPayersTableData } from '../../../assets/data';
import Link from 'next/link';
import CreateOrganizationPayers from './CreateOrganizationPayers';
import { FcSearch } from 'react-icons/fc';

const OrganizationPayers = () => {
  return (
    <section className="mx-10 mt-10">
      <div className="flex items-center justify-between border-b border-gray-600 pb-2">
        <div className="flex items-center gap-8">
          <h2 className="text-xl font-semibold tracking-wider">Physicians</h2>
          <CreateOrganizationPayers />
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
        <thead className="border-b bg-[#0141CF] text-[15px] tracking-wider text-white">
          <tr>
            <th className=" border border-primary-gray border-t-primary-blue border-l-primary-blue pl-2 text-left">
              Name
            </th>
            <th className=" border border-primary-gray border-t-primary-blue pl-2 text-left">
              Payer Category
            </th>
            <th className=" border border-primary-gray border-t-primary-blue pl-2 text-left">
              Claim Filing Type
            </th>
            <th className=" border border-primary-gray border-t-primary-blue pl-2 text-left">
              Agency Type
            </th>
            <th className=" border border-primary-gray border-t-primary-blue pl-2 text-left">
              Invoice Type{' '}
            </th>
            <th className=" border border-primary-gray border-t-primary-blue pl-2 text-left">
              Cycle
            </th>
            <th className=" border border-primary-gray border-t-primary-blue pl-2 text-left">
              Org. Start Date
            </th>
            <th className=" border border-primary-gray border-t-primary-blue pl-2 text-left">
              Org. End Date
            </th>
            <th className=" border border-primary-gray border-t-primary-blue pl-2 text-left">
              Status
            </th>
            <th className=" border border-primary-gray border-t-primary-blue border-r-primary-blue pl-2 text-left">
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
            <td></td>
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
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {organizationPayersTableData.map((organizationPayers, i) => (
            <tr key={i} className={`border text-[15px]  even:bg-[#eeeeee]`}>
              <td className=" max-h-[20px] min-w-[250px] cursor-pointer border border-primary-gray py-1 px-2 font-medium text-orange-600 underline decoration-orange-600">
                <Link
                  href={`/Resources/organization-payers/${organizationPayers.url}/contactinfo`}
                >
                  {organizationPayers.name}
                </Link>
              </td>
              <td className=" max-h-[20px] min-w-[150px] border border-primary-gray py-1 px-2 font-medium">
                {organizationPayers.payerCategory}
              </td>
              <td className=" max-h-[20px] min-w-[270px] cursor-pointer border border-primary-gray py-1 px-2 font-medium">
                {organizationPayers.claimFilingType}
              </td>
              <td className=" max-h-[20px] min-w-[150px] cursor-pointer border border-primary-gray py-1 px-2 font-medium">
                {organizationPayers.agencyType}
              </td>
              <td className=" max-h-[20px] min-w-[180px] cursor-pointer border border-primary-gray py-1 px-2 font-medium">
                {organizationPayers.invoiceType}
              </td>
              <td className=" max-h-[20px] min-w-[180px] cursor-pointer border border-primary-gray py-1 px-2 font-medium">
                {organizationPayers.cycle}
              </td>
              <td className=" max-h-[20px] min-w-[180px] cursor-pointer border border-primary-gray py-1 px-2 font-medium">
                {organizationPayers.orgStartDate}
              </td>
              <td className=" max-h-[20px] min-w-[180px] cursor-pointer border border-primary-gray py-1 px-2 font-medium">
                {organizationPayers.orgEndDate}
              </td>
              <td
                className={`max-h-[20px] min-w-[100px] border border-primary-gray py-1 px-2 font-semibold  ${
                  organizationPayers.status === 'Active' && 'text-green-600'
                }`}
              >
                {organizationPayers.status}
              </td>
              <td className=" max-h-[20px] min-w-[50px] cursor-pointer border border-primary-gray py-1 px-2 text-lg font-medium text-red-600">
                <FcSearch />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default OrganizationPayers;
