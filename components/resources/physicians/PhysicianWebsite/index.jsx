import { useState } from 'react';
import PhysicianCreateOrgAccess from './PhysicianCreateOrgAccess';
import PhysicianEditUserRole from './PhysicianEditUserRole';
import PhysicianWebsiteInitialPage from './PhysicianWebsiteInitialPage';

const PhysicianWebsite = () => {
  const [editUserRole, setEditUserRole] = useState({
    action: false,
    from: '',
    tempFrom: '',
  });
  const [editUserOrgAccess, setEditUserOrgAccess] = useState({
    action: false,
    from: '',
  });
  return (
    <div>
      {editUserRole.action &&
        (editUserRole.from === 'physiciancreatewebsiteaccess' ||
          editUserRole.from === 'edit') && (
          <PhysicianEditUserRole setEditUserRole={setEditUserRole} />
        )}

      {editUserRole.action === false &&
        (editUserRole.from === '' ||
          editUserRole.from === 'physiciancreatewebsiteaccess' ||
          editUserRole.from === 'physicianedituserrole') && (
          <PhysicianWebsiteInitialPage
            editUserRole={editUserRole}
            setEditUserRole={setEditUserRole}
            editUserOrgAccess={editUserOrgAccess}
            setEditUserOrgAccess={setEditUserOrgAccess}
          />
        )}

      {editUserOrgAccess.action &&
        (editUserOrgAccess.from === 'createorgaccess' ||
          editUserOrgAccess.from === 'edit') && (
          <PhysicianCreateOrgAccess
            setEditUserOrgAccess={setEditUserOrgAccess}
            setEditUserRole={setEditUserRole}
          />
        )}
    </div>
  );
};

export default PhysicianWebsite;
