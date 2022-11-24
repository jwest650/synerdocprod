import { BiPlus } from 'react-icons/bi';
import PhysicianCreateWebsiteAccess from './PhysicianCreateWebsiteAccess';
import PhysicianUserRolesComp from './PhysicianUserRolesComp';
import PhysicianSecurityTable from './PhysicianSecurityTable';
import PhysicianOrgAccessTable from './PhysicianOrgAccessTable';

const PhysicianWebsiteInitialPage = ({
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
    <div className="verdana11 mx-2 my-8 flex md:mx-9">
      <div className="w-[50%] border-primary-gray py-5 md:border-r">
        <div className="mb-5 flex items-center gap-3">
          <h2 className="verdana16 font-semibold">Website Access </h2>
          {editUserRole.action === false && editUserRole.from === '' && (
            <PhysicianCreateWebsiteAccess setEditUserRole={setEditUserRole} />
          )}
        </div>
        {editUserRole.action === false && editUserRole.from === '' && (
          <p className="verdana12">
            This doctor does not have access to the website.
          </p>
        )}
        {editUserRole.from === 'physicianedituserrole' && (
          <PhysicianUserRolesComp setEditUserRole={setEditUserRole} />
        )}
      </div>
      <div className="flex w-[50%]  flex-col items-center gap-5 px-3 md:px-8">
        <div className="w-full border-primary-gray py-5">
          <div className="mb-5 flex  items-center gap-3">
            <h2 className="verdana16 font-semibold">Security </h2>
          </div>
          {editUserRole.action === false && editUserRole.from === '' && (
            <p className="verdana12">
              This doctor does not belong to any roles
            </p>
          )}
          {editUserRole.from === 'physicianedituserrole' && (
            <PhysicianSecurityTable setEditUserRole={setEditUserRole} />
          )}
        </div>
        <div className="w-full py-10">
          <div className="mb-5 flex  items-center gap-3">
            <h2 className="verdana16 font-semibold">Org Access</h2>

            {editUserOrgAccess.action === false &&
              editUserOrgAccess.from !== 'physiciancreateorgaccess' &&
              editUserOrgAccess.from !== 'edit' && (
                <span
                  onClick={handleCreateOrgAcess}
                  className="btn-primary flex cursor-pointer items-center gap-1"
                >
                  <BiPlus className="scale-150" />
                  <span className="verdana11">Create Org Access</span>
                </span>
              )}
          </div>

          {editUserOrgAccess.action === false &&
            editUserOrgAccess.from !== 'physiciancreateorgaccess' &&
            editUserOrgAccess.from !== 'edit' && (
              <p className="verdana12">
                This doctor does not have any org access
              </p>
            )}

          {(editUserOrgAccess.from === 'physiciancreateorgaccess' ||
            editUserOrgAccess.from === 'edit') && (
            <PhysicianOrgAccessTable
              setEditUserRole={setEditUserRole}
              setEditUserOrgAccess={setEditUserOrgAccess}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PhysicianWebsiteInitialPage;
