import React from 'react';
import { useState } from 'react';
import { RiBook2Fill } from 'react-icons/ri';
import { SiVercel } from 'react-icons/si';

const MoreAssociateInfo = () => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="relative">
      <div
        onMouseOver={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
        className="flex w-full justify-center"
      >
        <RiBook2Fill className="scale-105" />
      </div>
      {showInfo && (
        <div className="verdana10 absolute z-10 ml-5">
          <span className=" absolute -top-[8px] left-1 text-[#c6d8ffe1]">
            <SiVercel />
          </span>
          <div className="moreInfo-anim relative w-72 rounded border-[4px] border-t-[10px] border-[#c6d8ffe1] bg-white">
            <div className="grid grid-cols-6">
              <span className="col-span-3 px-1">
                222 Bert Kouns Loop, Shreveport, LA 71115
              </span>
              <span className="col-span-1 border-x border-gray-400 px-1">
                Work
              </span>
              <span className="col-span-2 px-1">(318) 295-8865</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoreAssociateInfo;
