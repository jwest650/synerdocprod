import { Input, Select } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { FcCalendar, FcCheckmark, FcSearch } from "react-icons/fc";

const AddPayments = () => {
    const router = useRouter();
    return (
        <div className="ar bodytext p-5 capitalize">
            <main className="">
                <header>
                    <h1 className="head text-2xl ">Add Payments</h1>
                    <hr />
                </header>
                <div className="mt-5 flex   space-x-10">
                    <article className="flex  space-x-5">
                        <section className="space-y-3 text-right">
                            <div>
                                <label htmlFor="" className="font-bold">
                                    {" "}
                                    <span className="text-orange-500">
                                        *
                                    </span>{" "}
                                    payment source:
                                </label>
                            </div>
                            <div>
                                {" "}
                                <label htmlFor="" className="font-bold">
                                    {" "}
                                    <span className="text-orange-500">
                                        *
                                    </span>{" "}
                                    payment method:
                                </label>
                            </div>
                            <div>
                                <label htmlFor="" className="font-bold">
                                    {" "}
                                    <span className="text-orange-500">
                                        *
                                    </span>{" "}
                                    payment amount:
                                </label>
                            </div>
                            <div>
                                <label htmlFor="" className="font-bold">
                                    {" "}
                                    <span className="text-orange-500">
                                        *
                                    </span>{" "}
                                    remit date:
                                </label>
                            </div>
                            <div>
                                <label htmlFor="" className="font-bold">
                                    {" "}
                                    <span className="text-orange-500">
                                        *
                                    </span>{" "}
                                    deposit date:
                                </label>
                            </div>
                            <div>
                                <label htmlFor="" className="font-bold">
                                    reference number:
                                </label>
                            </div>
                            <div>
                                <label htmlFor="" className="font-bold">
                                    apply payments to:
                                </label>
                            </div>
                        </section>
                        <section className="space-y-2">
                            <div>
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
                            </div>

                            <div>
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
                            </div>
                            <div>
                                <Input
                                    className="input-shadow"
                                    w={130}
                                    type="text"
                                    size="xs"
                                />
                            </div>

                            <div className="flex items-center">
                                <Input
                                    id="date1"
                                    className="input-shadow"
                                    w={130}
                                    type="date"
                                    size="xs"
                                />
                                <label htmlFor="date1" className="font-bold">
                                    {" "}
                                    <FcCalendar className="text-xl" />
                                </label>
                            </div>
                            <div className="flex items-center">
                                <Input
                                    id="date2"
                                    className="input-shadow"
                                    w={130}
                                    type="date"
                                    size="xs"
                                />
                                <label htmlFor="date2" className="font-bold">
                                    {" "}
                                    <FcCalendar className="text-xl" />
                                </label>
                            </div>
                            <div>
                                <Input
                                    className="input-shadow"
                                    w={130}
                                    type="text"
                                    size="xs"
                                />
                            </div>
                            <div>
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
                            </div>
                        </section>
                    </article>
                    <article className="space-y-2">
                        <btn className="create-btn flex w-fit items-center space-x-1">
                            <FcSearch />
                            <p className=" ">add payment source</p>
                        </btn>
                        <div className="flex space-x-5">
                            <label htmlFor="" className="text-right font-bold">
                                Note type:
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
                        </div>
                        <div className="flex space-x-5">
                            <div>
                                <label
                                    htmlFor=""
                                    className="text-right font-bold"
                                >
                                    Note:
                                </label>
                                <p>abc</p>
                                <FcCheckmark className="text-xl font-bold" />
                            </div>
                            <textarea
                                className="input-shadow border bg-transparent "
                                name=""
                                id=""
                                cols="30"
                                rows="6"
                            ></textarea>
                        </div>
                    </article>
                </div>
                <btn className="create-btn mt-2 flex w-fit items-center space-x-1">
                    <FcSearch />
                    <p>attach document</p>
                </btn>
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
