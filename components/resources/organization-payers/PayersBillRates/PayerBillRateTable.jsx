import { FcEngineering } from 'react-icons/fc';
import { payerBillRates } from '../../../../assets/data';
import DeletePopup from '../../../structure/DeletePopup';
import PayerCreateBillRate from './PayerCreateBillRate';

const PayerBillRateTable = () => {
  return (
    <table className="mt-7 w-full">
      <thead className="thead-primary">
        <tr className="verdana10">
          <th className="th-first">Agency Name</th>
          <th className="th-middle">Service Description</th>
          <th className="th-middle">Billing Description</th>
          <th className="th-middle">Unit of Measure</th>
          <th className="th-middle">Allow Override</th>
          <th className="th-middle">Payer Rate</th>
          <th className="th-middle">Charge Amount</th>
          <th className="th-middle">Revenue Code</th>
          <th className="th-middle">Billing Codes</th>
          <th className="th-middle">Start Date</th>
          <th className="th-middle">End Date</th>
          <th className="th-last">Actions</th>
        </tr>
      </thead>
      <tbody>
        {payerBillRates.map((option, index) => (
          <tr key={index} className="even:bg-[#eee]">
            <td className="verdana9 h-[28px] max-h-[28px] cursor-pointer border border-primary-gray px-2">
              {option.agencyName}
            </td>
            <td className="verdana9 h-[28px] max-h-[28px] cursor-pointer border border-primary-gray px-2">
              {option.serviceDescription}
            </td>
            <td className="verdana9 h-[28px] max-h-[28px] cursor-pointer border border-primary-gray px-2">
              {option.billingDescription}
            </td>
            <td className="verdana9 h-[28px] max-h-[28px] cursor-pointer border border-primary-gray px-2">
              {option.unitOfMeasure}
            </td>
            <td className="verdana9 h-[28px] max-h-[28px] cursor-pointer border border-primary-gray px-2">
              <div className="flex justify-center">
                <input type="checkbox" className="input-primary" />
              </div>
            </td>
            <td className="verdana9 h-[28px] max-h-[28px] cursor-pointer border border-primary-gray px-2">
              $ {option.payerRate}.00
            </td>
            <td className="verdana9 h-[28px] max-h-[28px] cursor-pointer border border-primary-gray px-2">
              $ {option.chargeAmount}.00
            </td>
            <td className="verdana9 h-[28px] max-h-[28px] cursor-pointer border border-primary-gray px-2">
              {option.revenueCode}
            </td>
            <td className="verdana9 h-[28px] max-h-[28px] cursor-pointer border border-primary-gray px-2">
              {option.billingCodes}
            </td>
            <td className="verdana9 h-[28px] max-h-[28px] cursor-pointer border border-primary-gray px-2">
              {option.startDate}
            </td>
            <td className="verdana9 h-[28px] max-h-[28px] cursor-pointer border border-primary-gray px-2">
              {option.endDate}
            </td>
            <td className="verdana9 h-[28px] max-h-[28px] cursor-pointer border border-primary-gray px-2">
              <div className="flex items-center justify-center">
                <PayerCreateBillRate edit={true} />
                <DeletePopup toDelete={'bill rate'} deleteIcon={true} />
                <div className="ml-3 border-l border-primary-gray py-2.5 pl-3">
                  <FcEngineering className="scale-150" />
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PayerBillRateTable;
