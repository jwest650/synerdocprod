import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { FiSettings, FiTrash2 } from 'react-icons/fi';

const TableAction = () => {
  const [showOthers, setShowOthers] = useState(false);

  return (
    <span className='flex h-full w-full items-center justify-center gap-3 text-lg'>
      {showOthers && (
        <span className='table-action-anim'>
          <BsSearch />
        </span>
      )}
      <span
        onMouseOver={() => setShowOthers((current) => (current = true))}
        onMouseLeave={() => setShowOthers((current) => (current = false))}
      >
        <FiSettings />
      </span>

      {showOthers && (
        <span className='table-action-anim'>
          <FiTrash2 />
        </span>
      )}
    </span>
  );
};

export default TableAction;
