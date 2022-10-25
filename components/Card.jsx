import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from '@chakra-ui/react';
import Image from 'next/image';
import React, { useRef } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import greenplus from '../assets/images/greenplus.png';

const Card = ({ addOption, title }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <div className="w-full rounded-md bg-[#152937] p-5 shadow-md">
      {addOption === null ? (
        <h2 className="mb-3 text-lg">{title}</h2>
      ) : (
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg">Patients</h2>
          <span className="flex cursor-pointer items-center gap-1">
            <Image
              src={greenplus.src}
              alt="greenplus"
              width="10px"
              height="10px"
            />
            <span className="text-xs text-[#1fe2e2]">{addOption}</span>
          </span>
        </div>
      )}
      <div>
        <div className="relative flex">
          <input
            type="text"
            className="w-full rounded-md bg-[#0e1922] py-1 px-2 font-medium shadow outline-none"
            placeholder="Enter first or last name"
          />
          <i className="absolute top-[24%] right-2 h-full text-xl text-gray-500">
            <AiOutlineSearch />
          </i>
        </div>
        <p className="mt-2 mb-1 text-sm text-gray-300">or jump to</p>
        <Menu isOpen={isOpen} onClose={onClose}>
          <div className="w-fit rounded-md bg-[#0e1922] px-2 shadow">
            <MenuButton ref={btnRef} onClick={onOpen}>
              <div className="flex items-center gap-3 text-sm font-medium text-gray-300">
                <span>Peggy Opong</span>
                {isOpen ? (
                  <FiChevronDown className="text-[16px]  text-gray-500" />
                ) : (
                  <FiChevronRight className="text-[16px] text-gray-500" />
                )}
              </div>
            </MenuButton>
            <MenuList className="h-40 overflow-x-hidden overflow-y-scroll bg-[#152937]">
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
          </div>
        </Menu>
      </div>
    </div>
  );
};

export default Card;
