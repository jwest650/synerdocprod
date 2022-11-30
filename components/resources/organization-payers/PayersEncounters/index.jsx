import { useState } from 'react';
import TableSelect from '../../../structure/TableSelect';
import PayerEncoutersTable from './PayerEncoutersTable';
import PayerPatientPage from './PayerPatientPage';

const PayersEncounters = () => {
  const [showPatientPage, setShowPatientPage] = useState(false);
  return (
    <div className="p-7">
      {showPatientPage ? (
        <PayerPatientPage setShowPatientPage={setShowPatientPage} />
      ) : (
        <>
          <h2 className="verdana16 font-semibold">
            Encounters where Requirements differ
          </h2>
          <div className="my-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <p>Encounter Payer Start Date From:</p>
                <input type="date" className="input-primary" />
              </div>
              <div className="flex items-center gap-2">
                <p>to:</p>
                <input type="date" className="input-primary" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <p>Encounter Status:</p>
                <TableSelect options={['Active', 'Inactive']} />
              </div>
              <div className="flex items-center gap-2">
                <p>Encounter Payer Status:</p>
                <TableSelect options={['Active', 'Inactive']} />
              </div>
              <div className="flex items-center gap-2">
                <input type="text" className="input-primary w-32" />{' '}
                <button className="btn-primary">Search</button>{' '}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-4">
            <div className="flex items-center gap-2">
              <p>Update Requirements</p>{' '}
              <input type="checkbox" className="input-primary" />{' '}
            </div>
            <div className="flex items-center gap-2">
              <p>Create Missing Service Categories</p>{' '}
              <input type="checkbox" className="input-primary" />{' '}
            </div>
            <button className="btn-primary">Apply Selected</button>
          </div>
          <PayerEncoutersTable setShowPatientPage={setShowPatientPage} />
        </>
      )}
    </div>
  );
};

export default PayersEncounters;
