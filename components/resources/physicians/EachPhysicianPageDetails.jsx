import Link from 'next/link';
import { useRouter } from 'next/router';
import { physicianMenu } from './physicianData';

const EachPhysicianPageDetails = ({ children }) => {
  const router = useRouter();
  const currentPhysician = router.asPath.split('/')[3];
  const currentMenu = router.query?.physicianmenu;

  return (
    <div className="-mt-12 flex w-full flex-col items-center rounded border-x border-b pt-5">
      <ul className="verdana12 flex w-full flex-wrap items-end justify-start">
        {physicianMenu.map((menu, index) => (
          <Link
            href={`/Resources/physicians/${currentPhysician}/${menu.url}`}
            key={index}
          >
            <li
              className={`-mx-[1px] flex skew-x-[12deg] cursor-pointer items-center gap-1 rounded-t-lg border-2 border-gray-300 py-[1px] px-4 text-center italic ${
                currentMenu === menu.url &&
                'skew-x-[0deg] border-r-0 border-b-0 bg-white pt-1 not-italic '
              }    ${
                currentMenu === undefined &&
                menu.url === 'contactinfo' &&
                'skew-x-[0deg] border-r-0 border-b-0 bg-white pt-1.5 not-italic '
              }    ${index === 0 && ' skew-x-[1deg] border-r-0 not-italic'}   `}
            >
              <span
                className={`${currentMenu === menu.url && '-skew-x-[0deg]'}   ${
                  index === 0 && '-skew-x-[0deg]'
                } skew-x-[-12deg] `}
              >
                {menu.icon}
              </span>
              <span>{menu.menu}</span>
            </li>
          </Link>
        ))}
        <li className="flex-auto border border-gray-300" />
      </ul>
      <div className="verdana11 -mt-[1px]  w-full border-x bg-white">
        {children}
      </div>
    </div>
  );
};

export default EachPhysicianPageDetails;