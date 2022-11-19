import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import { notesData } from '../../../../assets/data';
import TableSelect from '../../../structure/TableSelect';
import ActivePopup from './ActivePopup';
import CreateNote from './CreateNote';
import NotesTable from './NotesTable';

const AssociateMenuNotes = () => {
  const [document, setDocument] = useState(null);

  return (
    <div className="px-3 py-10">
      <div>
        <div className="verdana11 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-3">
              <h1 className="verdana16 font-semibold">Notes</h1>
              <CreateNote setDocument={setDocument} />
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
      <NotesTable document={document} />
    </div>
  );
};

export default AssociateMenuNotes;
