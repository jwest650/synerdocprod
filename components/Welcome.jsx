import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { BsDot } from 'react-icons/bs';
import { CiExport } from 'react-icons/ci';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';

const Welcome = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  return (
    <div>
      <div className="mt-4 flex w-full items-center justify-between px-5 tracking-wide">
        <div>
          <h2 className="text-lg">AMS for SinamCare</h2>
          <div className="flex mt-5 items-center gap-5">
            <p className="text-sm text-gray-500">Calendar For:</p>{' '}
            <Menu isOpen={isOpen} onClose={onClose}>
              <span className="rounded-md bg-[#152937] px-2 py-1 text-sm">
                <MenuButton ref={btnRef} onClick={onOpen}>
                  <div className="flex items-center gap-3  text-sm font-medium">
                    <span>Peggy Opong</span>
                    {isOpen ? (
                      <FiChevronDown className="text-[16px]  text-gray-500" />
                    ) : (
                      <FiChevronRight className="text-[16px] text-gray-500" />
                    )}
                  </div>
                </MenuButton>
                <MenuList className="bg-[#152937]">
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
                </MenuList>
              </span>
            </Menu>
          </div>
          {/* <p className="mt-2 text-sm text-gray-500">
            Welcome to your dashboard
          </p> */}
        </div>
        <div className="mr-7 flex items-center gap-14">
          <div>
            <h3 className="text-gray-400">Associates</h3>
            <p>120</p>
          </div>
          <div>
            <h3 className="text-gray-400">Patients</h3>
            <p>1000</p>
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
    </div>
  );
};

export default Welcome;
