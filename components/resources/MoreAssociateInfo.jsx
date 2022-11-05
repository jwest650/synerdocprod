import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { RiBook2Fill } from 'react-icons/ri';
import { SiVercel } from 'react-icons/si';

const MoreAssociateInfo = () => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="relative">
      {/* <PopoverTrigger> */}
      <div
        onMouseOver={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
      >
        <RiBook2Fill />
      </div>
      {/* </PopoverTrigger> */}
      {showInfo && (
        <div className="absolute z-10 ml-5">
          <span className=" absolute -top-[8px] left-1 text-[#6b3e9250]">
            <SiVercel />
          </span>
          <div className="relative w-72  rounded border-[4px] border-t-[10px] border-[#6b3e9280] bg-white">
            <div className="grid grid-cols-6 text-xs">
              {/* <ul > */}
              <span className="col-span-3 px-1">
                222 Bert Kouns Loop, Shreveport, LA 71115
              </span>
              <span className="col-span-1 border-x border-gray-400 px-1">
                Work
              </span>
              <span className="col-span-2 px-1">(318) 295-8865</span>
              {/* </ul> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoreAssociateInfo;
