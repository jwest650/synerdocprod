import { useState } from 'react';
import AssociateEditUserRole from './AssociateEditUserRole';
import AssociateWebsiteInitialPage from './AssociateWebsiteInitialPage';
import AssociateCreateOrgAccess from './AssociateCreateOrgAccess';

const AssociateWebsite = () => {
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
        (editUserRole.from === 'associatecreatewebsiteaccess' ||
          editUserRole.from === 'edit') && (
          <AssociateEditUserRole setEditUserRole={setEditUserRole} />
        )}

      {editUserRole.action === false &&
        (editUserRole.from === '' ||
          editUserRole.from === 'associatecreatewebsiteaccess' ||
          editUserRole.from === 'associateedituserrole') && (
          <AssociateWebsiteInitialPage
            editUserRole={editUserRole}
            setEditUserRole={setEditUserRole}
            editUserOrgAccess={editUserOrgAccess}
            setEditUserOrgAccess={setEditUserOrgAccess}
          />
        )}

      {editUserOrgAccess.action &&
        (editUserOrgAccess.from === 'createorgaccess' ||
          editUserOrgAccess.from === 'edit') && (
          <AssociateCreateOrgAccess
            setEditUserOrgAccess={setEditUserOrgAccess}
            setEditUserRole={setEditUserRole}
          />
        )}
    </div>
  );
};

export default AssociateWebsite;
