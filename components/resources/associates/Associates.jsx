import { employmentDiscipline } from './associateDatatwo';
import TableAction from '../TableAction';
import CreateAssociate from './CreateAssociate';
import Link from 'next/link';
import MoreAssociateInfo from './MoreAssociateInfo';
import TableSelect from '../../structure/TableSelect';
import { useState } from 'react';
import { associateTableData } from './associateData';
import { administrative, statusDetails } from './associateDataFour';
import { FcLock, FcUnlock } from 'react-icons/fc';

const Associates = () => {
  const [associateName, setAssociateName] = useState('All');
  const [associateClassification, setAssociateClassification] = useState('All');
  const [associateDiscipline, setAssociateDiscipline] = useState('All');
  const [associateStatus, setAssociateStatus] = useState('All');
  const [isLocked, setIsLocked] = useState(false);

  const handleStatusColor = (status) => {
    if (status === 'Active') return 'text-green-600';
    if (status === 'Inactive') return 'text-yellow-600';
    if (status === 'Suspended') return 'text-gray-600';
    if (status === 'Pending') return 'text-blue-600';
    if (status === 'Terminated') return 'text-red-600';
    return '';
  };

  return (
    <section className="mx-5 mt-10">
      <div className="flex items-center justify-between border-b border-gray-600 pb-2">
        <div className="flex items-center gap-8">
          <h2 className="verdana16 font-semibold tracking-wider">Associates</h2>
          <CreateAssociate />
        </div>
        <div className="verdana12 flex items-center gap-3">
          <TableSelect
            options={[
              'Associate List XLS',
              'Associate List PDF',
              'Associate Caseload XLS',
              'Associate Caseload PDF',
            ]}
          />
          <button className="btn-primary">Export</button>
          <input
            placeholder="Enter first or last name"
            className="input-primary"
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
                options={['All', 'Sinam Care, LLC']}
              />
            </td>
            <td className=" w-full border border-primary-gray">
              <TableSelect
                setSelectedOption={setAssociateClassification}
                options={['All', ...administrative]}
              />
            </td>
            <td className=" w-full border border-primary-gray">
              <TableSelect
                setSelectedOption={setAssociateDiscipline}
                options={['All', ...employmentDiscipline]}
              />
            </td>
            <td></td>
            <td className=" w-full border border-primary-gray">
              <TableSelect
                setSelectedOption={setAssociateStatus}
                options={['All', ...statusDetails]}
              />
            </td>
            <td className="td-ptimary">
              {isLocked ? (
                <i
                  className="mx-4 flex cursor-pointer justify-center"
                  onClick={() => setIsLocked(false)}
                >
                  <FcUnlock className="scale-150 text-base" />
                </i>
              ) : (
                <i
                  className="mx-4 flex cursor-pointer justify-center"
                  onClick={() => setIsLocked(true)}
                >
                  <FcLock className="scale-150 text-base" />
                </i>
              )}
            </td>
          </tr>
          {associateTableData.map((associate, i) => (
            <tr key={i} className={`border even:bg-[#eeeeee]`}>
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
                className={`td-primary min-w-[100px] font-semibold ${handleStatusColor(
                  associate.status
                )}`}
              >
                {associate.status}
              </td>
              <td className="td-primary min-w-[120px]">
                <TableAction associateUrl={associate.url} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Associates;
