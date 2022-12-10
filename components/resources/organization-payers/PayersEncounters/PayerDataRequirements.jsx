import React from 'react';
import TableSelect from '../../../structure/TableSelect';

const PayerDataRequirements = () => {
  return (
    <div>
      <h3 className="verdana14 font-semibold">Data Requirements</h3>
      <div className="mt-4 flex w-full flex-col items-center gap-3.5">
        <div className="flex w-full items-center justify-center gap-3 ">
          <p className="flex w-[45%] justify-end font-semibold">
            <span className="text-primary-orange">*</span>Eligible Required:
          </p>
          <div className=" flex w-[55%] items-center gap-2">
            <TableSelect options={['Yes - Manual']} />
          </div>
        </div>
        <div className="flex w-full items-center justify-center gap-3 ">
          <p className="flex w-[45%] justify-end font-semibold">
            Insured Information Required:
          </p>
          <div className=" flex w-[55%] items-center gap-2">
            <input type="checkbox" className="input-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayerDataRequirements;
