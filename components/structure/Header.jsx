import React, { useState } from 'react';
import Bell from './Bell';

const Header = () => {
  const [hide, setHide] = useState(false);
  return (
    <div
      className={`flex h-48 flex-col items-center bg-[#32164A] transition-all duration-1000 ease-in-out ${
        hide && '-mt-40'
      } `}
    >
      <div className="flex  h-full flex-col justify-center rounded-b px-5 text-white  shadow md:w-fit">
        <h1 className="mb-2 text-xl">All-Time Performance</h1>

        <ul className="flex w-fit justify-center overflow-x-scroll rounded bg-[#6b3e9280] tracking-wider md:w-fit md:overflow-hidden">
          <li className="  flex flex-col border-r-2 border-gray-500/20 p-2 md:min-w-[11rem]">
            <span className="text-gray-300">Associates</span>
            <span className="font-semibold">120</span>
          </li>
          <li className="  flex flex-col border-r-2 border-gray-500/20 p-2 md:min-w-[11rem]">
            <span className="text-gray-300">Patients</span>
            <span className="font-semibold">1000</span>
          </li>
          <li className="  flex flex-col border-r-2 border-gray-500/20 p-2 md:min-w-[11rem]">
            <span className="text-gray-300">Incomplete Referals</span>
            <span className="font-semibold">15</span>
          </li>
          <li className="  flex flex-col border-gray-500/20 p-2 md:min-w-[11rem]">
            <span className="text-gray-300">Total Referals</span>
            <span className="font-semibold">1000</span>
          </li>
        </ul>
      </div>
      <Bell hide={hide} setHide={setHide} />
    </div>
  );
};

export default Header;
