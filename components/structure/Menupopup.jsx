import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SiVercel } from 'react-icons/si';
import SuboptionMenu from './SuboptionMenu';

const Menupopup = ({ menu, index }) => {
  const router = useRouter();
  const currentPath = router.asPath.split('/')[1];
  const [isHovered, setIsHovered] = useState(false);
  const [showSubOptionsMenu, setShowSubOptionsMenu] = useState(false);

  return (
    <>
      <div
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex cursor-pointer items-center gap-2 py-3"
      >
        <span className="mb-1 scale-125">{menu.icon}</span>
        <span
          className={`border-b-2 border-[#0141CF] font-semibold hover:border-b-[#C8C4C3] ${
            currentPath
              ? menu.name === currentPath && 'border-gray-200'
              : menu.name === 'Dashboard' && 'border-gray-200'
          }  `}
        >
          {menu.name}
        </span>

        {isHovered && (
          <>
            <span className="absolute top-8 left-2 text-[#f6f8fc] ">
              <SiVercel />
            </span>
            <div className="absolute top-11 h-52 w-[32rem]">
              <div className="relative h-full">
                <ul className=" h-full w-64 overflow-y-scroll rounded bg-[#f6f8fc] pt-3 text-[#070b16] shadow transition-all duration-[2000ms] ease-in-out">
                  {menu.options.map((option, i) => (
                    <Link
                      href={`${
                        option.title === 'Home'
                          ? '/'
                          : `/${menu.name}/${option.url}`
                      }`}
                      key={i}
                    >
                      <li
                        className={`flex items-center  gap-2 overflow-hidden py-2 font-medium hover:bg-blue-100/80 ${
                          index === menu.options.length - 1
                            ? 'border-none'
                            : 'border-b'
                        } px-3 `}
                        onMouseOver={() =>
                          setShowSubOptionsMenu(() => option.subOptions && true)
                        }
                        onMouseLeave={() =>
                          setShowSubOptionsMenu(
                            () => option.subOptions && false
                          )
                        }
                      >
                        <span className="scale-110">{option.icon}</span>
                        <span>{option.title}</span>
                        {option.subOptions && showSubOptionsMenu && (
                          <SuboptionMenu
                            subOptions={option.subOptions}
                            urlPath={`/${menu.name}/${option.url}`}
                          />
                        )}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Menupopup;
