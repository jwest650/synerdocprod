import { Input, Select } from '@chakra-ui/react';
import React from 'react';
import { RiBook2Fill } from 'react-icons/ri';
import { physiciansData } from '../../../assets/data';
import TableAction from '../TableAction';
import CreatePayer from './CreatePayer';

const Payers = () => {
  return (
    <div>
      <section className="flex justify-between">
        <div className="flex  space-x-2">
          <h1 className="text-xl font-bold ">Payers</h1>
          <CreatePayer />
        </div>
        <div className="space-x-2">
          <Input w={200} type="text" size="sm" placeholder="Enter payer name" />
          <button className="rounded bg-orange-600 px-2 py-[1px] font-medium text-white">
            Search
          </button>
        </div>
      </section>
      {/* table */}
      <section>
        <table className="mt-10 min-w-full overflow-auto capitalize">
          <thead className="border-b bg-[#0141CF] text-[18px] tracking-wider text-white">
            <tr>
              <th className=" border-gray-100 pl-2 text-left">Name</th>
              <th className=" border-gray-100 pl-2 text-left">
                payer category
              </th>
              <th className=" border-gray-100 pl-2 text-left">
                claim filling type
              </th>
              <th className=" border-gray-100 pl-2 text-left">agency type</th>
              <th className=" border-gray-100 pl-2 text-left">invoice type</th>
              <th className=" border-gray-100 pl-2 text-left">cycle</th>
              <th className=" border-gray-100 pl-2 text-left">
                org start date
              </th>
              <th className=" border-gray-100 pl-2 text-left">org end date</th>
              <th className=" border-gray-100 pl-2 text-left">status</th>
              <th className=" border-gray-100 pl-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-[#CBDBFF]">
              <td className="border  border-gray-400"></td>
              <td className="border  border-gray-400">
                <Select placeholder="All" size="xs">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </td>
              <td className="border  border-gray-400"></td>
              <td className="border  border-gray-400"> </td>
              <td className="border  border-gray-400"></td>
              <td className="border  border-gray-400"></td>
              <td className="border  border-gray-400"></td>
              <td className="border  border-gray-400"></td>
              <td className="border  border-gray-400">
                {' '}
                <Select placeholder="Active" size="xs">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </td>
              <td className="border  border-gray-400"></td>
            </tr>
            {obj.map((value, i) => (
              <tr
                key={i}
                className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
              >
                <td
                  className="border border-gray-400
                                py-1  px-3 text-orange-500 underline"
                >
                  {value.name}
                </td>
                <td className="border  border-gray-400 py-1 px-3">
                  {value.cate}
                </td>
                <td className="border  border-gray-400 py-1 px-3">
                  {value.filling}
                </td>
                <td className="border  border-gray-400 py-1 px-3">
                  {value.agency}
                </td>
                <td className="border  border-gray-400 py-1 px-3">
                  {value.invoice}
                </td>
                <td className="border  border-gray-400 py-1 px-3">
                  {value.cycle}
                </td>
                <td className="border  border-gray-400 py-1 px-3">
                  {value.start}
                </td>
                <td className="border  border-gray-400 py-1 px-3">
                  {value.end}
                </td>
                <td className="border  border-gray-400 py-1 px-3  font-bold text-green-600">
                  {value.status}
                </td>
                <td className=" max-h-[20px] min-w-[120px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium">
                  <TableAction />
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan={8} className="pl-2">
                displaying page 1 of 1
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Payers;

const obj = [
  {
    name: 'atena',
    cate: 'insurance',
    filling: 'commercial insurance',
    agency: '',
    invoice: 'generic',
    cycle: 'weekly',
    start: '01/01/19',
    end: '',
    status: 'active',
  },
  {
    name: 'rick',
    cate: 'insurance',
    filling: 'commercial insurance',
    agency: '',
    invoice: 'generic',
    cycle: 'montly',
    start: '01/01/17',
    end: '',
    status: 'active',
  },
  {
    name: 'johnson',
    cate: 'insurance',
    filling: 'commercial insurance',
    agency: '',
    invoice: 'ub04',
    cycle: 'monthly',
    start: '01/01/18',
    end: '',
    status: 'active',
  },
];
