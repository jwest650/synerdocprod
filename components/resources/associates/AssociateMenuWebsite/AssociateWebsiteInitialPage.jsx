import { BiPlus } from 'react-icons/bi';
import AssociateCreateWebsiteAccess from './AssociateCreateWebsiteAccess';
import AssociateOrgAccessTable from './AssociateOrgAccessTable';
import AssociateReports from './AssociateReports';
import AssociateSecurityTable from './AssociateSecurityTable';
import AssociateUserRolesComp from './AssociateUserRolesComp';

const AssociateWebsiteInitialPage = ({
  editUserRole,
  setEditUserRole,
  editUserOrgAccess,
  setEditUserOrgAccess,
}) => {
  const handleCreateOrgAcess = () => {
    setEditUserOrgAccess(() => ({
      action: true,
      from: 'createorgaccess',
    }));
    setEditUserRole((prev) => ({
      action: false,
      from: 'createorgaccess',
      tempFrom: prev.from,
    }));
  };
  return (
    <div className="mx-2 my-8 space-y-10 md:mx-9">
      <div className="flex">
        <div className="w-[50%] border-primary-gray py-5 md:border-r">
          <div className="mb-5 flex items-center gap-3">
            <h2 className="verdana16 font-semibold">Website Access </h2>
            {editUserRole.action === false && editUserRole.from === '' && (
              <AssociateCreateWebsiteAccess setEditUserRole={setEditUserRole} />
            )}
          </div>
          {editUserRole.action === false && editUserRole.from === '' && (
            <p>This associate does not have access to the website.</p>
          )}
          {editUserRole.from === 'associateedituserrole' && (
            <AssociateUserRolesComp setEditUserRole={setEditUserRole} />
          )}
        </div>
        <div className="flex w-[50%]  flex-col items-center gap-5 px-3 md:px-8">
          <div className="w-full border-primary-gray py-5">
            <div className="mb-5 flex  items-center gap-3">
              <h2 className="verdana16 font-semibold">Security </h2>
            </div>
            {editUserRole.action === false && editUserRole.from === '' && (
              <p>This associate does not belong to any roles</p>
            )}
            {editUserRole.from === 'associateedituserrole' && (
              <AssociateSecurityTable setEditUserRole={setEditUserRole} />
            )}
          </div>
          <div className="w-full py-10">
            <div className="mb-5 flex  items-center gap-3">
              <h2 className="verdana16 font-semibold">Org Access</h2>

              {editUserOrgAccess.action === false &&
                editUserOrgAccess.from !== 'associatecreateorgaccess' &&
                editUserOrgAccess.from !== 'edit' && (
                  <span
                    onClick={handleCreateOrgAcess}
                    className="btn-primary flex cursor-pointer items-center gap-1"
                  >
                    <BiPlus className="scale-150" />
                    <span>Create Org Access</span>
                  </span>
                )}
            </div>

            {editUserOrgAccess.action === false &&
              editUserOrgAccess.from !== 'associatecreateorgaccess' &&
              editUserOrgAccess.from !== 'edit' && (
                <p>This associate does not have any org access</p>
              )}

            {(editUserOrgAccess.from === 'associatecreateorgaccess' ||
              editUserOrgAccess.from === 'edit') && (
              <AssociateOrgAccessTable
                setEditUserRole={setEditUserRole}
                setEditUserOrgAccess={setEditUserOrgAccess}
              />
            )}
          </div>
        </div>
      </div>
      <AssociateReports />
    </div>
  );
};

export default AssociateWebsiteInitialPage;
