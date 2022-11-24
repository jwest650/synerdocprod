import { useState } from 'react';
import DeletePopup from '../../../structure/DeletePopup';
import AssociateCreateReports from './AssociateCreateReports';

const AssociateReports = () => {
  const [showReports, setShowReports] = useState(false);
  return (
    <div className="border-primary-gray py-5 px-5">
      <div className="mb-5 flex items-center gap-3">
        <h2 className="verdana16 font-semibold">Reports</h2>
        {!showReports && (
          <AssociateCreateReports
            action="create"
            setShowReports={setShowReports}
          />
        )}
      </div>
      {!showReports && (
        <p className="verdana12">This associate does not have any reports.</p>
      )}
      {showReports && (
        <>
          <table className="w-full overflow-auto shadow-md">
            <thead className="thead-primary">
              <tr className="verdana11">
                <th className="th-first underline">Name</th>
                <th className="th-middle">Frequency</th>
                <th className="th-middle">Start Date</th>
                <th className="th-middle">End Date</th>
                <th className="th-last">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="w-full bg-[#e6ebf85d]">
                <td className="td-primary w-[30rem] px-10">
                  Medications not approved to profile Spreadsheet
                </td>
                <td className="td-primary w-20 px-4">Batch </td>
                <td className="td-primary w-20 px-4">07/22/22 </td>
                <td className="td-primary w-20 px-4"></td>
                <td className="td-primary w-20 px-4">
                  <div className="flex items-center justify-center">
                    <AssociateCreateReports
                      setShowReports={setShowReports}
                      action="edit"
                    />
                    <DeletePopup toDelete="report" deleteIcon={true} />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default AssociateReports;
