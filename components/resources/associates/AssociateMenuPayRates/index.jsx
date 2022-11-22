import React from 'react';
import { payrateData } from '../../../../assets/data';
import TableSelect from '../../../structure/TableSelect';
import CreatePayRate from './CreatePayRate';
import EditPayRate from './EditPayRate';
import RemovePayRate from './RemovePayRate';

const AssociateMenuPayRates = () => {
  return (
    <div>
      <div className="mx-5 mb-16 mt-7">
        <div className="flex items-center gap-4">
          <h1 className="verdana16 font-semibold">Pay Rates</h1>
          <CreatePayRate />
          <div className="ml-3 flex items-center gap-2">
            Pay Type: <TableSelect options={['All', 'Registered Nurse']} />
          </div>
        </div>
        <table className="mt-5 w-full overflow-auto">
          <thead className="thead-primary">
            <tr className="verdana11">
              <th className="th-first">Service Description</th>
              <th className="th-middle">Weekday Rate</th>
              <th className="th-middle">Weekend Rate</th>
              <th className="th-middle">Allow Override</th>
              <th className="th-middle">Start Date</th>
              <th className="th-middle">End Date</th>
              <th className="th-last">Actions</th>
            </tr>
          </thead>
          <tbody>
            {payrateData.map((payrate, index) => (
              <tr key={index} className="verdana12 w-full even:bg-[#e6ebf85d]">
                <td className="td-primary">{payrate.description}</td>
                <td className="td-primary">${payrate.weekdayRate}.00</td>
                <td className="td-primary">${payrate.weekendRate}.00</td>
                <td className="td-primary">
                  <div className="flex justify-center">
                    <input
                      type="checkbox"
                      disabled
                      checked={payrate.allowOverride ? true : false}
                      className="input-primary w-fit"
                    />
                  </div>
                </td>
                <td className="td-primary">{payrate.startDate}</td>
                <td className="td-primary"></td>
                <td className="td-primary">
                  <div className="flex items-center justify-center">
                    <EditPayRate payrate={payrate} />
                    <RemovePayRate />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>{' '}
      </div>
    </div>
  );
};

export default AssociateMenuPayRates;
