import Link from 'next/link';
import { useState } from 'react';
import { FiSettings, FiTrash2 } from 'react-icons/fi';
import { BsEye } from 'react-icons/bs';
import ViewOrder from './ViewOrder';

const PhysicianOrderTableAction = () => {
  const [showOthers, setShowOthers] = useState(false);

  return (
    <span className="flex h-full w-full items-center justify-center  text-lg text-[#0141CF]">
      {showOthers && (
        <span
          onMouseOver={() => setShowOthers((current) => (current = true))}
          onMouseLeave={() => setShowOthers((current) => (current = false))}
          className="table-action-anim px-1 text-xl text-green-600 "
        >
          <ViewOrder />
        </span>
      )}
      <span
        className="px-3"
        onMouseOver={() => setShowOthers((current) => (current = true))}
        onMouseLeave={() => setShowOthers((current) => (current = false))}
      >
        <FiSettings />
      </span>

      {showOthers && (
        <span
          onMouseOver={() => setShowOthers((current) => (current = true))}
          onMouseLeave={() => setShowOthers((current) => (current = false))}
          className="table-action-anim px-1 text-orange-600"
        >
          <FiTrash2 />
        </span>
      )}
    </span>
  );
};

export default PhysicianOrderTableAction;
