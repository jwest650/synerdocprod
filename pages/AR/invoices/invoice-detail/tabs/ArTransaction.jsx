import { Select } from "@chakra-ui/react";
import React from "react";

const ArTransaction = () => {
    return (
        <div className="space-y-2 p-5">
            <section className="flex items-center justify-end space-x-2">
                <div className="flex items-center   space-x-2">
                    <label htmlFor="" className="font-bold">
                        transaction type:
                    </label>
                    <Select
                        placeholder="Select option"
                        className="input-shadow"
                        size="xs"
                        w={130}
                    >
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </Select>
                </div>
                <div className="flex items-center  space-x-2">
                    <label htmlFor="" className="font-bold">
                        sub-category type:
                    </label>
                    <Select
                        placeholder="Select option"
                        className="input-shadow"
                        size="xs"
                        w={130}
                    >
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </Select>
                </div>
            </section>
            <h1 className="head">A/R transaction details</h1>
            <section>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>payer</th>
                            <th>service date</th>
                            <th>service</th>
                            <th>amount</th>
                            <th>transaction type</th>
                            <th>sub-category</th>
                            <th>additional description</th>
                            <th>transaction date</th>
                            <th>entered by</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((val) => (
                            <tr>
                                <td>{val.payer}</td>
                                <td>{val.service_date}</td>
                                <td>{val.service}</td>
                                <td>{val.amt}</td>
                                <td>{val.trasac_type}</td>
                                <td>{val.sub_cat}</td>
                                <td>{val.desec}</td>
                                <td>{val.trasac_date}</td>
                                <td>{val.entered}</td>
                            </tr>
                        ))}
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th className="">$520.00</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default ArTransaction;

const data = [
    {
        payer: "clover",
        service_date: "07/04/22",
        service: "hha hourly",
        amt: "$520.00",
        trasac_type: "sales adjusment",
        sub_cat: "sales",
        desec: "sales adjustment",
        trasac_date: "07/05/22",
        entered: "",
    },
];
