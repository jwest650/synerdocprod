import {
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';
import greenplus from '../assets/images/greenplus.png';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';

const Calendarnav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  return (
    <div className="mb-10 space-y-5 rounded-2xl border-t border-[#152937] py-5 px-2 shadow-2xl">
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex items-center gap-5">
          <p className="text-xl">Calendar For:</p>{' '}
          <Menu isOpen={isOpen} onClose={onClose}>
            <span className="rounded-md bg-[#152937] px-2 py-1 text-sm">
              <MenuButton ref={btnRef} onClick={onOpen}>
                <div className="flex items-center gap-3 text-sm font-medium">
                  <span>Peggy Opong</span>
                  {isOpen ? (
                    <FiChevronDown className="text-[16px]  text-gray-500" />
                  ) : (
                    <FiChevronRight className="text-[16px] text-gray-500" />
                  )}
                </div>
              </MenuButton>
              <MenuList className="bg-[#152937]">
                {/* <div className="-my-[9px] -mx-[1px] bg-[#152937]"> */}
                <MenuItem>
                  <span className="text-[#0e1922]">Eobard Thawn</span>
                </MenuItem>
                <MenuItem>
                  <span className="text-[#0e1922]">Iris West</span>
                </MenuItem>
                <MenuItem>
                  <span className="text-[#0e1922]">Barry Alen</span>
                </MenuItem>
                <MenuItem>
                  <span className="text-[#0e1922]">Joe West</span>
                </MenuItem>
                <MenuItem>
                  <span className="text-[#0e1922]">Kateline Frost</span>
                </MenuItem>
                <MenuItem>
                  <span className="text-[#0e1922]">Cisco Raymond</span>
                </MenuItem>
                <MenuItem>
                  <span className="text-[#0e1922]">Ralph Dipney</span>
                </MenuItem>
                <MenuItem>
                  <span className="text-[#0e1922]">Christian Krammer</span>
                </MenuItem>
                <MenuItem>
                  <span className="text-[#0e1922]">Wally West</span>
                </MenuItem>
                {/* </div> */}
              </MenuList>
            </span>
          </Menu>
        </div>
        <div className="mt-5 flex items-start gap-2 md:mt-0 md:items-center">
          <p className="text-lg">Availability:</p>
          <div className="flex flex-wrap gap-5">
            <span className="flex cursor-pointer items-center gap-1">
              <Image
                src={greenplus.src}
                alt="greenplus"
                width="10px"
                height="10px"
              />
              <span className="text-xs">Add Overrides</span>
            </span>
            <span className="flex cursor-pointer items-center gap-1">
              <Image
                src={greenplus.src}
                alt="greenplus"
                width="10px"
                height="10px"
              />
              <span className="text-xs">Manage Overrides</span>
            </span>
            <span className="flex cursor-pointer items-center gap-1">
              <Image
                src={greenplus.src}
                alt="greenplus"
                width="10px"
                height="10px"
              />
              <span className="text-xs">Reassign</span>
            </span>
            <span className="flex cursor-pointer items-center gap-1">
              <Image
                src={greenplus.src}
                alt="greenplus"
                width="10px"
                height="10px"
              />
              <span className="text-xs">Associate productivity</span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <p className="text-lg">Preferred Phone Number:</p>
        <span className="text-gray-300">(318)-332-9842</span>
      </div>
      <div className="flex flex-wrap items-center gap-5 text-sm">
        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <label className="">assigned</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <label className="">unassigned</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <label className="">verified</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <label className="">show service times</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <label className="">show service description</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <label className="">omit pay onlys</label>
        </div>
        <span className=" text-[12px] text-cyan-400">Therapy Utilization</span>
      </div>
      <div className="mt-5 space-x-5 text-xs font-semibold text-cyan-400 md:mt-0">
        <span className="cursor-pointer">Non-Patient Time Entry</span>
        <span className="cursor-pointer">Clock In</span>
        <span className="cursor-pointer">Clock Out</span>
      </div>
    </div>
  );
};

export default Calendarnav;
