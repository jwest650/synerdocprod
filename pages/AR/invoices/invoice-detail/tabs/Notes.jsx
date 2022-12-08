import { Input, Select, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { FcCalendar } from "react-icons/fc";
import AddNoteModal from "../../../../../components/ar/AddNoteModal";

const Notes = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <div className="space-y-3 p-5">
            <AddNoteModal isOpen={isOpen} onClose={onClose} />
            <section className="flex items-center justify-between ">
                <aside className="flex items-center space-x-5">
                    <h1 className="font-bold">Notes</h1>
                    <button className="create-btn" onClick={onOpen}>
                        add note
                    </button>
                    <div className="flex items-center  space-x-2">
                        <label htmlFor="" className="font-bold">
                            type:
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
                        <label htmlFor="from" className="font-bold">
                            from:
                        </label>
                        <Input
                            className="input-shadow"
                            id="from"
                            w={130}
                            type="date"
                            size="xs"
                            placeholder="default placeholder"
                        />
                        <label htmlFor="from">
                            <FcCalendar className="text-xl" />
                        </label>{" "}
                        <label htmlFor="to" className="font-bold">
                            to:
                        </label>
                        <Input
                            className="input-shadow"
                            id="to"
                            w={130}
                            type="date"
                            size="xs"
                            placeholder="default placeholder"
                        />
                        <label htmlFor="to">
                            <FcCalendar className="text-xl" />
                        </label>{" "}
                    </div>
                </aside>
                <aside className="flex items-center space-x-3">
                    <div>
                        {" "}
                        <input type="checkbox" id="check" />
                        <label htmlFor="check">show inactive</label>
                    </div>
                    <Input
                        className="input-shadow"
                        id="to"
                        w={130}
                        type="text"
                        size="xs"
                        placeholder="search a keyword"
                    />{" "}
                    <button className="btn">search</button>
                </aside>
            </section>

            <section>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>date</th>
                            <th>type</th>
                            <th>follow up date</th>
                            <th>payer</th>
                            <th>invoice</th>
                            <th>note</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((val, i) => {
                            return (
                                <tr key={i}>
                                    {!val.date && (
                                        <td className="bg-gray-500" colSpan={6}>
                                            no note found for the criteria
                                            selected
                                        </td>
                                    )}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default Notes;

const data = [
    {
        date: "",
        type: "",
        follow: "",
        payer: "",
        invoice: "",
        note: "",
    },
];
