import Image from "next/image";
import React, { useState } from "react";
import { ar } from "../../../assets/ardata";
import { FcEmptyTrash, FcEditImage } from "react-icons/fc";
import { BsPlus } from "react-icons/bs";
import { Input, Select, useDisclosure } from "@chakra-ui/react";
import CreateCollectorModal from "../../../components/ar/CreateCollectorModal";
import Actions from "../../../components/ar/Actions";

const ARCollectionAssignments = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [data, setdata] = useState([...ar]);
    const setRows = (e) => {
        let value = parseInt(e.target.value);
        if (!value) {
            setdata(ar);
        } else {
            setdata(ar.slice(0, value));
        }
        console.log(value);
    };
    return (
        <div className="ar  bodytext h-full p-5">
            <CreateCollectorModal isOpen={isOpen} onClose={onClose} />
            <div className="space-y-5">
                <section className="flex items-center space-x-5">
                    <h1 className="head">collector assignments</h1>
                    <button
                        className="create-btn flex  items-center space-x-1 "
                        onClick={onOpen}
                    >
                        <BsPlus />
                        <h1 className="text-sm capitalize">assign collector</h1>
                    </button>
                </section>
                <hr />
                {/* table */}
                <section>
                    <table className="w-full  capitalize">
                        <thead>
                            <tr>
                                <th>agency</th>
                                <th>payer category</th>
                                <th>payer</th>
                                <th>team</th>
                                <th>patient</th>
                                <th>admit date</th>
                                <th>associate</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-[#c6d8ffe1]">
                                <td>
                                    <Select
                                        placeholder="Select option"
                                        size="xs"
                                        border
                                    >
                                        <option value="option1">
                                            Option 1
                                        </option>
                                        <option value="option2">
                                            Option 2
                                        </option>
                                        <option value="option3">
                                            Option 3
                                        </option>
                                    </Select>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            {data.map((value, i) => (
                                <tr key={i}>
                                    <td>{value.agency}</td>
                                    <td>{value.payerCate}</td>
                                    <td>{value.payer}</td>
                                    <td>{value.team}</td>
                                    <td>{value.team}</td>
                                    <td>{value.admitDate}</td>
                                    <td>{value.associate}</td>
                                    <td>
                                        <Actions
                                            icon1={<FcEmptyTrash />}
                                            icon2={<FcEditImage />}
                                        />
                                    </td>
                                </tr>
                            ))}
                            <tr className="bg-[#eeeeee]">
                                <td colSpan="8">
                                    displaying page 1 of 1 | rows per page:
                                    <input
                                        type="number"
                                        className="ml-1 w-10 border text-center text-[black]"
                                        placeholder={`${ar.length}`}
                                        onChange={setRows}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </div>
    );
};

export default ARCollectionAssignments;
