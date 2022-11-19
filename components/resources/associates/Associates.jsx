import { Select } from '@chakra-ui/react';
import { associateTableData } from '../../../assets/data';
import TableAction from '../TableAction';
import CreateAssociate from './CreateAssociate';
import Link from 'next/link';
import MoreAssociateInfo from './MoreAssociateInfo';
import TableSelect from '../../structure/TableSelect';
import { useState } from 'react';

const Associates = () => {
  const [associateName, setAssociateName] = useState('All');
  const [associateClassification, setAssociateClassification] = useState('All');
  const [associateDiscipline, setAssociateDiscipline] = useState('All');
  const [associateStatus, setAssociateStatus] = useState('All');

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
          <button className="btn-primary">Export</button>
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
            <th className="th-middle">Classification</th>
            <th className="th-middle">Discipline</th>
            <th className="th-middle">Hire Date</th>
            <th className="th-middle">Status</th>
            <th className="th-last">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="w-full border border-primary-gray bg-secondary-blue">
            <td></td>
            <td className="w-full border border-primary-gray">
              <TableSelect
                setSelectedOption={setAssociateName}
                options={[
                  'All',
                  'Florida Branch',
                  'California Branch',
                  'New York Branch',
                ]}
              />
            </td>
            <td className=" w-full border border-primary-gray">
              <TableSelect
                setSelectedOption={setAssociateClassification}
                options={['All', 'Aministrative', 'Field Staff - Full Time']}
              />
            </td>
            <td className=" w-full border border-primary-gray">
              <TableSelect
                setSelectedOption={setAssociateDiscipline}
                options={['All', 'Registered Nurse', 'Nurse Practitioner']}
              />
            </td>
            <td></td>
            <td className=" w-full border border-primary-gray">
              <TableSelect
                setSelectedOption={setAssociateStatus}
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
          {associateTableData.map((associate, i) => (
            <tr key={i} className={`verdana13 border even:bg-[#eeeeee]`}>
              <td className="td-primary min-w-[40px] cursor-pointer">
                <MoreAssociateInfo />
              </td>
              <td className="td-primary min-w-[230px] text-orange-600 underline">
                <Link href={`/Resources/associates/${associate.url}/profile`}>
                  {associate.name}
                </Link>
              </td>
              <td className="td-primary min-w-[270px]">
                {associate.classification}
              </td>
              <td className="td-primary min-w-[330px]">
                {associate.discipline}
              </td>
              <td className="td-primary min-w-[120px]">{associate.hireDate}</td>
              <td
                className={`td-primary min-w-[100px] font-semibold  ${
                  associate.status === 'Active' && 'text-green-600'
                }`}
              >
                {associate.status}
              </td>
              <td className="td-primary min-w-[120px]">
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
