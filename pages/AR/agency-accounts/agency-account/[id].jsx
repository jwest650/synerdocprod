import React from "react";
import { Select, Input } from "@chakra-ui/react";

const AgencyAccount = () => {
    return (
        <div className="ar bodytext space-y-5 capitalize">
            <section className="bg-[ #eeeeee] flex w-full items-center justify-between">
                <div>
                    <h1 className="head">loiusiana labour of love</h1>
                    <label className="ml-10 pr-5 font-bold">
                        account type:
                    </label>
                    <span>Agency Suspense</span>
                </div>
                <div>
                    <h1 className="text-right font-bold text-green-500">
                        Agency account
                    </h1>
                    <span className="pr-20 font-bold">balance</span>
                    <span>$2,500.00</span>
                </div>
            </section>
            <hr />
            <section className="space-y-3">
                <h1 className="head">remittance applied to</h1>
                {/* table */}
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>reference number</th>
                            <th>remit date</th>
                            <th>payment source</th>
                            <th>note</th>
                            <th>remit amount</th>
                            <th>remit balance</th>
                            <th>amount to apply/ reverse</th>
                            <th>applied amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-[#c6d8ffe1]">
                            <td></td>
                            <td></td>
                            <td>
                                <Select placeholder="All" size="xs">
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Select>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        {data.map((value, i) => (
                            <tr key={i}>
                                <td>{value.refrence}</td>
                                <td>{value.remit}</td>

                                <td>{}</td>
                                <td className="text-orange-500">
                                    {value.notes}
                                </td>
                                <td>{value.amount}</td>

                                <td>{value.balance}</td>
                                <td className="text-right">
                                    <Input
                                        size="xs"
                                        w={130}
                                        placeholder={"$0.00"}
                                        ml={5}
                                        className="text-right"
                                    />
                                </td>
                                <td>{value.applied}</td>
                            </tr>
                        ))}
                        <tr className=" text-right">
                            <td colSpan={7}>
                                total applied:
                                <Input
                                    size="xs"
                                    w={130}
                                    placeholder={"$0.00"}
                                    ml={5}
                                    className="text-right"
                                />
                            </td>
                            <td className="border-none"></td>
                        </tr>
                        <tr className=" text-right">
                            <td colSpan={7}>
                                account balance:
                                <Input
                                    size="xs"
                                    w={130}
                                    placeholder={"$0.00"}
                                    ml={5}
                                    className="text-right"
                                />
                            </td>
                            <td></td>
                        </tr>
                        <tr className=" border-b-none text-right">
                            <td colSpan={7} className="space-x-2">
                                <button className="btn">Apply</button>
                                <button className="btn">Clear All</button>
                                <button className="btn">Cancel</button>
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default AgencyAccount;
const data = [
    {
        refrence: "12394558",
        remit: "4 / 09 / 2017",
        option: "",
        notes: "misc payment recieved",
        amount: "$100.000",
        balance: "$0.00",
        applied: "2,5000.00",
    },
];
