import { Select } from '@chakra-ui/react';
import { referralSourcesTableData } from '../../../assets/data';
import Link from 'next/link';
import CreateReferral from './CreateReferral';
import MoreReferralSourcesInfo from './MoreReferralSourcesInfo';
import ReferralSourcesTableAction from './ReferralSourcesTableAction';
import TableSelect from '../../structure/TableSelect';
import { useState } from 'react';

const ReferralSources = () => {
  const [referralType, setReferralType] = useState('');
  const [referralStatus, setReferralStatus] = useState('');

  return (
    <section className="verdana11 mx-10 mt-10">
      <div className="flex items-center justify-between border-b border-gray-600 pb-2">
        <div className="flex items-center gap-8">
          <h2 className="verdana16 font-semibold tracking-wider">
            Referral Sources
          </h2>
          <CreateReferral />
        </div>
        <div className="verdana12 flex items-center gap-3">
          <Select
            css={{
              backgroundColor: '#c6d8ffe1',
              border: 'none',
              height: '22px',
            }}
            className="shadow outline-none"
            size="xs"
          >
            <option value="option1" className="text-gray-800">
              PDF{' '}
            </option>
            <option value="option2" className="text-gray-800">
              Spreadsheet
            </option>
          </Select>
          <button className="btn-primary">Export</button>
          <input
            placeholder="Enter first or last name"
            className="input-primary ml-2"
            type="text"
          />
          <button className="btn-primary">Search</button>
        </div>
      </div>

      <table className="mt-2 min-w-full overflow-auto shadow-md">
        <thead className="thead-primary">
          <tr>
            <th className="th-first"></th>
            <th className="th-middle">Name</th>
            <th className="th-middle">Referral source Type</th>
            <th className="th-middle">Email </th>
            <th className="th-middle">Preferred Numbers</th>
            <th className="th-middle">Status</th>
            <th className="th-last">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="w-full border border-primary-gray bg-[#c6d8ffe1]">
            <td></td>
            <td></td>
            <td className=" w-full border border-gray-400">
              <TableSelect
                setSelectedOption={setReferralType}
                options={['All', 'MD', 'PA']}
              />{' '}
            </td>
            <td></td>
            <td></td>
            <td className=" w-full border border-gray-400">
              <TableSelect
                setSelectedOption={setReferralStatus}
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
          {referralSourcesTableData.map((referralSource, i) => (
            <tr key={i} className={`border even:bg-[#eeeeee]`}>
              <td className=" td-primary min-w-[50px] cursor-pointer">
                <MoreReferralSourcesInfo />
              </td>
              <td className=" td-primary min-w-[230px] cursor-pointer text-orange-600 underline decoration-orange-600">
                <Link
                  href={`/Resources/referral-sources/${referralSource.url}/contactinfo`}
                >
                  {referralSource.name}
                </Link>
              </td>
              <td className=" td-primary min-w-[180px] cursor-pointer">
                {referralSource.referralSourceType}
              </td>
              <td className=" td-primary min-w-[270px] cursor-pointer">
                {referralSource.email}
              </td>
              <td className=" td-primary min-w-[220px]">
                {referralSource.preferredNumber}
              </td>
              <td
                className={`td-primary min-w-[100px] font-semibold  ${
                  referralSource.status === 'Active' && 'text-green-600'
                }`}
              >
                {referralSource.status}
              </td>
              <td className=" td-primary min-w-[120px] cursor-pointer">
                <ReferralSourcesTableAction />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex w-fit items-center gap-2 border-x border-b border-gray-400 bg-[#eee] px-5">
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

export default ReferralSources;
