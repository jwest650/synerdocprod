import { useRouter } from 'next/router';
import EachAssociateHeader from '../../../../components/resources/associates/EachAssociateHeader';
import EachAssociatePageDetails from '../../../../components/resources/associates/EachAssociatePageDetails';
import AssociateMenuProfile from '../../../../components/resources/associates/AssociateMenuProfile';

const AssociateName = () => {
  const router = useRouter();
  const associateUrl = router.asPath.split('/')[3];

  return (
    <div className="w-full">
      <EachAssociateHeader associateUrl={associateUrl} />
      <EachAssociatePageDetails>
        <AssociateMenuProfile />
      </EachAssociatePageDetails>
    </div>
  );
};

export default AssociateName;
