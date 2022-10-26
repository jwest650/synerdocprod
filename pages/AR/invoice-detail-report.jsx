import { Input, Select } from "@chakra-ui/react";
import React from "react";
import { invoice } from "../../assets/ardata";

const InvoiceDetailReport = () => {
    return (
        <div className="ar background bodytext space-y-2 p-5 capitalize">
            <section>
                <h1 className="head text-2xl capitalize">
                    Invoice Detail Report
                </h1>
                <hr />
                <div className="ml-auto mt-2 flex w-52 space-x-2">
                    <Select placeholder="Select option" size="sm">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </Select>
                    <button className="border px-3">Export</button>
                </div>
                <div className="flex space-x-2">
                    <label htmlFor="">Agency:</label>
                    <Select placeholder="Select option" size="sm" w={200}>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </Select>
                </div>
                <section className="mt-2 flex items-center justify-between space-x-2">
                    <div className="flex space-x-2">
                        <label htmlFor="">payer:</label>
                        <Select placeholder="Select option" size="sm" w={250}>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="">invoice from dates from:</label>
                        <Input w={100} type="text" size="sm" />
                        <label htmlFor="">to:</label>
                        <Input w={100} type="text" size="sm" />
                        <div className="space-x-1">
                            <Input
                                w={200}
                                type="text"
                                size="sm"
                                placeholder="Enter first or last name"
                            />
                            <button className="border p-1 px-3">Search</button>
                        </div>
                    </div>
                </section>
            </section>
            {/* table */}
            <section>
                <table className="w-full">
                    <thead>
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

export default InvoiceDetailReport;
