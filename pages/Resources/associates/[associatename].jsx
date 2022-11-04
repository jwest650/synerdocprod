import { useRouter } from 'next/router';

const AssociateName = () => {
  const router = useRouter();

  return <div>{router.query?.associatename} </div>;
};

export default AssociateName;
