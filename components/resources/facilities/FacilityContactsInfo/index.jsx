import { useRouter } from 'next/router';
import FacilityAncillaryPhoneTable from './FacilityAncillaryPhoneTable';
import FacilityContactInfoTable from './FacilityContactInfoTable';
import FacilityCreateContact from './FacilityCreateContact';
import FacilityCreateContactInfo from './FacilityCreateContactInfo';
import FacilityCreatePhone from './FacilityCreatePhone';
import FacilityReferralSourceContactsTable from './FacilityReferralSourceContactsTable';

const FacilityContactsInfo = () => {
  const router = useRouter();
  const facilityUrl = router.asPath.split('/')[3];

  return (
    <div>
      <div className="mx-2 my-14 md:mx-9">
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="w-full border-primary-gray py-5 md:border-r md:pr-14">
            <div className="mb-5 flex  items-center gap-3">
              <h2 className="verdana16 font-semibold">Address/ Phone Info </h2>
              <FacilityCreateContactInfo />
            </div>
            <FacilityContactInfoTable />
          </div>
          <div className="w-full py-5 md:pl-8">
            <div className="mb-5 flex  items-center gap-3">
              <h2 className="verdana16 font-semibold">
                Referral Source Contacts
              </h2>
              <FacilityCreateContact />
            </div>
            <FacilityReferralSourceContactsTable facilityUrl={facilityUrl} />
          </div>
        </div>
        <div className="mt-20 w-[50%] border-primary-gray py-5 md:border-r">
          <div className="mb-5 flex items-center gap-3">
            <h2 className="verdana16 font-semibold">Ancillary Phone Info </h2>
            <FacilityCreatePhone />
          </div>
          <FacilityAncillaryPhoneTable />
        </div>
      </div>
    </div>
  );
};

export default FacilityContactsInfo;
