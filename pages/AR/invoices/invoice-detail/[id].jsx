import React from "react";
import { ImBook } from "react-icons/im";
import { VscError } from "react-icons/vsc";
import { AiOutlineFileAdd } from "react-icons/ai";
import { FaUserGraduate } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { CiMail } from "react-icons/ci";
import { HiOutlineQrcode } from "react-icons/hi";
import Services from "./tabs/Services";
import ArTransaction from "./tabs/ArTransaction";
import Notes from "./tabs/Notes";
import Payer from "./tabs/Payer";
import Errors from "./tabs/Errors";
import { useRouter } from "next/router";
import PayerInvoice from "../../../../components/ar/modals/PayerInvoice";
import GrossAdjustment from "../../../../components/ar/modals/GrossAdjustment";

const InvoiceDetail = () => {
    const router = useRouter();
    const changeTab = (val) => {
        router.push(`${val}`);
    };
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
            name: "errors",
            icon: <VscError />,
        },
    ];
    return (
        <div className="ar bodytext space-y-4 capitalize">
            <section className="flex w-full items-center justify-between">
                <div className="flex items-center">
                    <ImBook className=" mr-2 inline text-xl" />
                    <h1 className="head ">carter, melinda</h1>
                </div>
                <div className="flex items-center space-x-24">
                    <PayerInvoice />
                    <div className="flex items-center ">
                        {" "}
                        <AiOutlineFileAdd className=" inline-block text-lg" />
                        <GrossAdjustment />
                    </div>
                </div>

                <h1 className="head text-green-500">invoice</h1>
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
                <ul className=" flex w-full  items-center ">
                    {tabs.map((val, i) => (
                        <li
                            key={i}
                            onClick={() => changeTab(val.name)}
                            className={`relative flex  items-center p-1  px-3  text-center after:absolute after:bottom-0 after:top-0 after:right-0 after:left-0 after:block  after:skew-x-[20deg] after:rounded-t-md after:border-2 after:border-l-0 after:border-gray-300 first:rounded first:border-l-2 ${
                                router.query.id == val.name &&
                                "  after:border-b-0"
                            }`}
                        >
                            <span className="mr-2">{val.icon}</span>
                            {val.name}
                        </li>
                    ))}
                </ul>
                <section className="border-2 bg-white">
                    {renderTab(router.query?.id)}
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

        case "errors":
            return <Errors />;
        default:
            return <Services />;
    }
}
