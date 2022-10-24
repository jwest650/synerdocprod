import { useRouter } from 'next/router';
import Associates from '../../components/Associates';

const Menuoption = () => {
  const router = useRouter();
  return (
    <>
      {router.query.menuoption === 'Associates' ? (
        <Associates />
      ) : (
        <h1 className="py-2 text-center text-xl">{router.query.menuoption}</h1>
      )}
    </>
  );
};

export default Menuoption;
