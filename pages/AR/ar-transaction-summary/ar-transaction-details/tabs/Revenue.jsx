import { Radio, Select, RadioGroup, Input } from "@chakra-ui/react";
import React from "react";

const Revenue = () => {
    return (
        <div className=" ar bodytext space-y-2 p-5 ">
            <section className="flex items-center justify-between">
                <div className=" font-bold capitalize">
                    <RadioGroup defaultValue="1" className="space-x-2">
                        <label htmlFor="">
                            <Radio
                                type={"radio"}
                                value="1"
                                className="input-shadow"
                            />{" "}
                            summary only
                        </label>
                        <label htmlFor="">
                            <Radio
                                type={"radio"}
                                value="2"
                                className="input-shadow"
                            />{" "}
                            payer details
                        </label>
                        <label htmlFor="">
                            <Radio
                                type={"radio"}
                                value="3"
                                className="input-shadow"
                            />{" "}
                            service details
                        </label>
                    </RadioGroup>
                </div>
                <div className="flex items-center space-x-2">
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
                    <button className="btn">Export</button>
                </div>
            </section>
            <section>
                <table className="w-full capitalize">
                    <thead className="">
                        <tr>
                            <th>payer category</th>
                            <th>service category</th>
                            <th>adjustment reaon</th>
                            <th>amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-[#c6d8ffe1]">
                            <td>
                                <Select
                                    placeholder="Select option"
                                    className="input-shadow"
                                    size="xs"
                                >
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Select>
                            </td>
                            <td>
                                <Select
                                    placeholder="Select option"
                                    className="input-shadow"
                                    size="xs"
                                >
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Select>
                            </td>
                            <td>
                                <Select
                                    placeholder="Select option"
                                    className="input-shadow"
                                    size="xs"
                                >
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Select>
                            </td>
                            <td></td>
                        </tr>

                        {data.map((val, i) => (
                            <tr key={i}>
                                <td>{val.payer}</td>
                                <td>{val.service}</td>
                                <td>{val.adj}</td>
                                <td>{val.amt}</td>
                            </tr>
                        ))}
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th className="pl-2 text-left">$80,000.00</th>
                        </tr>

                        <tr className="bg-[#eeeeee]">
                            <td colSpan={4}>
                                Displaying pages 1 of 1, row 1 of 1 to 10 | Rows
                                Per Page{" "}
                                <input
                                    type="number"
                                    className="ml-1 w-10 border text-center text-[black]"
                                    placeholder={`${data.length}`}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default Revenue;

const data = [
    {
        payer: "medicare",
        service: "home health aid",
        adj: "sales adjustment",
        amt: "$20,000.00",
    },
    {
        payer: "medicare",
        service: "home health aid",
        adj: "sales adjustment",
        amt: "$20,000.00",
    },
    {
        payer: "medicare",
        service: "home health aid",
        adj: "sales adjustment",
        amt: "$20,000.00",
    },
    {
        payer: "medicare",
        service: "home health aid",
        adj: "sales adjustment",
        amt: "$20,000.00",
    },
];
