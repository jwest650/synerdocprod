import { Button, Input, Select } from "@chakra-ui/react";
import React from "react";
import { summary } from "../../../assets/ardata";

const ARTransactionSummary = () => {
    return (
        <div className="ar  bodytext h-full space-y-4 p-5">
            <section className="flex items-center justify-between capitalize">
                <h1 className="head text-2xl font-bold">
                    A/R TransactionSummary
                </h1>
                <div className="flex items-center space-x-3">
                    <div className="">
                        <label htmlFor="" className="w-fit">
                            unapplied reciept to date:
                        </label>
                        <Input
                            size="xs"
                            w={120}
                            placeholder={"$10.00"}
                            _placeholder={{ opacity: 1, color: "orange.500" }}
                        />
                    </div>
                    <div>
                        <Select placeholder="Select option" size="xs" w={120}>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </div>
                </div>
            </section>

            <section className="flex w-full items-end space-x-[200px] pl-14 ">
                <aside className="space-y-2 capitalize ">
                    <div className="space-x-2">
                        <label htmlFor="">revenue date from:</label>
                        <Input
                            w={120}
                            type="date"
                            size="xs"
                            placeholder="default placeholder"
                        />
                        <label htmlFor="">to:</label>
                        <Input
                            w={120}
                            type="date"
                            size="xs"
                            placeholder="default placeholder"
                        />
                    </div>
                    <div className="flex space-x-2">
                        <label htmlFor="">
                            extend remit payment through date:
                        </label>
                        <Input
                            w={120}
                            type="date"
                            size="xs"
                            placeholder="default placeholder"
                        />
                    </div>
                </aside>
                <aside className="space-y-2 capitalize">
                    <div className="flex space-x-2">
                        <label htmlFor="">agency:</label>
                        <Select placeholder="Select option" size="xs" w={120}>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </div>
                    <div className="flex space-x-2">
                        <label htmlFor="">report by:</label>
                        <Select placeholder="Select option" size="xs" w={120}>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </div>
                </aside>
                <div className="ml-auto  ">
                    <Button variant="outline" size="sm">
                        Search
                    </Button>
                </div>
            </section>

            <hr />
            <section>
                <table className="w-full">
                    <thead className="capitalize">
                        <tr>
                            <th className=" border-gray-100  pl-2 text-left">
                                agency
                            </th>
                            <th className=" border-gray-100  pl-2 text-left">
                                begining balance
                            </th>
                            <th className=" border-gray-100  pl-2 text-left">
                                revenue amount
                            </th>
                            <th className=" border-gray-100  pl-2 text-left">
                                payment amount
                            </th>
                            <th className=" border-gray-100  pl-2 text-left">
                                ending balance
                            </th>
                            <th className=" border-gray-100  pl-2 text-left">
                                dso
                            </th>
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
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default ARTransactionSummary;
