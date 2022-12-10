import { useRouter } from 'next/router';
import { physicianRoles } from '../physicianData';
import PhysicianUserDetails from './PhysicianUserDetails';

const PhysicianEditUserRole = ({ setEditUserRole }) => {
  const router = useRouter();
  const associateUrl = router.asPath.split('/')[3];

  return (
    <div>
      <div className="mt-10 px-10 pb-20">
        <h1 className="verdana14 mb-3 border-b border-primary-gray pb-2 font-semibold">
          Edit User Roles
        </h1>
        <p className="verdana12 text-gray-500">
          Edit the roles that the user will use when accessing the website
        </p>
        <div className="flex w-full gap-6">
          <div className="w-[40%]">
            <h2 className="verdana16 my-10 font-semibold">{associateUrl}</h2>
            <div className="verdana12 flex flex-col items-center justify-center gap-3 rounded border-2 bg-texiary-blue p-6 shadow">
              <PhysicianUserDetails associateUrl={associateUrl} />
            </div>
          </div>
          <div className="w-[60%]">
            <h2 className="verdana16 my-10 px-6 font-semibold">
              Roles -{' '}
              <span className="verdana11 font-medium">
                these roles control security when accessing the website
              </span>
            </h2>
            <ul className="verdana12 grid grid-cols-2  rounded border-2 bg-texiary-blue p-5 shadow lg:grid-cols-3">
              {physicianRoles.map((role, index) => (
                <li key={index} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={role}
                    className="input-primary cursor-pointer"
                  />
                  <label htmlFor={role} className="cursor-pointer p-2">
                    {role}
                  </label>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex w-full justify-end gap-3">
              <button
                onClick={() =>
                  setEditUserRole(() => ({
                    action: false,
                    from: 'physicianedituserrole',
                  }))
                }
                className="rounded bg-[#0141CF] px-4 py-1 text-white shadow"
              >
                Save
              </button>
              <button
                onClick={() =>
                  setEditUserRole((prev) => ({
                    action: false,
                    from: prev.from === 'edit' ? 'physicianedituserrole' : '',
                  }))
                }
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

export default PhysicianEditUserRole;
