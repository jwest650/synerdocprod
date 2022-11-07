import { Input, Select, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BsPlus } from "react-icons/bs";
import { invoice } from "../../../assets/ardata";

const Payments = () => {
    return (
        <div className="ar bodytext space-y-3 p-5 capitalize">
            <section className="space-y-5">
                <header className="flex items-center space-x-3">
                    <h1 className="head ">Payments</h1>
                    <div className="create-bg flex cursor-pointer items-center space-x-1">
                        <BsPlus />
                        <Link href="/AR/add-payments">
                            <p className="text-xs capitalize">add payment</p>
                        </Link>
                    </div>
                </header>
                <article className="flex justify-between">
                    <aside className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <label htmlFor="">deposit dates from:</label>
                            <Input w={100} type="text" size="xs" />
                            <label htmlFor="">to:</label>
                            <Input w={100} type="text" size="xs" />
                        </div>
                        <div className="flex items-center space-x-2">
                            <label htmlFor="">entry dates from:</label>
                            <Input w={100} type="text" size="xs" />
                            <label htmlFor="">to:</label>
                            <Input w={100} type="text" size="xs" />
                        </div>{" "}
                        <div className="flex items-center space-x-2">
                            <label htmlFor="">remit dates from:</label>
                            <Input w={100} type="text" size="xs" />
                            <label htmlFor="">to:</label>
                            <Input w={100} type="text" size="xs" />
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
                                w={120}
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
                            <th>patient name</th>
                            <th>invoice</th>
                            <th>current payer</th>
                            <th>invoice data</th>
                            <th>invoice range</th>
                            <th>payer resp</th>
                            <th>patient resp</th>
                            <th>total adj</th>
                            <th>total payment</th>
                            <th>balance</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoice.map((value, i) => (
                            <tr key={i}>
                                <td>{value.patientname}</td>
                                <td>{value.invoice}</td>
                                <td>{value.currentpayer}</td>
                                <td>{value.invoicedata}</td>
                                <td>{value.invoicerange}</td>
                                <td>{value.payerresp}</td>
                                <td>{value.patientresp}</td>
                                <td>{value.totaladj}</td>
                                <td>{value.totalpayment}</td>
                                <td>{value.balance}</td>
                                <td>{value.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default Payments;
