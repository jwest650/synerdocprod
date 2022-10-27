import React from 'react';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import { HiBell } from 'react-icons/hi';

const Bell = ({ hide, setHide }) => {
  return (
    <div className="relative flex w-full cursor-pointer justify-center bg-[#f6f8fc] text-[50px]">
      <HiBell className="-mt-[19px] rotate-180 text-[#32164A]" />
      {hide ? (
        <span
          onClick={() => setHide(false)}
          className="absolute flex items-center justify-center text-xl text-white"
        >
          <BsArrowDown />
        </span>
      ) : (
        <span
          onClick={() => setHide(true)}
          className="absolute flex items-center justify-center text-xl text-white"
        >
          <BsArrowUp />
        </span>
      )}
    </div>
  );
};

export default Bell;
