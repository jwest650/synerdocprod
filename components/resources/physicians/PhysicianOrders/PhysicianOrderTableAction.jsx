import Image from 'next/image';
import { useState } from 'react';
import { FcEditImage, FcEmptyTrash } from 'react-icons/fc';
import SearchIcon from '../../../../assets/images/search.png';

const PhysicianOrderTableAction = () => {
  const [showOthers, setShowOthers] = useState(false);

  return (
    <div className="flex h-[27px] w-full items-center justify-center text-lg">
      {showOthers && (
        <span
          onMouseOver={() => setShowOthers((current) => (current = true))}
          onMouseLeave={() => setShowOthers((current) => (current = false))}
          className="table-action-anim px-1 text-xl "
        >
          <Image src={SearchIcon} alt="icon" width={16} height={16} />
        </span>
      )}
      <span
        className="px-3"
        onMouseOver={() => setShowOthers((current) => (current = true))}
        onMouseLeave={() => setShowOthers((current) => (current = false))}
      >
        <FcEditImage />
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
    </div>
  );
};

export default PhysicianOrderTableAction;
