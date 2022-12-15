import { SiVercel } from 'react-icons/si';

const MoreAddressInfo = () => {
  return (
    <div className="verdana10 absolute bottom-5 -right-16 z-10 ">
      <div className="moreInfo-anim w-72 rounded border-[4px] border-t-[10px] border-secondary-blue bg-white">
        <div className="grid grid-cols-6">
          <span className="col-span-3 px-1">
            222 Bert Kouns Loop, Shreveport, LA 71115
          </span>
          <span className="col-span-1 border-x border-gray-400 px-1">Work</span>
          <span className="col-span-2 px-1">(318) 295-8865</span>
        </div>
      </div>
      <span className="-mt-0.5 flex w-full justify-center text-secondary-blue">
        <SiVercel className="rotate-180 " />
      </span>
    </div>
  );
};

export default MoreAddressInfo;
