import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FcEditImage, FcEmptyTrash, FcSearch } from 'react-icons/fc';
import SearchIcon from '../../assets/images/search.png';
import DeletePopup from '../structure/DeletePopup';
// import { FiSettings, FiTrash2 } from 'react-icons/fi';

const TableAction = ({ associateUrl }) => {
  const [showOthers, setShowOthers] = useState(false);

  return (
    <div className="flex h-[27px] w-full items-center justify-center text-lg">
      {showOthers && (
        <Link
          href={
            associateUrl ? `/Resources/associates/${associateUrl}/profile` : '#'
          }
        >
          <span
            onMouseOver={() => setShowOthers((current) => (current = true))}
            onMouseLeave={() => setShowOthers((current) => (current = false))}
            className="table-action-anim px-1 text-xl "
          >
            <Image src={SearchIcon} alt="icon" width={16} height={16} />
          </span>
        </Link>
      )}
      <span
        className="px-3"
        onMouseOver={() => setShowOthers((current) => (current = true))}
        onMouseLeave={() => setShowOthers((current) => (current = false))}
      >
        <FcEditImage className="scale-110" />
      </span>

      {showOthers && (
        <span
          onMouseOver={() => setShowOthers((current) => (current = true))}
          onMouseLeave={() => setShowOthers((current) => (current = false))}
          className="table-action-anim px-1 text-orange-600"
        >
          <DeletePopup deleteIcon={true} toDelete="associate" />
        </span>
      )}
    </div>
  );
};

export default TableAction;
