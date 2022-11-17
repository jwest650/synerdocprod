import React from "react";
import { ImBook } from "react-icons/im";
import { TbFileExport } from "react-icons/tb";
import { VscError, VscGoToFile } from "react-icons/vsc";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { CiMail } from "react-icons/ci";
import { HiOutlineQrcode } from "react-icons/hi";
import { BiErrorCircle } from "react-icons/bi";
import { useState } from "react";
import Services from "./tabs/Services";
import ArTransaction from "./tabs/ArTransaction";
import Notes from "./tabs/Notes";
import Payer from "./tabs/Payer";
import Pdgm from "./tabs/Pdgm";
import Errors from "./tabs/Errors";

const InvoiceDetail = () => {
    const [active, setactive] = useState("services");

    const tabs = [
        {
            name: "services",
            icon: <FaUserGraduate />,
        },
        {
            name: "notes",
            icon: <CgNotes />,
        },
        {
            name: "ar transactions",
            icon: <CiMail />,
        },
        {
            name: "payer codes",
            icon: <HiOutlineQrcode />,
        },

        {
            name: "pdgm",
            icon: <BiErrorCircle />,
        },
        {
            name: "errors",
            icon: <VscError />,
        },
    ];
    return (
        <div className="ar bodytext space-y-4 capitalize">
            <section className="flex w-full items-center justify-between">
                <div className="flex items-center">
                    <ImBook className=" mr-2 inline text-xl" />
                    <h1 className="text-xl font-bold">carter, melinda</h1>
                </div>
                <div className="flex space-x-4">
                    <div className="flex items-baseline space-x-1 ">
                        <VscGoToFile className=" inline " />
                        <label className="text-orange-500 underline">
                            rebill
                        </label>
                    </div>
                    <div className="flex items-baseline space-x-1 ">
                        <TbFileExport className="inline " />

                        <label className="text-orange-500 underline" htmlFor="">
                            move to
                        </label>
                    </div>
                    <div className="flex items-baseline space-x-1 ">
                        {" "}
                        <BsFileEarmarkPlus className=" inline " />
                        <label className="text-orange-500 underline" htmlFor="">
                            gross adj
                        </label>
                    </div>
                </div>
                <h1 className="text-xl font-bold text-green-500">invoice</h1>
            </section>
            <section className="flex items-center justify-between">
                <aside className="flex space-x-3">
                    <div className="text-right font-bold">
                        <h1>invoice number:</h1>
                        <h1>status:</h1>
                        <h1>current payer:</h1>
                        <h1>invoice date:</h1>
                    </div>
                    <div>
                        <p>
                            436{" "}
                            <span className="text-orange-500">
                                [go to ecounter]
                            </span>{" "}
                        </p>
                        <p>final billed</p>
                        <p>palemetto, south east medicare</p>
                        <p>2/10/2022</p>
                    </div>
                </aside>
                <aside className="flex space-x-3">
                    <div className="text-right font-bold">
                        <h1>start of care:</h1>
                        <h1>patient responsiilty:</h1>
                        <h1>payer contact:</h1>
                        <h1>from /to:</h1>
                    </div>
                    <div>
                        <p>2/10/2022</p>
                        <p>$0.00</p>
                        <p>wayne peters</p>
                        <p>2/10/2022</p>
                    </div>
                </aside>
                <aside className="flex space-x-3">
                    <div className="text-right font-bold">
                        <h1>total charges:</h1>
                        <h1>adjusted amount:</h1>
                        <h1>cash applied:</h1>
                        <h1>balance:</h1>
                    </div>
                    <div>
                        <p>$6,544.00</p>
                        <p>$2,000.00</p>
                        <p>$1000.00</p>
                        <p>$500.00</p>
                    </div>
                </aside>
            </section>
            <section className="">
                <ul className="flex w-full  items-center ">
                    {tabs.map((val, i) => (
                        <li
                            key={i}
                            onClick={() => setactive(val.name)}
                            className={`relative flex  items-center p-1  px-3  text-center after:absolute after:bottom-0 after:top-0 after:right-0 after:left-0 after:block  after:skew-x-[15deg] after:rounded-t-md after:border-2 after:border-l-0 after:border-gray-300 first:rounded first:border-l-2 ${
                                active == val.name && "b pb-1 after:border-b-0 "
                            }`}
                        >
                            <span className="mr-2">{val.icon}</span>
                            {val.name}
                        </li>
                    ))}
                </ul>

                <section className="border-2 border-t-0">
                    {renderTab(active)}
                </section>
            </section>
        </div>
    );
};

export default InvoiceDetail;

function renderTab(tab) {
    switch (tab) {
        case "services":
            return <Services />;
        case "notes":
            return <Notes />;
        case "ar transactions":
            return <ArTransaction />;
        case "payer codes":
            return <Payer />;
        case "pdgm":
            return <Pdgm />;
        case "errors":
            return <Errors />;
        default:
            return <Services />;
    }
}
