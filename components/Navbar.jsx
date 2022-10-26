import { FiBell } from 'react-icons/fi';
import { GoMail } from 'react-icons/go';
import Link from 'next/link';
import Settings from './Settings';
import { menuOptions } from '../assets/data';
import Menupopup from './Menupopup';

const Navbar = () => {
  return (
    <div className="sticky top-0 z-[1000] flex w-full items-center justify-between border-b-2 border-gray-500/20 bg-[#32164A] py-2 px-5 text-white  ">
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
      <ul className="flex items-center gap-7 text-lg">
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
  );
};

export default Navbar;
