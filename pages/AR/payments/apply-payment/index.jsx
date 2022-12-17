import { Input, Select } from "@chakra-ui/react";
import React from "react";
import { BsPlus } from "react-icons/bs";

const ApplyPayment = () => {
    return (
        <div className="ar bodytext space-y-3 capitalize">
            <header>
                <h1 className="head font-bold">Apply Payment</h1>
            </header>
            <section className="flex  w-full items-center justify-between">
                <aside className="flex space-x-5 ">
                    <div className="space-y-2 text-right">
                        <h1 className="font-bold">check/reference #:</h1>
                        <h1 className="font-bold">payment source:</h1>
                    </div>
                    <div className="space-y-2">
                        <p>2555578</p>
                        <p>palmetto - southeast medicare</p>
                    </div>
                </aside>
                <aside className="flex space-x-5 ">
                    <div className="space-y-2 text-right">
                        <h1 className="font-bold">remit date:</h1>
                        <h1 className="font-bold">note:</h1>
                    </div>
                    <div className="space-y-2">
                        <p>04/03/2022</p>
                        <div className="flex">
                            <p>88544333</p>
                            <button className="create-btn ml-2 flex items-center space-x-1">
                                <BsPlus className="scale-150" />
                                <span className="">Add Note</span>
                            </button>
                        </div>
                    </div>
                </aside>
                <aside className="flex space-x-5 ">
                    <div className="space-y-2 text-right">
                        <h1 className="font-bold">payment amount:</h1>
                        <h1 className="font-bold">applied to non-invoices:</h1>
                        <h1 className="font-bold">applied to invoices:</h1>
                        <h1 className="font-bold">balance:</h1>
                    </div>
                    <div className="space-y-2">
                        <p>$125.00</p>
                        <p>$0.00</p>
                        <p>$0.00</p>
                        <p>$125.00</p>
                    </div>
                </aside>
            </section>
            <section className="flex items-center justify-between">
                <aside className="flex space-x-2">
                    <label htmlFor="" className="font-bold">
                        status:
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
                </aside>
                <aside className="flex space-x-4">
                    <Input
                        size={"xs"}
                        type="text"
                        className="input-shadow"
                        w={120}
                        placeholder="Enter Invoice #"
                    />
                    <Input
                        size={"xs"}
                        type="text"
                        className="input-shadow"
                        w={220}
                        placeholder="Enter Patient First or Last Name"
                    />
                    <Input
                        size={"xs"}
                        type="text"
                        className="input-shadow"
                        w={130}
                        placeholder="Enter Payer name"
                    />
                </aside>
                <aside>
                    <button className="btn">Find invoice</button>
                </aside>
            </section>
            <section>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>invoice</th>
                            <th>patient name</th>
                            <th>range</th>
                            <th>charges</th>
                            <th>adjustment</th>
                            <th>payments</th>
                            <th>balance</th>
                            <th>
                                <input type={"checkbox"} />
                            </th>
                            <th>amt to apply</th>
                            <th>responsible payer</th>
                            <th>applied</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((val, i) => (
                            <tr key={i}>
                                <td className="text-right text-orange-500">
                                    {val.invoice}
                                </td>
                                <td>{val.name}</td>
                                <td>{val.range}</td>
                                <td>{val.charge}</td>
                                <td>{val.adj}</td>
                                <td>{val.pay}</td>
                                <td>{val.balance}</td>
                                <td className="text-center">
                                    <input type={"checkbox"} />
                                </td>
                                <td>
                                    <Select size="xs" className="input-shadow">
                                        <option value="">{val.amt}</option>
                                    </Select>
                                </td>
                                <td>
                                    <Select size="xs" className="input-shadow">
                                        <option value="">{val.payer}</option>
                                    </Select>
                                </td>
                                <td>{val.applied}</td>
                            </tr>
                        ))}
                        <tr className="border-none  text-right font-bold">
                            <td colSpan={7} className="border-none "></td>
                            <td
                                colSpan={2}
                                className="space-x-1 border-none py-2"
                            >
                                <label htmlFor="">total applied:</label>
                                <Input
                                    w={120}
                                    type="text"
                                    className="input-shadow"
                                    size="xs"
                                />
                            </td>
                            <td colSpan={2} className="border-none"></td>
                        </tr>
                        <tr className="text-right font-bold">
                            <td colSpan={7} className="border-none"></td>
                            <td colSpan={2} className="space-x-1 border-none">
                                <label htmlFor="">payment balance:</label>
                                <Input
                                    w={120}
                                    type="text"
                                    className="input-shadow"
                                    size="xs"
                                />
                            </td>
                            <td colSpan={2} className="border-none"></td>
                        </tr>
                        <tr>
                            <td
                                colSpan={11}
                                className="space-x-3 border-none text-right"
                            >
                                <button className="btn">Apply</button>
                                <button className="btn">Clear all</button>
                                <button className="btn">Cancel</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <div className="flex justify-end space-x-3"></div>
        </div>
    );
};

export default ApplyPayment;
const data = [
    {
        invoice: "1",
        name: "jame bond",
        range: "09/01 - 08/04/2022",
        charge: "$20,000.00",
        adj: "$300.00",
        pay: "$300.00",
        balance: "$800.00",
        amt: "0.00",
        payer: "bscla",
        applied: "$0.00",
    },
];
