import { Input, Select, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BsPlus } from "react-icons/bs";
import { FcCalendar } from "react-icons/fc";
import { AiFillPlusCircle } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import Actions from "../../../components/ar/Actions";
import { useState } from "react";
<<<<<<< HEAD
import DateCalender from "../../../components/ar/DateCalender";
=======

>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
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
                        <BsPlus className="scale-150" />
                        <Link href="/AR/add-payments">
                            <p className=" text-xs capitalize">add payment</p>
                        </Link>
                    </div>
                </header>
                <article className="flex justify-between">
                    <aside className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <label htmlFor="deposit" className="font-bold">
                                deposit dates from:
                            </label>
                            <DateCalender />

                            <label htmlFor="deposit-to" className="font-bold">
                                to:
                            </label>
                            <DateCalender />
                        </div>
                        <div className="flex items-center space-x-2">
                            <label htmlFor="entry" className="font-bold">
                                entry dates from:
                            </label>
                            <DateCalender />

                            <label htmlFor="entry-to" className="font-bold">
                                to:
                            </label>
                            <DateCalender />
                        </div>{" "}
                        <div className="flex items-center space-x-2">
                            <label htmlFor="remit" className="font-bold">
                                remit dates from:
                            </label>
                            <DateCalender />
                            <label htmlFor="remit-to" className="font-bold">
                                to:
                            </label>
                            <DateCalender />
                        </div>
                    </aside>
                    <aside className="space-y-4">
                        <div className="flex justify-end space-x-2">
                            <div className="flex  items-center">
                                <Select
                                    placeholder="Select option"
                                    className="input-shadow"
                                    size="xs"
                                >
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Select>
                            </div>
                            <button className="btn">Search</button>
                        </div>
                        <div className="flex justify-end  space-x-1">
                            <label htmlFor="" className="font-bold">
                                payment status:
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
                        <div className="flex justify-end space-x-2">
                            <div className="flex items-center  space-x-2">
                                <Input
                                    w={320}
                                    type="text"
                                    className="input-shadow"
                                    size="xs"
                                    placeholder="Enter check or reference number number "
                                />
                                <Input
                                    w={200}
                                    type="text"
                                    className="input-shadow"
                                    size="xs"
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
                        <tr className=" text-white">
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>$30,000.00</th>
                            <th>$30,000.00</th>
                            <th></th>
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
