import Image from "next/image";
import React, { useState } from "react";
import { ar } from "../../../assets/ardata";
import greenplus from "../../../assets/images/greenplus.png";
const ARCollectionAssignments = () => {
    return (
        <div className="relative">
            <div className="space-y-5">
                <section className="flex items-center space-x-5">
                    <h1 className="text-2xl font-bold capitalize">
                        collector assignments
                    </h1>
                    <div
                        className="flex cursor-pointer items-center space-x-2"
                        onClick={() => setshow(!show)}
                    >
                        <Image
                            src={greenplus.src}
                            alt="greenplus"
                            width="20px"
                            height="20px"
                        />
                        <h1 className="capitalize">assign collector</h1>
                    </div>
                </section>
                <hr />
                <section>
                    <table className="w-full border capitalize">
                        <thead>
                            <th>agency</th>
                            <th>payer category</th>
                            <th>payer</th>
                            <th>team</th>
                            <th>patient</th>
                            <th>admit date</th>
                            <th>associate</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <select
                                        name=""
                                        id=""
                                        className="w-full text-black"
                                    >
                                        <option value="all">All</option>
                                    </select>
                                </td>
                            </tr>
                            {ar.map((value, i) => (
                                <tr key={i}>
                                    <td>{value.agency}</td>
                                    <td>{value.payerCate}</td>
                                    <td>{value.payer}</td>
                                    <td>{value.team}</td>
                                    <td>{value.team}</td>
                                    <td>{value.admitDate}</td>
                                    <td>{value.associate}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colspan="7">displaying page 1 of 1</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </div>
    );
};

export default ARCollectionAssignments;
