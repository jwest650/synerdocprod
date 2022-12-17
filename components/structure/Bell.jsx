import React from 'react';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import { HiBell } from 'react-icons/hi';

const Bell = ({ hide, setHide }) => {
  return (
    <div className="relative flex w-full cursor-pointer justify-center bg-[#f6f8fc] text-[50px]">
<<<<<<< HEAD
      <HiBell className="-mt-[18px] rotate-180 text-[#0141CF]" />
=======
      <HiBell className="-mt-[18px] rotate-180 text-primary-blue" />
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
      {hide ? (
        <span
          onClick={() => setHide(false)}
          className="absolute flex items-center justify-center text-lg text-white"
        >
          <BsArrowDown />
        </span>
      ) : (
        <span
          onClick={() => setHide(true)}
          className="absolute flex items-center justify-center text-lg text-white"
        >
          <BsArrowUp />
        </span>
      )}
    </div>
  );
};

export default Bell;
