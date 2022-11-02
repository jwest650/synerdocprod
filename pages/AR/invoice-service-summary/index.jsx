import React from "react";
import { Input, Select } from "@chakra-ui/react";

const InvoiceServiceSummary = () => {
    return (
        <div className="ar  bodytext p-5 capitalize">
            <section className="space-y-5 ">
                <header className="flex items-center justify-between">
                    <h1 className="head text-2xl font-bold">
                        Invoice Service Summary
                    </h1>
                    <div className=" flex w-52   space-x-1">
                        <Select placeholder="Select option" size="xs" w={120}>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                        <button className="border px-3">Export</button>
                    </div>
                </header>

                {/* main */}
                <section className="flex items-center justify-around">
                    <div className="flex space-x-1">
                        <label htmlFor=""> <span className="text-orange-500">*</span> agency:</label>
                        <Select placeholder="Select option" size="xs" w={120}>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </div>
                    <div className="space-x-1">
                        <label htmlFor=""> <span className="text-orange-500">*</span> date range:</label>
                        <Input w={120} type="date" size="xs" />
                        <label htmlFor="">to:</label>
                        <Input w={120} type="date" size="xs" />
                    </div>
                    <div>
                        {" "}
                        <button className="border  px-3">Search</button>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default InvoiceServiceSummary;
