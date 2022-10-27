import { Menu, MenuButton, MenuList, useDisclosure } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { BsChevronExpand } from 'react-icons/bs';

const CustomPopover = () => {
  const [selectedOption, setSelectedOption] = useState('All');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  const handleOption = (newOption) => {
    setSelectedOption(newOption);
    onClose();
  };
  return (
    <Menu isOpen={isOpen} onClose={onClose}>
      <div className="w-full border-b border-l border-[#32164A] bg-[#eeeeee] dark:bg-main-dark-bg">
        <MenuButton ref={btnRef} onClick={onOpen}>
          <div className="flex w-full  items-center justify-between gap-1 px-1 text-sm font-medium text-secondary-text-light dark:text-main-text-dark ">
            <span>{selectedOption}</span>
            <BsChevronExpand className="text-[16px] text-secondary-text-light  dark:text-secondary-text-dark" />
          </div>
        </MenuButton>
        <MenuList
          __css={{}}
          className="max-h-[250px] min-h-fit min-w-[200px] max-w-fit overflow-x-hidden overflow-y-scroll  shadow-2xl"
        >
          <ul className="rounded bg-gray-300 text-[#32164A] shadow transition-all duration-[2000ms] ease-in-out">
            <li
              onClick={() => handleOption('Florida Branch')}
              className="h-hull cursor-pointer border-b py-2 px-3 pt-5 font-medium hover:bg-gray-100"
            >
              <span>Florida Branch</span>
            </li>
            <li
              onClick={() => handleOption('California Branch')}
              className="h-hull cursor-pointer border-b py-2  px-3 font-medium hover:bg-gray-100"
            >
              <span> California Branch</span>
            </li>
            <li
              onClick={() => handleOption('New York Branch')}
              className="h-hull cursor-pointer border-b py-2  px-3 font-medium hover:bg-gray-100"
            >
              <span> New York Branch</span>
            </li>
          </ul>
        </MenuList>
      </div>
    </Menu>
  );
};

export default CustomPopover;
