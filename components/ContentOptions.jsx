import Link from 'next/link';
import { BsBook } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';
import { IoSaveOutline } from 'react-icons/io5';
import React, { useContext } from 'react';
import GeneralContext from '../context/GeneralContext';
import { useRouter } from 'next/router';

const ContentOptions = () => {
  const router = useRouter();
  const currentPath = router.asPath.split('/')[3];
  // const { sectionClicked, setSectionClicked } = useContext(GeneralContext);
  return (
    <div className="flex items-center justify-between pr-1 text-[16px] text-secondary-text-light dark:text-main-text-dark">
      <div className="flex items-center gap-5">
        <Link href="/">
          <h3
            className={`cursor-pointer border-b ${
              currentPath !== 'availability' && ' border-cyan-500 text-cyan-500'
            }`}
          >
            Calendar
          </h3>
        </Link>
        <Link href="/Dashboard/home/availability">
          <h3
            className={`cursor-pointer border-b ${
              currentPath === 'availability' && ' border-cyan-500 text-cyan-500'
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
