import React from 'react';
import { useState } from 'react';
import { FcInfo } from 'react-icons/fc';
import { RiBook2Fill } from 'react-icons/ri';
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
        [Edit]
        <FcInfo className="ml-1 rotate-180 scale-125" />
        {isHovered && (
          <>
            <span className="z-100 absolute top-6 left-12 text-white ">
              <SiVercel />
            </span>
            <div className=" absolute top-9 left-10 z-10 w-fit rounded bg-white py-2 shadow">
              <h2 className="mb-2 mt-2 px-2 text-base font-semibold tracking-wider">
                Missing Fields
              </h2>
              <div className="mt-3 flex w-48 flex-col  gap-1">
                <p className="border-b px-2 py-1  text-secondary-color">
                  Missing Phone
                </p>
                <p className="border-b px-2 py-1  text-secondary-color">
                  Missing Patients Address
                </p>
                <p className="border-b px-2 py-1  text-secondary-color">
                  Missing Gender
                </p>
                <p className="border-b px-2 py-1 text-secondary-color ">
                  Missing Race
                </p>
                <p className="border-b px-2 py-1 text-secondary-color ">
                  Missing Birth Date
                </p>
                <p className="px-2 py-1 text-secondary-color ">Missing Age</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default EditPopover;
