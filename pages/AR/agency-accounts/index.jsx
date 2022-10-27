import { Select } from "@chakra-ui/react";
import React from "react";
import { agency } from "../../../assets/ardata";

const AgencyAccounts = () => {
    return (
        <div className="ar bodytext  space-y-5 p-5">
            <section className="space-y-5">
                <h1 className="head text-2xl capitalize">agency accounts</h1>
                <aside className="flex items-center space-x-40">
                    <div className="flex space-x-2">
                        <label htmlFor="">Agency:</label>

                        <Select placeholder="Select option" size="sm">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </div>
                    <div className="flex space-x-2">
                        <label htmlFor="">Payment Type:</label>
                        <Select placeholder="Select option" size="sm">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </div>
                </aside>
            </section>
            {/* table */}
            <section className="capitalize">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>agency account</th>
                            <th>payment type code</th>
                            <th>payment type description</th>
                            <th>balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {agency.map((value, i) => (
                            <tr key={i}>
                                <td>{value.acc}</td>
                                <td>{value.paymentCode}</td>
                                <td>{value.paymentDesc}</td>
                                <td>{value.balance}</td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan="4">displaying page 1 of 1</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default AgencyAccounts;
