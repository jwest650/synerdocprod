import TableAction from '../resources/TableAction';
import TableSelect from '../structure/TableSelect';

const MyScheduleTable = () => {
  return (
    <table className="mt-2 min-w-full overflow-auto shadow-md">
      <thead className="thead-primary">
        <tr>
          <th className="th-first">Patient</th>
          <th className="th-middle">Associate</th>
          <th className="th-middle">Service</th>
          <th className="th-middle">Service Date</th>
          <th className="th-middle">Time In</th>
          <th className="th-middle">Time Out</th>
          <th className="th-middle">Agency</th>
          <th className="th-middle">Status</th>
          <th className="th-last">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr className=" border border-primary-gray bg-secondary-blue">
          <td className=" border border-primary-gray">
            <TableSelect options={['All', 'Option2']} />
          </td>
          <td className="  border border-primary-gray">
            <TableSelect options={['Guest Guest', 'Option2']} />
          </td>
          <td className="  border border-primary-gray">
            <TableSelect options={['All', 'Option2']} />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td className="  border border-primary-gray">
            <TableSelect options={['All', 'Option2']} />
          </td>
          <td className="  border border-primary-gray">
            <TableSelect options={['Unverified', 'Option2']} />
          </td>
          <td></td>
        </tr>
        <tr className="verdana11 border border-primary-gray bg-[#eeeeee]">
          <td colSpan="9" className="td-primary px-2">
            No records to display
          </td>
        </tr>
        {/*
        <tr className={` w-full border even:bg-[#eeeeee]`}>
           <td className="td-primary cursor-pointer"></td>
          <td className="td-primary  text-orange-600 underline"></td>
          <td className="td-primary "></td>
          <td className="td-primary "></td>
          <td className="td-primary "></td>
          <td className={`td-primary  font-semibold`}></td>
          <td className="td-primary ">
            <TableAction />
          </td> 
        </tr>
          */}
      </tbody>
    </table>
  );
};

export default MyScheduleTable;
