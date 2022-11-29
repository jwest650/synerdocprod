import React from 'react';
import TableSelect from '../../../structure/TableSelect';

const PayerAuthRequirements = () => {
  return (
    <div>
      <h3 className="verdana14 font-semibold">Authorization Requirements</h3>
      <div className="mt-5 flex w-full flex-col items-center justify-center gap-3.5">
        <div className="flex w-full items-center gap-3 ">
          <p className="flex w-[35%] justify-end  font-semibold">
            Payer Level Override Allowed:
          </p>
          <div className=" flex w-[65%] gap-2">
            <input type="checkbox" className="input-primary" />
          </div>
        </div>
        <div className="flex w-full items-center gap-3 ">
          <p className="flex w-[35%] justify-end font-semibold">
            <span className="text-primary-orange">*</span>Authorization #
            Required:
          </p>
          <div className=" flex w-[65%] items-center gap-2">
            <TableSelect options={['Yes - by Service Category']} />
          </div>
        </div>
        <div className="flex w-full items-center gap-3 ">
          <p className="flex w-[35%] justify-end font-semibold">
            By Discipline Required:
          </p>
          <div className=" flex w-[65%] items-center gap-2">
            <input type="checkbox" className="input-primary" />
          </div>
        </div>
        <div className="flex w-full items-center gap-3 ">
          <p className="flex w-[35%] justify-end font-semibold">
            By Service Code Required:
          </p>
          <div className=" flex w-[65%] ">
            <input type="checkbox" className="input-primary" />
          </div>
        </div>
        <div className="flex w-full items-center gap-3 ">
          <p className="flex w-[35%] justify-end font-semibold">
            By Visits Required:
          </p>
          <div className=" flex w-[65%] ">
            <input type="checkbox" className="input-primary" />
          </div>
        </div>
        <div className="flex w-full items-center gap-3 ">
          <p className="flex w-[35%] justify-end font-semibold">
            By Hours/Units Required:
          </p>
          <div className=" flex w-[65%] ">
            <input type="checkbox" className="input-primary" />
          </div>
        </div>
        <div className="flex w-full items-center gap-3 ">
          <p className="flex w-[35%] justify-end font-semibold">
            By Amount Required:
          </p>
          <div className=" flex w-[65%] ">
            <input type="checkbox" className="input-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayerAuthRequirements;
