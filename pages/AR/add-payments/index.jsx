import { Input, Select } from "@chakra-ui/react";
import React from "react";
import { FcCheckmark } from "react-icons/fc";
const AddPayments = () => {
    return (
        <div className="ar bodytext p-5 capitalize">
            <section className="">
                <h1 className="head text-2xl ">Add Payments</h1>
                <hr />
                <article className="">
                    <div className="my-5 flex  items-center ">
                        <label htmlFor="">*payment source:</label>

                        <Select placeholder="Select option" size="xs" w={120}>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                        <p className="ml-10">add payment source</p>
                    </div>
                    <section className="flex space-x-10">
                        <aside className="space-y-2">
                            <div className="flex   space-x-1">
                                <label htmlFor="">*payment method:</label>
                                <Select
                                    placeholder="Select option"
                                    size="xs"
                                    w={120}
                                >
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Select>
                            </div>
                            <div className="flex   space-x-1">
                                <label htmlFor="">*payment amount:</label>
                                <Input w={120} type="text" size="xs" />
                            </div>
                            <div className="flex   space-x-1">
                                <label htmlFor="">*remit date:</label>
                                <Input w={120} type="text" size="xs" />
                            </div>
                            <div className="flex   space-x-1">
                                <label htmlFor="">*deposit date:</label>
                                <Input w={120} type="date" size="xs" />
                            </div>
                            <div className="flex   space-x-1">
                                <label htmlFor="">reference number:</label>
                                <Input w={120} type="date" size="xs" />
                            </div>
                            <div className="flex   space-x-1">
                                <label htmlFor="">apply payments to:</label>
                                <Select
                                    placeholder="Select option"
                                    size="xs"
                                    w={120}
                                >
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Select>
                            </div>
                        </aside>
                        <aside className="space-y-2">
                            <div className="flex   space-x-1">
                                <label htmlFor="">Note type:</label>
                                <Select
                                    placeholder="Select option"
                                    size="xs"
                                    w={120}
                                >
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Select>
                            </div>
                            <div className="flex space-x-2">
                                <div>
                                    <label htmlFor="">Note:</label>
                                    <p>abc</p>
                                    <FcCheckmark className="text-xl font-bold" />
                                </div>
                                <textarea
                                    className="border bg-transparent"
                                    name=""
                                    id=""
                                    cols="30"
                                    rows="6"
                                ></textarea>
                            </div>
                        </aside>
                    </section>
                </article>
                <div className=" my-5 flex justify-end space-x-3">
                    <button className="border  px-3 capitalize">
                        save / enter more
                    </button>
                    <button className="border  px-3 capitalize">
                        save / close
                    </button>
                    <button className="border  px-3 capitalize">cancel</button>
                </div>
            </section>
        </div>
    );
};

export default AddPayments;
