import React from "react";
import { BsPlus } from "react-icons/bs";
import { Input, Select } from "@chakra-ui/react";
import { GoNote } from "react-icons/go";

const NotesTab = () => {
    return (
        <div>
            <section className="flex items-center justify-between py-2">
                <h1 className="text-xl font-bold">Notes</h1>
                <button className="flex items-center capitalize text-orange-500 underline ">
                    <BsPlus className="text-xl text-green-500" />
                    add note
                </button>
                <aside className="flex items-center space-x-2">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="">Type:</label>
                        <Select size={"xs"}>
                            <option value="">All</option>
                        </Select>
                    </div>
                    <div className="flex items-center space-x-1">
                        <label htmlFor="">From:</label>
                        <Input size={"xs"} type={"text"} />
                        <label htmlFor="">To:</label>
                        <Input size={"xs"} type={"text"} />
                    </div>
                </aside>
                <aside className="flex items-center space-x-2">
                    <input type={"checkbox"} />
                    <label htmlFor="">show inactive</label>
                    <div className="flex items-center space-x-3">
                        <Input
                            size={"xs"}
                            type={"text"}
                            placeholder="Search by keyword"
                        />
                        <button className="border px-3">Search</button>
                    </div>
                </aside>
            </section>
            {/* table */}
            <section>
                <table className="w-full capitalize">
                    <thead>
                        <tr>
                            <th className="w-10"></th>
                            <th className="w-52">date</th>
                            <th className="w-52">type</th>
                            <th>note</th>
                            <th className="w-20"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {obj.map((value, i) => (
                            <tr key={i}>
                                <td className="border border-[#a0a0a0] ">
                                    {" "}
                                    <GoNote className="text-xl " />
                                </td>
                                <td className="border border-[#a0a0a0] text-orange-500 ">
                                    {value.date}
                                </td>
                                <td className="border border-[#a0a0a0] text-orange-500">
                                    {value.type}
                                </td>
                                <td className="border border-[#a0a0a0] text-orange-500">
                                    {value.note}
                                </td>
                                <td className="border border-[#a0a0a0]"></td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={5}>displaying 1 0f 1</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default NotesTab;

const obj = [
    {
        date: "10/10/19 10:32 -cst",
        type: "uploaded document",
        note: "document uploaded",
    },
    {
        date: "10/10/19 10:32 -cst",
        type: "uploaded document",
        note: "document uploaded",
    },
    {
        date: "10/10/19 10:32 -cst",
        type: "uploaded document",
        note: "document uploaded",
    },
];
