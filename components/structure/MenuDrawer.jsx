import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { BsGrid } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';
import { FiBell } from 'react-icons/fi';
import { GoMail } from 'react-icons/go';
import { menuOptions } from '../../assets/menuOptionsData';
import Settings from './Settings';

const MenuDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const router = useRouter();
  const currentPath = router.asPath.split('/')[2];
  const home = router.asPath;

  return (
    <div className="lg:hidden">
      <Button ref={btnRef} __css={{}} onClick={onOpen}>
        <div className="ml-[95px] cursor-pointer">
          <BsGrid className="scale-150" />
        </div>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent css={{ backgroundColor: '#f6f8fc' }}>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <div>
              <Link href="/">
                <h1 className="verdana14 flex cursor-pointer items-center gap-2 px-2 font-semibold">
                  <FaHome className="scale-125" />
                  Home
                </h1>
              </Link>
              {menuOptions.map((menu, index) => (
                <div key={index} className="border-b">
                  <h1
                    className={`verdana14 mt-2 flex h-12 w-fit items-center gap-2 px-2 font-semibold text-secondary-text-light dark:text-secondary-text-dark`}
                  >
                    <span className="scale-125">{menu.icon}</span>
                    {menu.name}
                  </h1>
                  <ul className="ml-5 h-52 space-y-4 overflow-x-hidden overflow-y-scroll text-secondary-text-light">
                    {menu?.options?.map((option, index) => (
                      <Link
                        href={`${
                          option.title === 'Home'
                            ? '/'
                            : `/${menu.name}/${option.url}`
                        }`}
                        key={index}
                      >
                        <li
                          onClick={onClose}
                          className={`flex h-6 cursor-pointer items-center gap-2 hover:font-semibold hover:text-main-text-light dark:hover:text-main-text-dark ${
                            currentPath
                              ? option.url === currentPath &&
                                'font-semibold text-black  dark:text-main-text-dark'
                              : option.url === 'home' &&
                                'font-semibold text-black dark:text-main-text-dark'
                          } `}
                        >
                          <span
                            className={`mt-[5px] ml-[6px] min-h-[25px] min-w-[25px] text-xl  ${
                              currentPath
                                ? option.url === currentPath &&
                                  'stroke-2 text-main-text-light dark:text-main-text-dark'
                                : option.url === 'home' &&
                                  'stroke-2 text-main-text-light dark:text-main-text-dark'
                            }`}
                          >
                            {option.icon}
                          </span>
                          <span className={`min-w-[240px]`}>
                            {option.title}
                          </span>{' '}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </DrawerBody>
          <div className=" w-full rounded-t bg-[#d0cbd4] px-3 text-black shadow  md:hidden">
            <DrawerFooter>
              <ul className="flex w-full items-center justify-between text-lg">
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
                  <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-blue-500 p-2 text-center text-[10px] font-bold">
                    2
                  </span>
                </li>
              </ul>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MenuDrawer;
