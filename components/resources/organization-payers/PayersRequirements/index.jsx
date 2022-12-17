import React from 'react';
import { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import PayerAuthRequirements from './PayerAuthRequirements';
import PayerBypassServices from './PayerBypassServices';
import PayerClinicalReq from './PayerClinicalReq';
import PayerCoPayBillingReq from './PayerCoPayBillingReq';
import PayerDataRequirements from './PayerDataRequirements';
import PayerInvoiceAO from './PayerInvoiceAO';
import PayerMiscBillingReq from './PayerMiscBillingReq';
import PayerServiceCategory from './PayerServiceCategory';
import PayerCreateEdit from './PayerCreateEdit';

const PayersRequirements = () => {
  const [showInit, setShowInit] = useState({ action: false, from: '' });
  return (
    <div className="m-8">
      {showInit.action ? (
        <PayerCreateEdit setShowInit={setShowInit} />
      ) : (
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <h2 className="verdana16 font-semibold">General Requirements</h2>
              {!showInit.action && showInit.from === 'BCBS' ? (
                <div
                  onClick={() =>
                    setShowInit((prev) => ({ action: true, from: prev.from }))
                  }
                  className="cursor-pointer text-primary-orange underline"
                >
                  [Edit]
                </div>
              ) : (
                <div
                  onClick={() => setShowInit({ action: true, from: '' })}
                  className="btn-primary flex cursor-pointer items-center gap-1"
                >
                  <BiPlus className="scale-150" /> Create Requirements
                </div>
              )}
            </div>
            <PayerBypassServices />
          </div>
          {!showInit.action && showInit.from === 'BCBS' ? (
            <div className="mt-10 flex justify-between rounded bg-texiary-blue p-4 shadow">
              <div className="flex w-[50%] flex-col gap-10">
                <PayerAuthRequirements />
                <PayerClinicalReq />
                <PayerCoPayBillingReq />
                <PayerMiscBillingReq />
              </div>
              <div className="flex w-[50%] flex-col gap-10 px-10">
                <PayerDataRequirements />
                <PayerInvoiceAO />
                <PayerServiceCategory />
              </div>
            </div>
          ) : (
            <p className="mt-4">This Payer has no General Requirements</p>
          )}
        </div>
      )}
    </div>
  );
};

export default PayersRequirements;
