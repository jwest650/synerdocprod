import { useState } from 'react';
import { FcEditImage, FcEmptyTrash, FcTreeStructure } from 'react-icons/fc';

const TableAction = () => {
  const [showOthers, setShowOthers] = useState(false);

  return (
    <div className="flex h-[27px] w-full items-center justify-center text-lg">
      {showOthers && (
        <span
          onMouseOver={() => setShowOthers((current) => (current = true))}
          onMouseLeave={() => setShowOthers((current) => (current = false))}
          className="table-action-anim px-1 text-xl "
        >
          <FcEditImage />
        </span>
      )}
      <span
        className="px-3"
        onMouseOver={() => setShowOthers((current) => (current = true))}
        onMouseLeave={() => setShowOthers((current) => (current = false))}
      >
        <FcTreeStructure />
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

export default TableAction;
