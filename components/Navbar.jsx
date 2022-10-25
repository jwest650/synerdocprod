import { BsGrid } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiBell, FiSettings } from 'react-icons/fi';
import { GoMail } from 'react-icons/go';
import { useContext } from 'react';
import GeneralContext from '../context/GeneralContext';
import Link from 'next/link';
import Settings from './Settings';

const Navbar = () => {
  const { setMenuIsClicked } = useContext(GeneralContext);
  return (
    <div className="sticky top-0 z-[1000]  flex w-full items-center justify-between bg-main-light-bg py-4 px-5 text-main-text-light shadow dark:bg-secondary-dark-bg dark:text-main-text-dark">
      <div className="flex items-center gap-6">
        <Link href="/">
          <h1 className="cursor-pointer text-2xl font-semibold md:ml-8">
            Syner<span className="font-normal">doc</span>{' '}
          </h1>
        </Link>
        <i
          className="cursor-pointer p-2"
          onClick={() => setMenuIsClicked((current) => (current = !current))}
        >
          <BsGrid className="ml-3 text-xl text-secondary-text-light dark:text-main-text-dark" />
        </i>

        <div className="relative hidden items-center md:flex">
          <AiOutlineSearch className="absolute left-3  z-10 text-secondary-text-light dark:text-secondary-text-dark" />
          <input
            type="text"
            placeholder="Search Components"
            className="rounded-full border bg-main-light-bg py-1 pl-8 outline-none dark:border-none dark:bg-[#122330]"
          />
        </div>
      </div>
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
