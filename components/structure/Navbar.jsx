import { FiBell } from 'react-icons/fi';
import { GoMail } from 'react-icons/go';
import Link from 'next/link';
import Settings from './Settings';
import { menuOptions } from '../../assets/data';
import Menupopup from './Menupopup';
import MenuDrawer from './MenuDrawer';
// import { BsGrid } from 'react-icons/bs';
// import { useState } from 'react';
// import MenuDrawer from './MenuDrawer';

const Navbar = () => {
  return (
    <div className="sticky top-0 z-[1000] bg-[#0141CF]">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between border-b-2 border-gray-500/20 py-2 px-5 text-white  ">
        <div className="flex items-center gap-6">
          <Link href="/">
            <h1 className="cursor-pointer text-2xl font-semibold md:ml-8">
              Syner<span className="font-normal">doc</span>{' '}
            </h1>
          </Link>
        </div>
        <ul className="hidden items-center gap-8 lg:flex">
          {menuOptions.map((menu, index) => (
            <li key={index}>
              <Menupopup menu={menu} />
            </li>
          ))}
        </ul>

        <MenuDrawer />
        <ul className="hidden items-center gap-7 text-lg md:flex">
          <li className="cursor-pointer">
            <Settings />
          </li>
          <li>
            <i>
              <FiBell />
            </i>
          </li>
          <li>
            <i>
              <GoMail className="text-xl" />
            </i>
          </li>
          <li className="relative flex h-8 w-8 items-center justify-center rounded bg-blue-300 text-[12px]">
            S
            <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-violet-600 p-2 text-center text-[10px] font-bold">
              2
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
