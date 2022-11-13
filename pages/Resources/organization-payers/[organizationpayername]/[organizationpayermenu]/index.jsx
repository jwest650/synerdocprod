import { useRouter } from 'next/router';
import { organizationPayersMenu } from '../../../../../assets/data';
import EachorganizationPayerHeader from '../../../../../components/resources/organization-payers/EachOrganizationPayerHeader';
import EachorganizationPayerPageDetails from '../../../../../components/resources/organization-payers/EachOrganizationPayerPageDetails';

const OrganizationPayersMenuPage = () => {
  const router = useRouter();
  const menuTitle = router.query?.organizationpayermenu;
  const organizationPayerUrl = router.asPath.split('/')[3];

  console.log(menuTitle);
  console.log(organizationPayerUrl);

  return (
    <div className="w-full">
      <EachorganizationPayerHeader
        organizationPayerUrl={organizationPayerUrl}
      />
      <EachorganizationPayerPageDetails>
        {organizationPayersMenu.map((menu, index) => (
          <div key={index}>
            {/* hello */}
            {menu.url === menuTitle && <>{menu.component} </>}
          </div>
        ))}
      </EachorganizationPayerPageDetails>
    </div>
  );
};

export default OrganizationPayersMenuPage;
