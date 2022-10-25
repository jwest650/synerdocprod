import React from "react";
import { agency } from "../../assets/ardata";

const AgencyAccounts = () => {
    return (
        <div className="ar space-y-5 p-5">
            <section className="space-y-5">
                <h1 className="text-2xl capitalize">agency accounts</h1>
                <aside className="flex items-center space-x-40">
                    <div>
                        <label htmlFor="">Agency:</label>
                        <select name="" id="" className="w-[300px]  text-black">
                            <option value="">select an agency</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Payment Type:</label>
                        <select name="" id="" className="w-[300px] text-black">
                            <option value=""> payment type </option>
                        </select>
                    </div>
                </aside>
            </section>
            <section className="capitalize">
                <table className="w-full">
                    <thead>
                        <th>agency account</th>
                        <th>payment type code</th>
                        <th>payment type description</th>
                        <th>balance</th>
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
