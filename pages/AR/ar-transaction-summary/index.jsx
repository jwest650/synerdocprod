import { Button, Input, Select } from "@chakra-ui/react";
import React from "react";
import { FcCalendar, FcSearch } from "react-icons/fc";
import { summary } from "../../../assets/ardata";

const ARTransactionSummary = () => {
    return (
        <div className="ar  bodytext h-full space-y-4 p-5">
            <section className="flex items-center justify-between capitalize">
                <h1 className="head">A/R TransactionSummary</h1>
                <div className="flex items-center space-x-3">
                    <div className="space-x-2">
                        <label htmlFor="" className="w-fit font-bold">
                            unapplied reciept to date:
                        </label>
                        <Input
                            size="xs"
                            w={130}
                            placeholder={"$10.00"}
                            _placeholder={{ opacity: 1, color: "orange.500" }}
                        />
                    </div>
                    <div>
                        <Select placeholder="Select option" size="xs" w={130}>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </div>
                    <div>
                        <button className="btn">Export</button>
                    </div>
                </div>
            </section>

            <section className="flex w-full items-center justify-between pl-12 ">
                <aside className="space-y-2 capitalize ">
                    <div className="flex items-end space-x-2">
                        <div className="flex items-center">
                            <label htmlFor="revenue" className="pr-2 font-bold">
                                revenue date from:
                            </label>
                            <Input
                                id="revenue"
                                w={130}
                                type="date"
                                size="xs"
                                placeholder="11/04/2022"
                            />
                            <label htmlFor="revenue">
                                <FcCalendar className="text-xl" />
                            </label>
                        </div>

                        <div className="flex items-center">
                            <label htmlFor="" className="pr-2 font-bold">
                                to:
                            </label>
                            <Input
                                id="revenue-to"
                                w={130}
                                type="date"
                                size="xs"
                                placeholder="default placeholder"
                            />
                            <label htmlFor="revenue-to">
                                <FcCalendar className="text-xl" />
                            </label>
                        </div>
                    </div>
                    <div className="flex items-center ">
                        <label htmlFor="" className="pr-2 font-bold">
                            extend remit payment through date:
                        </label>
                        <Input
                            id="extend"
                            w={130}
                            type="date"
                            size="xs"
                            placeholder="default placeholder"
                        />
                        <label htmlFor="extend">
                            <FcCalendar className="text-xl" />
                        </label>
                    </div>
                </aside>
                <aside className="space-y-2 capitalize">
                    <div className="flex space-x-2">
                        <label htmlFor="" className="font-bold">
                            agency:
                        </label>
                        <Select placeholder="Select option" size="xs" w={130}>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </div>
                    <div className="flex space-x-2">
                        <label htmlFor="" className="font-bold">
                            report by:
                        </label>
                        <Select placeholder="Select option" size="xs" w={130}>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </div>
                </aside>
                <div className="self-end">
                    <button className="btn">Search</button>
                </div>
            </section>

            <hr />
            <section>
                <table className="w-full">
                    <thead className="capitalize">
                        <tr>
                            <th>agency name</th>
                            <th>begining balance</th>
                            <th>revenue amount</th>
                            <th>payment amount</th>
                            <th>ending balance</th>
                            <th>dso</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {summary.map((value, i) => (
                            <tr key={i}>
                                <td>{value.agency}</td>
                                <td>{value.beginingBalance}</td>
                                <td>{value.rAmount}</td>
                                <td>{value.payment}</td>
                                <td>{value.ending}</td>
                                <td>{value.dso}</td>
                                <td>
                                    <FcSearch className="mx-auto text-xl" />
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td className="bg-[#0141cf] text-white"></td>
                            <td className="bg-[#0141cf] text-white">
                                {"$489.00"}
                            </td>
                            <td className="bg-[#0141cf] text-white">{0}</td>
                            <td className="bg-[#0141cf] text-white">{0}</td>
                            <td className="bg-[#0141cf] text-white">{0}</td>
                            <td className="bg-[#0141cf] text-white"></td>
                            <td className="bg-[#0141cf] text-white"></td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default ARTransactionSummary;
