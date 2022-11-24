import { Input, Select } from "@chakra-ui/react";
import React from "react";
import { capData, invoice } from "../../../assets/ardata";
import { FcCalendar } from "react-icons/fc";
const CapSupportData = () => {
    return (
        <div className="ar bodytext space-y-4 p-5 capitalize">
            <section className="space-y-2">
                <header>
                    <h1 className="head ">Cap Support Data</h1>
                    <div className="flex justify-end  space-x-1">
                        <Select placeholder="Select option" size="xs" w={130}>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                        <button className="btn">Export</button>
                    </div>
                </header>
                <article className="flex justify-between">
                    <aside className="space-y-2">
                        <div className="flex   space-x-1">
                            <label htmlFor="" className="font-bold">
                                agency:
                            </label>
                            <Select
                                placeholder="Select option"
                                size="xs"
                                w={130}
                            >
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </Select>
                        </div>
                        <div className="flex   space-x-1">
                            <label htmlFor="" className="font-bold">
                                reporting groups:
                            </label>
                            <Select
                                placeholder="Select option"
                                size="xs"
                                w={130}
                            >
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </Select>
                        </div>
                    </aside>
                    <aside>
                        <div className="flex items-center space-x-2">
                            <label htmlFor="dates" className="font-bold">
                                {" "}
                                <span className="text-orange-500">*</span> dates
                                range:
                            </label>
                            <Input w={130} type="text" size="xs" id="dates" />
                            <label htmlFor="dates" className="font-bold">
                                {" "}
                                <FcCalendar className="text-xl" />
                            </label>
                            <label htmlFor="dates-to" className="font-bold">
                                to:
                            </label>
                            <Input
                                w={130}
                                type="text"
                                size="xs"
                                id="dates-to"
                            />
                            <label htmlFor="dates-to" className="font-bold">
                                <FcCalendar className="text-xl" />
                            </label>
                        </div>
                    </aside>
                    <div className="self-end">
                        <button className="btn">Search</button>
                    </div>
                </article>
            </section>
            {/* table */}
            <section>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>patient name</th>
                            <th>agency</th>
                            <th>country</th>
                            <th>cbsa</th>
                            <th>cms start date</th>
                            <th>soc</th>
                            <th>discharge</th>
                            <th>cap days</th>
                            <th>dollar billed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {capData.map((value, i) => (
                            <tr key={i}>
                                <td>{value.name}</td>
                                <td>{value.agency}</td>
                                <td>{value.country}</td>
                                <td>{value.cbsa}</td>
                                <td>{value.cms}</td>
                                <td>{value.soc}</td>
                                <td>{value.discharge}</td>
                                <td>{value.cap}</td>
                                <td>{value.billed}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default CapSupportData;
