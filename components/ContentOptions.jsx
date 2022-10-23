import { BsBook } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';
import { IoSaveOutline } from 'react-icons/io5';

const ContentOptions = () => {
  return (
    <div className="flex items-center justify-between pr-1 text-[14px] text-gray-400">
      <div className="flex items-center gap-5">
        <h3 className="cursor-pointer border-b border-cyan-500 text-cyan-500">
          Calendar
        </h3>
        <h3 className="cursor-pointer border-b active:text-cyan-500">
          Availability
        </h3>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex cursor-pointer items-center gap-2">
          <IoSaveOutline /> Save Report
        </div>
        <div className="flex cursor-pointer items-center gap-2">
          <BsBook /> Export To PDF
        </div>
        <div className="flex cursor-pointer items-center gap-2">
          <GoMail /> Send To Email
        </div>
      </div>
    </div>
  );
};

export default ContentOptions;
