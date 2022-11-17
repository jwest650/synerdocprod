import Image from 'next/image';
import { useState } from 'react';
import { FcEditImage, FcEmptyTrash, FcSearch } from 'react-icons/fc';
import SearchIcon from '../../assets/images/search.png';
// import { FiSettings, FiTrash2 } from 'react-icons/fi';

const TableAction = () => {
  // const [showOthers, setShowOthers] = useState(false);

  return (
    <span className="flex h-[25px] w-full items-center justify-center  text-lg text-[#0141CF]">
      {/* {showOthers && ( */}
      <span
        // onMouseOver={() => setShowOthers((current) => (current = true))}
        // onMouseLeave={() => setShowOthers((current) => (current = false))}
        className="table-action-anim px-1 text-xl "
      >
        <Image src={SearchIcon} alt="icon" width={16} height={16} />

        {/* <FcSearch /> */}
      </span>
      {/* )} */}
      <span
        className="px-3"
        // onMouseOver={() => setShowOthers((current) => (current = true))}
        // onMouseLeave={() => setShowOthers((current) => (current = false))}
      >
        <FcEditImage />
      </span>

      {/* {showOthers && ( */}
      <span
        // onMouseOver={() => setShowOthers((current) => (current = true))}
        // onMouseLeave={() => setShowOthers((current) => (current = false))}
        className="table-action-anim px-1 text-orange-600"
      >
        <FcEmptyTrash />
      </span>
      {/* )} */}
    </span>
  );
};

export default TableAction;
