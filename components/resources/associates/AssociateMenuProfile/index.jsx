import { useRouter } from 'next/router';
import { useState } from 'react';
import EditAssociateAgencies from './EditAssociateAgencies';
import ProfilePersonal from './ProfilePersonal';
import ProfileEncounter from './ProfileEncounter';
import ProfileAGAssignment from './ProfileAGAssignment';

const AssociateMenuProfile = () => {
  const router = useRouter();
  const associateUrl = router.asPath.split('/')[3];
  const [showInit, setShowInit] = useState(true);

  return (
    <>
      {showInit ? (
        <>
          <section className=" mt-4 flex flex-col justify-between md:flex-row">
            <ProfilePersonal associateUrl={associateUrl} />
            <ProfileEncounter />
          </section>
          <ProfileAGAssignment setShowInit={setShowInit} />
        </>
      ) : (
        <EditAssociateAgencies
          associateUrl={associateUrl}
          setShowInit={setShowInit}
        />
      )}
    </>
  );
};

export default AssociateMenuProfile;
