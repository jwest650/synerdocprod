import React from 'react';
import DeletePopup from '../../../structure/DeletePopup';
import PhysicianCreateIdentifier from './PhysicianCreateIdentifier';
import PhysicianCreateLicense from './PhysicianCreateLicense';
import PhysicianEditIdentifier from './PhysicianEditIdentifier';
import PhysicianEditLicense from './PhysicianEditLicense';

const PhysicianCredentials = () => {
  return (
    <div className="mx-4 pt-7 pb-14">
      <div>
        <div className="flex items-center gap-4">
          <h2 className="verdana16 font-semibold">Licenses</h2>
          <PhysicianCreateLicense />
        </div>

        <table className="mx-auto mt-5 w-full overflow-auto px-3 shadow-md">
          <thead className="thead-primary">
            <tr className="verdana11">
              <th className="th-first">Licence Number</th>
              <th className="th-middle">State</th>
              <th className="th-middle">Expires</th>
              <th className="th-middle">Verified</th>
              <th className="th-middle">Status</th>
              <th className="th-last">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="verdana11 w-full even:bg-[#eee]">
              <td className="td-primary">12346778</td>
              <td className="td-primary">LA</td>
              <td className="td-primary">01/10/26</td>
              <td className="td-primary">10/01/20</td>
              <td className="td-primary text-green-500">Active</td>
              <td className="td-primary w-28">
                <div className="flex items-center justify-center">
                  <PhysicianEditLicense />
                  <DeletePopup toDelete="license" deleteIcon={true} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-16">
        <div className="flex items-center gap-4">
          <h2 className="verdana16 font-semibold">Identifiers</h2>
          <PhysicianCreateIdentifier />
        </div>

        <table className="mx-auto mt-5 w-full overflow-auto px-3 shadow-md">
          <thead className="thead-primary">
            <tr className="verdana11">
              <th className="th-first">Identify Number</th>
              <th className="th-middle">Identify Value</th>
              <th className="th-middle">Start date</th>
              <th className="th-middle">End Date</th>
              <th className="th-last">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="verdana11 w-full even:bg-[#eee]">
              <td className="td-primary">National Provider Identifier</td>
              <td className="td-primary">1234567894</td>
              <td className="td-primary">01/10/26</td>
              <td className="td-primary"></td>
              <td className="td-primary w-28">
                <div className="flex items-center justify-center">
                  <PhysicianEditIdentifier />
                  <DeletePopup toDelete="identifier" deleteIcon={true} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PhysicianCredentials;
