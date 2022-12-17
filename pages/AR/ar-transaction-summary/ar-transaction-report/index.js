import { Select } from "@chakra-ui/react";
import React from "react";
import DateCalender from "../../../../components/ar/DateCalender";

const ArTransactionReport = () => {
    return (
        <div className="ar bodytext space-y-2 p-5">
            <section className="space-y-2">
                <div className="capitalize">
                    <h1 className="head">
                        agency a/r transaction report by summary
                    </h1>
                    <p>sinam care, LLC</p>
                </div>
                <article className="flex items-end justify-between ">
                    <aside className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <label htmlFor="" className="font-bold capitalize">
                                revenue dates from:
                            </label>
                            <DateCalender />
                            <label htmlFor="" className="font-bold">
                                {" "}
                                to:
                            </label>
                            <DateCalender />
                        </div>
                        <div className="flex items-center space-x-2">
                            <label htmlFor="" className="font-bold capitalize">
                                extend remit payments through date:
                            </label>
                            <DateCalender />
                        </div>
                    </aside>
                    <aside>
                        <div className="flex items-center space-x-2">
                            <label htmlFor="" className="font-bold capitalize">
                                report by:
                            </label>
                            <Select
                                placeholder="Select option"
                                className="input-shadow"
                                w={130}
                                size="xs"
                            >
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </Select>
                        </div>
                    </aside>
                    <aside>
                        <div>
                            <button className="btn">Search</button>
                        </div>
                    </aside>
                </article>
                <hr />
            </section>
            <section>
                <table className="w-full capitalize">
                    <thead>
                        <tr>
                            <th>payer category</th>
                            <th>begining balance</th>
                            <th>revenue amt</th>
                            <th>payment amt</th>
                            <th>ending balance</th>
                            <th>DSO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((val, i) => (
                            <tr key={i}>
                                <td>{val.payer}</td>
                                <td>{val.beginning}</td>
                                <td>{val.revenue}</td>
                                <td>{val.payment}</td>
                                <td>{val.ending}</td>
                                <td>{val.dso}</td>
                            </tr>
                        ))}
                        <tr>
                            <th></th>
                            <th>$30,000.00</th>
                            <th>$8,000.00</th>
                            <th>$0.00</th>
                            <th>$20,000.00</th>
                            <th></th>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default ArTransactionReport;
const data = [
    {
        payer: "medicare",
        beginning: "$30,000.00",
        revenue: "$2,600.00",
        payment: "$0.00",
        ending: "$20,000.00",
        dso: "$113.13",
    },
];
