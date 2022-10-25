import { useContext, useRef, useState } from "react";
import { AiOutlineInfoCircle, AiOutlineLineChart } from "react-icons/ai";
import { BsBuilding, BsCalendar4Event, BsDot } from "react-icons/bs";
import { TbNurse, TbPresentationAnalytics } from "react-icons/tb";
import { BiChalkboard } from "react-icons/bi";
import { CiStethoscope } from "react-icons/ci";
import { MdAttachMoney, MdOutlinePayments } from "react-icons/md";
import { SlCalculator } from "react-icons/sl";
import { FiHome } from "react-icons/fi";
import { menuOptions } from "../assets/data";
import GeneralContext from "../context/GeneralContext";
import Link from "next/link";
import { useRouter } from "next/router";

const Leftmenu = () => {
    const router = useRouter();
    // console.log(router);
    const { menuIsClicked } = useContext(GeneralContext);

    const [isHovered, setIsHovered] = useState(false);
    const btnRef = useRef(null);

    return (
        <div
            ref={btnRef}
            onMouseOver={() => setIsHovered((current) => (current = true))}
            onMouseLeave={() => setIsHovered((current) => (current = false))}
            className="relative max-h-screen w-fit cursor-pointer bg-[#122330]"
        >
            {isHovered ? (
                <div
                    className={`bezier-nav2 absolute z-[100] max-h-screen overflow-x-hidden overflow-y-scroll bg-[#122330] `}
                >
                    {menuOptions.map((menu, index) => (
                        <div key={index}>
                            <h1
                                className={` mt-7 h-12 w-fit px-2 text-sm  font-medium text-gray-400 opacity-100 transition duration-1000 ease-in-out`}
                            >
                                {menu.name}
                            </h1>
                            <ul className="ml-5 space-y-4 text-gray-300">
                                {menu.options.map((option, index) => (
                                    <Link
                                        href={`${
                                            option.title === "Home"
                                                ? "/"
                                                : `/${menu.name}/${option.url}`
                                        }`}
                                        // href={`${
                                        //   option.title === 'Home'
                                        //     ? '/'
                                        //     : `/menuoptions/${option.title}`
                                        // }`}
                                        key={index}
                                    >
                                        <li
                                            key={index}
                                            className={`flex h-6 items-center gap-2 hover:text-white ${
                                                router.query.menuoption
                                                    ? option.title ===
                                                          router.query
                                                              .menuoption &&
                                                      "text-white"
                                                    : option.title === "Home" &&
                                                      "text-white"
                                            } `}
                                        >
                                            {option.icon === "FiHome" && (
                                                <FiHome className="mb-[1px] min-h-[20px] min-w-[20px]" />
                                            )}
                                            {option.icon ===
                                                "AiOutlineLineChart" && (
                                                <AiOutlineLineChart className="mb-[1px] min-h-[20px] min-w-[20px]" />
                                            )}
                                            {option.icon === "SlCalculator" && (
                                                <SlCalculator className="mb-[1px] min-h-[20px] min-w-[20px]" />
                                            )}
                                            {option.icon ===
                                                "BsCalendar4Event" && (
                                                <BsCalendar4Event className="mb-[1px] min-h-[20px] min-w-[20px]" />
                                            )}
                                            {option.icon ===
                                                "MdAttachMoney" && (
                                                <MdAttachMoney className=" mb-[1px] min-h-[22px] min-w-[22px]" />
                                            )}
                                            {option.icon === "BiChalkboard" && (
                                                <BiChalkboard className="mb-[1px] min-h-[20px] min-w-[20px]" />
                                            )}
                                            {option.icon === "TbNurse" && (
                                                <TbNurse className="mb-[1px] min-h-[20px] min-w-[20px]" />
                                            )}
                                            {option.icon ===
                                                "CiStethoscope" && (
                                                <CiStethoscope className="mb-[1px] min-h-[20px] min-w-[20px]" />
                                            )}
                                            {option.icon === "BsBuilding" && (
                                                <BsBuilding className="mb-[1px] min-h-[20px] min-w-[20px]" />
                                            )}
                                            {option.icon ===
                                                "MdOutlinePayments" && (
                                                <MdOutlinePayments className="mb-[1px] min-h-[20px] min-w-[20px]" />
                                            )}
                                            {option.icon ===
                                                "AiOutlineInfoCircle" && (
                                                <AiOutlineInfoCircle className="mb-[1px] min-h-[20px] min-w-[20px]" />
                                            )}
                                            {option.icon ===
                                                "TbPresentationAnalytics" && (
                                                <TbPresentationAnalytics className="mb-[1px] -ml-[2px] min-h-[25px] min-w-[25px]" />
                                            )}
                                            {option.icon === "BsDot" && (
                                                <BsDot className="mb-[1px] min-h-[20px] min-w-[20px]" />
                                            )}
                                            {/* <TbNurse className="min-h-[20px] mb-[1px] min-w-[20px]" /> */}
                                            <span className="min-w-[240px] opacity-100 transition duration-500 ease-in-out">
                                                {option.title}
                                            </span>
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ) : (
                <div
                    className={`${
                        menuIsClicked ? "bezier-nav2" : "w-[70px]"
                    }  max-h-screen overflow-x-hidden overflow-y-scroll `}
                >
                    {menuOptions.map((menu, index) => (
                        <div key={index}>
                            <h1
                                className={` ${
                                    menuIsClicked ? "opacity-100" : "opacity-0"
                                } mt-7 h-12 w-fit px-2 text-sm font-medium text-gray-400`}
                            >
                                {menu.name}
                            </h1>
                            <ul className="ml-5 space-y-4 text-gray-300">
                                {menu.options.map((option, index) => (
                                    <Link
                                        href={`${
                                            option.title === "Home"
                                                ? "/"
                                                : `/${menu.name}/${option.url}/${option.url}`
                                        }`}
                                        // href={`${
                                        //     option.title === 'Home'
                                        //       ? '/'
                                        //       : `/menuoptions/${option.title}`
                                        //   }`}
                                        key={index}
                                    >
                                        <li
                                            className={`flex h-6 items-center gap-2 hover:text-white ${
                                                router.query.menuoption
                                                    ? option.title ===
                                                          router.query
                                                              .menuoption &&
                                                      "text-white"
                                                    : option.title === "Home" &&
                                                      "text-white"
                                            } `}
                                        >
                                            {option.icon === "FiHome" && (
                                                <FiHome className="mb-[1px] min-h-[20px] min-w-[20px]" />
                                            )}
                                            {option.icon ===
                                                "AiOutlineLineChart" && (
                                                <AiOutlineLineChart className="mb-[1px] min-h-[20px] min-w-[20px]" />
                                            )}
                                            {option.icon === "SlCalculator" && (
                                                <SlCalculator className="mb-[1px] min-h-[20px] min-w-[20px]" />
                                            )}
                                            {option.icon ===
                                                "BsCalendar4Event" && (
                                                <BsCalendar4Event className="mb-[1px] min-h-[20px] min-w-[20px]" />
                                            )}
                                            {option.icon ===
                                                "MdAttachMoney" && (
                                                <MdAttachMoney className=" mb-[1px] min-h-[22px] min-w-[22px]" />
                                            )}
                                            {option.icon === "BiChalkboard" && (
                                                <BiChalkboard className="mb-[1px] min-h-[20px] min-w-[20px]" />
                                            )}
                                            {option.icon === "TbNurse" && (
                                                <TbNurse className="mb-[1px] min-h-[20px] min-w-[20px]" />
                                            )}
                                            {option.icon ===
                                                "CiStethoscope" && (
                                                <CiStethoscope className="mb-[1px] min-h-[20px] min-w-[20px]" />
                                            )}
                                            {option.icon === "BsBuilding" && (
                                                <BsBuilding className="mb-[1px] min-h-[20px] min-w-[20px]" />
                                            )}
                                            {option.icon ===
                                                "MdOutlinePayments" && (
                                                <MdOutlinePayments className="mb-[1px] min-h-[20px] min-w-[20px]" />
                                            )}
                                            {option.icon ===
                                                "AiOutlineInfoCircle" && (
                                                <AiOutlineInfoCircle className="mb-[1px] min-h-[20px] min-w-[20px]" />
                                            )}
                                            {option.icon ===
                                                "TbPresentationAnalytics" && (
                                                <TbPresentationAnalytics className="mb-[1px] -ml-[2px] min-h-[25px] min-w-[25px]" />
                                            )}
                                            {option.icon === "BsDot" && (
                                                <BsDot className="mb-[1px] min-h-[20px] min-w-[20px]" />
                                            )}{" "}
                                            <span
                                                className={`min-w-[240px] ${
                                                    menuIsClicked
                                                        ? "opacity-100"
                                                        : "opacity-0"
                                                }`}
                                            >
                                                {option.title}
                                            </span>{" "}
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
            <div
                className={`${
                    menuIsClicked ? "bezier-nav2" : "w-[70px]"
                }  max-h-screen overflow-y-scroll`}
            ></div>
        </div>
    );
};

export default Leftmenu;
