import { Select } from '@chakra-ui/react';
import { referralSourcesTableData } from '../../../assets/data';
import Link from 'next/link';
import CreateReferral from './CreateReferral';
import MoreReferralSourcesInfo from './MoreReferralSourcesInfo';
import ReferralSourcesTableAction from './ReferralSourcesTableAction';

const ReferralSources = () => {
  return (
    <section className="mx-10 mt-10">
      <div className="flex items-center justify-between border-b border-gray-600 pb-2">
        <div className="flex items-center gap-8">
          <h2 className="text-xl font-semibold tracking-wider">
            Referral Sources
          </h2>
          <CreateReferral />
        </div>
        <div className="flex items-center gap-3">
          <Select
            css={{ backgroundColor: '#c6d8ffe1', border: 'none' }}
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
        <thead className="border-b bg-[#0141CF] text-[18px] tracking-wider text-white">
          <tr>
            <th className=" border-gray-400 border-t-[#0141CF] border-l-[#0141CF] pl-2 text-left"></th>
            <th className=" border-gray-400 border-t-[#0141CF] pl-2 text-left">
              Name
            </th>
            <th className=" border-gray-400 border-t-[#0141CF] pl-2 text-left">
              Referral source Type
            </th>
            <th className=" border-gray-400 border-t-[#0141CF] pl-2 text-left">
              Email{' '}
            </th>
            <th className=" border-gray-400 border-t-[#0141CF] pl-2 text-left">
              Preferred Numbers
            </th>
            <th className=" border-gray-400 border-t-[#0141CF] pl-2 text-left">
              Status
            </th>
            <th className=" border-gray-400 border-t-[#0141CF] border-r-[#0141CF] pl-2 text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="w-full bg-[#c6d8ffe1]">
            <td></td>
            <td></td>
            <td className=" w-full border border-gray-400">
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
          {referralSourcesTableData.map((referralSource, i) => (
            <tr key={i} className={`border  even:bg-[#eeeeee] `}>
              <td className=" max-h-[20px] min-w-[50px] border border-gray-400 py-1 px-2 font-medium">
                <span className="cursor-pointer">
                  <MoreReferralSourcesInfo />
                </span>
              </td>
              <td className=" max-h-[20px] min-w-[230px] cursor-pointer border border-gray-400 py-1 px-2 font-medium text-orange-600 underline decoration-orange-600">
                <Link
                  href={`/Resources/referral-sources/${referralSource.url}/contactinfo`}
                >
                  {referralSource.name}
                </Link>
              </td>
              <td className=" max-h-[20px] min-w-[180px] cursor-pointer border border-gray-400 py-1 px-2 font-medium">
                {referralSource.referralSourceType}
              </td>
              <td className=" max-h-[20px] min-w-[270px] cursor-pointer border border-gray-400 py-1 px-2 font-medium">
                {referralSource.email}
              </td>
              <td className=" max-h-[20px] min-w-[220px] border-gray-400 py-1 px-2 font-medium">
                {referralSource.preferredNumber}
              </td>
              <td
                className={`max-h-[20px] min-w-[100px] border border-gray-400 py-1 px-2 font-semibold  ${
                  referralSource.status === 'Active' && 'text-green-600'
                }`}
              >
                {referralSource.status}
              </td>
              <td className=" max-h-[20px] min-w-[120px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium">
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
