import { Input, Select } from "@chakra-ui/react";
import React from "react";
import { BsPlus } from "react-icons/bs";
import { RiBook2Fill } from "react-icons/ri";
import { physiciansData } from "../../assets/data";
import CreatePhysicians from "../dashboard/CreatePhysicians";

const Physicians = () => {
    return (
        <div>
            <section className="flex items-center justify-between">
                <div className="flex  space-x-2">
                    <h1 className="text-xl font-bold ">Physicians</h1>
                    <CreatePhysicians />
                </div>
                <div className="flex items-center justify-between space-x-2">
                    <div>
                        <Select placeholder="Select option" size="xs" w={120}>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </div>
                    <button className="border p-1 px-3 text-sm">Export</button>
                </div>
                <div className="space-x-2">
                    <Input
                        w={200}
                        type="text"
                        size="sm"
                        placeholder="Enter first or lastname"
                    />
                    <button className="border p-1 px-3">Search</button>
                </div>
            </section>

            {/* table */}
            <section>
                <table className="mt-10 min-w-full overflow-auto capitalize">
                    <thead className="border-b bg-[#32164A] text-[18px] tracking-wider text-white">
                        <tr>
                            <th className=" border-gray-100  pl-2 text-left"></th>
                            <th className=" border-gray-100 pl-2 text-left">
                                Patient Name
                            </th>
                            <th className=" border-gray-100 pl-2 text-left">
                                Email
                            </th>
                            <th className=" border-gray-100 pl-2 text-left">
                                Preferred Number
                            </th>
                            <th className=" border-gray-100 pl-2 text-left">
                                Title
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
                        <tr>
                            <td className="border  border-gray-400"></td>
                            <td className="border  border-gray-400"></td>
                            <td className="border  border-gray-400"></td>
                            <td className="border  border-gray-400"></td>
                            <td className="border  border-gray-400">
                                <Select placeholder="Select option" size="xs">
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Select>
                            </td>
                            <td className="border  border-gray-400">
                                <Select placeholder="Select option" size="xs">
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Select>
                            </td>
                            <td className="border  border-gray-400"></td>
                        </tr>
                        {physiciansData.map((value, i) => (
                            <tr
                                key={i}
                                className={`border  ${
                                    i % 2 === 0 && "bg-[#eeeeee]"
                                } `}
                            >
                                <td className="border  border-gray-400">
                                    <span className="cursor-pointer">
                                        <RiBook2Fill />
                                    </span>
                                </td>
                                <td className="border  border-gray-400">
                                    {value.name}
                                </td>
                                <td className="border  border-gray-400">
                                    {value.email}
                                </td>
                                <td className="border  border-gray-400">
                                    {value.numbers}
                                </td>
                                <td className="border  border-gray-400">
                                    {value.title}
                                </td>
                                <td className="border  border-gray-400">
                                    {value.active}
                                </td>
                                <td></td>
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

export default Physicians;
