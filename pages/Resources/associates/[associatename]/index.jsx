import { useRouter } from 'next/router';
import EachAssociateHeader from '../../../../components/resources/EachAssociateHeader';
import EachAssociatePageDetails from '../../../../components/resources/EachAssociatePageDetails';
import ProfilePage from '../../../../components/resources/AssociateMenuProfile';

const AssociateName = () => {
  const router = useRouter();
  const associateUrl = router.asPath.split('/')[3];

  return (
    <div className="w-full">
      <EachAssociateHeader associateUrl={associateUrl} />
      <EachAssociatePageDetails>
        <ProfilePage />
      </EachAssociatePageDetails>
    </div>
  );
};

export default AssociateName;
