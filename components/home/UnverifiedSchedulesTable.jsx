import { Tooltip } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import SearchIcon from '../../assets/images/search.png';
import MoreAssociateInfo from '../resources/associates/MoreAssociateInfo';
import TableSelect from '../structure/TableSelect';
import { payerReportingGroup, serviceCat } from './homeData';

const UnverifiedSchedulesTable = () => {
  return (
    <table className="mt-4 min-w-full overflow-auto shadow-md">
      <thead className="thead-primary">
        <tr>
          <th className="th-first"></th>
          <th className="th-middle">Patient Name</th>
          <th className="th-middle">Agency</th>
          <th className="th-middle">Agency Type</th>
          <th className="th-middle">Admin Date</th>
          <th className="th-middle">Service Category</th>
          <th className="th-middle">Status</th>
          <th className="th-middle">Payer Reporting Group</th>
          <th className="th-middle">Service Status</th>
          <th className="th-last">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr className=" border border-primary-gray bg-secondary-blue">
          <td className="td-primary"></td>
          <td className="td-primary"></td>
          <td className=" border border-primary-gray">
            <TableSelect options={['All', 'Sinam Care, LLC']} />
          </td>
          <td className="  border border-primary-gray">
            <TableSelect
              options={[
                'All',
                'Home Health',
                'Hospice',
                'Palliative care',
                'Private Duty',
              ]}
            />
          </td>
          <td className="td-primary"></td>
          <td className="  border border-primary-gray">
            <TableSelect options={['All', ...serviceCat]} />
          </td>
          <td className="  border border-primary-gray">
            <TableSelect
              options={[
                'All',
                'Active',
                'Pending',
                'Active and Pending',
                'Discharged',
                'Non-Admit',
                'Hold',
              ]}
            />
          </td>
          <td className="  border border-primary-gray">
            <TableSelect options={['All', ...payerReportingGroup]} />
          </td>
          <td className="  border border-primary-gray">
            <TableSelect
              options={[
                'All',
                'Unassigned',
                'Assigned',
                'Unverified',
                'Verified',
              ]}
            />
          </td>
          <td></td>
        </tr>
        <tr className={` w-full border even:bg-[#eeeeee]`}>
          <td className="td-primary cursor-pointer">
            <MoreAssociateInfo />
          </td>
          <td className="td-primary text-primary-orange underline">
            <Link href="/Patients/patient-schedules/1">Berry Allen</Link>
          </td>
          <td className="td-primary ">Sinam Care, LLC</td>
          <td className="td-primary ">Home Health</td>
          <td className="td-primary ">{new Date().toLocaleDateString()}</td>
          <td className="td-primary ">All</td>
          <td className="td-primary ">Discharged</td>
          <td className="td-primary ">Insurance</td>
          <td className="td-primary ">25</td>
          <td className="td-primary ">
            <div className="flex cursor-pointer items-center justify-center">
              {/* Link to that particular patient page */}
              <Link href={`/Patients/patient-schedules/1`}>
                <div>
                  <Tooltip
                    hasArrow
                    label={`View Patient`}
                    fontSize="11px"
                    color="white"
                  >
                    <figure>
                      <Image
                        src={SearchIcon}
                        width="17px"
                        height="17px"
                        alt="search"
                      />
                    </figure>
                  </Tooltip>
                </div>
              </Link>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default UnverifiedSchedulesTable;
