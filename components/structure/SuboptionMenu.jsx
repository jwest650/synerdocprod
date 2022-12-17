import Link from 'next/link';
import React from 'react';

const SuboptionMenu = ({ subOptions, urlPath }) => {
  // <>
  {
    /* <span className="absolute top-14 right-60 -rotate-90 text-gray-300">
      <SiVercel />
    </span> */
  }
  return (
    <ul className="menu-anim overflow-y-scroll rounded bg-[#f6f8fc] text-[#070b16] shadow transition-all duration-[2000ms] ease-in-out">
      {subOptions.map((subOption, i) => (
        <Link href={`${urlPath}/${subOption.url}`} key={i}>
          <li
            className={`relative flex  items-center gap-2 py-[7px] font-medium hover:bg-blue-100/80 ${
              i === subOptions.length - 1 ? 'border-none' : 'border-b'
            } px-3 `}
          >
            <span className="scale-110">{subOption.icon}</span>
            <span>{subOption.title}</span>
          </li>
        </Link>
      ))}
    </ul>
    // </>
  );
};

export default SuboptionMenu;
