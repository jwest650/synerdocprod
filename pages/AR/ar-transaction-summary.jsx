import React from "react";
import { summary } from "../../assets/ardata";

const ARTransactionSummary = () => {
    return (
        <div className="ar space-y-4 p-5">
            <section className="flex items-center justify-between capitalize">
                <h1>A/R TransactionSummary</h1>
                <div className="flex items-center space-x-3">
                    <div className="">
                        <label htmlFor="" className="w-fit">
                            unapplied reciept to date:
                        </label>
                        <input
                            type="text"
                            placeholder="$10.00"
                            className="w-20 bg-transparent pl-2"
                        />
                    </div>
                    <div className="space-x-2">
                        <select name="" id="" className="rounded text-black">
                            <option value="pdf">PDF Summary</option>
                        </select>
                        <button className="rounded border  px-2">Export</button>
                    </div>
                </div>
            </section>

            <section className="mx-auto flex w-[90%] items-center space-x-60 ">
                <aside className="space-y-2 capitalize ">
                    <div className="space-x-2">
                        <label htmlFor="">revnue date from:</label>
                        <input
                            type="date"
                            name=""
                            id=""
                            className=" bg-gray-200 text-black"
                        />
                        <label htmlFor="">to:</label>
                        <input
                            type="date"
                            name=""
                            id=""
                            className=" bg-gray-200 text-black"
                        />
                    </div>
                    <div className="space-x-2">
                        <label htmlFor="">
                            extend remit payment through date:
                        </label>
                        <input
                            type="date"
                            name=""
                            id=""
                            className=" bg-gray-200 text-black"
                        />
                    </div>
                </aside>
                <aside className="space-y-2 capitalize">
                    <div className="space-x-2">
                        <label htmlFor="">agency:</label>
                        <select
                            name=""
                            id=""
                            className="w-[200px] bg-gray-200 text-black"
                        >
                            <option value="all">all</option>
                        </select>
                    </div>
                    <div className="space-x-2">
                        <label htmlFor="">report by:</label>
                        <select
                            name=""
                            id=""
                            className="w-[200px] bg-gray-200 text-black"
                        >
                            <option value="payer">payer category</option>
                        </select>
                    </div>
                </aside>
            </section>
            <div className="ml-auto mr-10 w-fit rounded border p-1 px-2">
                {" "}
                <button>Search</button>
            </div>
            <hr />
            <section>
                <table className="w-full">
                    <thead className="capitalize">
                        <th>agency</th>
                        <th>begining balance</th>
                        <th>revenue amount</th>
                        <th>payment amount</th>
                        <th>ending balance</th>
                        <th>dso</th>
                    </thead>
                    <tbody>
                        {summary.map((value, i) => (
                            <tr key={i}>
                                <td>{value.agency}</td>
                                <td>{value.beginingBalance}</td>
                                <td>{value.rAmount}</td>
                                <td>{value.payment}</td>
                                <td>{value.ending}</td>
                                <td>{value.dso}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default ARTransactionSummary;
