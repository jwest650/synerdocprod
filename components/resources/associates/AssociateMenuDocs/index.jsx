import { BsCloudDownload } from 'react-icons/bs';
import { useState } from 'react';
import AssociateUploadDocument from './AssociateUploadDocument';
import DeletePopup from '../../../structure/DeletePopup';
import TableSelect from '../../../structure/TableSelect';
import CreateForm from './CreateForm';
import AssociateForm from './AssociateForm';
import { FcEditImage, FcPrint } from 'react-icons/fc';

const AssociateMenuDocs = () => {
  const [showForm, setShowForm] = useState(false);
  const [file, setFile] = useState(null);
  return (
    <div className="mt-7 mb-10 px-4">
      {showForm ? (
        <AssociateForm setShowForm={setShowForm} />
      ) : (
        <>
          <div>
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h2 className="verdana16 font-semibold">Documents</h2>
                <AssociateUploadDocument setFileProp={setFile} />
              </div>
              <div className="verdana12 cursor-pointer text-primary-orange underline">
                Set Defaults
              </div>
            </div>
            <div className="verdana12 mt-4 flex cursor-pointer items-center gap-2 text-primary-orange underline ">
              <BsCloudDownload className="scale-125" /> Download/Print Selected
              Document(s)
            </div>

            <table className="mx-auto mt-3 w-full overflow-auto px-3 shadow-md">
              <thead className="thead-primary">
                <tr className="verdana11">
                  <th className="th-first">Print</th>
                  <th className="th-middle">Related To</th>
                  <th className="th-middle">Document Type</th>
                  <th className="th-middle">Document Description</th>
                  <th className="th-middle">Upload By</th>
                  <th className="th-middle">Uploaded</th>
                  <th className="th-last">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td-primary bg-secondary-blue"></td>
                  <td className="td-primary bg-secondary-blue"></td>
                  <td className="td-primary bg-secondary-blue">
                    <TableSelect
                      options={[
                        'All',
                        'Application/Resume',
                        'Background Check',
                        'Compliance',
                        'Education Contact',
                        'Emergency Contact',
                        '19 Employment',
                        'Incoming Desktop Fax',
                        'License/Certifications',
                        'Other',
                        'Outbound Desktop Fax',
                        'Photographs',
                      ]}
                    />
                  </td>
                  <td className="td-primary bg-secondary-blue"></td>
                  <td className="td-primary bg-secondary-blue"></td>
                  <td className="td-primary bg-secondary-blue"></td>
                  <td className="td-primary bg-secondary-blue"></td>
                </tr>
                <tr className="verdana11 w-full even:bg-[#eee]">
                  <td className="td-primary w-14">
                    <div className="flex justify-center">
                      <input type="checkbox" className="input-primary" />
                    </div>
                  </td>
                  <td className="td-primary">12346778</td>
                  <td className="td-primary w-60">Incoming Desktop Fax</td>
                  <td className="td-primary text-primary-orange underline">
                    {file === null
                      ? ''
                      : file[0]?.name.slice(0, 8) +
                        '...' +
                        file[0]?.name.split('.')[
                          file[0]?.name.split('.').length - 1
                        ]}
                  </td>
                  <td className="td-primary">Bailey Debbie</td>
                  <td className="td-primary">10/13/20</td>
                  <td className="td-primary w-20">
                    <div className="flex items-center justify-center">
                      <DeletePopup toDelete="license" deleteIcon={true} />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-14">
            <div className="flex items-center gap-4">
              <h2 className="verdana16 font-semibold">Forms</h2>
              <CreateForm setShowForm={setShowForm} />
            </div>

            <table className="mx-auto mt-3 w-full overflow-auto px-3 shadow-md">
              <thead className="thead-primary">
                <tr className="verdana11">
                  <th className="th-first">Type</th>
                  <th className="th-middle">Create</th>
                  <th className="th-middle">Performed By</th>
                  <th className="th-middle">Related By</th>
                  <th className="th-middle">Status</th>
                  <th className="th-last">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td-primary bg-secondary-blue">
                    <TableSelect options={['All', 'Option2']} />
                  </td>
                  <td className="td-primary bg-secondary-blue"></td>
                  <td className="td-primary bg-secondary-blue"></td>
                  <td className="td-primary bg-secondary-blue"></td>
                  <td className="td-primary bg-secondary-blue">
                    <TableSelect options={['All', 'Option2']} />
                  </td>
                  <td className="td-primary bg-secondary-blue"></td>
                </tr>
                <tr className="verdana11 w-full even:bg-[#eee]">
                  <td className="td-primary w-72">
                    Employee&apos;s Withholding Exemption Certificate
                  </td>
                  <td className="td-primary">05/19/20</td>
                  <td className="td-primary w-60">Bailey Debbie</td>
                  <td className="td-primary">Bailey Debbie</td>
                  <td className="td-primary">Completed</td>
                  <td className="td-primary w-36">
                    <div className="flex items-center justify-center">
                      <div
                        onClick={() => setShowForm(true)}
                        className="mr-4 cursor-pointer border-r border-primary-gray py-2 pr-4"
                      >
                        <FcEditImage className="scale-150" />
                      </div>
                      <div className="mr-4 cursor-pointer border-r border-primary-gray py-2 pr-4">
                        <FcPrint className="scale-150" />
                      </div>
                      <DeletePopup toDelete="license" deleteIcon={true} />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default AssociateMenuDocs;
