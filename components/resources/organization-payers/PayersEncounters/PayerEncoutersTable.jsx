import React from 'react';
import { FcEditImage } from 'react-icons/fc';
import { payerEncountersData } from '../payerDatatwo';

const PayerEncoutersTable = ({ setShowPatientPage }) => {
  return (
    <table className="mt-3 w-full">
      <thead className="thead-primary">
        <tr>
          <th className="th-first">Patient</th>
          <th className="th-middle">Status</th>
          <th className="th-middle">Start Date</th>
          <th className="th-middle">End Date</th>
          <th className="th-middle">Discharge Date</th>
          <th className="th-middle">Encouner Payer Status</th>
          <th className="th-middle">Sequence</th>
          <th className="th-middle">Differences</th>
          <th className="th-last">Actions</th>
        </tr>
      </thead>
      <tbody>
        {payerEncountersData.map((option, index) => (
          <tr className="even:bg-[#eee]" key={index}>
            <td className="td-primary">{option.patient}</td>
            <td className="td-primary">{option.status}</td>
            <td className="td-primary">{option.startDate}</td>
            <td className="td-primary">{option.endDate}</td>
            <td className="td-primary">{option.dischargeDate}</td>
            <td className="td-primary">{option.encounterPayerStatus}</td>
            <td className="td-primary">{option.sequence}</td>
            <td className="td-primary">{option.differences}</td>
            <td className="td-primary">
              <div className="flex items-center justify-center">
                <div
                  className="mr-2.5 border-r border-primary-gray py-2 pr-2.5"
                  onClick={() => setShowPatientPage(true)}
                >
                  <FcEditImage className="scale-150" />
                </div>
                <input type="checkbox" className="input-primary" />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PayerEncoutersTable;
