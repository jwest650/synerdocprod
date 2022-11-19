import React from 'react';
import { FcDeleteRow } from 'react-icons/fc';
import { notesData } from '../../../assets/data';
import TableSelect from '../../structure/TableSelect';
import CreateNote from './CreateNote';

const AssociateMenuNotes = () => {
  return (
    <div className="px-3 py-10">
      <div>
        <div className="verdana12 flex items-center justify-between">
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
              className="input-primary h-6"
            />
            <button className="btn-primary h-6"> Search</button>
          </div>
        </div>
        <div className="flex justify-between">
          <div />

          <div className="mt-5 flex items-center gap-2">
            <div className="rounded border border-secondary-blue shadow-sm">
              <TableSelect options={['PDF', 'SPREADSHEET']} />
            </div>
            <button className="btn-primary h-6">Export</button>
          </div>
        </div>
      </div>
      <table className="mx-auto mt-10 w-full overflow-auto px-3 shadow-md">
        <thead className="thead-primary">
          <tr>
            <th className="th-first"></th>
            <th className="th-middle">
              <div className="flex items-center justify-between">
                <div>Date</div>
                <div className="mr-9">Note By</div>
              </div>
            </th>
            <th className="th-middle">Type</th>
            <th className="th-last">Note</th>
          </tr>
        </thead>
        <tbody>
          {notesData.map((note, index) => (
            <tr key={index} className="verdana11 w-full even:bg-[#eee]">
              <td className="td-primary w-5 px-2">
                <div className="flex items-center justify-center">
                  <FcDeleteRow className="scale-125 text-xl" />
                  {/* a pop up showing inactive or delete option */}
                </div>
              </td>
              <td className="td-primary min-w-[190px] px-2">
                <div className="flex items-center gap-2">
                  <p className="border-r border-primary-gray py-1 pr-3 text-primary-orange underline ">
                    {note.date}
                  </p>
                  <p className="verdana10">By Internal</p>
                </div>
              </td>
              <td className="td-primary min-w-[100px]">{note.type}</td>
              <td className="td-primary w-full  px-4">{note.note}</td>
            </tr>
          ))}
          <tr className="verdana11 border border-primary-gray bg-[#eeeeee]">
            <td colSpan="8" className="py-[3px] px-2">
              displaying page 1 of 1 | rows per page:
              <input type="number" className="black] ml-1 w-10" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AssociateMenuNotes;
