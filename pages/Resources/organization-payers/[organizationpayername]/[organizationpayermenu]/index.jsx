import { useRouter } from 'next/router';
import { organizationPayersMenu } from '../../../../../assets/data';
import EachPayerHeader from '../../../../../components/resources/organization-payers/EachPayerHeader';
import EachPayerPageDetails from '../../../../../components/resources/organization-payers/EachPayerPageDetails';

const OrganizationPayersMenuPage = () => {
  const router = useRouter();
  const menuTitle = router.query?.organizationpayermenu;
  const organizationPayerUrl = router.asPath.split('/')[3];

  // console.log(menuTitle);
  // console.log(organizationPayerUrl);

  return (
    <div className="w-full">
      <EachPayerHeader organizationPayerUrl={organizationPayerUrl} />
      <EachPayerPageDetails>
        {organizationPayersMenu.map((menu, index) => (
          <div key={index}>
            {/* hello */}
            {menu.url === menuTitle && <>{menu.component} </>}
          </div>
        ))}
      </EachPayerPageDetails>
    </div>
  );
};

export default OrganizationPayersMenuPage;
