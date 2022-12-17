import React from "react";
import { Input, Select } from "@chakra-ui/react";
import { FcCalendar } from "react-icons/fc";
import Filters from "./Filters";
import DateCalender from "../../../components/ar/DateCalender";

const InvoiceServiceSummary = () => {
    return (
        <div className="ar  bodytext space-y-2 p-5 capitalize">
            <section className="space-y-3 ">
                <header className="flex items-center justify-between">
                    <h1 className="head">Invoice Service Summary</h1>
                    <div className=" flex w-52   space-x-1">
                        <Select
                            className="input-shadow"
                            placeholder="Select option"
                            size="xs"
                            w={130}
                        >
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                        <button className="btn">Export</button>
                    </div>
                </header>

                {/* main */}
                <section className="flex items-center justify-around">
                    <div className="flex space-x-1">
                        <label htmlFor="" className="font-bold">
                            {" "}
                            <span className="text-orange-500">*</span> agency:
                        </label>
                        <Select
                            className="input-shadow"
                            placeholder="Select option"
                            size="xs"
                            w={130}
                        >
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </div>
                    <div className="flex items-center space-x-1">
                        <label htmlFor="range" className="font-bold">
                            {" "}
                            <span className="text-orange-500">*</span> date
                            range:
                        </label>
                        <DateCalender />

                        <label htmlFor="range-to" className="font-bold">
                            to:
                        </label>
                        <DateCalender />
                    </div>
                    <div>
                        {" "}
                        <button className="btn">Search</button>
                    </div>
                </section>
                <hr />
            </section>
            <section>
                <Filters />
            </section>
            <section>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>invoice</th>
                            <th>patient name</th>
                            <th>payer group</th>
                            <th>payer name</th>
                            <th>invoice range</th>
                            <th>discharge</th>
                            <th>expected</th>
                            <th>adjustments</th>
                            <th>payments</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="bg-gray-500" colSpan={9}>
                                no records to display
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default InvoiceServiceSummary;
