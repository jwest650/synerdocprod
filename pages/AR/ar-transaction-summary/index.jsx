import { Button, Input, Select } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FcCalendar, FcSearch } from "react-icons/fc";
import { summary } from "../../../assets/ardata";
import DateCalender from "../../../components/ar/DateCalender";

const ARTransactionSummary = () => {
    const router = useRouter();

    return (
        <div className="ar  bodytext h-full space-y-4 p-5">
            <section className="flex items-center justify-between capitalize">
                <h1 className="head">A/R Transaction Summary</h1>
                <div className="flex items-center space-x-3">
                    <div className="space-x-2">
                        <label htmlFor="" className="w-fit font-bold">
                            unapplied reciept to date:
                        </label>
                        <Input
                            size="xs"
                            w={130}
                            border={"none"}
                            placeholder={"$10.00"}
                            _placeholder={{ opacity: 1, color: "orange.500" }}
                        />
                    </div>
                    <div>
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

                            <DateCalender />
                        </div>

                        <div className="flex items-center">
                            <label htmlFor="" className="pr-2 font-bold">
                                to:
                            </label>
                            <DateCalender />
                        </div>
                    </div>
                    <div className="flex items-center ">
                        <label htmlFor="" className="pr-2 font-bold">
                            extend remit payment through date:
                        </label>
                        <DateCalender />
                    </div>
                </aside>
                <aside className="space-y-2 capitalize">
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
                            report by:
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
                                <td className="text-center">
                                    <Link
                                        href={`${router.asPath}/ar-transaction-details/revenue`}
                                    >
                                        <FcSearch className="mx-auto inline-block text-xl" />
                                    </Link>
                                    <Link
                                        href={`${router.asPath}/ar-transaction-report`}
                                    >
                                        <FcSearch className="mx-auto inline-block text-xl" />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <th></th>
                            <th>{"$489.00"}</th>
                            <th>{0}</th>
                            <th>{0}</th>
                            <th>{0}</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default ARTransactionSummary;
