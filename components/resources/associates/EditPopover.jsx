import React from 'react';
import { useState } from 'react';
import { FcInfo } from 'react-icons/fc';
import { SiVercel } from 'react-icons/si';

const EditPopover = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="verdana11 relative flex cursor-pointer items-center gap-2 py-3"
      >
        <FcInfo className="ml-1 rotate-180 scale-125" />
        {isHovered && (
          <div className="verdana10 absolute -top-3 -left-2 z-10 flex items-center pl-6 ">
            <span className="mb-20 flex justify-center text-secondary-blue">
              <SiVercel className="-rotate-90 " />
            </span>
            <ul className="moreInfo-anim whitespace-nowrap rounded border-[4px] border-t-[10px] border-secondary-blue bg-white">
              <li className="verdana12 mb-1 px-2 font-semibold tracking-wider text-primary-orange">
                Missing Fields
              </li>
              <li className="border-b  px-2 py-[1px] text-secondary-color  hover:bg-texiary-blue">
                Missing Phone
              </li>
              <li className="border-b  px-2 py-[1px] text-secondary-color  hover:bg-texiary-blue">
                Missing Patients Address
              </li>
              <li className="border-b  px-2 py-[1px] text-secondary-color  hover:bg-texiary-blue">
                Missing Gender
              </li>
              <li className="border-b  px-2 py-[1px] text-secondary-color hover:bg-texiary-blue ">
                Missing Race
              </li>
              <li className="border-b  px-2 py-[1px] text-secondary-color hover:bg-texiary-blue ">
                Missing Birth Date
              </li>
              <li className="px-2  py-[1px] text-secondary-color hover:bg-texiary-blue ">
                Missing Age
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default EditPopover;
