import { useContext, useRef, useState } from 'react';
import { menuOptions } from '../assets/data';
import GeneralContext from '../context/GeneralContext';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Leftmenu = () => {
  const router = useRouter();
  const currentPath = router.asPath.split('/')[2];

  const { menuIsClicked } = useContext(GeneralContext);

  const [isHovered, setIsHovered] = useState(false);
  const btnRef = useRef(null);

  return (
    <div
      ref={btnRef}
      onMouseOver={() => setIsHovered((current) => (current = true))}
      onMouseLeave={() => setIsHovered((current) => (current = false))}
      className="relative max-h-screen w-fit cursor-pointer bg-main-light-bg shadow dark:bg-[#122330]"
    >
      {isHovered ? (
        <div
          className={`bezier-nav2 absolute z-[100] max-h-screen overflow-x-hidden overflow-y-scroll bg-secondary-light-bg dark:bg-secondary-dark-bg `}
        >
          {menuOptions.map((menu, index) => (
            <div key={index}>
              <h1
                className={` mt-7 h-12 w-fit px-2 text-sm  font-medium text-secondary-text-light opacity-100 transition duration-1000 ease-in-out dark:text-secondary-text-dark`}
              >
                {menu.name}
              </h1>
              <ul className="ml-5 space-y-4 text-secondary-text-light dark:text-secondary-text-dark">
                {menu.options.map((option, index) => (
                  <Link
                    href={`${
                      option.title === 'Home'
                        ? '/'
                        : `/${menu.name}/${option.url}`
                    }`}
                    key={index}
                  >
                    <li
                      key={index}
                      className={`flex h-6 items-center  gap-2 hover:font-semibold hover:text-main-text-light dark:hover:text-main-text-dark ${
                        currentPath
                          ? option.url === currentPath &&
                            'font-semibold text-main-text-light dark:text-main-text-dark'
                          : option.url === 'home' &&
                            'font-semibold text-main-text-light dark:text-main-text-dark'
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
                      <span className="min-w-[240px] opacity-100 transition duration-500 ease-in-out">
                        {option.title}
                      </span>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <div
          className={`${
            menuIsClicked ? 'bezier-nav2' : 'w-[70px]'
          }  max-h-screen overflow-x-hidden overflow-y-scroll `}
        >
          {menuOptions.map((menu, index) => (
            <div key={index}>
              <h1
                className={` ${
                  menuIsClicked ? 'opacity-100' : 'opacity-0'
                } mt-7 h-12 w-fit px-2 text-sm font-medium text-secondary-text-light dark:text-secondary-text-dark`}
              >
                {menu.name}
              </h1>
              <ul className="ml-5 space-y-4 text-secondary-text-light">
                {menu.options.map((option, index) => (
                  <Link
                    href={`${
                      option.title === 'Home'
                        ? '/'
                        : `/${menu.name}/${option.url}`
                    }`}
                    key={index}
                  >
                    <li
                      className={`flex h-6 items-center gap-2 text-secondary-text-dark hover:font-semibold hover:text-main-text-light dark:hover:text-main-text-dark ${
                        currentPath
                          ? option.url === currentPath &&
                            'font-semibold text-main-text-light dark:text-main-text-dark'
                          : option.url === 'home' &&
                            'font-semibold text-main-text-light dark:text-main-text-dark'
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
                      <span
                        className={`min-w-[240px] ${
                          menuIsClicked ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        {option.title}
                      </span>{' '}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      <div
        className={`${
          menuIsClicked ? 'bezier-nav2' : 'w-[70px]'
        }  max-h-screen overflow-y-scroll`}
      />
    </div>
  );
};

export default Leftmenu;
