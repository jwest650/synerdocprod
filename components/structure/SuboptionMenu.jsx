import Link from 'next/link';
import React from 'react';
import { SiVercel } from 'react-icons/si';

const SuboptionMenu = ({ subOptions, urlPath }) => {
  return (
    <>
      <span className="absolute top-14 right-60 -rotate-90 text-gray-300">
        <SiVercel />
      </span>
      <ul className="absolute top-11 -right-11 h-52 overflow-y-scroll rounded bg-[#f6f8fc] pt-3 text-[#070b16] shadow transition-all duration-[2000ms] ease-in-out">
        {subOptions.map((subOption, i) => (
          <Link href={`${urlPath}/${subOption.url}`} key={i}>
            <li
              className={`relative flex  items-center gap-2 py-2 font-medium hover:bg-gray-100 ${
                i === subOptions.length - 1 ? 'border-none' : 'border-b'
              } px-3 `}
            >
              <span className="scale-110">{subOption.icon}</span>
              <span>{subOption.title}</span>
            </li>
          </Link>
        ))}
      </ul>{' '}
    </>
  );
};

export default SuboptionMenu;
