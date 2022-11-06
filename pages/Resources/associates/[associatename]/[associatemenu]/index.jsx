import { useRouter } from 'next/router';
import { associateMenu } from '../../../../../assets/data';
import EachAssociateHeader from '../../../../../components/resources/associates/EachAssociateHeader';
import EachAssociatePageDetails from '../../../../../components/resources/associates/EachAssociatePageDetails';

const MenuPage = () => {
  const router = useRouter();
  const menuTitle = router.query?.associatemenu;
  const associateUrl = router.asPath.split('/')[3];

  return (
    <div className="w-full">
      <EachAssociateHeader associateUrl={associateUrl} />
      <EachAssociatePageDetails>
        {associateMenu.map((menu, index) => (
          <div key={index}>
            {menu.menu === menuTitle && <>{menu.component} </>}
          </div>
        ))}
      </EachAssociatePageDetails>
    </div>
  );
};

export default MenuPage;
