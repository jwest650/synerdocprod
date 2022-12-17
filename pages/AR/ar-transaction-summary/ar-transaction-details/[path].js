import { useRouter } from "next/router";
import React from "react";
import Accounts from "./tabs/Accounts";
import Payments from "./tabs/Payments";
import Revenue from "./tabs/Revenue";

const ArTransactionDetails = () => {
    const router = useRouter();
    const changeTab = (val) => {
        router.push(`${val}`);
    };
    console.log(router.query.path);
    return (
        <div className="ar">
            <section>
                <h1 className="head">sinam care, LLC</h1>
                <h1 className="text-right  font-bold text-green-900">
                    Agency A/R Transaction Detail
                </h1>
                <aside className="flex justify-evenly capitalize">
                    <article className="flex items-center space-x-4">
                        <div className="space-y-2 text-right font-bold">
                            <h1>report by:</h1>
                            <h1>revenue date changes:</h1>
                            <h1>extended payment through date:</h1>
                            <h1>angency accounts:</h1>
                        </div>
                        <div className="space-y-2">
                            <p>payer category</p>
                            <p>11/04-22-11/04-22</p>
                            <p>""</p>
                            <p>$0.00</p>
                        </div>
                    </article>
                    <article className="flex items-center space-x-4">
                        <div className="space-y-2 text-right font-bold">
                            <h1>begining balance:</h1>
                            <h1>revenue:</h1>
                            <h1>payments and helping balance:</h1>
                            <h1>ending balance:</h1>
                        </div>
                        <div className="space-y-2">
                            <p>$50,000.00</p>
                            <p>$30,000.00</p>
                            <p>$0.00</p>
                            <p>$30,000.00</p>
                        </div>
                    </article>
                </aside>
            </section>
            <section className="border border-t-0 border-r-0">
                <ul className="flex  items-center border-b capitalize">
                    {tabs.map((val, i) => (
                        <li
                            onClick={() => changeTab(val.name)}
                            key={i}
                            className={`relative px-3 py-1 before:absolute before:top-0  before:right-0 before:left-0 before:bottom-0 before:block before:skew-x-[20deg] before:rounded-t-md before:border before:border-l-0 before:border-b-0`}
                        >
                            {val.name}
                        </li>
                    ))}
                </ul>
                <section className="bg-white">
                    {renderTab(router.query.path)}
                </section>
            </section>
        </div>
    );
};

export default ArTransactionDetails;

const tabs = [
    {
        name: "revenue",
    },
    {
        name: "accounts",
    },
    {
        name: "payment",
    },
];

function renderTab(tab) {
    switch (tab) {
        case "revenue":
            return <Revenue />;
        case "accounts":
            return <Accounts />;
        case "payment":
            return <Payments />;

        default:
            <Revenue />;
    }
}
