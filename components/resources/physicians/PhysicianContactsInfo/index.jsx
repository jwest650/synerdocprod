import { useRouter } from 'next/router';
import React from 'react';
import PhysicianAncillaryPhoneTable from './PhysicianAncillaryPhoneTable';
import PhysicianContactInfoTable from './PhysicianContactInfoTable';
import PhysicianCreateContact from './PhysicianCreateContact';
import PhysicianCreateContactInfo from './PhysicianCreateContactInfo';
import PhysicianCreatePhone from './PhysicianCreatePhone';
import PhysicianReferralSourceContactsTable from './PhysicianReferralSourceContactsTable';

const PhysicianContactsInfo = () => {
  const router = useRouter();
  const physicianUrl = router.asPath.split('/')[3];

  return (
    <div>
      <div className="mx-2 my-14 md:mx-9">
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="w-full border-primary-gray py-5 md:border-r md:pr-14">
            <div className="mb-5 flex  items-center gap-3">
              <h2 className="verdana16 font-semibold">Address/ Phone Info </h2>
              <PhysicianCreateContactInfo />
            </div>
            <PhysicianContactInfoTable />
          </div>
          <div className="w-full py-5 md:pl-8">
            <div className="mb-5 flex  items-center gap-3">
              <h2 className="verdana16 font-semibold">
                Referral Source Contacts
              </h2>
              <PhysicianCreateContact />
            </div>
            <PhysicianReferralSourceContactsTable physicianUrl={physicianUrl} />
          </div>
        </div>
        <div className="mt-20 w-[50%] border-primary-gray py-5 md:border-r">
          <div className="mb-5 flex items-center gap-3">
            <h2 className="verdana16 font-semibold">Ancillary Phone Info </h2>
            <PhysicianCreatePhone />
          </div>
          <PhysicianAncillaryPhoneTable />
        </div>
      </div>
    </div>
  );
};

export default PhysicianContactsInfo;
