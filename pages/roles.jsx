import RoleTableActions from '../components/structure/RoleTableActions';
import { associateRoles } from '../assets/data';
import CreateRole from '../components/structure/CreateRole';
import PatientManagementRoles from '../components/resources/associates/AssociateMenuWebsite/PatientManagementRoles';
import ResourceManagementRoles from '../components/resources/associates/AssociateMenuWebsite/ResourceManagementRoles';
import { useState } from 'react';

const RolesPage = () => {
  const [checkedResources, setCheckedResources] = useState([]);
  const [checkedPatients, setCheckedPatients] = useState([]);

  // console.log('resources----------->', checkedResources);
  // console.log('patients------------>', checkedPatients);
  return (
    <div className="mt-5 w-full">
      <div className="flex w-full justify-between">
        <div className="w-[40%]">
          <div className="flex items-center gap-6">
            <h1 className="verdana17 font-semibold">Roles</h1>
            <CreateRole />{' '}
          </div>

          <table className="mt-3 w-full overflow-auto shadow">
            <thead className="thead-primary">
              <tr>
                <th className="th-first">Role </th>
                <th className="th-middle">Users</th>
                <th className="th-last">Actions</th>
              </tr>
            </thead>
            <tbody>
              {associateRoles.map((role, index) => (
                <tr key={index} className="w-full even:bg-[#eeeeee]">
                  <td className="td-primary w-60 px-10">{role}</td>
                  <td className="td-primary w-16 px-2">
                    <div className="flex items-center justify-center text-primary-orange underline">
                      20
                    </div>
                  </td>
                  <td className="td-primary w-32 px-4">
                    <RoleTableActions />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-[57%]">
          <h1 className="verdana17 font-semibold">
            Permissions{' '}
            <span className="verdana11 font-medium">
              - The Poin of Care - Clinical role has access to the following
            </span>
          </h1>
          <div className="mt-7 rounded border bg-texiary-blue pb-1 pt-5 shadow">
            <div className="verdana11 flex w-full items-center">
              <ResourceManagementRoles
                setCheckedResources={setCheckedResources}
              />
              <PatientManagementRoles setCheckedPatients={setCheckedPatients} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RolesPage;
