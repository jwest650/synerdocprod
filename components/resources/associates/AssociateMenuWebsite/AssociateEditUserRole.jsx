import { useRouter } from 'next/router';
import { associateRoles } from '../../../../assets/data';

const AssociateEditUserRole = ({ setEditUser }) => {
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
              <div className="flex w-full items-center justify-center">
                <label className="mr-3 w-[50%] text-end font-semibold">
                  Username:
                </label>
                <p className="input-primary w-[100%] ">
                  {associateUrl}@gmail.com
                </p>
              </div>
              <div className="flex w-full justify-center">
                <label className="mr-3 w-[50%] text-end font-semibold">
                  Is Active:
                </label>
                <div className="w-full">
                  <input type="checkbox" className="input-primary" />
                </div>
              </div>
              <div className="flex w-full items-center justify-center">
                <label className="mr-3 w-[50%] text-end font-semibold">
                  Is Locked Out:
                </label>
                <div className="w-full">
                  <input type="checkbox" className="input-primary" />
                </div>
              </div>
              <div className="flex w-full items-center justify-center">
                <label className="mr-3 w-[50%] text-end font-semibold">
                  Start Date:
                </label>
                <p className="input-primary w-[100%] ">7/22/2022</p>
              </div>
              <div className="flex w-full items-center justify-center">
                <label className="mr-3 w-[50%] text-end font-semibold">
                  End Date:
                </label>
                <p className="input-primary w-[100%] ">1/1/2042</p>
              </div>
              <div className="flex w-full items-center justify-center">
                <label className="mr-3 w-[50%] text-end font-semibold">
                  Last Login:
                </label>
                <p className="w-[100%]"></p>
              </div>
              <div className="flex w-full items-center justify-center">
                <label className="mr-3 w-[50%] text-end font-semibold">
                  Previous Login:
                </label>
                <p className="w-[100%] "></p>
              </div>
              <div className="flex w-full items-center justify-center">
                <label className="mr-3 w-[50%] text-end font-semibold">
                  Password Expires:
                </label>
                <p className="input-primary w-[100%] ">7/7/2022</p>
              </div>
              <div className="flex w-full items-center justify-center">
                <label className="mr-3 w-[50%] text-end font-semibold">
                  Created:{' '}
                </label>
                <p className="input-primary w-[100%] ">7/7/2022</p>
              </div>
              <div className="flex w-full items-center justify-center">
                <label className="mr-3 w-[50%] text-end font-semibold">
                  Updated:{' '}
                </label>
                <p className="input-primary w-[100%] ">7/7/2022</p>
              </div>
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
              {associateRoles.map((role, index) => (
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
                onClick={() => setEditUser(false)}
                className="rounded bg-[#0141CF] px-4 py-1 text-white shadow"
              >
                Save
              </button>
              <button
                onClick={() => setEditUser(false)}
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

export default AssociateEditUserRole;
