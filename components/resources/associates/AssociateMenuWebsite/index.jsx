import React from 'react';
import { useState } from 'react';
import AssociateCreateOrgAccess from './AssociateCreateOrgAccess';
import AssociateCreateReports from './AssociateCreateReports';
import AssociateCreateWebsiteAccess from './AssociateCreateWebsiteAccess';
import AssociateEditUserRole from './AssociateEditUserRole';
import ReportsTableActions from './ReportsTableActions';

const AssociateMenuWebsite = () => {
  const [editUser, setEditUser] = useState(false);

  return (
    <div>
      {editUser ? (
        <AssociateEditUserRole setEditUser={setEditUser} />
      ) : (
        <>
          <div className="mx-2 my-8 flex md:mx-9">
            <div className="w-[50%] border-primary-gray py-5 md:border-r">
              <div className="mb-5 flex items-center gap-3">
                <h2 className="verdana18 font-semibold">Website Access </h2>
                <AssociateCreateWebsiteAccess setEditUser={setEditUser} />
              </div>
              <p className="verdana12">
                This staff does not have access to the website
              </p>
            </div>
            <div className="flex w-[50%]  flex-col items-center gap-5 px-3 md:px-8">
              <div className="w-full border-primary-gray py-5">
                <div className="mb-5 flex  items-center gap-3">
                  <h2 className="verdana18 font-semibold">Security </h2>
                </div>
                <p className="verdana12">
                  This staff does not belong to any roles
                </p>
              </div>
              <div className="w-full py-10">
                <div className="mb-5 flex  items-center gap-3">
                  <h2 className="verdana18 font-semibold">Org Access</h2>
                  <AssociateCreateOrgAccess />
                </div>
                <p className="verdana12">
                  This staff does not have any org access
                </p>
              </div>
            </div>
          </div>
          <div className="mx-2 md:mx-9">
            <div className="w-full py-10">
              <div className="mb-5 flex  items-center gap-3">
                <h2 className="text-lg font-semibold">Reports</h2>
                <AssociateCreateReports />
              </div>
              <p className="verdana12">
                This associate does not have any reports
              </p>
              <table className=" mx-auto mt-5 w-full overflow-auto px-3 shadow-md">
                <thead className="thead-primary">
                  <tr>
                    <th className="th-first">Name </th>
                    <th className="th-middle">Frequency</th>
                    <th className="th-middle">Start Date</th>
                    <th className="th-middle">End Date</th>
                    <th className="th-last">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="w-full bg-[#e6ebf85d]">
                    <td className="td-primary w-[30rem] px-10">
                      Medications not approved to profile Spreadsheet
                    </td>
                    <td className="td-primary w-32 px-2">Batch</td>
                    <td className="td-primary w-32 px-4">07/77/22</td>
                    <td className="td-primary w-32 px-4"></td>

                    <td className="td-primary w-28 px-4">
                      <ReportsTableActions />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AssociateMenuWebsite;
