import { useRouter } from 'next/router';
import OrgAccessTreeview from '../../OrgAccessTreeview';
import AssociateUserDetails from './AssociateUserDetails';
import { associateOrgAccess } from '../../../../assets/data';

const AssociateCreateOrgAccess = ({
  setEditUserRole,
  setEditUserOrgAccess,
}) => {
  const router = useRouter();
  const associateUrl = router.asPath.split('/')[3];

  const handlesave = () => {
    setEditUserRole((prev) => ({
      action: false,
      from: prev.tempFrom,
      tempFrom: '',
    }));
    setEditUserOrgAccess(() => ({
      action: false,
      from: 'associatecreateorgaccess',
    }));
  };

  const handleCancel = () => {
    setEditUserRole((prev) => ({
      action: false,
      from: prev.tempFrom,
      tempFrom: '',
    }));
    setEditUserOrgAccess((prev) => ({
      action: false,
      from: prev.from,
    }));
  };
  return (
    <div>
      <div className="mt-10 px-10 pb-20">
        <h1 className="verdana14 mb-3 border-b border-primary-gray pb-2 font-semibold">
          Edit User Org Access
        </h1>
        <p className="verdana12 text-gray-500">
          Edit the org/region/agencies that the user will use when accessing the
          website
        </p>
        <div className="flex w-full gap-6">
          <div className="w-[40%]">
            <h2 className="verdana16 my-10 font-semibold">{associateUrl}</h2>
            <div className="verdana12 flex flex-col items-center justify-center gap-3 rounded border-2 bg-texiary-blue p-6 shadow">
              <AssociateUserDetails associateUrl={associateUrl} />{' '}
            </div>
          </div>
          <div className="w-[60%]">
            <h2 className="verdana16 my-10 px-6 font-semibold">
              Org Access -{' '}
              <span className="verdana11 font-medium">
                affects the patient records that canbe viewed{' '}
              </span>
            </h2>
            <div className="verdana12 rounded border-2 bg-texiary-blue px-5 pb-5 shadow">
              <OrgAccessTreeview treeviewData={associateOrgAccess} />
            </div>
            <div className="mt-8 flex w-full justify-end gap-3">
              <button
                onClick={handlesave}
                className="rounded bg-[#0141CF] px-4 py-1 text-white shadow"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="rounded bg-gray-500 px-4 py-1 text-white shadow"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssociateCreateOrgAccess;
