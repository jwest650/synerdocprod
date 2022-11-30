import { useRouter } from 'next/router';
import ReferralCreateContactInfo from './ReferralCreateContactInfo';
import ReferralContactInfoTable from './ReferralContactInfoTable';
import ReferralCreatePhone from './ReferralCreatePhone';
import ReferralAncillaryPhoneTable from './ReferralAncillaryPhoneTable';
import ReferralCreateContact from './ReferralCreateContact';
import ReferralContactsTable from './ReferralContactsTable';

const ReferralContactInfo = () => {
  const router = useRouter();
  const referralUrl = router.asPath.split('/')[3];

  return (
    <div>
      <div className="mx-2 my-14 md:mx-9">
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="w-full border-primary-gray py-5 md:border-r md:pr-14">
            <div className="mb-5 flex  items-center gap-3">
              <h2 className="verdana16 font-semibold">Address/ Phone Info </h2>
              <ReferralCreateContactInfo />
            </div>
            <ReferralContactInfoTable />
          </div>
          <div className="w-full py-5 md:pl-8">
            <div className="mb-5 flex  items-center gap-3">
              <h2 className="verdana16 font-semibold">
                Referral Source Contacts
              </h2>
              <ReferralCreateContact />
            </div>
            <ReferralContactsTable referralUrl={referralUrl} />
          </div>
        </div>
        <div className="mt-20 w-[50%] border-primary-gray py-5 md:border-r">
          <div className="mb-5 flex items-center gap-3">
            <h2 className="verdana16 font-semibold">Ancillary Phone Info </h2>
            <ReferralCreatePhone />
          </div>
          <ReferralAncillaryPhoneTable />
        </div>
      </div>
    </div>
  );
};

export default ReferralContactInfo;
