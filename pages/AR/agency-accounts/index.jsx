import { Select } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { FcSearch } from "react-icons/fc";
import { agency } from "../../../assets/ardata";
import { useRouter } from "next/router";

const AgencyAccounts = () => {
    const router = useRouter();
    const [data, setdata] = useState([...agency]);
    const setRows = (e) => {
        let value = parseInt(e.target.value);
        if (!value) {
            setdata(agency);
        } else {
            setdata(agency.slice(0, value));
        }
    };
    return (
        <div className="ar bodytext  space-y-5 p-5">
            <section className="space-y-5">
                <h1 className="head  capitalize">agency accounts</h1>
                <aside className="flex items-center space-x-40">
                    <div className="flex space-x-2">
                        <label htmlFor="">Agency:</label>

                        <Select placeholder="Select option" size="xs" w={150}>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </div>
                    <div className="flex space-x-2">
                        <label htmlFor="">Payment Type:</label>
                        <Select placeholder="Select option" size="xs" w={150}>
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
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((value, i) => (
                            <tr key={i}>
                                <td className="text-orange-500">{value.acc}</td>
                                <td>{value.paymentCode}</td>
                                <td>{value.paymentDesc}</td>
                                <td>{value.balance}</td>
                                <td>
                                    {" "}
                                    <FcSearch
                                        className="mx-auto text-xl"
                                        onClick={() =>
                                            router.push(
                                                `${router.pathname}/agency-account/${i}`
                                            )
                                        }
                                    />
                                </td>
                            </tr>
                        ))}
                        <tr className="bg-[#eeeeee]">
                            <td colSpan="5">
                                displaying page 1 of 1 | rows per page:
                                <input
                                    type="number"
                                    className="ml-1 w-10 border text-center text-[black]"
                                    placeholder={`${agency.length}`}
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

export default AgencyAccounts;
