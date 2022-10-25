import React from "react";
import { VscClose } from "react-icons/vsc";

const ARforms = ({ show, setshow }) => {
    return (
        <div className="absolute top-0 left-0 right-0 bottom-0 z-50 bg-[#0000005d] text-black">
            <section className=" mx-auto h-[90%] w-[45%] rounded bg-[#EDF2FB] ">
                <div
                    className="ml-auto w-fit cursor-pointer p-2"
                    onClick={() => setshow(!show)}
                >
                    <VscClose className="text-3xl font-bold text-red-500" />
                </div>
                <h1 className="px-5 pt-7 text-2xl font-bold capitalize">
                    add collector assignment
                </h1>
                <section className="flex h-full flex-col justify-between">
                    <form action="" className="mx-20 mt-5 space-y-5 capitalize">
                        <div className="flex items-center">
                            <label htmlFor="">*agency:</label>
                            <select className="w-full">
                                <option value="lousiana">labour of love</option>
                            </select>
                        </div>
                        <div className="flex items-center">
                            <label htmlFor="">*level:</label>
                            <select className="w-full">
                                <option value="all">
                                    All Payer Categories
                                </option>
                                <option value="single">
                                    Single Payer Category
                                </option>
                                <option value="payer">Payer</option>
                                <option value="patient">
                                    Patient Encounter
                                </option>
                                <option value="team">Team</option>
                            </select>
                        </div>
                    </form>
                    <div className="mt-10 ml-auto w-fit space-x-2">
                        <button className="bg-white p-1 px-2 capitalize">
                            continue
                        </button>
                        <button className="bg-white p-1 px-2 capitalize">
                            cancel
                        </button>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default ARforms;
