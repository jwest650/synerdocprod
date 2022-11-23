import { useState } from 'react';
import PhysicianCreateOrgAccess from './PhysicianCreateOrgAccess';
import PhysicianCreateWebsiteAccess from './PhysicianCreateWebsiteAccess';
import PhysicianEditUserRole from './PhysicianEditUserRole';
import UserRolesSection from './userRolesSection';
import SearchIcon from '../../../../assets/images/search.png';
import Image from 'next/image';
import { BiPlus } from 'react-icons/bi';

const PhysicianWebsite = () => {
  const [editUser, setEditUser] = useState({ action: false, from: '' });
  const [orgAccess, setOrgAccess] = useState({ action: false, from: '' });

  // console.log(editUser);
  // console.log(orgAccess);
  const handleFromEdit = () => {
    setEditUser((prev) => {
      const newFrom = 'edit';
      return {
        action: prev.action,
        from: newFrom,
      };
    });
  };

  return (
    <div>
      {(editUser.action && editUser.from === 'createwebsiteaccess') ||
      editUser.from === 'edit' ? (
        <PhysicianEditUserRole setEditUser={setEditUser} />
      ) : orgAccess.action && orgAccess.from === 'createorgaccess' ? (
        <PhysicianCreateOrgAccess
          setEditUser={setEditUser}
          setOrgAccess={setOrgAccess}
        />
      ) : (
        <>
          <div className="verdana11 mx-2 my-8 flex md:mx-9">
            <div className="w-[50%] border-primary-gray py-5 md:border-r">
              <div className="mb-5 flex items-center gap-3">
                <h2 className="verdana16 font-semibold">Website Access </h2>
                {editUser.action && editUser.from === 'edituserroles' ? (
                  ''
                ) : (
                  <PhysicianCreateWebsiteAccess setEditUser={setEditUser} />
                )}
              </div>
              {editUser.action && editUser.from === 'edituserroles' ? (
                <div className="flex ">
                  <div
                    onClick={handleFromEdit}
                    className="verdana11 cursor-pointer border-r border-primary-gray pr-4 text-primary-orange"
                  >
                    [Edit]
                  </div>
                  <UserRolesSection />
                </div>
              ) : (
                <p className="verdana12">
                  This doctor does not have access to the website.
                </p>
              )}
            </div>
            <div className="flex w-[50%]  flex-col items-center gap-5 px-3 md:px-8">
              <div className="w-full border-primary-gray py-5">
                <div className="mb-5 flex  items-center gap-3">
                  <h2 className="verdana16 font-semibold">Security </h2>
                </div>
                {editUser.action && editUser.from === 'edituserroles' ? (
                  <div className="flex ">
                    <div
                      onClick={handleFromEdit}
                      className="verdana11 cursor-pointer border-r border-primary-gray pr-4 text-primary-orange"
                    >
                      [Edit]
                    </div>
                    <table className=" mx-8 w-full overflow-auto px-3 shadow-md">
                      <thead className="thead-primary">
                        <tr className="verdana11">
                          <th className="th-first underline">User Roles </th>
                          <th className="th-last">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="w-full bg-[#e6ebf85d]">
                          <td className="td-primary w-[30rem] px-10">
                            Medications not approved to profile Spreadsheet
                          </td>
                          <td className="td-primary w-20 px-4">
                            <figure className="flex justify-center">
                              <Image
                                src={SearchIcon}
                                alt="search"
                                width="17"
                                height="17"
                              />
                            </figure>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="verdana12">
                    This doctor does not belong to any roles
                  </p>
                )}
              </div>
              <div className="w-full py-10">
                <div className="mb-5 flex  items-center gap-3">
                  <h2 className="verdana16 font-semibold">Org Access</h2>
                  <span
                    onClick={() => {
                      setEditUser((prev) => ({
                        action: false,
                        from: prev.from,
                      }));
                      setOrgAccess(() => ({
                        action: true,
                        from: 'createorgaccess',
                      }));
                    }}
                    className="btn-primary flex cursor-pointer items-center gap-1"
                  >
                    <BiPlus className="scale-150" />
                    <span className="verdana11">Create Org Access</span>
                  </span>
                </div>

                {orgAccess.action && orgAccess.from === 'editorgaccess' ? (
                  <div className="flex ">
                    <div
                      onClick={handleFromEdit}
                      className="verdana11 cursor-pointer border-r border-primary-gray pr-4 text-primary-orange"
                    >
                      [Edit]
                    </div>
                    <table className=" mx-8 w-full overflow-auto px-3 shadow-md">
                      <thead className="thead-primary">
                        <tr className="verdana11">
                          <th className="th-first underline">User Roles </th>
                          <th className="th-last">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="w-full bg-[#e6ebf85d]">
                          <td className="td-primary w-[30rem] px-10">
                            Medications not approved to profile Spreadsheet
                          </td>
                          <td className="td-primary w-20 px-4">
                            <figure className="flex justify-center">
                              <Image
                                src={SearchIcon}
                                alt="search"
                                width="17"
                                height="17"
                              />
                            </figure>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="verdana12">
                    This doctor does not have any org access
                  </p>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PhysicianWebsite;
