import { Input, Select } from "@chakra-ui/react";
import React from "react";

const ArAgingAsOfReport = () => {
    return (
        <div className=" bodytext  ar space-y-5 p-5">
            <section className="flex items-center justify-between  capitalize">
                <h1 className="head text-2xl">Ar Aging As Of Report</h1>
                <div className="flex space-x-2">
                    <label htmlFor="">ar as of date:</label>
                    <Input
                        w={140}
                        type="date"
                        size="sm"
                        placeholder="default placeholder"
                    />
                </div>
                <div className="flex space-x-2">
                    <Select placeholder="Select option" size="sm">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </Select>
                    <button className="border  px-2">Export</button>
                </div>
            </section>
            <section className="flex items-center justify-between capitalize">
                <div className="flex space-x-2">
                    <label htmlFor="">agency:</label>
                    <Select placeholder="Select option" size="sm">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </Select>
                </div>
                <div className="flex space-x-2">
                    <label htmlFor="">agency type:</label>
                    <Select placeholder="Select option" size="sm">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </Select>
                </div>
                <div className="flex space-x-2">
                    <label htmlFor="">age by:</label>
                    <Select placeholder="Select option" size="sm">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </Select>
                </div>
            </section>
            <hr />
        </div>
    );
};

export default ArAgingAsOfReport;
