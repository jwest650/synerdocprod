import React from 'react';
import { payerInvoiceReviewData } from '../../../../assets/data';
import DeletePopup from '../../../structure/DeletePopup';
import PayerCreateIdentifier from './PayerCreateIdentifier';
import PayerCreateInvoiceReview from './PayerCreateInvoiceReview';
import PayerEditIentifier from './PayerEditIentifier';
import PayerEditInvoiceReview from './PayerEditInvoiceReview';

const PayerInvoiceReview = () => {
  return (
    <div className="mt-14">
      <div className="flex items-center gap-4">
        <h2 className="verdana16 font-semibold">
          Payer Invoice Review Settings
        </h2>
        <PayerCreateInvoiceReview />
      </div>

      <table className="mx-auto mt-5 w-full overflow-auto px-3 shadow-md">
        <thead className="thead-primary">
          <tr className="verdana11">
            <th className="th-first">Invoice Review Type</th>
            <th className="th-middle">Start Date</th>
            <th className="th-middle">End Date</th>
            <th className="th-last">Actions</th>
          </tr>
        </thead>
        <tbody>
          {payerInvoiceReviewData.map((option, index) => (
            <tr key={index} className="verdana11 w-full even:bg-[#eee]">
              <td className="td-primary">{option.title}</td>
              <td className="td-primary">10/11/20</td>
              <td className="td-primary"></td>
              <td className="td-primary w-28">
                <div className="flex items-center justify-center">
                  <PayerEditInvoiceReview reviewName={option.title} />
                  <DeletePopup toDelete="invoice review" deleteIcon={true} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PayerInvoiceReview;
