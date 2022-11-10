import { Input, Select } from "@chakra-ui/react";
import React from "react";
import { RiBook2Fill } from "react-icons/ri";
import { physiciansData } from "../../../assets/data";
import TableAction from "../TableAction";
import CreateReferal from "./CreateReferal";

const ReferralSources = () => {
    return (
        <div>
            <section className="flex justify-between">
                <div className="flex  space-x-2">
                    <h1 className="text-xl font-bold ">Referral Sources</h1>
                    <CreateReferal />
                </div>
                <div className="flex items-center space-x-2">
                    <div>
                        <Select placeholder="Select option" size="xs">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </div>
                    <button className="rounded bg-orange-600 px-2 py-[1px] font-medium text-white">
                        Export
                    </button>
                    <Input
                        w={200}
                        type="text"
                        size="sm"
                        placeholder="Enter referral source name"
                    />
                    <button className="rounded bg-orange-600 px-2 py-[1px] font-medium text-white">
                        Search
                    </button>
                </div>
            </section>
            {/* table */}
            <section>
                <table className="mt-10 min-w-full overflow-auto capitalize">
                    <thead className="border-b bg-[#0141CF]  text-[18px] tracking-wider text-white">
                        <tr>
                            <th className=" border-gray-100  pl-2 text-left"></th>
                            <th className=" border-gray-100 pl-2 text-left">
                                Name
                            </th>
                            <th className=" border-gray-100 pl-2 text-left">
                                referral source
                            </th>
                            <th className=" border-gray-100 pl-2 text-left">
                                Email
                            </th>
                            <th className=" border-gray-100 pl-2 text-left">
                                preferred number
                            </th>
                            <th className=" border-gray-100 pl-2 text-left">
                                Status
                            </th>
                            <th className=" border-gray-100 pl-2 text-left">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-[#CBDBFF]">
                            <td className="border  border-gray-400"></td>
                            <td className="border  border-gray-400"></td>
                            <td className="border  border-gray-400">
                                <Select placeholder="All" size="xs">
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Select>
                            </td>
                            <td className="border  border-gray-400"></td>
                            <td className="border  border-gray-400"></td>
                            <td className="border  border-gray-400">
                                <Select placeholder="All" size="xs">
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Select>
                            </td>
                            <td className="border  border-gray-400"></td>
                        </tr>
                        {obj.map((value, i) => (
                            <tr
                                key={i}
                                className={`border  ${
                                    i % 2 === 0 && "bg-[#eeeeee]"
                                } `}
                            >
                                <td className="border  border-gray-400 py-1 px-3">
                                    <span className="cursor-pointer">
                                        <RiBook2Fill />
                                    </span>
                                </td>
                                <td className="border border-gray-400  py-1 px-3 text-orange-500 underline">
                                    {value.name}
                                </td>
                                <td className="border  border-gray-400 py-1 px-3">
                                    {value.referral}
                                </td>
                                <td className="border  border-gray-400 py-1 px-3">
                                    {value.email}
                                </td>
                                <td className="border  border-gray-400 py-1 px-3">
                                    {value.preferred}
                                </td>
                                <td className="border border-gray-400  py-1 px-3 font-bold text-green-600">
                                    {value.status}
                                </td>
                                <td className=" max-h-[20px] min-w-[120px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium">
                                    <TableAction />
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={8} className="pl-2">
                                displaying page 1 of 1
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default ReferralSources;

const obj = [
    {
        name: "andrew",
        referral: "physician",
        email: "andrewj@gmail.com",
        preferred: "",
        status: "active",
    },
    {
        name: "richmond",
        referral: "physician",
        email: "rich@gmail.com",
        preferred: "",
        status: "active",
    },
    {
        name: "agnes",
        referral: "physician",
        email: "agnes@gmail.com",
        preferred: "",
        status: "active",
    },
];
