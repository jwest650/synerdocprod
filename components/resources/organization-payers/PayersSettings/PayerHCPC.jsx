import React from 'react';
import { payerHCPCData } from '../../../../assets/data';
import DeletePopup from '../../../structure/DeletePopup';
import PayerCreateHCPC from './PayerCreateHCPC';
import PayerCreatePOSCodes from './PayerCreatePOSCodes';
import PayerEditHCPC from './PayerEditHCPC';

const PayerHCPC = () => {
  return (
    <div className="mt-14">
      <div className="flex items-center gap-4">
        <h2 className="verdana16 font-semibold">
          Payer HCPC by Place of Service Settings
        </h2>
        <PayerCreateHCPC />
        <PayerCreatePOSCodes />
      </div>

      <table className="mx-auto mt-5 w-full overflow-auto px-3 shadow-md">
        <thead className="thead-primary">
          <tr className="verdana11">
            <th className="th-first">Place of Service</th>
            <th className="th-middle">Service</th>
            <th className="th-middle">HCPC Code</th>
            <th className="th-middle">HCPC Modifier1</th>
            <th className="th-middle">HCPC Modifier2</th>
            <th className="th-middle">HCPC Modifier3</th>
            <th className="th-middle">HCPC Modifier4</th>
            <th className="th-middle">Start Date</th>
            <th className="th-middle">End Date</th>
            <th className="th-last">Actions</th>
          </tr>
        </thead>
        <tbody>
          {payerHCPCData.map((option, index) => (
            <tr key={index} className="verdana11 w-full even:bg-[#eee]">
              <td className="td-primary">{option.placeOfService}</td>
              <td className="td-primary">{option.service}</td>
              <td className="td-primary">{option.HCPCCode}</td>
              <td className="td-primary"></td>
              <td className="td-primary"></td>
              <td className="td-primary"></td>
              <td className="td-primary"></td>
              <td className="td-primary">01/10/09</td>
              <td className="td-primary"></td>
              <td className="td-primary w-28">
                <div className="flex items-center justify-center">
                  <PayerEditHCPC />
                  <DeletePopup
                    toDelete="payer HCPC by place of service"
                    deleteIcon={true}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PayerHCPC;
