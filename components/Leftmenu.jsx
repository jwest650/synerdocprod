import { useContext, useRef, useState } from 'react';
import { AiOutlineInfoCircle, AiOutlineLineChart } from 'react-icons/ai';
import { BsCalendar4Event, BsDot } from 'react-icons/bs';
import { TbNurse } from 'react-icons/tb';
import { BiChalkboard } from 'react-icons/bi';
import { CiStethoscope } from 'react-icons/ci';
import { MdAttachMoney, MdOutlinePayments } from 'react-icons/md';
import { SlCalculator } from 'react-icons/sl';
import {
  HiOutlinePresentationChartBar,
  HiOutlineBuildingOffice2,
} from 'react-icons/hi2';
import { menuOptions } from '../assets/data';
import GeneralContext from '../context/GeneralContext';

const Leftmenu = () => {
  const { menuIsClicked } = useContext(GeneralContext);

  const [isHovered, setIsHovered] = useState(false);
  const btnRef = useRef(null);
  // console.log('hover', isHovered);
  // console.log('menu', menuIsClicked);
  return (
    <div
      ref={btnRef}
      onMouseOver={() => setIsHovered((current) => (current = true))}
      onMouseLeave={() => setIsHovered((current) => (current = false))}
      className="bg-[#122330] max-h-screen w-fit cursor-pointer relative"
    >
      {isHovered ? (
        <div
          className={`bezier-nav2 absolute max-h-screen overflow-y-scroll bg-[#122330] z-[100] `}
        >
          {menuOptions.map((menu, index) => (
            <div key={index}>
              <h1
                className={` opacity-100 mt-7 transition duration-1000 ease-in-out  h-12 w-fit px-2 text-sm font-medium text-gray-400`}
              >
                {menu.name}
              </h1>
              <ul className="ml-5 space-y-4 text-gray-300">
                {menu.options.map((option, index) => (
                  <li key={index} className="flex h-6 items-center gap-2">
                    {option.icon === 'AiOutlineLineChart' && (
                      <AiOutlineLineChart className="min-h-[20px] mb-[1px] min-w-[20px]" />
                    )}
                    {option.icon === 'SlCalculator' && (
                      <SlCalculator className="min-h-[20px] mb-[1px] min-w-[20px]" />
                    )}
                    {option.icon === 'BsCalendar4Event' && (
                      <BsCalendar4Event className="min-h-[20px] mb-[1px] min-w-[20px]" />
                    )}
                    {option.icon === 'MdAttachMoney' && (
                      <MdAttachMoney className="min-h-[20px] mb-[1px] min-w-[20px]" />
                    )}
                    {option.icon === 'BiChalkboard' && (
                      <BiChalkboard className="min-h-[20px] mb-[1px] min-w-[20px]" />
                    )}
                    {option.icon === 'TbNurse' && (
                      <TbNurse className="min-h-[20px] mb-[1px] min-w-[20px]" />
                    )}
                    {option.icon === 'CiStethoscope' && (
                      <CiStethoscope className="min-h-[20px] mb-[1px] min-w-[20px]" />
                    )}
                    {option.icon === 'HiOutlineBuildingOffice2' && (
                      <HiOutlineBuildingOffice2 className="min-h-[20px] mb-[1px] min-w-[20px]" />
                    )}
                    {option.icon === 'MdOutlinePayments' && (
                      <MdOutlinePayments className="min-h-[20px] mb-[1px] min-w-[20px]" />
                    )}
                    {option.icon === 'AiOutlineInfoCircle' && (
                      <AiOutlineInfoCircle className="min-h-[20px] mb-[1px] min-w-[20px]" />
                    )}
                    {option.icon === 'HiOutlinePresentationChartBar' && (
                      <HiOutlinePresentationChartBar className="min-h-[20px] mb-[1px] min-w-[20px]" />
                    )}
                    {option.icon === 'BsDot' && (
                      <BsDot className="min-h-[20px] mb-[1px] min-w-[20px]" />
                    )}
                    {/* <TbNurse className="min-h-[20px] mb-[1px] min-w-[20px]" /> */}
                    <span className="min-w-[240px] opacity-100 transition duration-500 ease-in-out">
                      {option.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <div
          className={`${
            menuIsClicked ? 'bezier-nav2' : 'w-[70px]'
          }   max-h-screen overflow-y-scroll `}
        >
          {menuOptions.map((menu, index) => (
            <div key={index}>
              <h1
                className={` ${
                  menuIsClicked ? 'opacity-100' : 'opacity-0'
                } mt-7 h-12 w-fit px-2 text-sm font-medium text-gray-400`}
              >
                {menu.name}
              </h1>
              <ul className="ml-5 space-y-4 text-gray-300">
                {menu.options.map((option, index) => (
                  <li key={index} className="flex h-6 items-center gap-2">
                    {option.icon === 'AiOutlineLineChart' && (
                      <AiOutlineLineChart className="min-h-[20px] mb-[1px] min-w-[20px]" />
                    )}
                    {option.icon === 'SlCalculator' && (
                      <SlCalculator className="min-h-[20px] mb-[1px] min-w-[20px]" />
                    )}
                    {option.icon === 'BsCalendar4Event' && (
                      <BsCalendar4Event className="min-h-[20px] mb-[1px] min-w-[20px]" />
                    )}
                    {option.icon === 'MdAttachMoney' && (
                      <MdAttachMoney className="min-h-[20px] mb-[1px] min-w-[20px]" />
                    )}
                    {option.icon === 'BiChalkboard' && (
                      <BiChalkboard className="min-h-[20px] mb-[1px] min-w-[20px]" />
                    )}
                    {option.icon === 'TbNurse' && (
                      <TbNurse className="min-h-[20px] mb-[1px] min-w-[20px]" />
                    )}
                    {option.icon === 'CiStethoscope' && (
                      <CiStethoscope className="min-h-[20px] mb-[1px] min-w-[20px]" />
                    )}
                    {option.icon === 'HiOutlineBuildingOffice2' && (
                      <HiOutlineBuildingOffice2 className="min-h-[20px] mb-[1px] min-w-[20px]" />
                    )}
                    {option.icon === 'MdOutlinePayments' && (
                      <MdOutlinePayments className="min-h-[20px] mb-[1px] min-w-[20px]" />
                    )}
                    {option.icon === 'AiOutlineInfoCircle' && (
                      <AiOutlineInfoCircle className="min-h-[20px] mb-[1px] min-w-[20px]" />
                    )}
                    {option.icon === 'HiOutlinePresentationChartBar' && (
                      <HiOutlinePresentationChartBar className="min-h-[20px] mb-[1px] min-w-[20px]" />
                    )}
                    {option.icon === 'BsDot' && (
                      <BsDot className="min-h-[20px] mb-[1px] min-w-[20px]" />
                    )}{' '}
                    <span
                      className={`min-w-[240px] ${
                        menuIsClicked ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      {option.title}
                    </span>{' '}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      <div
        // className="w-[70px]"
        className={`${
          menuIsClicked ? 'bezier-nav2' : 'w-[70px]'
        }  max-h-screen overflow-y-scroll`}
      ></div>
    </div>
  );
};

export default Leftmenu;
