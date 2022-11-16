import React from 'react';
import { BiPlus } from 'react-icons/bi';
import AssociateCreateEmergencyContact from './AssociateCreateEmergencyContact';
import AssociateCreatePhone from './AssociateCreatePhone';
import AssociateCreateReferralSource from './AssociateCreateReferralSource';

const AssociateMenuContact = () => {
  return (
    <div>
      <div className="mx-2 my-14 md:mx-9">
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="w-full border-primary-gray py-5 md:border-r md:pr-14">
            <div className="mb-5 flex  items-center gap-3">
              <h2 className="text-lg font-semibold">Address/ Phone Info </h2>
              <AssociateCreateReferralSource />
              {/* <span className="flex w-fit cursor-pointer items-center gap-1 rounded bg-orange-600 py-1 px-2 text-white">
                <BiPlus className="scale-125" />
                <span className="text-sm">Create Referral Source</span>
              </span> */}
            </div>
            <p>No addresses have been added for this associate</p>
          </div>
          <div className="w-full py-5 md:pl-8">
            <div className="mb-5 flex  items-center gap-3">
              <h2 className="text-lg font-semibold">Emergency Contacts</h2>
              <AssociateCreateEmergencyContact />
            </div>
            <p>No emergency contacts have been added for this associate</p>
          </div>
        </div>
        <div className="mt-20 w-[50%] border-primary-gray py-5 md:border-r">
          <div className="mb-5 flex items-center gap-3">
            <h2 className="text-lg font-semibold">Ancillary Phone Info </h2>
            <AssociateCreatePhone />
          </div>
          <p>No phone numbers have been added for this associate</p>
        </div>
      </div>
    </div>
  );
};

export default AssociateMenuContact;
