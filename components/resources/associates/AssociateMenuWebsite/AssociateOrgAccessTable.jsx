import Image from 'next/image';
import SearchIcon from '../../../../assets/images/search.png';

const AssociateOrgAccessTable = ({ setEditUserOrgAccess, setEditUserRole }) => {
  const handleEdit = () => {
    setEditUserRole((prev) => ({
      action: false,
      from: 'edit',
      tempFrom: prev.from,
    }));
    setEditUserOrgAccess(() => ({
      action: true,
      from: 'edit',
    }));
  };
  return (
    <div className="flex">
      <div
        onClick={handleEdit}
        className="verdana10 cursor-pointer border-r border-primary-gray pr-4 text-primary-orange"
      >
        [Edit]
      </div>
      <table className=" mx-8 w-full overflow-auto px-3 shadow-md">
        <thead className="thead-primary">
          <tr>
            <th className="th-first underline">User Roles </th>
            <th className="th-last">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="w-full bg-[#e6ebf85d]">
            <td className="td-primary w-[30rem] px-10">
              Medications not approved to profile Spreadsheet
            </td>
            <td className="td-primary w-20 px-4">
              <figure className="flex justify-center">
                <Image src={SearchIcon} alt="search" width="17" height="17" />
              </figure>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AssociateOrgAccessTable;
