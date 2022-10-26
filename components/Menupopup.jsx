import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SiVercel } from 'react-icons/si';

const Menupopup = ({ menu, index }) => {
  const router = useRouter();
  const currentPath = router.asPath.split('/')[1];
  const [isHovered, setIsHovered] = useState(false);

  // alert(currentPath);

  return (
    <>
      <div
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex cursor-pointer items-center gap-2 py-3"
      >
        <span className="mb-1 scale-125">{menu.icon}</span>
        <span
          className={`border-b-2 border-[#32164A] hover:border-b-[#C8C4C3] ${
            currentPath
              ? menu.name === currentPath && 'border-[#C8C4C3]'
              : menu.name === 'Dashboard' && 'border-[#C8C4C3]'
          }  `}
        >
          {menu.name}
        </span>

        {isHovered && (
          <>
            <span className="absolute top-9 left-2 text-gray-300">
              <SiVercel />
            </span>
            <ul className="absolute top-12 h-52 w-64 overflow-scroll rounded bg-gray-300 pt-3 text-[#32164A]   shadow transition-all duration-[2000ms] ease-in-out">
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
                    className={`flex items-center gap-2 py-2 font-medium hover:bg-gray-100 ${
                      index === menu.options.length - 1
                        ? 'border-none'
                        : 'border-b'
                    } px-3 `}
                  >
                    <span className="scale-110">{option.icon}</span>
                    <span>{option.title}</span>
                  </li>
                </Link>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default Menupopup;
