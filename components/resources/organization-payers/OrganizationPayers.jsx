import { Select } from '@chakra-ui/react';
import { organizationPayersTableData } from '../../../assets/data';
import Link from 'next/link';
import CreateOrganizationPayers from './CreateOrganizationPayers';
import SearchIcon from '../../../assets/images/search.png';
import { useState } from 'react';
import TableSelect from '../../structure/TableSelect';
import Image from 'next/image';

const OrganizationPayers = () => {
  const [payerStatus, setPayerStatus] = useState('');
  return (
    <section className="mx-10 mt-10">
      <div className="flex items-center justify-between border-b border-gray-600 pb-2">
        <div className="flex items-center gap-8">
          <h2 className="verdana18 font-semibold tracking-wider">Payers</h2>
          <CreateOrganizationPayers />
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
            <th className="th-first">Name</th>
            <th className="th-middle">Payer Category</th>
            <th className="th-middle">Claim Filing Type</th>
            <th className="th-middle">Agency Type</th>
            <th className="th-middle">Invoice Type </th>
            <th className="th-middle">Cycle</th>
            <th className="th-middle">Org. Start Date</th>
            <th className="th-middle">Org. End Date</th>
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
                setSelectedOption={setPayerStatus}
                options={['All', 'Registered Nurse', 'Nurse Practitioner']}
              />
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {organizationPayersTableData.map((organizationPayers, i) => (
            <tr key={i} className={`verdana12 border even:bg-[#eeeeee]`}>
              <td className="td-primary min-w-[250px]  text-orange-600 underline decoration-orange-600">
                <Link
                  href={`/Resources/organization-payers/${organizationPayers.url}/contactinfo`}
                >
                  {organizationPayers.name}
                </Link>
              </td>
              <td className=" max-h-[20px] min-w-[150px] border border-primary-gray py-1 px-2 font-medium">
                {organizationPayers.payerCategory}
              </td>
              <td className="td-primary min-w-[270px] ">
                {organizationPayers.claimFilingType}
              </td>
              <td className="td-primary min-w-[150px] ">
                {organizationPayers.agencyType}
              </td>
              <td className="td-primary min-w-[180px] ">
                {organizationPayers.invoiceType}
              </td>
              <td className="td-primary min-w-[180px] ">
                {organizationPayers.cycle}
              </td>
              <td className="td-primary min-w-[180px] ">
                {organizationPayers.orgStartDate}
              </td>
              <td className="td-primary min-w-[180px] ">
                {organizationPayers.orgEndDate}
              </td>
              <td
                className={`td-primary min-w-[100px] font-semibold  ${
                  organizationPayers.status === 'Active' && 'text-green-600'
                }`}
              >
                {organizationPayers.status}
              </td>
              <td className="td-primary min-w-[50px]">
                <div className="flex w-full justify-center">
                  <Image src={SearchIcon} alt="icon" width={16} height={16} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default OrganizationPayers;
