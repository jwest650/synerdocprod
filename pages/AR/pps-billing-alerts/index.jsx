import { Button, Input, Select } from "@chakra-ui/react";

import React from "react";
import { FcCalendar } from "react-icons/fc";

const PpsBillingAlerts = () => {
    return (
        <div className="ar  bodytext h-full space-y-4 p-5">
            <section>
                <h1 className="head">pps billing alert</h1>
                <div className="flex w-full justify-end space-x-2">
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
                    <button className="btn">export</button>
                </div>
            </section>
            <section className="flex items-start justify-between capitalize">
                <aside className="space-y-3">
                    <div className="flex space-x-2">
                        <label htmlFor="" className="font-bold">
                            agency:
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
                    <div className="flex space-x-2">
                        <label htmlFor="" className="font-bold">
                            rap not billed in x days:
                        </label>
                        <Input
                            className="input-shadow"
                            id=""
                            w={50}
                            type="text"
                            size="xs"
                        />
                        <label htmlFor="" className="font-bold">
                            rap not paid in x days:
                        </label>
                        <Input
                            className="input-shadow"
                            id=""
                            w={50}
                            type="text"
                            size="xs"
                        />
                    </div>
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
                </aside>
                <aside className="space-y-3">
                    <div className="flex items-center ">
                        <label htmlFor="" className="pr-2 font-bold">
                            date ranges:
                        </label>
                        <Input
                            className="input-shadow"
                            id="range"
                            w={130}
                            type="date"
                            size="xs"
                            placeholder="default placeholder"
                        />
                        <label htmlFor="range">
                            <FcCalendar className="text-xl" />
                        </label>
                        <label htmlFor="" className="pr-2 font-bold">
                            to:
                        </label>
                        <Input
                            className="input-shadow"
                            id="to"
                            w={130}
                            type="date"
                            size="xs"
                            placeholder="default placeholder"
                        />
                        <label htmlFor="to">
                            <FcCalendar className="text-xl" />
                        </label>
                    </div>
                    <div className="space-x-2">
                        <label htmlFor="" className="font-bold">
                            final not billed in x days:
                        </label>
                        <Input
                            className="input-shadow"
                            id=""
                            w={50}
                            type="text"
                            size="xs"
                        />
                    </div>
                </aside>
                <aside className="space-y-3">
                    <button className="btn ml-auto block">search</button>

                    <div className="space-x-2">
                        <label htmlFor="" className="font-bold">
                            final not paid in x days:
                        </label>
                        <Input
                            className="input-shadow"
                            id=""
                            w={50}
                            type="text"
                            size="xs"
                        />
                    </div>
                </aside>
            </section>
            <section>
                <table className="w-full">
                    <thead className="capitalize">
                        <tr>
                            <th>invoice </th>
                            <th> patient name</th>
                            <th>agency</th>
                            <th>payer name</th>
                            <th>invoice from</th>
                            <th>invoice to</th>
                            <th>status</th>
                            <th>invoice date</th>
                            <th>expected</th>
                            <th>applied</th>
                            <th>alert</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((val, i) => (
                            <tr key={i}>
                                <td>{val.invoice}</td>
                                <td>{val.patient_name}</td>
                                <td>{val.agency}</td>
                                <td>{val.payer_name}</td>
                                <td>{val.invoice_from}</td>
                                <td>{val.invoice_to}</td>
                                <td>{val.status}</td>
                                <td>{val.invoice_date}</td>
                                <td>{val.expected}</td>
                                <td>{val.applied}</td>
                                <td>{val.alert}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

const data = [
    {
        invoice: "185",
        patient_name: "jack brain",
        agency: "sinam care",
        payer_name: "department of vetrans",
        invoice_from: "07/02/22",
        invoice_to: "09/02/22",
        status: "unbilled",
        invoice_date: "",
        expected: "$20,000.00",
        applied: "$7,000.00",
        alert: "rap not billed",
    },
    {
        invoice: "185",
        patient_name: "jack brain",
        agency: "sinam care",
        payer_name: "department of vetrans",
        invoice_from: "07/02/22",
        invoice_to: "09/02/22",
        status: "unbilled",
        invoice_date: "",
        expected: "$20,000.00",
        applied: "$7,000.00",
        alert: "rap not billed",
    },
    {
        invoice: "185",
        patient_name: "jack brain",
        agency: "sinam care",
        payer_name: "department of vetrans",
        invoice_from: "07/02/22",
        invoice_to: "09/02/22",
        status: "unbilled",
        invoice_date: "",
        expected: "$20,000.00",
        applied: "$7,000.00",
        alert: "rap not billed",
    },
    {
        invoice: "185",
        patient_name: "jack brain",
        agency: "sinam care",
        payer_name: "department of vetrans",
        invoice_from: "07/02/22",
        invoice_to: "09/02/22",
        status: "unbilled",
        invoice_date: "",
        expected: "$20,000.00",
        applied: "$7,000.00",
        alert: "rap not billed",
    },
];

export default PpsBillingAlerts;
