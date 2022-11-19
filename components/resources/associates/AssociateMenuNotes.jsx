import { useRouter } from 'next/router';
import React from 'react';
import { FcDeleteRow } from 'react-icons/fc';
import { notesData } from '../../../assets/data';
import TableSelect from '../../structure/TableSelect';
import ActivePopup from './ActivePopup';
import CreateNote from './CreateNote';

const AssociateMenuNotes = () => {
  const router = useRouter();
  const associateUrl = router.asPath.split('/')[3];

  return (
    <div className="px-3 py-10">
      <div>
        <div className="verdana11 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-3">
              <h1 className="verdana16 font-semibold">Notes</h1>
              <CreateNote />
            </div>
            <div className="flex items-center gap-1">
              Type:
              <div className="rounded border border-secondary-blue shadow-sm">
                <TableSelect options={['All', 'Option2']} />
              </div>
            </div>
            <div className="flex items-center gap-1">
              From:
              <input type="date" className="input-primary h-6 w-32" />
            </div>
            <div className="flex items-center gap-1">
              To:
              <input type="date" className="input-primary h-6 w-32" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="showinactive"
              className="input-primary"
            />
            <label htmlFor="showinactive">Show Inactive</label>

            <input
              type="text"
              placeholder="Search by keyword"
              className="input-primary h-6 w-40"
            />
            <button className="btn-primary h-6"> Search</button>

            <div className="ml-[1px] rounded border border-secondary-blue shadow-sm">
              <TableSelect options={['PDF', 'SPREADSHEET']} />
            </div>
            <button className="btn-primary h-6">Export</button>
          </div>
        </div>
      </div>
      <table className="mx-auto mt-8 w-full overflow-auto px-3 shadow-md">
        <thead className=" verdana11 border-b bg-primary-blue tracking-wider text-white ">
          <tr>
            <th className="border border-primary-gray border-t-primary-blue border-l-primary-blue py-[1px] pl-2 text-left"></th>
            <th className="border border-primary-gray border-t-primary-blue py-[1px] pl-2 text-left">
              <div className="flex items-center justify-between">
                <div>Date</div>
                <div className="mr-9">Note By</div>
              </div>
            </th>
            <th className="border border-primary-gray border-t-primary-blue py-[1px] pl-2 text-left">
              Type
            </th>
            <th className="border border-primary-gray border-t-primary-blue border-r-primary-blue py-[1px] pl-2 text-left">
              <div className="flex items-center justify-between">
                <div className="">Document</div>
                <div className="mr-9 w-[79%]">Note</div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {notesData.map((note, index) => (
            <tr key={index} className="verdana11 w-full even:bg-[#eee]">
              <td className="td-primary w-5 px-2">
                <div className="flex items-center justify-center">
                  <ActivePopup />
                  {/* a pop up showing inactive or delete option */}
                </div>
              </td>
              <td className="td-primary min-w-[270px] px-2">
                <div className="flex items-center gap-2">
                  <p className="verdana9 w-fit border-r border-primary-gray py-1 pr-3 text-primary-orange underline ">
                    {note.date}
                  </p>
                  {index % 2 === 0 ? (
                    <p className="verdana10 w-fit">By Internal</p>
                  ) : (
                    <p className="verdana10 ">{associateUrl}</p>
                  )}
                </div>
              </td>
              <td className="td-primary min-w-[100px]">{note.type}</td>
              <td className="td-primary w-full  px-4">
                <div className="flex items-center justify-between">
                  <div className="">Document</div>
                  <div className="mr-9 w-[80%] border-l border-primary-gray py-1 pl-3 ">
                    {note.note}
                  </div>
                </div>
              </td>
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
    </div>
  );
};

export default AssociateMenuNotes;
