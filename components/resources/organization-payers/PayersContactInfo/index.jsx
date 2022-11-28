import { useRouter } from 'next/router';
import React from 'react';
import PayerAddressTable from './PayerAddressTable';
import PayerCreateAddress from './PayerCreateAddress';
import PayerCreateContact from './PayerCreateContact';
import PayerContactsTable from './PayerContactsTable';
import PayerCreatePhone from './PayerCreatePhone';
import PayerPhoneTable from './PayerPhoneTable';
// import PhysicianAncillaryPhoneTable from './PayerPhoneTable';
// import PhysicianContactInfoTable from './PayerContactInfoTable';
// import PhysicianCreateContact from './PayerCreateAddress';
// import PhysicianCreateContactInfo from './PayerCreateContactInfo';
// import PhysicianCreatePhone from './PayerCreatePhone';
// import PhysicianReferralSourceContactsTable from './PayerContactsTable';

const PayersContactInfo = () => {
  const router = useRouter();
  const payerUrl = router.asPath.split('/')[3];

  return (
    <div>
      <div className="mx-2 mt-3 md:mx-9">
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="w-full border-primary-gray py-5 md:border-r md:pr-14">
            <div className="mb-5 flex  items-center gap-3">
              <h2 className="verdana16 font-semibold">Address/ Phone Info </h2>
              {/* <PhysicianCreateContactInfo /> */}
              <PayerCreateAddress />
            </div>
            {/* <PhysicianContactInfoTable /> */}
            <PayerAddressTable />
          </div>
          <div className="w-full py-5 md:pl-8">
            <div className="mb-5 flex  items-center gap-3">
              <h2 className="verdana16 font-semibold">Contacts</h2>
              {/* <PhysicianCreateContact /> */}
              <PayerCreateContact />
            </div>
            {/* <PhysicianReferralSourceContactsTable payerUrl={payerUrl} /> */}
            <PayerContactsTable payerUrl={payerUrl} />
          </div>
        </div>
        <div className="mt-14 w-[50%] border-primary-gray py-5 md:border-r">
          <div className="mb-5 flex items-center gap-3">
            <h2 className="verdana16 font-semibold">Ancillary Phone Info </h2>
            {/* <PhysicianCreatePhone /> */}
            <PayerCreatePhone />
          </div>
          {/* <PhysicianAncillaryPhoneTable /> */}
          <PayerPhoneTable />
        </div>
      </div>
    </div>
  );
};

export default PayersContactInfo;
