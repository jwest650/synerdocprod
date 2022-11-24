import { Input, Select } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { VscGoToFile } from "react-icons/vsc";
import { errors } from "../../../assets/ardata";

const InvoiceErrors = () => {
    const router = useRouter();

    return (
        <div className="ar bodytext space-y-4 p-5 capitalize">
            <section>
                <h1 className="head">Invoice Errors</h1>
                <hr />
                <aside className="mt-2 space-y-2">
                    <div className="flex justify-end space-x-2">
                        <Select placeholder="Select option" w={130} size="xs">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                        <button className="btn">Export</button>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex space-x-2">
                            <label htmlFor="" className="font-bold">
                                Agency:
                            </label>
                            <Select
                                placeholder="Select option"
                                w={130}
                                size="xs"
                            >
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </Select>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Input
                                w={210}
                                type="text"
                                size="sm"
                                placeholder="First or last name"
                            />
                            <button className="btn">Search</button>
                        </div>
                    </div>
                </aside>
            </section>
            {/* table */}
            <section>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>patient name</th>
                            <th>payer</th>
                            <th colSpan="2">invoiceteam</th>
                            <th>category</th>
                            <th>error</th>
                            <th>solution</th>
                            <th>status</th>

                            <th>info</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>
                                <Select placeholder="Select option" size="xs">
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Select>
                            </td>
                            <td></td>
                            <td>
                                <Select placeholder="Select option" size="xs">
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Select>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                {" "}
                                <Select placeholder="Select option" size="xs">
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Select>
                            </td>

                            <td></td>
                            <td></td>
                        </tr>
                        {errors.map((value, i) => (
                            <tr key={i}>
                                <td>{value.name}</td>
                                <td>{value.payer}</td>
                                <td className="text-orange-500">
                                    {value.invoice}
                                </td>
                                <td></td>
                                <td>{value.cate}</td>
                                <td>{value.error}</td>
                                <td className="text-orange-500">
                                    {value.solution}
                                </td>
                                <td>{value.status}</td>
                                <td>{value.info}</td>
                                <td
                                    className="text-center"
                                    onClick={() =>
                                        router.push(
                                            `invoices/invoice-detail/${i}`
                                        )
                                    }
                                >
                                    <VscGoToFile className=" inline text-xl" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default InvoiceErrors;
