import React from 'react';
import TableSelect from '../../../structure/TableSelect';

const PayerClinicalReq = () => {
  return (
    <div>
      <h3 className="verdana14 font-semibold">Clinical Requirements</h3>
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
          <p className="flex w-[35%] justify-end  font-semibold">
            Oasis Required:
          </p>
          <div className=" flex w-[65%] gap-2">
            <input type="checkbox" className="input-primary" />
          </div>
        </div>
        <div className="flex w-full items-center gap-3 ">
          <p className="flex w-[35%] justify-end font-semibold">
            <span className="text-primary-orange">*</span>Certification Period
            Days:
          </p>
          <div className=" flex w-[65%] items-center gap-2">
            <input type="text" placeholder="60" className="input-primary" />
          </div>
        </div>
        <div className="flex w-full items-center gap-3 ">
          <p className="flex w-[35%] justify-end font-semibold">
            <span className="text-primary-orange">*</span>Notice of Election:
          </p>
          <div className=" flex w-[65%] items-center gap-2">
            <TableSelect options={['Not Required']} />{' '}
          </div>
        </div>
        <div className="flex w-full items-center gap-3 ">
          <p className="flex w-[35%] justify-end font-semibold">
            <span className="text-primary-orange">*</span>Notice of Admission:
          </p>
          <div className=" flex w-[65%] items-center gap-2">
            <TableSelect options={['Yes - Manual']} />{' '}
          </div>
        </div>
        <div className="flex w-full items-center gap-3 ">
          <p className="flex w-[35%] justify-end font-semibold">
            Assessment Visits Required:
          </p>
          <div className=" flex w-[65%] ">
            <input type="checkbox" className="input-primary" />
          </div>
        </div>
        <div className="flex w-full items-center gap-3 ">
          <p className="flex w-[35%] justify-end font-semibold">
            Physicians Orders Required:
          </p>
          <div className=" flex w-[65%] ">
            <input type="checkbox" className="input-primary" />
          </div>
        </div>
        <div className="flex w-full items-center gap-3 ">
          <p className="flex w-[35%] justify-end font-semibold">
            Clinical Notes Required:
          </p>
          <div className=" flex w-[65%] ">
            <input type="checkbox" className="input-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayerClinicalReq;
