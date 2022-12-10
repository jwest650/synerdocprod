import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { notesData } from '../../resourcesData';
import FacilityActivePopup from './FacilityActivePopup';

const FacilityNotesTable = ({ document }) => {
  const router = useRouter();
  const facilityUrl = router.asPath.split('/')[3];

  console.log(document !== null && document[0].name);
  const [newNotesData, setNewNotesData] = useState([]);
  const [actionType, setActionType] = useState({ action: '', noteId: '' });

  useEffect(() => {
    const handleFilter = () => {
      setNewNotesData(
        notesData.filter((note) => note.noteId !== actionType.noteId)
      );
    };

    actionType.action === 'delete'
      ? handleFilter()
      : actionType.action === 'inactivate'
      ? handleFilter()
      : actionType.action === '' && setNewNotesData(notesData);
  }, [actionType, actionType.action, actionType.noteId]);

  return (
    <table className="mx-auto mt-4 w-full overflow-auto px-3 shadow-md">
      <thead className=" verdana11 border-b bg-primary-blue tracking-wider text-white ">
        <tr>
          <th className="th-first"></th>
          <th className="th-middle">
            <div className="flex items-center">
              <div>Date</div>
              <div className="ml-32">Note By</div>
            </div>
          </th>
          <th className="th-middle">
            <div className="flex  items-center justify-between">
              <div className="">Type</div>
              <div className="w-48 pr-10 text-end">Document</div>
            </div>
          </th>
          <th className="th-last">Note </th>
        </tr>
      </thead>
      <tbody>
        {newNotesData?.map((note, index) => (
          <tr key={index} className="verdana11 w-full even:bg-[#eee]">
            <td className="td-primary">
              <div className="flex items-center justify-center">
                <FacilityActivePopup
                  setActionType={setActionType}
                  noteId={note.noteId}
                />
              </div>
            </td>
            <td className="td-primary">
              <div className="flex items-center gap-2">
                <p className="verdana9 w-fit border-r border-primary-gray py-1 pr-3 text-primary-orange underline ">
                  {note.date}
                </p>
                {index % 2 === 0 ? (
                  <p className="verdana10 w-fit">By Internal</p>
                ) : (
                  <p className="verdana10 ">{facilityUrl}</p>
                )}
              </div>
            </td>
            <td className="td-primary">
              <div className="flex items-center justify-between">
                <div className="w-[160px] border-r border-primary-gray py-1 ">
                  {note.type}{' '}
                </div>
                <div className="w-full px-1 text-primary-orange underline">
                  {document === null
                    ? ''
                    : document[0]?.name.slice(0, 8) +
                      '...' +
                      document[0]?.name.split('.')[
                        document[0]?.name.split('.').length - 1
                      ]}
                </div>
              </div>
            </td>
            <td className="td-primary">{note.note} </td>
          </tr>
        ))}
        <tr className="verdana11 border border-primary-gray bg-[#eeeeee]">
          <td colSpan="8" className="px-2">
            displaying page 1 of 1 | rows per page:
            <input
              type="number"
              className="input-primary ml-1 h-[21px] w-10 py-1"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default FacilityNotesTable;
