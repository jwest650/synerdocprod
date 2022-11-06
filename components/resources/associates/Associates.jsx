import { Select } from '@chakra-ui/react';
import { associateTableData } from '../../../assets/data';
import TableAction from '../TableAction';
import CreateAssociate from '../../dashboard/CreateAssociate';
import Link from 'next/link';
import MoreAssociateInfo from './MoreAssociateInfo';

const Associates = () => {
  return (
    <section className="mx-10 mt-10">
      <div className="flex items-center justify-between border-b border-gray-600 pb-2">
        <div className="flex items-center gap-8">
          <h2 className="text-xl font-semibold tracking-wider">Associates</h2>
          <CreateAssociate />
        </div>
        <div className="flex items-center gap-3">
          <Select
            css={{ backgroundColor: '#c6d8ffe1', border: 'none' }}
            className="shadow outline-none"
            size="xs"
          >
            <option value="option1" className="text-gray-800">
              Associate List XLS
            </option>
            <option value="option2" className="text-gray-800">
              Associate List PDF
            </option>
            <option value="option3" className="text-gray-800">
              Associate Caseload XLS
            </option>
            <option value="option3" className="text-gray-800">
              Associate Caseload PDF
            </option>
          </Select>
          <button className="rounded bg-orange-600 px-2 py-[1px] font-medium text-white">
            Export
          </button>
          <input
            placeholder="Enter first or last name"
            className="rounded px-3 py-1 text-black outline-none"
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
            <th className=" border-gray-100  pl-2 text-left"></th>
            <th className=" border-gray-100 pl-2 text-left">Name</th>
            <th className=" border-gray-100 pl-2 text-left">Classification</th>
            <th className=" border-gray-100 pl-2 text-left">Discipline</th>
            <th className=" border-gray-100 pl-2 text-left">Hire Date</th>
            <th className=" border-gray-100 pl-2 text-left">Status</th>
            <th className=" border-gray-100 pl-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="w-full bg-[#c6d8ffe1]">
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
                <option value="option2" className="text-gray-800">
                  Florida Branch
                </option>
                <option value="option3" className="text-gray-800">
                  California Branch
                </option>
                <option value="option3" className="text-gray-800">
                  New York Branch
                </option>
              </Select>
            </td>
            <td className=" w-full border border-gray-400">
              <Select
                css={{ backgroundColor: '#c6d8ffe1', border: 'none' }}
                className="cursor-pointer shadow outline-none"
                size="xs"
              >
                <option value="option1" className="text-gray-800">
                  All
                </option>
                <option value="option2" className="text-gray-800">
                  Aministrative
                </option>
                <option value="option3" className="text-gray-800">
                  Field Staff - Full Time
                </option>
              </Select>
            </td>
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
                  Registered Nurse{' '}
                </option>
                <option value="option3" className="text-gray-800">
                  Nurse Practitioner
                </option>
              </Select>
            </td>
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
          {associateTableData.map((associate, i) => (
            <tr key={i} className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}>
              <td className=" max-h-[20px] min-w-[50px] border border-gray-400 py-1 px-2 font-medium">
                <span className="cursor-pointer">
                  <MoreAssociateInfo />
                </span>
              </td>
              <td className=" max-h-[20px] min-w-[230px] cursor-pointer border border-gray-400 py-1 px-2 font-medium text-orange-600 underline decoration-orange-600">
                <Link href={`/Resources/associates/${associate.url}`}>
                  <a>{associate.name}</a>
                </Link>
              </td>
              <td className=" max-h-[20px] min-w-[270px] cursor-pointer border border-gray-400 py-1 px-2 font-medium">
                {associate.classification}
              </td>
              <td className=" max-h-[20px] min-w-[330px] cursor-pointer border border-gray-400 py-1 px-2 font-medium">
                {associate.discipline}
              </td>
              <td className=" max-h-[20px] min-w-[120px] border-gray-400 py-1 px-2 font-medium">
                {associate.hireDate}
              </td>
              <td
                className={`max-h-[20px] min-w-[100px] border border-gray-400 py-1 px-2 font-semibold  ${
                  associate.status === 'Active' && 'text-green-600'
                }`}
              >
                {associate.status}
              </td>
              <td className=" max-h-[20px] min-w-[120px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium">
                <TableAction />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Associates;
