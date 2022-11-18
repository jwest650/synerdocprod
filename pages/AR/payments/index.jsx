import { Input, Select, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BsPlus } from "react-icons/bs";
import { FcCalendar } from "react-icons/fc";
import { AiFillPlusCircle } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import Actions from "../../../components/ar/Actions";
import { useState } from "react";

const Payments = () => {
    const [data, setdata] = useState([...payment]);
    const setRows = (e) => {
        let value = parseInt(e.target.value);
        if (!value) {
            setdata(payment);
        } else {
            setdata(payment.slice(0, value));
        }
        console.log(value);
    };
    return (
        <div className="ar bodytext space-y-3 p-5 capitalize">
            <section className="space-y-5">
                <header className="flex items-center space-x-3">
                    <h1 className="head ">Payments</h1>
                    <div className="create-btn flex cursor-pointer items-center space-x-1">
                        <BsPlus />
                        <Link href="/AR/add-payments">
                            <p className=" text-xs capitalize">add payment</p>
                        </Link>
                    </div>
                </header>
                <article className="flex justify-between">
                    <aside className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <label htmlFor="deposit">deposit dates from:</label>
                            <Input w={130} type="date" size="xs" id="deposit" />
                            <label htmlFor="deposit">
                                <FcCalendar className="text-xl" />
                            </label>
                            <label htmlFor="deposit-to">to:</label>
                            <Input
                                w={130}
                                type="date"
                                size="xs"
                                id="deposit-to"
                            />
                            <label htmlFor="deposit-to">
                                <FcCalendar className="text-xl" />
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <label htmlFor="entry">entry dates from:</label>
                            <Input w={130} type="date" size="xs" id="entry" />
                            <label htmlFor="entry">
                                <FcCalendar className="text-xl" />
                            </label>
                            <label htmlFor="entry-to">to:</label>
                            <Input
                                w={130}
                                type="date"
                                size="xs"
                                id="entry-to"
                            />
                            <label htmlFor="entry-to">
                                <FcCalendar className="text-xl" />
                            </label>
                        </div>{" "}
                        <div className="flex items-center space-x-2">
                            <label htmlFor="remit">remit dates from:</label>
                            <Input w={130} type="date" size="xs" id="remit" />
                            <label htmlFor="remit">
                                <FcCalendar className="text-xl" />
                            </label>
                            <label htmlFor="remit-to">to:</label>
                            <Input
                                w={130}
                                type="date"
                                size="xs"
                                id="remit-to"
                            />
                            <label htmlFor="remit-to">
                                <FcCalendar className="text-xl" />
                            </label>{" "}
                        </div>
                    </aside>
                    <aside className="space-y-4">
                        <div className="flex justify-end space-x-2">
                            <div className="flex  items-center">
                                <Select placeholder="Select option" size="xs">
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Select>
                            </div>
                            <button className="btn">Search</button>
                        </div>
                        <div className="flex justify-end  space-x-1">
                            <label htmlFor="">payment status:</label>
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
                        <div className="flex justify-end space-x-2">
                            <div className="flex items-center  space-x-2">
                                <Input
                                    w={320}
                                    type="text"
                                    size="sm"
                                    placeholder="Enter check or reference number number "
                                />
                                <Input
                                    w={200}
                                    type="text"
                                    size="sm"
                                    placeholder="Enter payment source"
                                />
                            </div>
                            <button className="btn">Search</button>
                        </div>
                    </aside>
                </article>
                <hr />
            </section>
            {/* table */}
            <section>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>remit</th>
                            <th>deposit</th>
                            <th>payment method</th>
                            <th>check / reference number</th>
                            <th>payment source</th>
                            <th>notes</th>
                            <th>amount</th>
                            <th>amount to apply</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>
                                <Select placeholder="Select option" size="xs">
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Select>
                            </td>
                            <td></td>
                            <td>
                                <Select placeholder="Select option" size="xs">
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Select>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        {data.map((value, i) => (
                            <tr key={i}>
                                <td>{value.remit}</td>
                                <td>{value.deposit}</td>
                                <td>{value.payment}</td>
                                <td>{value.check}</td>
                                <td>{value.source}</td>
                                <td>{value.notes}</td>
                                <td>{value.amount}</td>
                                <td>{value.apply}</td>
                                <td>
                                    <Actions
                                        icon1={<CiEdit />}
                                        icon2={<AiFillPlusCircle />}
                                    />
                                </td>
                            </tr>
                        ))}
                        <tr className="bg-primary-color text-white">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>$30,000.00</td>
                            <td>$30,000.00</td>
                            <td></td>
                        </tr>
                        <tr className="bg-[#eeeeee]">
                            <td colSpan="9">
                                displaying page 1 of 1 | rows per page:
                                <input
                                    type="number"
                                    className="ml-1 w-10 border text-center text-[black]"
                                    placeholder={`${payment.length}`}
                                    onChange={setRows}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default Payments;
const payment = [
    {
        remit: "09/04/2022",
        deposit: "09/04/2022",
        payment: "edi",
        check: "128838",
        source: "medicare",
        notes: "",
        amount: "$25 000.00",
        apply: "$2,000.00",
    },
];
