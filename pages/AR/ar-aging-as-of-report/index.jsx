import { Input, Select } from "@chakra-ui/react";
import React from "react";
import { FcCalendar } from "react-icons/fc";

const ArAgingAsOfReport = () => {
    return (
        <div className="bodytext  ar space-y-5 p-5">
            <section className="flex items-center justify-between  capitalize">
                <h1 className="head">Ar Aging As Of Report</h1>
                <div className="flex space-x-2">
                    <label htmlFor="">ar as of date:</label>
                    <Input
                        w={120}
                        type="date"
                        size="xs"
                        placeholder="default placeholder"
                    />
                    <FcCalendar className="text-xl" />
                </div>
                <div className="flex space-x-2">
                    <Select placeholder="Select option" w={120} size="xs">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </Select>
                    <button className="btn">Export</button>
                </div>
            </section>
            <section className="flex items-center justify-between capitalize">
                <div className="flex space-x-2">
                    <label htmlFor="">agency:</label>
                    <Select placeholder="Select option" w={120} size="xs">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </Select>
                </div>
                <div className="flex space-x-2">
                    <label htmlFor="">agency type:</label>
                    <Select placeholder="Select option" w={120} size="xs">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </Select>
                </div>
                <div className="flex space-x-2">
                    <label htmlFor="">age by:</label>
                    <Select placeholder="Select option" w={120} size="xs">
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
