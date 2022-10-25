import Link from 'next/link';
import { BsBook } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';
import { IoSaveOutline } from 'react-icons/io5';
import React, { useContext } from 'react';
import GeneralContext from '../context/GeneralContext';

const ContentOptions = () => {
  const { sectionClicked, setSectionClicked } = useContext(GeneralContext);
  return (
    <div className="flex items-center justify-between pr-1 text-[16px] text-gray-400">
      <div className="flex items-center gap-5">
        <Link href="#calender">
          <h3
            onClick={() =>
              setSectionClicked((current) => (current = 'calendar'))
            }
            className={`cursor-pointer border-b ${
              sectionClicked === 'calendar' && ' border-cyan-500 text-cyan-500'
            }`}
          >
            Calendar
          </h3>
        </Link>
        <Link href="#availability">
          <h3
            onClick={() =>
              setSectionClicked((current) => (current = 'availability'))
            }
            className={`cursor-pointer border-b ${
              sectionClicked === 'availability' &&
              ' border-cyan-500 text-cyan-500'
            }`}
          >
            Availability
          </h3>
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex cursor-pointer items-center gap-2">
          <IoSaveOutline /> Save Report
        </div>
        <div className="flex cursor-pointer items-center gap-2">
          <BsBook /> Export To PDF
        </div>
        <div className="flex cursor-pointer items-center gap-2">
          <GoMail /> Send To Email
        </div>
      </div>
    </div>
  );
};

export default ContentOptions;
