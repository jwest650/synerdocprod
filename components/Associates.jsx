import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from '@chakra-ui/react';
import Image from 'next/image';
import { FiChevronDown, FiChevronRight, FiSettings } from 'react-icons/fi';
import { useRef } from 'react';
import greenplus from '../assets/images/greenplus.png';

const Associates = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <section className="mt-10 overflow-x-auto px-5">
      <div className="flex items-center justify-between border-b border-gray-600 pb-2">
        <div className="flex items-center gap-8">
          <h2 className="text-2xl font-medium">Associates</h2>
          <span className="flex cursor-pointer items-center gap-1">
            <Image
              src={greenplus.src}
              alt="greenplus"
              width="10px"
              height="10px"
            />
            <span className="text-sm text-cyan-300">Add Associates</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Menu isOpen={isOpen} onClose={onClose}>
            <MenuButton ref={btnRef} onClick={onOpen}>
              <div className="flex items-center gap-2 rounded bg-gray-300 px-2 py-[7px] text-sm font-medium text-[#0e1922]">
                <span>Associate List XLS</span>
                {isOpen ? (
                  <FiChevronDown className="text-[16px]  text-gray-500" />
                ) : (
                  <FiChevronRight className="text-[16px] text-gray-500" />
                )}
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
          <button className="rounded bg-cyan-400 px-2 py-1 font-medium text-[#0e1922]">
            Export
          </button>
          <input
            placeholder="Enter first or last name"
            className="rounded px-3 py-1 text-black outline-none"
            type="text"
          />
        </div>
      </div>
      <table className="mt-10 min-w-full ">
        <thead className="border-b">
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
          {/* {ordersReverse.map((order) => ( */}
          <tr className="border">
            <td className="min-w-[50px] border py-2 px-2 font-medium"></td>
            <td className="min-w-[150px] border py-2 px-2 font-medium">
              Peggy Oppng
            </td>
            <td className="min-w-[150px] border py-2 px-2 font-medium">
              Administrative
            </td>
            <td className="min-w-[150px] border py-2 px-2 font-medium">
              Registered Nurse
            </td>
            <td className="min-w-[150px] border py-2 px-2 font-medium">
              {' '}
              24/10/22
            </td>
            <td className="min-w-[150px] border py-2 px-2 font-medium">
              {' '}
              Active
            </td>
            <td className="min-w-[150px] border py-2 px-2 font-medium">
              <FiSettings />{' '}
            </td>
          </tr>
          <tr className="border">
            <td className="min-w-[50px] border py-2 px-2 font-medium"></td>
            <td className="min-w-[150px] border py-2 px-2 font-medium">
              Peggy Oppng
            </td>
            <td className="min-w-[150px] border py-2 px-2 font-medium">
              Administrative
            </td>
            <td className="min-w-[150px] border py-2 px-2 font-medium">
              Registered Nurse
            </td>
            <td className="min-w-[150px] border py-2 px-2 font-medium">
              {' '}
              24/10/22
            </td>
            <td className="min-w-[150px] border py-2 px-2 font-medium">
              {' '}
              Active
            </td>
            <td className="min-w-[150px] border py-2 px-2 font-medium">
              <FiSettings />{' '}
            </td>
          </tr>
          <tr className="border">
            <td className="min-w-[50px] border py-2 px-2 font-medium"></td>
            <td className="min-w-[150px] border py-2 px-2 font-medium">
              Peggy Oppng
            </td>
            <td className="min-w-[150px] border py-2 px-2 font-medium">
              Administrative
            </td>
            <td className="min-w-[150px] border py-2 px-2 font-medium">
              Registered Nurse
            </td>
            <td className="min-w-[150px] border py-2 px-2 font-medium">
              {' '}
              24/10/22
            </td>
            <td className="min-w-[150px] border py-2 px-2 font-medium">
              {' '}
              Active
            </td>
            <td className="min-w-[150px] border py-2 px-2 font-medium">
              <FiSettings />{' '}
            </td>
          </tr>
          <tr className="border">
            <td className="min-w-[50px] border py-2 px-2 font-medium"></td>
            <td className="min-w-[150px] border py-2 px-2 font-medium">
              Peggy Oppng
            </td>
            <td className="min-w-[150px] border py-2 px-2 font-medium">
              Administrative
            </td>
            <td className="min-w-[150px] border py-2 px-2 font-medium">
              Registered Nurse
            </td>
            <td className="min-w-[150px] border py-2 px-2 font-medium">
              {' '}
              24/10/22
            </td>
            <td className="min-w-[150px] border py-2 px-2 font-medium">
              {' '}
              Active
            </td>
            <td className="min-w-[150px] border py-2 px-2 font-medium">
              <FiSettings />{' '}
            </td>
          </tr>
          <tr className="border">
            <td className="min-w-[50px] border py-2 px-2 font-medium"></td>
            <td className="min-w-[150px] border py-2 px-2 font-medium">
              Peggy Oppng
            </td>
            <td className="min-w-[150px] border py-2 px-2 font-medium">
              Administrative
            </td>
            <td className="min-w-[150px] border py-2 px-2 font-medium">
              Registered Nurse
            </td>
            <td className="min-w-[150px] border py-2 px-2 font-medium">
              {' '}
              24/10/22
            </td>
            <td className="min-w-[150px] border py-2 px-2 font-medium">
              {' '}
              Active
            </td>
            <td className="min-w-[150px] border py-2 px-2 font-medium">
              <FiSettings />{' '}
            </td>
          </tr>
          {/* ))} */}
        </tbody>
      </table>
    </section>
  );
};

export default Associates;
