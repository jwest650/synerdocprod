import Image from 'next/image';
import React from 'react';
import greenplus from '../assets/images/greenplus.png';

const Availability = () => {
  return (
    <div className="grid grid-cols-2 rounded-md border border-[#142633] py-2 shadow-lg">
      {/* <h1 className=" ">Available at the following times</h1> */}
      <div className=" px-5">
        <div className="mb-5 flex items-center justify-evenly gap-2 border-b">
          <span className="w-full py-1 px-2">Day</span>
          <span className="w-full py-1 px-2">From</span>
          <span className="w-full py-1 px-2">To</span>
        </div>
        <div className="mb-5 flex items-center justify-evenly gap-3">
          <span className="w-full rounded-md bg-[#152937] py-1 px-2">
            Sunday
          </span>
          <input
            disabled
            className="w-full rounded-md bg-gray-300 py-1 px-2 text-black outline-none"
            type="text"
            value="9am"
          />
          <input
            disabled
            className="w-full rounded-md bg-gray-300 py-1 px-2 text-black outline-none"
            type="text"
            value="5pm"
          />
        </div>
        <div className="mb-5 flex items-center justify-evenly gap-3">
          <span className="w-full rounded-md bg-[#152937] py-1 px-2">
            Monday
          </span>
          <input
            disabled
            className="w-full rounded-md bg-gray-300 py-1 px-2 text-black outline-none"
            type="text"
            value="8am"
          />
          <input
            disabled
            className="w-full rounded-md bg-gray-300 py-1 px-2 text-black outline-none"
            type="text"
            value="5pm"
          />
        </div>
        <div className="mb-5 flex items-center justify-evenly gap-3">
          <span className="w-full rounded-md bg-[#152937] py-1 px-2">
            Tuesday
          </span>
          <input
            disabled
            className="w-full rounded-md bg-gray-300 py-1 px-2 text-black outline-none"
            type="text"
            value="8am"
          />
          <input
            disabled
            className="w-full rounded-md bg-gray-300 py-1 px-2 text-black outline-none"
            type="text"
            value="5pm"
          />
        </div>
        <div className="mb-5 flex items-center justify-evenly gap-3">
          <span className="w-full rounded-md bg-[#152937] py-1 px-2">
            Wednesday
          </span>
          <input
            disabled
            className="w-full rounded-md bg-gray-300 py-1 px-2 text-black outline-none"
            type="text"
            value="8am"
          />
          <input
            disabled
            className="w-full rounded-md bg-gray-300 py-1 px-2 text-black outline-none"
            type="text"
            value="5pm"
          />
        </div>
        <div className="mb-5 flex items-center justify-evenly gap-3">
          <span className="w-full rounded-md bg-[#152937] py-1 px-2">
            Thursday
          </span>
          <input
            disabled
            className="w-full rounded-md bg-gray-300 py-1 px-2 text-black outline-none"
            type="text"
            value="8am"
          />
          <input
            disabled
            className="w-full rounded-md bg-gray-300 py-1 px-2 text-black outline-none"
            type="text"
            value="5pm"
          />
        </div>
        <div className="mb-5 flex items-center justify-evenly gap-3">
          <span className="w-full rounded-md bg-[#152937] py-1 px-2">
            Friday
          </span>
          <input
            disabled
            className="w-full rounded-md bg-gray-300 py-1 px-2 text-black outline-none"
            type="text"
            value="8am"
          />
          <input
            disabled
            className="w-full rounded-md bg-gray-300 py-1 px-2 text-black outline-none"
            type="text"
            value="5pm"
          />
        </div>
        <div className="mb-5 flex items-center justify-evenly gap-3">
          <span className="w-full rounded-md bg-[#152937] py-1 px-2">
            Saturday
          </span>
          <input
            disabled
            className="w-full rounded-md bg-gray-300 py-1 px-2 text-black outline-none"
            type="text"
            value="9am"
          />
          <input
            disabled
            className="w-full rounded-md bg-gray-300 py-1 px-2 text-black outline-none"
            type="text"
            value="5pm"
          />
        </div>
      </div>
      <div className="border-l px-5">
        <div className="">
          <p className=" text mb-7 border-b text-center text-lg">
            Availability:
          </p>
          <div className="mt-2 space-y-6 px-2">
            <span className="flex cursor-pointer items-center gap-2">
              <Image
                src={greenplus.src}
                alt="greenplus"
                width="15px"
                height="15px"
              />
              <span className="text-lg">Add Overrides</span>
            </span>
            <span className="flex cursor-pointer items-center gap-2">
              <Image
                src={greenplus.src}
                alt="greenplus"
                width="15px"
                height="15px"
              />
              <span className="text-lg">Manage Overrides</span>
            </span>
            <span className="flex cursor-pointer items-center gap-2">
              <Image
                src={greenplus.src}
                alt="greenplus"
                width="15px"
                height="15px"
              />
              <span className="text-lg">Reassign</span>
            </span>
            <span className="flex cursor-pointer items-center gap-2">
              <Image
                src={greenplus.src}
                alt="greenplus"
                width="15px"
                height="15px"
              />
              <span className="text-lg">Associate productivity</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Availability;
