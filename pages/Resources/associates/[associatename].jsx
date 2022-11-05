import { useRouter } from 'next/router';
import { FcInfo } from 'react-icons/fc';

const AssociateName = () => {
  const router = useRouter();
  const associateName = router.query?.associatename;
  return (
    <div className="flex w-full flex-col items-center rounded border px-5 pt-5 pb-12 text-sm shadow">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-8">
          <h2 className="text-lg font-semibold tracking-wide">
            {associateName}
          </h2>
          <span className="flex cursor-pointer items-center gap-1 text-orange-600 underline">
            [Edit]
            <FcInfo className="rotate-180" />
          </span>
        </div>
        <div className="space-x-5">
          <span className="cursor-pointer text-xs font-semibold tracking-wide text-blue-800 underline">
            WIKI Help
          </span>
          <span className="text-base font-extrabold text-green-800">
            ASSOCIATE
          </span>
        </div>
      </div>
      <div className="mt-6 flex w-full max-w-[800px] items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-end justify-center gap-[6px]">
            <p className="font-semibold">Classification:</p>
            <p className="font-semibold">Phone:</p>
            <p className="font-semibold">Status:</p>
          </div>
          <div className="flex flex-col justify-center gap-[6px]">
            <p>Field Staff - Full Time</p>
            <p>+12 229 736 463</p>
            <p>Active</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-end gap-[6px]">
            <p className="font-semibold">Discipline:</p>
            <p className="font-semibold">Started:</p>
            <p className="font-semibold">Updated:</p>
          </div>
          <div className="flex flex-col gap-[6px]">
            <p>Registered Nurse</p>
            <p>11/04/2022</p>
            <p>11/04/2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssociateName;
