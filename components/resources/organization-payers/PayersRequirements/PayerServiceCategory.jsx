import React from 'react';
import { payerServiceCat } from '../../../../assets/data';

const PayerServiceCategory = () => {
  return (
    <div>
      <h3 className="verdana14 font-semibold">Service Category</h3>
      <div className="mt-5 flex items-center gap-3 pl-9">
        <p className="font-semibold">Patient Level Override Allowed:</p>
        <div>
          <input type="checkbox" className="input-primary" />
        </div>
      </div>
      <table className="mx-auto mt-5 w-full overflow-auto px-3 shadow-md">
        <thead className="thead-primary">
          <tr className="verdana11">
            <th className="th-first">Description</th>
            <th className="th-middle">Allowed</th>
            <th className="th-last">Authorization Required</th>
          </tr>
        </thead>
        <tbody>
          {payerServiceCat.map((option, index) => (
            <tr key={index} className="verdana11 w-full even:bg-[#eee]">
              <td className="td-primary">{option.description}</td>
              <td className="td-primary">
                <div className="flex justify-center">
                  <input type="checkbox" className="input-primary" />
                </div>
              </td>
              <td className="td-primary">
                <div className="flex justify-center">
                  <input type="checkbox" className="input-primary" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PayerServiceCategory;
