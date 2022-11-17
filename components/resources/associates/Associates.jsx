import { Select } from '@chakra-ui/react';
import { associateTableData } from '../../../assets/data';
import TableAction from '../TableAction';
import CreateAssociate from './CreateAssociate';
import Link from 'next/link';
import MoreAssociateInfo from './MoreAssociateInfo';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Associates = () => {
  return (
    <section className="mx-5 mt-10">
      <div className="flex items-center justify-between border-b border-gray-600 pb-2">
        <div className="flex items-center gap-8">
          <h2 className="verdana18 font-semibold tracking-wider">Associates</h2>
          <CreateAssociate />
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
          <button className="rounded bg-orange-600 px-2 py-[2px] font-medium text-white">
            Export
          </button>
          <input
            placeholder="Enter first or last name"
            className="verdana12 rounded border border-secondary-blue px-3 py-[2px] text-black outline-none"
            type="text"
          />
          <button className="rounded bg-orange-600 px-2 py-[2px] font-medium text-white">
            Search
          </button>
        </div>
      </div>
      <table className="mt-10 min-w-full overflow-auto">
        <thead className="verdana12 border-b bg-primary-blue tracking-wider text-white">
          <tr>
            <th className="border border-primary-gray border-t-primary-blue border-l-primary-blue pl-2 text-left"></th>
            <th className=" border border-primary-gray border-t-primary-blue pl-2 text-left">
              Name
            </th>
            <th className=" border border-primary-gray border-t-primary-blue pl-2 text-left">
              Classification
            </th>
            <th className=" border border-primary-gray border-t-primary-blue pl-2 text-left">
              Discipline
            </th>
            <th className=" border border-primary-gray border-t-primary-blue pl-2 text-left">
              Hire Date
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
            <td className="w-full border border-primary-gray">
              <Select
                icon={<MdKeyboardArrowDown className="text-primary-orange" />}
                iconColor="rgb(234 88 12)"
                css={{
                  backgroundColor: '#c6d8ffe1',
                  border: 'none',
                  fontSize: '12px',
                  fontFamily: 'Arial',
                }}
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
            <td className=" w-full border border-primary-gray">
              <Select
                icon={<MdKeyboardArrowDown className="text-primary-orange" />}
                iconColor="rgb(234 88 12)"
                css={{
                  backgroundColor: '#c6d8ffe1',
                  border: 'none',
                  fontSize: '12px',
                }}
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
            <td className=" w-full border border-primary-gray">
              <Select
                icon={<MdKeyboardArrowDown className="text-primary-orange" />}
                iconColor="rgb(234 88 12)"
                css={{
                  backgroundColor: '#c6d8ffe1',
                  border: 'none',
                  fontSize: '12px',
                }}
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
            <td className=" w-full border border-primary-gray">
              <Select
                icon={<MdKeyboardArrowDown className="text-primary-orange" />}
                iconColor="rgb(234 88 12)"
                css={{
                  backgroundColor: '#c6d8ffe1',
                  border: 'none',
                  fontSize: '12px',
                }}
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
            <tr key={i} className={`border text-[15px]  even:bg-[#eeeeee]`}>
              <td className=" max-h-[20px] min-w-[50px] border border-primary-gray py-1 px-2 font-medium">
                <span className="cursor-pointer">
                  <MoreAssociateInfo />
                </span>
              </td>
              <td className=" max-h-[20px] min-w-[230px] cursor-pointer border border-primary-gray py-1 px-2 font-medium text-orange-600 underline decoration-orange-600">
                <Link href={`/Resources/associates/${associate.url}/profile`}>
                  {associate.name}
                </Link>
              </td>
              <td className=" max-h-[20px] min-w-[270px] cursor-pointer border border-primary-gray py-1 px-2 font-medium">
                {associate.classification}
              </td>
              <td className=" max-h-[20px] min-w-[330px] cursor-pointer border border-primary-gray py-1 px-2 font-medium">
                {associate.discipline}
              </td>
              <td className=" max-h-[20px] min-w-[120px] border border-primary-gray py-1 px-2 font-medium">
                {associate.hireDate}
              </td>
              <td
                className={`max-h-[20px] min-w-[100px] border border-primary-gray py-1 px-2 font-semibold  ${
                  associate.status === 'Active' && 'text-green-600'
                }`}
              >
                {associate.status}
              </td>
              <td className=" max-h-[20px] min-w-[120px] cursor-pointer border  border-primary-gray py-1 px-2 font-medium">
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
