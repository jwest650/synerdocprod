import React from 'react';
import { FcInfo } from 'react-icons/fc';

const EachPayerHeader = ({ organizationPayerUrl }) => {
  return (
    <div className="flex w-full flex-col items-center rounded border px-5 pt-5 pb-12 text-sm shadow">
      <div className="flex w-full items-center justify-between">
        <div className="verdana11 flex items-center gap-8">
          <h2 className="verdana16 font-semibold tracking-wide">
            {organizationPayerUrl}
          </h2>
          <div className="flex cursor-pointer items-center gap-2 text-primary-orange underline">
            [Edit]
            <FcInfo className="scale-150" />
          </div>
          <div className="cursor-pointer text-primary-orange underline">
            [Copy Payer to another Org]
          </div>
          {/* <EditPhysicians /> */}
        </div>
        <div className="space-x-5">
          <span className="text-base font-extrabold text-green-800">PAYER</span>
        </div>
      </div>
      <div className="verdana12 mt-5 flex w-full justify-between px-16">
        <div className="flex w-full flex-col items-center gap-1">
          <div className="flex w-full justify-center gap-3 ">
            <p className="flex w-[50%] justify-end  font-semibold">Category:</p>
            <p className=" flex w-[50%] ">Insurance</p>
          </div>
          <div className="flex w-full justify-center gap-3 ">
            <p className="flex w-[50%] justify-end  font-semibold">
              Oasis/His Category:
            </p>
            <p className=" flex w-[50%] ">8(H) - Private Insurance</p>
          </div>
          <div className="flex w-full justify-center gap-3 ">
            <p className="flex w-[50%] justify-end  font-semibold">Email:</p>
            <p className=" flex w-[50%] "></p>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-1">
          <div className="flex w-full justify-center gap-3 ">
            <p className="flex w-[50%] justify-end  font-semibold">
              Claim Filling Type:
            </p>
            <p className=" flex w-[50%] ">Commercial Insurance</p>
          </div>
          <div className="flex w-full justify-center gap-3 ">
            <p className="flex w-[50%] justify-end  font-semibold">
              Invoice Cycle:
            </p>
            <p className=" flex w-[50%]">Monthly</p>
          </div>
          <div className="flex w-full justify-center gap-3 ">
            <p className="flex w-[50%] justify-end  font-semibold">
              Invoice Type:
            </p>
            <p className=" flex w-[50%] ">UB04</p>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-1">
          <div className="flex w-full justify-center gap-3 ">
            <p className="flex w-[50%] justify-end  font-semibold">
              Start Date:
            </p>
            <p className=" flex w-[50%] ">1/1/2009</p>
          </div>
          <div className="flex w-full justify-center gap-3 ">
            <p className="flex w-[50%] justify-end  font-semibold">End Date:</p>
            <p className=" flex w-[50%] "></p>
          </div>
          <div className="flex w-full justify-center gap-3 ">
            <p className="flex w-[50%] justify-end  font-semibold">Updated:</p>
            <p className=" flex w-[50%] ">9/24//2019</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachPayerHeader;
