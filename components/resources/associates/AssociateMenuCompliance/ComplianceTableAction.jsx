// import { useState } from 'react';
import {
  FcAcceptDatabase,
  FcDocument,
  FcEditImage,
  FcEmptyTrash,
  FcSearch,
} from 'react-icons/fc';
// import { FiSettings, FiTrash2 } from 'react-icons/fi';

const ComplianceTableAction = () => {
  //   const [showOthers, setShowOthers] = useState(false);

  return (
    <div className="flex h-[27px] w-full items-center justify-center gap-3 text-lg">
      {/* {showOthers && ( */}
      <span
        //   onMouseOver={() => setShowOthers((current) => (current = true))}
        //   onMouseLeave={() => setShowOthers((current) => (current = false))}
        className="table-action-anim "
      >
        <FcEditImage />
      </span>
      <span
        //   onMouseOver={() => setShowOthers((current) => (current = true))}
        //   onMouseLeave={() => setShowOthers((current) => (current = false))}
        className="table-action-anim"
      >
        <FcAcceptDatabase />
      </span>
      {/* )} */}
      <span
        className=""
        // onMouseOver={() => setShowOthers((current) => (current = true))}
        // onMouseLeave={() => setShowOthers((current) => (current = false))}
      >
        <FcDocument />
      </span>

      {/* {showOthers && ( */}
      <span
        //   onMouseOver={() => setShowOthers((current) => (current = true))}
        //   onMouseLeave={() => setShowOthers((current) => (current = false))}
        className="table-action-anim"
      >
        <FcEmptyTrash />
      </span>
      {/* )} */}
    </div>
  );
};

export default ComplianceTableAction;
