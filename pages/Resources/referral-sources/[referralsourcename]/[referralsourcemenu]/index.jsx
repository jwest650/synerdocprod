import { useRouter } from 'next/router';
import { referralSourcesMenu } from '../../../../../assets/data';
import EachPhysicianHeader from '../../../../../components/resources/physicians/EachPhysicianHeader';
import EachPhysicianPageDetails from '../../../../../components/resources/physicians/EachPhysicianPageDetails';
import EachReferralSourcesHeader from '../../../../../components/resources/referral-sources/EachReferralSourcesHeader';
import EachReferralSourcesPageDetails from '../../../../../components/resources/referral-sources/EachReferralSourcesPageDetails';

const ReferralSourcesMenuPage = () => {
  const router = useRouter();
  const menuTitle = router.query?.referralsourcemenu;
  const referralSourceUrl = router.asPath.split('/')[3];

  return (
    <div className="w-full">
      <EachReferralSourcesHeader referralSourceUrl={referralSourceUrl} />
      <EachReferralSourcesPageDetails>
        {referralSourcesMenu.map((menu, index) => (
          <div key={index}>
            {menu.url === menuTitle && <>{menu.component} </>}
          </div>
        ))}
      </EachReferralSourcesPageDetails>
    </div>
  );
};

export default ReferralSourcesMenuPage;
