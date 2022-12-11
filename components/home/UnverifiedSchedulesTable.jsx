import Image from 'next/image';
import SearchIcon from '../../assets/images/search.png';
import MoreAssociateInfo from '../resources/associates/MoreAssociateInfo';
import TableSelect from '../structure/TableSelect';

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
            <TableSelect options={['All', 'Option2']} />
          </td>
          <td className="  border border-primary-gray">
            <TableSelect options={['All', 'Option2']} />
          </td>
          <td className="td-primary"></td>
          <td className="  border border-primary-gray">
            <TableSelect options={['All', 'Option2']} />
          </td>
          <td className="  border border-primary-gray">
            <TableSelect options={['All', 'Option2']} />
          </td>
          <td className="  border border-primary-gray">
            <TableSelect options={['All', 'Option2']} />
          </td>
          <td className="  border border-primary-gray">
            <TableSelect options={['Unverified', 'Option2']} />
          </td>
          <td></td>
        </tr>
        <tr className={` w-full border even:bg-[#eeeeee]`}>
          <td className="td-primary cursor-pointer">
            <MoreAssociateInfo />
          </td>
          <td className="td-primary text-primary-orange underline">
            Berry Allen
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
              <Image src={SearchIcon} width="17px" height="17px" alt="search" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default UnverifiedSchedulesTable;
