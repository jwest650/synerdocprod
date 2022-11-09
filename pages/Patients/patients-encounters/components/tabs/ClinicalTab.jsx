import React from "react";
import { BsPlus } from "react-icons/bs";

const ClinicalTab = () => {
    return (
        <div className=" border">
            <article className="grid grid-cols-2">
                <section className="space-y-2 p-2">
                    <h1 className="text-xl font-bold capitalize">
                        clinical team
                    </h1>
                    <div className="flex space-x-3">
                        <span className="text-orange-500">[Edit]</span>
                        <table className=" border-[#a0a0a0] capitalize">
                            <tr className="bg-[#0141CF] text-white">
                                <th className="border-[#a0a0a0]">
                                    case manager
                                </th>
                                <th className="border-[#a0a0a0]">
                                    manager phone
                                </th>
                                <th className="border-[#a0a0a0]">
                                    clinical manager
                                </th>
                                <th className="border-[#a0a0a0]">
                                    manager phone
                                </th>
                            </tr>
                            <tbody>
                                <tr className="border-b-0">
                                    <td className="border-x border-[#a0a0a0]">
                                        Bailey
                                    </td>
                                    <td className=" border-x border-[#a0a0a0]"></td>
                                    <td className=" border-x border-[#a0a0a0]">
                                        creamer heather
                                    </td>
                                    <td className=" border-x border-[#a0a0a0]">
                                        h:(318 )-222-345
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <button className="flex items-center capitalize text-orange-500 underline">
                        <BsPlus className="text-xl text-green-500" />
                        add to clinical team
                    </button>
                    <div>
                        <p>no clinical team added</p>
                    </div>
                </section>
                <section className="border-l p-2">
                    <h1 className="text-xl font-bold capitalize">
                        disciplines
                    </h1>
                    <div className="ml-10">
                        <p>physical therapist</p>
                        <p>skilled nurse</p>
                    </div>
                </section>
            </article>
        </div>
    );
};

export default ClinicalTab;
