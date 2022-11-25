import { useState } from 'react';
import TableSelect from '../../../structure/TableSelect';
import FacilityCreateNote from './FacilityCreateNote';
import FacilityNotesTable from './FacilityNotesTable';

const FacilityMenuNotes = () => {
  const [document, setDocument] = useState(null);

  return (
    <div className="px-3 py-10">
      <div>
        <div className="verdana11 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-3">
              <h1 className="verdana16 font-semibold">Notes</h1>
              <FacilityCreateNote setDocument={setDocument} />
            </div>
            <div className="flex items-center gap-1">
              Type:
              <TableSelect options={['All', 'Option2']} />
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

            <TableSelect options={['PDF', 'SPREADSHEET']} />
            <button className="btn-primary h-6">Export</button>
          </div>
        </div>
      </div>
      <FacilityNotesTable document={document} />
    </div>
  );
};

export default FacilityMenuNotes;
