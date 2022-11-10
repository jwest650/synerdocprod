import { Select } from "@chakra-ui/react";
import React from "react";
import { BsPlus } from "react-icons/bs";

const DocsTab = () => {
    return (
        <div className="space-y-3 capitalize">
            <section className="flex items-center justify-between">
                <header className="flex items-center space-x-4">
                    <h1 className="font-bold">forms</h1>
                    <button className="flex items-center capitalize text-orange-500 underline ">
                        <BsPlus className="text-xl text-green-500" />
                        add contact info
                    </button>
                </header>
                <button className="text-orange-500 underline">
                    show form / document requirement
                </button>
            </section>
            <section>
                <table className="w-full text-left capitalize">
                    <thead>
                        <tr className="bg-primary-color text-white">
                            <th>type</th>
                            <th>created</th>
                            <th>performed by</th>
                            <th>revised by</th>
                            <th>status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Select size={"xs"}>
                                    <option value="">option</option>
                                </Select>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        {obj.map((val, i) => (
                            <tr key={i}>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        ))}
                        <tr className="">
                            <td>no record to display</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default DocsTab;

const obj = [
    {
        type: "dd",
        created: "",
        performed: "",
        revised: "",
        status: "",
    },
];
