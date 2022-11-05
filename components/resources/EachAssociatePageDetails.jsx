import Link from 'next/link';
import { useRouter } from 'next/router';
import { associateMenu } from '../../assets/data';

const EachAssociatePageDetails = ({ children }) => {
  const router = useRouter();
  const currentAssociate = router.query?.associateurl;
  const currentMenu = router.query?.associatemenu;
  return (
    <div className="mx-5 -mt-12 flex w-full flex-col items-center rounded border-x border-b  pt-5 pb-12 text-sm">
      <ul className="flex w-full flex-wrap items-end justify-start">
        {associateMenu.map((menu, index) => (
          <Link
            href={`/Resources/associates/${currentAssociate}/${menu.menu}`}
            key={index}
          >
            <li
              className={`-mx-[1px] flex skew-x-[12deg] cursor-pointer items-center gap-1 rounded-t-lg border-2 py-[1px] px-4 text-center italic ${
                currentMenu === menu.menu &&
                'skew-x-[0deg] border-r-0 border-b-0 bg-white pt-1 not-italic '
              }  ${index === 0 && 'skew-x-[1deg] not-italic'} `}
            >
              <span
                className={`${
                  currentMenu === menu.menu && '-skew-x-[0deg]'
                }   ${
                  index === 0 && '-skew-x-[0deg] '
                } -skew-x-[12deg] not-italic`}
              >
                {menu.icon}
              </span>
              <span>{menu.menu}</span>
            </li>
          </Link>
        ))}
        <li className="flex-auto border" />
      </ul>
      <div className="-mt-[0px] h-96 w-full  border-x  bg-white     ">
        {children}
      </div>
    </div>
  );
};

export default EachAssociatePageDetails;
