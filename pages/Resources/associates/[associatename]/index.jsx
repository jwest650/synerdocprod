import { useRouter } from 'next/router';
import { FcInfo } from 'react-icons/fc';
import { associateMenu, associateTableData } from '../../../../assets/data';
import EachAssociateHeader from '../../../../components/resources/EachAssociateHeader';
import EachAssociatePageDetails from '../../../../components/resources/EachAssociatePageDetails';
import ProfilePage from '../../../../components/resources/profile';

const AssociateName = () => {
  const router = useRouter();
  const associateUrl = router.query?.associatename;

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
