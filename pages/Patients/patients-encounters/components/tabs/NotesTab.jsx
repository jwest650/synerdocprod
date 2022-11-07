import React from "react";
import { BsPlus } from "react-icons/bs";
import { Input, Select } from "@chakra-ui/react";

const NotesTab = () => {
    return (
        <div>
            <section className="flex items-center justify-between">
                <h1 className="text-xl font-bold">Notes</h1>
                <aside className="flex items-center space-x-2">
                    <button className="flex items-center capitalize text-orange-500 underline ">
                        <BsPlus className="text-xl text-green-500" />
                        add contact info
                    </button>
                    <div className="flex">
                        <label htmlFor="">Type:</label>
                        <Select size={"xs"}>
                            <option value="">All</option>
                        </Select>
                    </div>
                    <div className="flex items-center space-x-1">
                        <label htmlFor="">From:</label>
                        <Input size={"xs"} type={"text"} />
                        <label htmlFor="">To:</label>
                        <Input size={"xs"} type={"text"} />
                    </div>
                </aside>
                <aside className="flex items-center space-x-2">
                    <input type={"checkbox"} />
                    <label htmlFor="">show inactive</label>
                    <div  className="flex">
                        <Input size={"xs"} type={"text"} />
                        <button className="border">Search</button>
                    </div>
                </aside>
            </section>
        </div>
    );
};

export default NotesTab;
