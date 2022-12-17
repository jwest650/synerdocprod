import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SiVercel } from 'react-icons/si';
import { MdArrowRight } from 'react-icons/md';
import SuboptionMenu from './SuboptionMenu';

const Menupopup = ({ menu, index }) => {
  const router = useRouter();
  const currentPath = router.asPath.split('/')[1];
  const [isHovered, setIsHovered] = useState(false);
  const [showSubOptionsMenu, setShowSubOptionsMenu] = useState(false);
  // const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100;

  const [pageY, setPageY] = useState('');
  // useEffect(() => {}, [pageY]);
  return (
    <div
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="verdana12 relative flex cursor-pointer items-center gap-2 py-3 transition-all duration-[3000ms] ease-in-out"
    >
      <span className="mb-1 scale-[1.6]">{menu.icon}</span>
      <span
        className={`border-b-2 border-primary-blue font-semibold hover:border-b-gray-200 ${
          currentPath && menu.name === currentPath && 'border-gray-200'
        }  `}
      >
        {menu.name}
      </span>

      {isHovered && (
        <div className="absolute top-8">
          <div className="ml-3 -mb-0.5 text-[#f6f8fc] ">
            <SiVercel />
          </div>
          <ul
            className={`menu-anim verdana11 w-60 overflow-y-scroll rounded bg-[#f6f8fc] pt-1 text-[#070b16] shadow transition-all duration-[2000ms] ease-in-out`}
          >
            {menu?.options?.map((option, i) => (
              <Link
                href={`${
                  option.title === 'Home' ? '/' : `/${menu.name}/${option.url}`
                }`}
                key={i}
              >
                <li
                  className={`flex w-full items-center gap-2 font-medium hover:w-full hover:bg-secondary-blue ${
                    index === menu.options.length - 1
                      ? 'border-none'
                      : 'border-b'
                  } px-3 `}
                  onMouseOver={(e) => {
                    setShowSubOptionsMenu(() => option.subOptions && true);
                  }}
                  onMouseLeave={() => {
                    setShowSubOptionsMenu(() => option.subOptions && false);
                  }}
                >
                  <div
                    className="flex w-full items-center justify-between gap-2 py-[7px]"
                    onMouseOver={(e) => {
                      setPageY(() => `${(e.clientY - 70) / 16 + ''}rem`);
                    }}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="scale-110">{option.icon}</span>
                      <span>{option.title}</span>
                    </div>
                    {option.subOptions && (
                      <MdArrowRight className="scale-150" />
                    )}
                  </div>
                  <div
                    style={{ top: pageY }}
                    className={`absolute w-60 ${
                      menu.name === 'Settings'
                        ? 'left-[-15rem]'
                        : 'left-[237px]'
                    } z-10 block`}
                  >
                    {option.subOptions && showSubOptionsMenu && (
                      <SuboptionMenu
                        subOptions={option.subOptions}
                        urlPath={`/${menu.name}/${option.url}`}
                      />
                    )}
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menupopup;
