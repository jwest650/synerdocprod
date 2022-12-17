import React from 'react';
import TableSelect from '../../../structure/TableSelect';

const PayerInvoiceAO = () => {
  return (
    <div>
      <h3 className="verdana14 font-semibold text-primary-orange">
        Invoice Allowable Overrides
      </h3>

      <div className="mt-5 flex w-full flex-col items-center gap-3.5">
        <div className="flex w-full items-center justify-center gap-3 ">
          <p className="flex w-[45%] justify-end font-semibold">
            Patient Level Override Allowed:
          </p>
          <div className=" flex w-[55%] items-center gap-2">
            <input type="checkbox" className="input-primary" />
          </div>
        </div>
        <div className="flex w-full items-center justify-center gap-3 ">
          <p className="flex w-[45%] justify-end font-semibold">
            Invoice Frequency Override Allowed:
          </p>
          <div className=" flex w-[55%] items-center gap-2">
            <input type="checkbox" className="input-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayerInvoiceAO;
