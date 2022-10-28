import { Input, Select } from "@chakra-ui/react";
import React from "react";
import { invoice } from "../../../assets/ardata";

const Invoices = () => {
    return (
        <div className="ar bodytext space-y-2 p-5 capitalize">
            <section className="flex items-center justify-between">
                <h1 className="head text-2xl capitalize">invoices</h1>

                <aside className="flex items-center space-x-40">
                    <div className="space-x-2">
                        <label htmlFor="">show my responsiilty only:</label>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Select placeholder="Select option" w={120} size="xs">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                        <button className="border  px-3">Export</button>
                    </div>
                </aside>
            </section>
            <section className="flex items-center justify-between">
                <aside className="space-y-2">
                    <div className="flex space-x-2">
                        <label htmlFor="">invoice type:</label>
                        <Select placeholder="Select option" w={120} size="xs">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </div>
                    <div className="flex flex items-center space-x-2">
                        <label htmlFor="">agency:</label>
                        <Select placeholder="Select option" w={120} size="xs">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </div>
                    <div className="space-x-2">
                        <label htmlFor="">balance amt.from:</label>
                        <Input w={120} type="text" size="xs" />

                        <label htmlFor="">to:</label>
                        <Input w={120} type="text" size="xs" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="">note type:</label>
                        <Select placeholder="Select option" w={120} size="xs">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </div>
                </aside>
                <aside className="space-y-2">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="">age by:</label>
                        <Select placeholder="Select option" w={120} size="xs">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="">agency type:</label>
                        <Select placeholder="Select option" w={120} size="xs">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </div>
                    <div className="space-x-2">
                        <label htmlFor="">to date from:</label>
                        <Input w={120} type="text" size="xs" />
                        <label htmlFor="">to:</label>
                        <Input w={120} type="text" size="xs" />
                    </div>
                    <div className="space-x-2">
                        <label htmlFor="">note from:</label>
                        <Input w={120} type="text" size="xs" />
                        <label htmlFor="">to:</label>
                        <Input w={120} type="text" size="xs" />
                    </div>
                </aside>
                <aside className="space-y-2">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="">reporting group:</label>
                        <Select placeholder="Select option" w={120} size="xs">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="">payer category:</label>
                        <Select placeholder="Select option" w={120} size="xs">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="">inv dates from:</label>
                        <Input w={120} type="text" size="xs" />
                        <label htmlFor="">to:</label>
                        <Input w={120} type="text" size="xs" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="">note to pull:</label>
                        <Select placeholder="Select option" w={120} size="xs">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </div>
                </aside>
            </section>
            <section className="ml-auto flex w-fit items-center space-x-2">
                <div className="w-[210px]">
                    <Input
                        type="text"
                        size="sm"
                        placeholder="Enter Patient first or last name"
                    />
                </div>
                <div className="w-[220px]">
                    <Input
                        type="text"
                        size="sm"
                        placeholder="Enter Payer name"
                    />
                </div>
                <div className="flex w-[210px] items-center">
                    <Input
                        type="text"
                        size="sm"
                        placeholder="Enter invioce #"
                    />
                </div>
                <button className="border p-1 px-3">Search</button>
            </section>
            <hr />
            <div className="flex items-center space-x-4">
                <p>adjust balance to zero</p>
                <label htmlFor="">Update:</label>
                <Select placeholder="Select option" w={120} size="xs">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </Select>
            </div>
            {/* table */}
            <section>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>
                                <input type="checkbox" name="" id="" />
                            </th>
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
                                <td>
                                    <input type="checkbox" name="" id="" />
                                </td>
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

export default Invoices;
