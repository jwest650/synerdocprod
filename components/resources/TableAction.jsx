import Image from 'next/image';
<<<<<<< HEAD
import { useState } from 'react';
import { FcEditImage, FcEmptyTrash, FcSearch } from 'react-icons/fc';
import SearchIcon from '../../assets/images/search.png';
// import { FiSettings, FiTrash2 } from 'react-icons/fi';

const TableAction = () => {
=======
import Link from 'next/link';
import { useState } from 'react';
import { FcEditImage, FcEmptyTrash, FcSearch } from 'react-icons/fc';
import SearchIcon from '../../assets/images/search.png';
import DeletePopup from '../structure/DeletePopup';
// import { FiSettings, FiTrash2 } from 'react-icons/fi';

const TableAction = ({ associateUrl }) => {
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
  const [showOthers, setShowOthers] = useState(false);

  return (
    <div className="flex h-[27px] w-full items-center justify-center text-lg">
      {showOthers && (
<<<<<<< HEAD
        <span
          onMouseOver={() => setShowOthers((current) => (current = true))}
          onMouseLeave={() => setShowOthers((current) => (current = false))}
          className="table-action-anim px-1 text-xl "
        >
          <Image src={SearchIcon} alt="icon" width={16} height={16} />
        </span>
=======
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
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
      )}
      <span
        className="px-3"
        onMouseOver={() => setShowOthers((current) => (current = true))}
        onMouseLeave={() => setShowOthers((current) => (current = false))}
      >
<<<<<<< HEAD
        <FcEditImage />
=======
        <FcEditImage className="scale-110" />
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
      </span>

      {showOthers && (
        <span
          onMouseOver={() => setShowOthers((current) => (current = true))}
          onMouseLeave={() => setShowOthers((current) => (current = false))}
          className="table-action-anim px-1 text-orange-600"
        >
<<<<<<< HEAD
          <FcEmptyTrash />
=======
          <DeletePopup deleteIcon={true} toDelete="associate" />
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
        </span>
      )}
    </div>
  );
};

export default TableAction;
