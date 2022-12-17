import { FcEditImage, FcEmptyTrash } from 'react-icons/fc';

const ReportsTableActions = () => {
  return (
    <div className="flex h-[27px] w-full items-center justify-center text-lg">
      <span className="table-action-anim border-r border-primary-gray px-4 pt-[3px] pb-[4px] text-xl ">
        <FcEditImage />
      </span>
      <span className="px-3">
        <FcEmptyTrash />
      </span>
    </div>
  );
};

export default ReportsTableActions;
