import React from 'react';
import DeletePopup from '../../../structure/DeletePopup';
import PayerCreateIdentifier from './PayerCreateIdentifier';
import PayerEditIentifier from './PayerEditIentifier';

const PayerIdentifiers = () => {
  return (
    <div className="mt-14">
      <div className="flex items-center gap-4">
        <h2 className="verdana16 font-semibold">Identifiers</h2>
        <PayerCreateIdentifier />
      </div>

      <table className="mx-auto mt-5 w-full overflow-auto px-3 shadow-md">
        <thead className="thead-primary">
          <tr className="verdana11">
            <th className="th-first">Agency Name</th>
            <th className="th-middle">Identify Type</th>
            <th className="th-middle">Identifier Value</th>
            <th className="th-middle">Start Date</th>
            <th className="th-middle">End Date</th>
            <th className="th-last">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="verdana11 w-full even:bg-[#eee]">
            <td className="td-primary">Lousiana Labor of Love</td>
            <td className="td-primary">Provider Number</td>
            <td className="td-primary">1234567894</td>
            <td className="td-primary">01/10/26</td>
            <td className="td-primary"></td>
            <td className="td-primary w-28">
              <div className="flex items-center justify-center">
                <PayerEditIentifier />
                <DeletePopup toDelete="identifier" deleteIcon={true} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PayerIdentifiers;
