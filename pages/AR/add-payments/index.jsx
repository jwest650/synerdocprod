import { Input, Select } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { FcCheckmark, FcSearch } from "react-icons/fc";

const AddPayments = () => {
    const router = useRouter();
    return (
        <div className="ar bodytext p-5 capitalize">
            <main className="">
                <header>
                    <h1 className="head text-2xl ">Add Payments</h1>
                    <hr />
                </header>
                <div className="mt-5 flex space-x-10">
                    <article className="flex space-x-5">
                        <section className="space-y-3">
                            <div>
                                <label htmlFor="">
                                    {" "}
                                    <span className="text-orange-500">
                                        *
                                    </span>{" "}
                                    payment source:
                                </label>
                            </div>
                            <div>
                                {" "}
                                <label htmlFor="">
                                    {" "}
                                    <span className="text-orange-500">
                                        *
                                    </span>{" "}
                                    payment method:
                                </label>
                            </div>
                            <div>
                                <label htmlFor="">
                                    {" "}
                                    <span className="text-orange-500">
                                        *
                                    </span>{" "}
                                    payment amount:
                                </label>
                            </div>
                            <div>
                                <label htmlFor="">
                                    {" "}
                                    <span className="text-orange-500">
                                        *
                                    </span>{" "}
                                    remit date:
                                </label>
                            </div>
                            <div>
                                <label htmlFor="">
                                    {" "}
                                    <span className="text-orange-500">
                                        *
                                    </span>{" "}
                                    deposit date:
                                </label>
                            </div>
                            <div>
                                <label htmlFor="">reference number:</label>
                            </div>
                            <div>
                                <label htmlFor="">apply payments to:</label>
                            </div>
                            <div className="flex items-center space-x-2 pt-10">
                                <FcSearch />
                                <p className=" cursor-pointer text-sm font-bold text-orange-500 underline">
                                    attach document
                                </p>
                            </div>
                        </section>
                        <section className="space-y-3">
                            <div>
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

                            <div>
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
                            <div>
                                <Input w={120} type="text" size="xs" />
                            </div>
                            <div>
                                <Input w={120} type="text" size="xs" />
                            </div>
                            <div>
                                <Input w={120} type="date" size="xs" />
                            </div>
                            <div>
                                <Input w={120} type="date" size="xs" />
                            </div>
                            <div>
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
                        </section>
                    </article>
                    <article className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <FcSearch />
                            <p className=" cursor-pointer text-sm font-bold text-orange-500 underline">
                                add payment source
                            </p>
                        </div>
                        <div className="flex space-x-5">
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
                        <div className="flex space-x-5">
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
                    </article>
                </div>
                <div className=" my-5 flex justify-end space-x-3">
                    <button
                        className="btn capitalize"
                        onClick={() => router.push("payments/apply-payment")}
                    >
                        save / enter more
                    </button>
                    <button className="btn capitalize">save / close</button>
                    <button className="btn capitalize">cancel</button>
                </div>
            </main>
        </div>
    );
};

export default AddPayments;
