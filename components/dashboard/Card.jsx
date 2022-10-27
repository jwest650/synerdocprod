import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from '@chakra-ui/react';
import Image from 'next/image';
import React, { useContext, useRef } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import greenplus from '../../assets/images/greenplus.png';
import GeneralContext from '../../context/GeneralContext';

const Card = ({ addOption, title }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  const { darkTheme } = useContext(GeneralContext);

  return (
    <div className="w-full rounded-md bg-main-light-bg p-5 text-secondary-text-light shadow dark:bg-secondary-dark-bg dark:text-main-text-dark">
      {addOption === null ? (
        <h2 className="mb-3 text-lg">{title}</h2>
      ) : (
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg">{title}</h2>
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
            className="w-full rounded-md bg-secondary-light-bg py-1 px-2 font-medium shadow outline-none dark:bg-main-dark-bg"
            placeholder="Enter first or last name"
          />
          <i className="absolute top-[24%] right-2 h-full text-xl text-gray-500">
            <AiOutlineSearch />
          </i>
        </div>
        <p className="mt-2 mb-1 text-sm text-gray-500">or jump to</p>
        <Menu isOpen={isOpen} onClose={onClose}>
          <div className="w-fit rounded-md bg-secondary-light-bg px-2 shadow dark:bg-main-dark-bg">
            <MenuButton ref={btnRef} onClick={onOpen}>
              <div className="flex items-center gap-3 text-sm font-medium text-secondary-text-light dark:text-main-text-dark ">
                <span>Peggy Opong</span>
                {isOpen ? (
                  <FiChevronDown className="text-[16px] text-secondary-text-light  dark:text-secondary-text-dark" />
                ) : (
                  <FiChevronRight className="text-[16px] text-secondary-text-light dark:text-secondary-text-dark" />
                )}
              </div>
            </MenuButton>
            <MenuList
              __css={{
                backgroundColor: ` ${darkTheme ? '#152937' : '#f1f1f1'}`,
                borderRadius: '0.5rem',
                width: '190px',
              }}
              className="h-48 overflow-x-hidden overflow-y-scroll"
            >
              <MenuItem
                _hover={{
                  backgroundColor: ` ${darkTheme ? '#f1f1f1' : '#152937'}`,
                  color: ` ${darkTheme ? '#152937' : '#f1f1f1'}`,
                }}
                // css={{ backgroundColor: '#152937', color: '#fff' }}
              >
                Eobard Thawn
              </MenuItem>
              <MenuItem
                _hover={{
                  backgroundColor: ` ${darkTheme ? '#f1f1f1' : '#152937'}`,
                  color: ` ${darkTheme ? '#152937' : '#f1f1f1'}`,
                }}
              >
                Iris West
              </MenuItem>
              <MenuItem
                _hover={{
                  backgroundColor: ` ${darkTheme ? '#f1f1f1' : '#152937'}`,
                  color: ` ${darkTheme ? '#152937' : '#f1f1f1'}`,
                }}
              >
                Barry Alen
              </MenuItem>
              <MenuItem
                _hover={{
                  backgroundColor: ` ${darkTheme ? '#f1f1f1' : '#152937'}`,
                  color: ` ${darkTheme ? '#152937' : '#f1f1f1'}`,
                }}
              >
                Joe West
              </MenuItem>
              <MenuItem
                _hover={{
                  backgroundColor: ` ${darkTheme ? '#f1f1f1' : '#152937'}`,
                  color: ` ${darkTheme ? '#152937' : '#f1f1f1'}`,
                }}
              >
                Kateline Frost
              </MenuItem>
              <MenuItem
                _hover={{
                  backgroundColor: ` ${darkTheme ? '#f1f1f1' : '#152937'}`,
                  color: ` ${darkTheme ? '#152937' : '#f1f1f1'}`,
                }}
              >
                Cisco Raymond
              </MenuItem>
              <MenuItem
                _hover={{
                  backgroundColor: ` ${darkTheme ? '#f1f1f1' : '#152937'}`,
                  color: ` ${darkTheme ? '#152937' : '#f1f1f1'}`,
                }}
              >
                Ralph Dipney
              </MenuItem>
              <MenuItem
                _hover={{
                  backgroundColor: ` ${darkTheme ? '#f1f1f1' : '#152937'}`,
                  color: ` ${darkTheme ? '#152937' : '#f1f1f1'}`,
                }}
              >
                Christian Krammer
              </MenuItem>
              <MenuItem
                _hover={{
                  backgroundColor: ` ${darkTheme ? '#f1f1f1' : '#152937'}`,
                  color: ` ${darkTheme ? '#152937' : '#f1f1f1'}`,
                }}
              >
                Wally West
              </MenuItem>
            </MenuList>
          </div>
        </Menu>
      </div>
    </div>
  );
};

export default Card;
