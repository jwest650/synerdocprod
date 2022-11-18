import { Input } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { FcCalendar } from "react-icons/fc";
import { era } from "../../../assets/ardata";

const EraPayments = () => {
    const [data, setdata] = useState([...era]);
    const setRows = (e) => {
        let value = parseInt(e.target.value);
        if (!value) {
            setdata(era);
        } else {
            setdata(era.slice(0, value));
        }
        console.log(value);
    };
    return (
        <div className="ar bodytext space-y-5 p-5 capitalize">
            <section className="space-y-3">
                <h1 className="head  ">Era Payments</h1>
                <aside>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="recieve">recieve dates from:</label>
                        <Input w={120} type="date" size="xs" id="recieve" />
                        <label htmlFor="recieve">
                            <FcCalendar className="text-xl" />
                        </label>
                        <label htmlFor="">to:</label>
                        <Input w={120} type="date" size="xs" id="recieve-to" />
                        <label htmlFor="recieve-to">
                            <FcCalendar className="text-xl" />
                        </label>{" "}
                    </div>
                    <div className="flex justify-end space-x-2">
                        <label>show only era with claims to post:</label>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="remit">remit dates from:</label>
                        <Input w={120} type="date" size="xs" id="remit" />
                        <label htmlFor="remit">
                            <FcCalendar className="text-xl" />
                        </label>
                        <label htmlFor="remit-to">to:</label>
                        <Input w={120} type="date" size="xs" id="remit-to" />
                        <label htmlFor="remit-to">
                            <FcCalendar className="text-xl" />
                        </label>
                    </div>
                    <div className="flex justify-end space-x-2">
                        <div className="flex w-[210px] items-center">
                            <Input
                                type="text"
                                size="sm"
                                placeholder="Enter invioce #"
                            />
                        </div>
                        <button className="btn">Search</button>
                    </div>
                </aside>
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
                            <th>check / ref no</th>
                            <th>payment source</th>
                            <th>payee identifier</th>
                            <th>claims</th>
                            <th>matched / unposted</th>
                            <th>unmatched</th>
                            <th>adjustment</th>
                            <th>matched/uposted details</th>
                            <th>unmatched details</th>
                            <th>amount</th>
                            <th>amount to apply</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((value, i) => (
                            <tr key={i}>
                                <td>{value.remit}</td>
                                <td>{value.deposit}</td>
                                <td>{value.payment}</td>
                                <td>{value.check}</td>
                                <td>{value.payment}</td>
                                <td>{value.payee}</td>
                                <td className="text-orange-500">
                                    {value.claims}
                                </td>
                                <td>{value.matched}</td>
                                <td className="text-orange-500">
                                    {value.unmatched}
                                </td>
                                <td>{value.adjustment}</td>
                                <td>{value.matched}</td>
                                <td>{value.unmatched}</td>
                                <td>{value.amount}</td>
                                <td>{value.amountto}</td>
                            </tr>
                        ))}
                        <tr className="text-white">
                            <td className="bg-primary-color"></td>
                            <td className="bg-primary-color"></td>
                            <td className="bg-primary-color"></td>
                            <td className="bg-primary-color"></td>
                            <td className="bg-primary-color"></td>
                            <td className="bg-primary-color"></td>
                            <td className="bg-primary-color">10</td>
                            <td className="bg-primary-color">5</td>
                            <td className="bg-primary-color">0</td>
                            <td className="bg-primary-color"></td>
                            <td className="bg-primary-color"></td>
                            <td className="bg-primary-color"></td>
                            <td className="bg-primary-color">$3000,000.00</td>
                            <td className="bg-primary-color">$3000,000.00</td>
                        </tr>
                        <tr className="bg-[#eeeeee]">
                            <td colSpan="14">
                                displaying page 1 of 1 | rows per page:
                                <input
                                    type="number"
                                    className="ml-1 w-10 border text-center text-[black]"
                                    placeholder={`${era.length}`}
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

export default EraPayments;
