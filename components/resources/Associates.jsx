import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { associateTableData } from '../../assets/data';
import CustomPopover from './CustomPopover';
import { BiPlus } from 'react-icons/bi';
import { BsChevronExpand } from 'react-icons/bs';
import TableAction from './TableAction';

const Associates = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  // console.log(associateTableData[0].hireDate);
  // console.log(new Date().toLocaleDateString());

  return (
    <section className="mx-10 mt-10">
      <div className="flex items-center justify-between border-b border-gray-600 pb-2">
        <div className="flex items-center gap-8">
          <h2 className="text-xl font-semibold tracking-wider">Associates</h2>
          <span className="flex cursor-pointer items-center gap-1 rounded bg-orange-600 py-1 px-2 text-white">
            <BiPlus />
            <span className="text-sm">Create Associates</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Menu isOpen={isOpen} onClose={onClose}>
            <MenuButton ref={btnRef} onClick={onOpen}>
              <div className="flex items-center gap-2 rounded bg-gray-300 px-2 py-1 text-sm font-medium text-[#0e1922]">
                <span>Associate List XLS</span>

                <BsChevronExpand className="text-[16px]" />
              </div>
            </MenuButton>
            <MenuList className="max-h-40 overflow-x-hidden overflow-y-scroll bg-[#152937]">
              <MenuItem>
                <span className="text-[#0e1922]">CSV</span>
              </MenuItem>
              <MenuItem>
                <span className="text-[#0e1922]">PDF</span>
              </MenuItem>
            </MenuList>
          </Menu>
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
        <thead className="border-b bg-[#32164A] text-[18px] tracking-wider text-white">
          <tr>
            <th className=" border pl-2 text-left"></th>
            <th className=" border pl-2 text-left">Name</th>
            <th className=" border pl-2 text-left">Classification</th>
            <th className=" border pl-2 text-left">Discipline</th>
            <th className=" border pl-2 text-left">Hire Date</th>
            <th className=" border pl-2 text-left">Status</th>
            <th className=" border pl-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="w-full bg-[#6b3e9280]">
            <td></td>
            <td className="w-full">
              <CustomPopover />
            </td>
            <td className="w-full">
              <CustomPopover />
            </td>
            <td className="w-full">
              <CustomPopover />
            </td>
            <td></td>
            <td className="w-full">
              <CustomPopover />
            </td>
            <td></td>
          </tr>
          {associateTableData.map((associate, i) => (
            <tr key={i} className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}>
              <td className="max-h-[20px] min-w-[50px] border py-1 px-2 font-medium"></td>
              <td className="max-h-[20px] min-w-[230px] border py-1 px-2 font-medium">
                {associate.name}
              </td>
              <td className="max-h-[20px] min-w-[270px] border py-1 px-2 font-medium">
                {associate.classification}
              </td>
              <td className="max-h-[20px] min-w-[330px] border py-1 px-2 font-medium">
                {associate.discipline}
              </td>
              <td className="max-h-[20px] min-w-[120px] border py-1 px-2 font-medium">
                {associate.hireDate}
              </td>
              <td
                className={`max-h-[20px] min-w-[100px] border py-1 px-2 font-medium ${
                  associate.status === 'Active' && 'text-green-600'
                }`}
              >
                {associate.status}
              </td>
              <td className="max-h-[20px] min-w-[120px]  cursor-pointer border py-1 px-2 font-medium">
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
