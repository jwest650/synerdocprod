import { FcEditImage, FcEmptyTrash } from 'react-icons/fc';

const ReportsTableActions = () => {
  //   const [showOthers, setShowOthers] = useState(false);

  return (
    <div className="flex h-[27px] w-full items-center justify-center text-lg">
      {/* {showOthers && ( */}
      <span
        // onMouseOver={() => setShowOthers((current) => (current = true))}
        // onMouseLeave={() => setShowOthers((current) => (current = false))}
        className="table-action-anim border-r border-primary-gray px-4 pt-[3px] pb-[4px] text-xl "
      >
        <FcEditImage />
      </span>
      {/* )} */}
      <span
        className="px-3"
        // onMouseOver={() => setShowOthers((current) => (current = true))}
        // onMouseLeave={() => setShowOthers((current) => (current = false))}
      >
        <FcEmptyTrash />
      </span>

      {/* {showOthers && (
        <span
          onMouseOver={() => setShowOthers((current) => (current = true))}
          onMouseLeave={() => setShowOthers((current) => (current = false))}
          className="table-action-anim px-1 text-orange-600"
        >
        </span>
      )} */}
    </div>
  );
};

export default ReportsTableActions;
