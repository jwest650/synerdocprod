import { Input } from "@chakra-ui/react";
import React from "react";
import { era } from "../../../assets/ardata";

const EraPayments = () => {
    return (
        <div className="ar bodytext space-y-5 p-5 capitalize">
            <section className="space-y-3">
                <h1 className="head text-2xl ">Era Payments</h1>
                <aside>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="">recieve dates from:</label>
                        <Input w={100} type="text" size="sm" />
                        <label htmlFor="">to:</label>
                        <Input w={100} type="text" size="sm" />
                    </div>
                    <div className="flex justify-end space-x-2">
                        <label>show only era with claims to post:</label>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="">remit dates from:</label>
                        <Input w={100} type="text" size="sm" />
                        <label htmlFor="">to:</label>
                        <Input w={100} type="text" size="sm" />
                    </div>
                    <div className="flex justify-end space-x-2">
                        <div className="flex w-[210px] items-center">
                            <Input
                                type="text"
                                size="sm"
                                placeholder="Enter invioce #"
                            />
                        </div>
                        <button className="border p-1 px-3">Search</button>
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
                        {era.map((value, i) => (
                            <tr key={i}>
                                <td>{value.remit}</td>
                                <td>{value.deposit}</td>
                                <td>{value.payment}</td>
                                <td>{value.check}</td>
                                <td>{value.payment}</td>
                                <td>{value.payee}</td>
                                <td>{value.claims}</td>
                                <td>{value.matched}</td>
                                <td>{value.unmatched}</td>
                                <td>{value.adjustment}</td>
                                <td>{value.matched}</td>
                                <td>{value.unmatched}</td>
                                <td>{value.amount}</td>
                                <td>{value.amountto}</td>
                            </tr>
                        ))}
                        <tr classname="bg-[#15528B]">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>10</td>
                            <td>5</td>
                            <td>0</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>$3000,000.00</td>
                            <td>$3000,000.00</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default EraPayments;
