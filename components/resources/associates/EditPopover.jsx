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
        {' '}
        <span className="text-primary-orange underline">[Edits]</span>
        <FcInfo className="ml-1 rotate-180 scale-125" />
        {isHovered && (
          <>
            <span className="z-100 absolute top-6 left-12 stroke-2 text-white shadow-xl ">
              <SiVercel />
            </span>
            <div className=" absolute top-8 left-10 z-10 w-fit rounded-lg border-x border-b bg-white py-1 shadow-xl ">
              <h2 className="verdana12 mb-1 px-2 font-semibold tracking-wider text-primary-orange">
                Missing Fields
              </h2>
              <div className="verdana-11 mt-1.5 flex w-48 flex-col">
                <p className="border-b  px-2 py-[1px] text-secondary-color  hover:bg-texiary-blue">
                  Missing Phone
                </p>
                <p className="border-b  px-2 py-[1px] text-secondary-color  hover:bg-texiary-blue">
                  Missing Patients Address
                </p>
                <p className="border-b  px-2 py-[1px] text-secondary-color  hover:bg-texiary-blue">
                  Missing Gender
                </p>
                <p className="border-b  px-2 py-[1px] text-secondary-color hover:bg-texiary-blue ">
                  Missing Race
                </p>
                <p className="border-b  px-2 py-[1px] text-secondary-color hover:bg-texiary-blue ">
                  Missing Birth Date
                </p>
                <p className="px-2  py-[1px] text-secondary-color hover:bg-texiary-blue ">
                  Missing Age
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default EditPopover;
