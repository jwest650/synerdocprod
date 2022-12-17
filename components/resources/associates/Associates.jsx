<<<<<<< HEAD
import { Select } from '@chakra-ui/react';
=======
import { employmentDiscipline } from './associateDatatwo';
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
import TableAction from '../TableAction';
import CreateAssociate from './CreateAssociate';
import Link from 'next/link';
import MoreAssociateInfo from './MoreAssociateInfo';
import TableSelect from '../../structure/TableSelect';
import { useState } from 'react';
import { associateTableData } from './associateData';
<<<<<<< HEAD
=======
import { administrative, statusDetails } from './associateDataFour';
import { FcLock, FcUnlock } from 'react-icons/fc';
import UniversityList from './UniversityList';
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7

const Associates = () => {
  const [associateName, setAssociateName] = useState('All');
  const [associateClassification, setAssociateClassification] = useState('All');
  const [associateDiscipline, setAssociateDiscipline] = useState('All');
  const [associateStatus, setAssociateStatus] = useState('All');
<<<<<<< HEAD
=======
  const [isLocked, setIsLocked] = useState(false);

  const handleStatusColor = (status) => {
    if (status === 'Active') return 'text-green-600';
    if (status === 'Inactive') return 'text-yellow-600';
    if (status === 'Suspended') return 'text-gray-600';
    if (status === 'Pending') return 'text-blue-600';
    if (status === 'Terminated') return 'text-red-600';
    return '';
  };
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7

  return (
    <section className="mx-5 mt-10">
      <div className="flex items-center justify-between border-b border-gray-600 pb-2">
        <div className="flex items-center gap-8">
          <h2 className="verdana16 font-semibold tracking-wider">Associates</h2>
          <CreateAssociate />
<<<<<<< HEAD
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
=======
          <UniversityList />
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
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
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
<<<<<<< HEAD
                options={[
                  'All',
                  'Florida Branch',
                  'California Branch',
                  'New York Branch',
                ]}
=======
                options={['All', 'Sinam Care, LLC']}
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
              />
            </td>
            <td className=" w-full border border-primary-gray">
              <TableSelect
                setSelectedOption={setAssociateClassification}
<<<<<<< HEAD
                options={['All', 'Aministrative', 'Field Staff - Full Time']}
=======
                options={['All', ...administrative]}
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
              />
            </td>
            <td className=" w-full border border-primary-gray">
              <TableSelect
                setSelectedOption={setAssociateDiscipline}
<<<<<<< HEAD
                options={['All', 'Registered Nurse', 'Nurse Practitioner']}
=======
                options={['All', ...employmentDiscipline]}
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
              />
            </td>
            <td></td>
            <td className=" w-full border border-primary-gray">
              <TableSelect
                setSelectedOption={setAssociateStatus}
<<<<<<< HEAD
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
=======
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
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
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
<<<<<<< HEAD
                className={`td-primary min-w-[100px] font-semibold  ${
                  associate.status === 'Active' && 'text-green-600'
                }`}
=======
                className={`td-primary min-w-[100px] font-semibold ${handleStatusColor(
                  associate.status
                )}`}
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
              >
                {associate.status}
              </td>
              <td className="td-primary min-w-[120px]">
<<<<<<< HEAD
                <TableAction />
              </td>
            </tr>
          ))}
=======
                <TableAction associateUrl={associate.url} />
              </td>
            </tr>
          ))}
          <tr>
            <td className="td-primary" colSpan={7}>
              <div className="flex items-center gap-2">
                Displaying page 1 of 1, rows 1 to 2 of 2 | Rows per page:
                <TableSelect options={[25, 50, 100, 150, 200, 250, 500]} />
              </div>
            </td>
          </tr>
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
        </tbody>
      </table>
    </section>
  );
};

export default Associates;
