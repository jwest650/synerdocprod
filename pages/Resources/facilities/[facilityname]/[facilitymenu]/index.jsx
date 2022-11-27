import { useRouter } from 'next/router';
import { facilityMenu } from '../../../../../assets/data';
import EachFacilityHeader from '../../../../../components/resources/facilities/EachFacilityHeader';
import EachFacilityPageDetails from '../../../../../components/resources/facilities/EachFacilityPageDetails';

const FacilityMenuPage = () => {
  const router = useRouter();
  const menuTitle = router.query?.facilitymenu;
  const facilityUrl = router.asPath.split('/')[3];

  // console.log(menuTitle);
  // console.log(facilityUrl);

  return (
    <div className="w-full">
      <EachFacilityHeader facilityUrl={facilityUrl} />
      <EachFacilityPageDetails>
        {facilityMenu.map((menu, index) => (
          <div key={index}>
            {/* hello */}
            {menu.url === menuTitle && <>{menu.component} </>}
          </div>
        ))}
      </EachFacilityPageDetails>
    </div>
  );
};

export default FacilityMenuPage;
