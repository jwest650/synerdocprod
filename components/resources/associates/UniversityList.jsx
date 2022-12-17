import Link from 'next/link';
import { useState } from 'react';
import { SiVercel } from 'react-icons/si';
import { universityList } from './associateDataFour';

const UniversityList = () => {
  const [showList, setShowList] = useState(false);

  return (
    <div
      className="relative"
      onMouseOver={() => setShowList(true)}
      onMouseLeave={() => setShowList(false)}
    >
      <span className="cursor-pointer font-semibold text-primary-orange underline">
        Synerdoc University
      </span>
      {showList && (
        <div className="verdana10 absolute -top-4 left-24 z-10 flex items-center pl-6 ">
          <span className="mb-36 flex justify-center text-secondary-blue">
            <SiVercel className="-rotate-90 " />
          </span>
          <ul className="moreInfo-anim w-32 rounded border-[4px] border-t-[10px] border-secondary-blue bg-white">
            {universityList.map((option, index) => (
              <Link key={index} href="/synerdocuniversity">
                <li className="cursor-pointer px-2 py-[1px] text-primary-orange underline hover:bg-texiary-blue">
                  {option}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UniversityList;
