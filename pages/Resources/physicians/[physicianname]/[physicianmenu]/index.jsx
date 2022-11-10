import { useRouter } from 'next/router';
import { physicianMenu } from '../../../../../assets/data';
import EachPhysicianHeader from '../../../../../components/resources/physicians/EachPhysicianHeader';
import EachPhysicianPageDetails from '../../../../../components/resources/physicians/EachPhysicianPageDetails';

const PhysicianMenuPage = () => {
  const router = useRouter();
  const menuTitle = router.query?.physicianmenu;
  const physicianUrl = router.asPath.split('/')[3];

  return (
    <div className="w-full">
      <EachPhysicianHeader physicianUrl={physicianUrl} />
      <EachPhysicianPageDetails>
        {physicianMenu.map((menu, index) => (
          <div key={index}>
            {menu.url === menuTitle && <>{menu.component} </>}
          </div>
        ))}
      </EachPhysicianPageDetails>
    </div>
  );
};

export default PhysicianMenuPage;
