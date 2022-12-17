import { useRouter } from 'next/router';
import AssociateUserDetails from './AssociateUserDetails';

const AssociateUserRolesComp = ({ setEditUserRole }) => {
  const router = useRouter();
  const associateUrl = router.asPath.split('/')[3];

  return (
    <div>
      <div className="flex">
        <div
          onClick={() =>
            setEditUserRole(() => ({ action: true, from: 'edit' }))
          }
          className="verdana10 cursor-pointer border-r border-primary-gray pr-4 text-primary-orange underline"
        >
          [Edit]
        </div>
        <div className="mx-8 flex w-full flex-col items-center justify-center gap-3 rounded-sm border border-primary-gray bg-texiary-blue p-6 shadow-md">
          <AssociateUserDetails associateUrl={associateUrl} />
        </div>
      </div>
    </div>
  );
};

export default AssociateUserRolesComp;
