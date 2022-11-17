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
                    <div className="space-y-2">
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
                            <button className="ml-2">
                                <BsPlus className="inline text-2xl text-green-500" />
                                <span className=" text-orange-500 underline">
                                    Add Note
                                </span>
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
                    <label htmlFor="">status:</label>
                    <Select placeholder="Select option" size="xs" w={120}>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </Select>
                </aside>
                <aside className="flex space-x-4">
                    <Input
                        size={"xs"}
                        type="text"
                        w={120}
                        placeholder="Enter Invoice #"
                    />
                    <Input
                        size={"xs"}
                        type="text"
                        w={190}
                        placeholder="Enter Patient First or Last Name"
                    />
                    <Input
                        size={"xs"}
                        type="text"
                        w={120}
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
                                <td>
                                    <input type={"checkbox"} />
                                </td>
                                <td>
                                    <Select size="xs">
                                        <option value="">{val.amt}</option>
                                    </Select>
                                </td>
                                <td>
                                    <Select size="xs">
                                        <option value="">{val.payer}</option>
                                    </Select>
                                </td>
                                <td>{val.applied}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="mr-[20%] ml-auto mt-3 flex w-fit items-center space-x-3">
                    <div>
                        <label htmlFor="">total applied:</label>
                        <br />
                        <label htmlFor="">payment balance:</label>
                    </div>

                    <div>
                        <Input w={120} type="text" size="xs" />
                        <br />
                        <Input w={120} type="text" size="xs" />
                    </div>
                </div>
            </section>
            <div className="flex justify-end space-x-3">
                <button className="btn">Apply</button>
                <button className="btn">Clear all</button>
                <button className="btn">Cancel</button>
            </div>
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
