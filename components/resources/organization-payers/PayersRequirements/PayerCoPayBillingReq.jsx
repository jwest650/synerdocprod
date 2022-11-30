import React from 'react';
import TableSelect from '../../../structure/TableSelect';

const PayerCoPayBillingReq = () => {
  return (
    <div>
      <h3 className="verdana14 font-semibold text-primary-orange">
        Co-Pay & Billing Requirements
      </h3>
      <div className="mt-5 flex w-full flex-col items-center justify-center gap-3.5">
        <div className="flex w-full items-center gap-3 ">
          <p className="flex w-[35%] justify-end  font-semibold">
            Patient Level Override Allowed:
          </p>
          <div className=" flex w-[65%] gap-2">
            <input type="checkbox" className="input-primary" />
          </div>
        </div>
        <div className="flex w-full items-center gap-3 ">
          <p className="flex w-[35%] justify-end font-semibold">Co-pay Type:</p>
          <div className=" flex w-[65%] items-center gap-2">
            <TableSelect options={['None']} />
          </div>
        </div>
        <div className="flex w-full items-center gap-3 ">
          <p className="flex w-[35%] justify-end font-semibold">
            Co-pay Split:
          </p>
          <div className=" flex w-[65%] items-center gap-2">
            <input type="text" className="input-primary w-14" />/{' '}
            <input type="text" className="input-primary w-14" />
          </div>
        </div>
        <div className="flex w-full items-center gap-3 ">
          <p className="flex w-[35%] justify-end font-semibold">
            Bill Overtime:
          </p>
          <div className=" flex w-[65%] ">
            <input type="checkbox" className="input-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayerCoPayBillingReq;
