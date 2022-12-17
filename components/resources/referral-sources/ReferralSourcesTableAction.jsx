import Image from 'next/image';
import { useState } from 'react';
import { FcEditImage, FcEmptyTrash, FcSettings } from 'react-icons/fc';
import { FiSettings, FiTrash2 } from 'react-icons/fi';
import SearchIcon from '../../../assets/images/search.png';

const ReferralSourcesTableAction = () => {
  const [showOthers, setShowOthers] = useState(false);

  return (
<<<<<<< HEAD
    <span className="flex h-[27px] w-full items-center justify-center  text-lg text-[#0141CF]">
=======
    <span className="flex h-[27px] w-full items-center justify-center  text-lg text-primary-blue">
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
      {showOthers && (
        <span
          onMouseOver={() => setShowOthers((current) => (current = true))}
          onMouseLeave={() => setShowOthers((current) => (current = false))}
          className="table-action-anim px-1 text-xl "
        >
          <Image src={SearchIcon} alt="icon" width={16} height={16} />{' '}
        </span>
      )}
      <span
        className="px-3"
        onMouseOver={() => setShowOthers((current) => (current = true))}
        onMouseLeave={() => setShowOthers((current) => (current = false))}
      >
        {/* <Link href={`/Resources/physicians/${physicianUrl}/contactsinfo`}> */}
        <FcEditImage />
        {/* </Link> */}
      </span>

      {showOthers && (
        <span
          onMouseOver={() => setShowOthers((current) => (current = true))}
          onMouseLeave={() => setShowOthers((current) => (current = false))}
          className="table-action-anim px-1 text-orange-600"
        >
          <FcEmptyTrash />
        </span>
      )}
    </span>
  );
};

export default ReferralSourcesTableAction;
