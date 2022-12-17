<<<<<<< HEAD
import { FiBell } from 'react-icons/fi';
=======
import { FiBell, FiSettings } from 'react-icons/fi';
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
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
<<<<<<< HEAD
    <div className="sticky top-0 z-[1000] bg-[#0141CF] px-4">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between border-b-2 border-[#3374ff83] py-[6px] text-white">
=======
    <div className="sticky top-0 z-[1000] bg-primary-blue px-4">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between border-b-2 border-secondary-blue py-[6px] text-white">
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
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
<<<<<<< HEAD
                className={`border-b-2 border-[#0141CF] font-semibold hover:border-b-gray-200 ${
=======
                className={`border-b-2 border-primary-blue font-semibold hover:border-b-gray-200 ${
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
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
<<<<<<< HEAD
            <Settings />
=======
            {/* <Settings /> */}
            <FiSettings />
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
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
<<<<<<< HEAD
            className="relative flex h-8 w-8 cursor-pointer items-center justify-center rounded bg-blue-300 text-[13px] font-semibold"
=======
            className="relative flex h-8 w-8 cursor-pointer items-center justify-center rounded bg-secondary-blue text-[13px] font-semibold"
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
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
