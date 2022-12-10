import { Input, Select } from "@chakra-ui/react";
import React from "react";
import { FcCalendar, FcSearch } from "react-icons/fc";
import { VscGoToFile } from "react-icons/vsc";
import { TbFileExport } from "react-icons/tb";
import { invoice } from "../../../assets/ardata";
import Actions from "./../../../components/ar/Actions";
import { useRouter } from "next/router";
import Link from "next/link";

const Invoices = () => {
    const router = useRouter();
    return (
        <div className="ar bodytext space-y-2 p-5 capitalize">
            <section className="flex items-center justify-between">
                <h1 className="head ">invoices</h1>

                <aside className="flex items-center space-x-40">
                    <div className="space-x-2">
                        <label htmlFor="" className="font-bold">
                            show my responsiilty only:
                        </label>
                        <input
                            type="checkbox"
                            name=""
                            id=""
                            className="input-shadow"
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Select
                            placeholder="Select option"
                            className="input-shadow"
                            w={130}
                            size="xs"
                        >
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                        <button className="btn">Export</button>
                    </div>
                </aside>
            </section>
            <section className="flex items-center justify-between">
                <aside className="space-y-2">
                    <div className="flex space-x-2">
                        <label htmlFor="" className="font-bold">
                            invoice type:
                        </label>
                        <Select
                            placeholder="Select option"
                            className="input-shadow"
                            w={130}
                            size="xs"
                        >
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </div>
                    <div className="flex  items-center space-x-2">
                        <label htmlFor="" className="font-bold">
                            agency:
                        </label>
                        <Select
                            placeholder="Select option"
                            className="input-shadow"
                            w={130}
                            size="xs"
                        >
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </div>
                    <div className="space-x-2">
                        <label htmlFor="" className="font-bold">
                            balance amt.from:
                        </label>
                        <Input
                            className="input-shadow"
                            w={100}
                            type="text"
                            size="xs"
                        />

                        <label htmlFor="" className="font-bold">
                            to:
                        </label>
                        <Input
                            className="input-shadow"
                            w={100}
                            type="text"
                            size="xs"
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="" className="font-bold">
                            note type:
                        </label>
                        <Select
                            placeholder="Select option"
                            className="input-shadow"
                            w={130}
                            size="xs"
                        >
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </div>
                </aside>
                <aside className="space-y-2">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="" className="font-bold">
                            age by:
                        </label>
                        <Select
                            placeholder="Select option"
                            className="input-shadow"
                            w={130}
                            size="xs"
                        >
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="" className="font-bold">
                            agency type:
                        </label>
                        <Select
                            placeholder="Select option"
                            className="input-shadow"
                            w={130}
                            size="xs"
                        >
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </div>
                    <div className="flex items-center">
                        <label htmlFor="date-from" className="font-bold">
                            date from:
                        </label>
                        <Input
                            className="input-shadow"
                            w={130}
                            type="date"
                            size="xs"
                            id="date-from"
                        />
                        <label htmlFor="date-from">
                            <FcCalendar className="text-xl" />
                        </label>{" "}
                        <label htmlFor="date-to" className="font-bold">
                            to:
                        </label>
                        <Input
                            className="input-shadow"
                            w={130}
                            type="date"
                            size="xs"
                            id="date-to"
                        />
                        <label htmlFor="date-to">
                            <FcCalendar className="text-xl" />
                        </label>
                    </div>
                    <div className="flex">
                        <label htmlFor="note-from" className="font-bold">
                            note from:
                        </label>
                        <Input
                            className="input-shadow"
                            w={130}
                            type="date"
                            size="xs"
                            id="note-from"
                        />
                        <label htmlFor="note-from">
                            <FcCalendar className="text-xl" />
                        </label>
                        <label htmlFor="note-to" className="font-bold">
                            to:
                        </label>
                        <Input
                            className="input-shadow"
                            w={130}
                            type="date"
                            size="xs"
                            id="note-to"
                        />
                        <label htmlFor="note-to">
                            <FcCalendar className="text-xl" />
                        </label>
                    </div>
                </aside>
                <aside className="space-y-2">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="" className="font-bold">
                            reporting group:
                        </label>
                        <Select
                            placeholder="Select option"
                            className="input-shadow"
                            w={130}
                            size="xs"
                        >
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="" className="font-bold">
                            payer category:
                        </label>
                        <Select
                            placeholder="Select option"
                            className="input-shadow"
                            w={130}
                            size="xs"
                        >
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </div>
                    <div className="flex items-center ">
                        <label htmlFor="inv" className="font-bold">
                            inv dates from:
                        </label>
                        <Input
                            className="input-shadow"
                            w={130}
                            type="date"
                            size="xs"
                            id="inv"
                        />
                        <label htmlFor="inv">
                            <FcCalendar className="text-xl" />
                        </label>
                        <label htmlFor="inv-to" className="font-bold">
                            to:
                        </label>
                        <Input
                            className="input-shadow"
                            w={130}
                            type="date"
                            size="xs"
                            id="inv-to"
                        />
                        <label htmlFor="inv-to">
                            <FcCalendar className="text-xl" />
                        </label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="" className="font-bold">
                            note to pull:
                        </label>
                        <Select
                            placeholder="Select option"
                            className="input-shadow"
                            w={130}
                            size="xs"
                        >
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
                        className="input-shadow"
                        type="text"
                        size="xs"
                        placeholder="Enter Patient first or last name"
                    />
                </div>
                <div className="w-[220px]">
                    <Input
                        className="input-shadow"
                        type="text"
                        size="xs"
                        placeholder="Enter Payer name"
                    />
                </div>
                <div className="flex w-[210px] items-center">
                    <Input
                        className="input-shadow"
                        type="text"
                        size="xs"
                        placeholder="Enter invioce #"
                    />
                </div>
                <button className="btn">Search</button>
            </section>
            <hr />
            <div className="flex items-center space-x-4">
                <p>adjust balance to zero</p>
                <label htmlFor="" className="font-bold">
                    Update:
                </label>
                <Select
                    placeholder="Select option"
                    className="input-shadow"
                    w={130}
                    size="xs"
                >
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
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoice.map((value, i) => (
                            <tr key={i}>
                                <td>
                                    <input type="checkbox" name="" id="" />
                                </td>
                                <td className="text-orange-500 underline">
                                    <Link
                                        href={
                                            "invoices/invoice-detail/services"
                                        }
                                    >
                                        {value.patientname}
                                    </Link>
                                </td>
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
                                <td className="space-x-1">
                                    {" "}
                                    <VscGoToFile className=" inline text-xl" />
                                    <FcSearch
                                        className="inline text-xl"
                                        onClick={() =>
                                            router.push(
                                                `${router.pathname}/invoice-detail/errors`
                                            )
                                        }
                                    />
                                    <TbFileExport className="inline text-xl" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default Invoices;
