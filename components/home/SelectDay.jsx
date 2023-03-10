import { useState } from 'react';
import { FcCalendar } from 'react-icons/fc';
import { SiVercel } from 'react-icons/si';
import { days } from './homeData';

const SelectDay = ({ setDayDuration }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
<<<<<<< HEAD
    <>
      <div
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="verdana11 relative flex cursor-pointer items-center gap-2 py-3"
      >
        {' '}
        <FcCalendar className="mr-3 scale-150 text-base" />
        {isHovered && (
          <>
            {/* <span className="z-100 absolute top-6 right-12 stroke-2 text-white shadow-xl ">
              <SiVercel />
            </span> */}
            <div className="absolute right-4 top-4 z-10 w-fit">
              <ul className="mt-3 mr-3 rounded border-x border-b bg-white shadow-xl ">
                {days.map((day, index) => (
                  <li
                    key={index}
                    onClick={() => setDayDuration(day)}
                    className="w-44 py-2 px-4 font-medium hover:bg-texiary-blue"
                  >
                    {day}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </>
=======
    <div
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="verdana11 relative flex cursor-pointer items-center gap-2 py-3"
    >
      {' '}
      <FcCalendar className="mr-3 scale-150 text-base" />
      {isHovered && (
        <>
          {/* <span className="z-100 absolute top-6 right-12 stroke-2 text-white shadow-xl ">
              <SiVercel />
            </span> */}
          <div className="absolute right-4 top-4 z-10 w-fit">
            <ul className="mt-3 mr-3 rounded border-x border-b bg-white shadow-xl ">
              {days.map((day, index) => (
                <li
                  key={index}
                  onClick={() => setDayDuration(day)}
                  className="w-44 py-2 px-4 font-medium hover:bg-texiary-blue"
                >
                  {day}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
  );
};

export default SelectDay;
