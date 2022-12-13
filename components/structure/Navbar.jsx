import { FiBell } from 'react-icons/fi';
import { GoMail } from 'react-icons/go';
import Link from 'next/link';
import Settings from './Settings';
import Menupopup from './Menupopup';
import MenuDrawer from './MenuDrawer';
import { menuOptions } from '../../assets/menuOptionsData';
import { FaHome } from 'react-icons/fa';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const currentPath = router.asPath;

  return (
    <div className="sticky top-0 z-[1000] bg-[#0141CF] px-4">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between border-b-2 border-[#3374ff83] py-[6px] text-white">
        <div className="flex items-center">
          <Link href="/">
            <h1 className="cursor-pointer text-2xl font-semibold">
              Syner<span className="font-normal">doc</span>{' '}
            </h1>
          </Link>
        </div>
        <ul className="hidden items-center gap-8 pt-1 lg:flex">
          <Link href="/">
            <li className="flex cursor-pointer items-center gap-2 py-3">
              <FaHome className="mb-1 scale-125" />
              <span
                className={`border-b-2 border-[#0141CF] font-semibold hover:border-b-gray-200 ${
                  currentPath && currentPath === '/' && 'border-gray-200'
                }`}
              >
                Home
              </span>
            </li>
          </Link>
          {menuOptions.map((menu, index) => (
            <li key={index}>
              <Menupopup menu={menu} />
            </li>
          ))}
        </ul>

        <MenuDrawer />
        <ul className="hidden items-center gap-7 md:flex">
          <li className="cursor-pointer text-lg">
            <Settings />
          </li>

          <li className="relative flex h-8 w-8 cursor-pointer items-center justify-center rounded text-[12px]">
            <i>
              <FiBell className="text-xl" />
            </i>
            <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-orange-600 p-2 text-center text-[10px] font-bold">
              6
            </span>
          </li>
          <li className="relative flex h-8 w-8 cursor-pointer items-center justify-center rounded text-[12px]">
            <i>
              <GoMail className="text-xl" />
            </i>
            <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-orange-600 p-2 text-center text-[10px] font-bold">
              2
            </span>
          </li>
          <li
            // className="cursor-pointer"
            className="relative flex h-8 w-8 cursor-pointer items-center justify-center rounded bg-blue-300 text-[13px] font-semibold"
          >
            FAX
            {/* 
             S
             */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
