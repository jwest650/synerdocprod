import { Checkbox, Select } from "@chakra-ui/react";
import React from "react";

const Accounts = () => {
    return (
        <div className="ar bodytext space-y-3 p-5">
            <section className="flex items-center justify-end space-x-2">
                <label htmlFor="" className="font-bold capitalize">
                    <Checkbox /> show more details
                </label>
                <div className="flex items-center space-x-2">
                    <Select
                        placeholder="Select option"
                        className="input-shadow"
                        w={130}
                        size="xs"
                    >
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </Select>
                    <button className="btn">Export</button>
                </div>
            </section>
            <section>
                <table className="w-full capitalize">
                    <thead>
                        <tr>
                            <th>check/refrence #</th>
                            <th>deposit date</th>
                            <th>remit date</th>
                            <th>payment source</th>
                            <th>amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-gray-500">
                            <td colSpan={5}>no payment for this agency</td>
                        </tr>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>$0.00</th>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default Accounts;
