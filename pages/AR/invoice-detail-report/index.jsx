import { Input, Select } from "@chakra-ui/react";
import React from "react";
import { FcCalendar } from "react-icons/fc";

import { invoiceDetail } from "../../../assets/ardata";

const InvoiceDetailReport = () => {
    return (
        <div className="ar  bodytext space-y-2 p-5 capitalize">
            <section>
                <h1 className="head">Invoice Detail Report</h1>
                <hr />
                <div className="ml-auto mt-2 flex w-52 space-x-2">
                    <Select
                        placeholder="Select option"
                        className="input-shadow"
                        size="xs"
                        w={130}
                    >
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </Select>
                    <button className="btn">Export</button>
                </div>
                <div className="flex space-x-2">
                    <label htmlFor="" className="font-bold">
                        Agency:
                    </label>
                    <Select
                        placeholder="Select option"
                        className="input-shadow"
                        size="xs"
                        w={130}
                    >
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </Select>
                </div>
                <section className="mt-2 flex items-center justify-between space-x-2">
                    <div className="flex space-x-2">
                        <label htmlFor="" className="font-bold">
                            payer:
                        </label>
                        <Select
                            placeholder="Select option"
                            className="input-shadow"
                            size="xs"
                            w={130}
                        >
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="inv-from" className="font-bold">
                            invoice dates from:
                        </label>
                        <Input
                            className="input-shadow"
                            w={130}
                            type="date"
                            size="xs"
                            id="inv-from"
                        />
                        <label htmlFor="inv-from">
                            <FcCalendar className="text-xl" />
                        </label>
                        <label htmlFor="inv-to" className="font-bold">
                            to:
                        </label>
                        <Input
                            className="input-shadow"
                            w={130}
                            type="date"
                            size="xs"
                            id="inv-to"
                        />
                        <label htmlFor="inv-to">
                            <FcCalendar className="text-xl" />
                        </label>
                        <div className="space-x-1">
                            <Input
                                className="input-shadow"
                                w={200}
                                type="text"
                                size="xs"
                                placeholder="Enter first or last name"
                            />
                            <button className="btn">Search</button>
                        </div>
                    </div>
                </section>
            </section>
            {/* table */}
            <section>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>patient name</th>
                            <th>payer</th>
                            <th>invoice</th>
                            <th>service date</th>
                            <th>service description</th>
                            <th>units</th>
                            <th>total charges</th>
                            <th>total adjusted</th>
                            <th>total expected</th>
                            <th>payments</th>
                            <th>payment source</th>
                            <th>last remit date</th>
                            <th>balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoiceDetail.map((value, i) => (
                            <tr key={i}>
                                <td>{value.name}</td>
                                <td>{value.payer}</td>
                                <td>{value.invoice}</td>
                                <td>{value.service}</td>
                                <td>{value.desc}</td>
                                <td>{value.unit}</td>
                                <td>{value.charge}</td>
                                <td>{value.adj}</td>
                                <td>{value.exp}</td>
                                <td>{value.pay}</td>
                                <td>{value.source}</td>
                                <td>{value.remit}</td>
                                <td>{value.balance}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default InvoiceDetailReport;
