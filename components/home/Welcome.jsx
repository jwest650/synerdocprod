import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from '@chakra-ui/react';
import { useContext, useRef } from 'react';
import { BsDot } from 'react-icons/bs';
import { CiExport } from 'react-icons/ci';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import GeneralContext from '../../context/GeneralContext';

const Welcome = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { darkTheme } = useContext(GeneralContext);
  const btnRef = useRef(null);
  return (
    // <div className="w-full">
    <div className="mx-3 mt-4 flex w-full items-center justify-between overflow-x-auto rounded p-3 tracking-wide shadow dark:rounded-none dark:shadow-none">
      <div>
        <h2 className="text-lg text-main-text-light dark:text-main-text-dark">
          AMS for SinamCare
        </h2>
        <div className="mt-2 flex items-center gap-5 rounded pl-2 shadow">
          <p className="text-sm text-secondary-text-light dark:text-secondary-text-dark">
            Calendar For:
          </p>{' '}
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
                  color: '#000',
                }}
                className="h-56 overflow-x-hidden overflow-y-scroll"
              >
                <MenuItem
                  _hover={{
                    backgroundColor: ` ${darkTheme ? '#f1f1f1' : '#152937'}`,
                    color: ` ${darkTheme ? '#152937' : '#f1f1f1'}`,
                  }}
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
      <div className="mr-7 flex items-center gap-14">
        <div>
          <h3 className="text-secondary-text-light dark:text-secondary-text-dark">
            Associates
          </h3>
          <p className="font-semibold text-main-text-light dark:text-main-text-dark">
            120
          </p>
        </div>
        <div>
          <h3 className="text-secondary-text-light dark:text-secondary-text-dark">
            Patients
          </h3>
          <p className="font-semibold text-main-text-light dark:text-main-text-dark">
            1000
          </p>
        </div>
        <div>
          <span className="flex items-center  text-green-500">
            Online{' '}
            <BsDot className="scale-150 animate-ping text-4xl transition duration-1000" />
          </span>
        </div>
        <button className="flex items-center gap-2 rounded bg-pink-500 px-[15px] py-[11px] text-sm">
          Export data <CiExport className="text-lg" />
        </button>
      </div>
    </div>
    // </div>
  );
};

export default Welcome;
