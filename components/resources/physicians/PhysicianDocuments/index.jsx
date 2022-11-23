import React from 'react';
import { useState } from 'react';
import DeletePopup from '../../../structure/DeletePopup';
import UploadDocument from './UploadDocument';

const PhysicianDocuments = () => {
  const [file, setFile] = useState(null);
  // console.log(file);
  return (
    <div className="mt-7 mb-10 px-5">
      <div className="flex items-center gap-4">
        <h2 classNmae="font-semobold verdana16">Documents</h2>
        <UploadDocument setFileProp={setFile} />
      </div>

      <table className="mx-auto mt-8 w-full overflow-auto px-3 shadow-md">
        <thead className="thead-primary">
          <tr className="verdana11">
            <th className="th-first">Document Type</th>
            <th className="th-middle">Status</th>
            <th className="th-middle">Document Description</th>
            <th className="th-middle">Uploaded By</th>
            <th className="th-middle">Uploaded</th>
            <th className="th-last">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="verdana11 w-full even:bg-[#eee]">
            <td className="td-primary">Physician Attention</td>
            <td className="td-primary">No action needed</td>
            <td className="td-primary text-primary-orange underline">{file}</td>
            <td className="td-primary">John Doe</td>
            <td className="td-primary">12/23/30</td>
            <td className="td-primary">
              <div className="flex justify-center">
                <DeletePopup toDelete="document" deleteIcon={true} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PhysicianDocuments;
