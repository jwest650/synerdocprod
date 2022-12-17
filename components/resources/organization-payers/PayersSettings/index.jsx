import React from 'react';
import PayerCarrierCode from './PayerCarrierCode';
import PayerEditSettings from './PayerEditSettings';
import PayerHCPC from './PayerHCPC';
import PayerIdentifiers from './PayerIdentifiers';
import PayerInvoiceReview from './PayerInvoiceReview';

const PayersSettings = () => {
  return (
    <div>
      <div className="mx-5 my-5">
        <div>
          <h2 className="verdana16 font-semibold">Settings</h2>
          <div className="mt-5 flex">
            <p className="border-r border-primary-gray pr-10 text-primary-orange underline">
              <PayerEditSettings />
            </p>
            <div className="flex w-full justify-between border-l">
              <div className="ml-10 flex w-full flex-col items-center gap-3.5">
                <div className="ml-1 flex w-full items-center justify-center gap-3 ">
                  <p className="flex w-[50%] justify-end font-semibold">
                    Organization Payer Start Date:
                  </p>
                  <div className="flex w-[50%] items-center">
                    <p className="input-primary">01/01/09</p>
                  </div>
                </div>

                <div className="flex w-full items-center justify-center gap-3 ">
                  <p className="flex w-[50%] justify-end font-semibold">
                    Organization Payer End Date:
                  </p>
                  <div className=" flex w-[50%] ">
                    <p></p>
                  </div>
                </div>

                <div className="flex w-full items-center justify-center gap-3 ">
                  <p className="flex w-[50%] justify-end font-semibold">
                    Last Billed Day:
                  </p>
                  <div className=" flex w-[50%] items-center gap-2">
                    <p></p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-center gap-3 ">
                  <p className="flex w-[50%] justify-end font-semibold">
                    Next Billing Day:
                  </p>
                  <div className=" flex w-[50%] items-center gap-2">
                    <p></p>
                  </div>
                </div>
              </div>

              <div className="ml-10 flex w-full flex-col items-center gap-3.5">
                <div className="ml-1 flex w-full items-center justify-center gap-3 ">
                  <p className="flex w-[50%] justify-end font-semibold">
                    Hold Biling Date:
                  </p>
                  <div className="flex w-[50%] items-center">
                    <p></p>
                  </div>
                </div>

                <div className="flex w-full items-center justify-center gap-3 ">
                  <p className="flex w-[50%] justify-end font-semibold">
                    Process Thru Date:
                  </p>
                  <div className=" flex w-[50%] ">
                    <p className="input-primary">09/30/19</p>
                  </div>
                </div>

                <div className="flex w-full items-center justify-center gap-3 ">
                  <p className="flex w-[50%] justify-end font-semibold">
                    Payer Reporting Group:
                  </p>
                  <div className=" flex w-[50%] items-center gap-2">
                    <p className="input-primary">Insurance</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-center gap-3 ">
                  <p className="flex w-[50%] justify-end font-semibold">
                    Day of the month to bill prior month:
                  </p>
                  <div className=" flex w-[50%] items-center gap-2">
                    <p className="input-primary">1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PayerIdentifiers />
        <PayerInvoiceReview />
        <PayerHCPC />
        <PayerCarrierCode />
      </div>
    </div>
  );
};

export default PayersSettings;
