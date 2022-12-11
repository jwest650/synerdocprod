import React, { useState } from "react";
import {
    RxArrowLeft,
    RxArrowRight,
    RxDoubleArrowLeft,
    RxDoubleArrowRight,
} from "react-icons/rx";
import useFilterActions from "./utils/useFilterActions";
import useFilterActions2 from "./utils/useFilterActions2";
const Filters = () => {
    const [values, setvalues] = useState([...filters]);
    const [group1, setgroup1] = useState([]);
    const [group2, setgroup2] = useState([]);

    const {
        handleGroup1Left,
        handleGroup1Right,
        handleSelectedLeft,
        handleSelectedRight,
        Selected,
    } = useFilterActions(values, setvalues, group1, setgroup1);
    const {
        handleGroup2Left,
        handleGroup2Right,
        handleSelectedLeft2,
        handleSelectedRight2,
        Selected2,
    } = useFilterActions2(values, setvalues, group2, setgroup2);

    return (
        <div className="ml-5">
            <section>
                <h1 className="font-bold">report group filters</h1>
            </section>
            <section className="grid grid-cols-2">
                <aside className="flex  space-x-3">
                    <div className="space-y-2">
                        <h1 className="font-bold">choose payers</h1>
                        <div
                            className=" parent min-h-52 h-52 min-w-[200px] space-y-2 overflow-hidden overflow-y-scroll border-2  "
                            onClick={Selected}
                        >
                            {values.map((value, i) => (
                                <p
                                    id={i}
                                    key={i}
                                    className=" cursor-pointer pl-2 selection:border-2 selection:border-dotted selection:bg-blue-400"
                                >
                                    {value}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="mt-7 space-y-1">
                        <button
                            className="block rounded border p-2"
                            onClick={handleSelectedRight}
                            disabled={values.length == 0}
                        >
                            <RxArrowRight />
                        </button>
                        <button
                            className="block rounded border p-2"
                            onClick={handleSelectedLeft}
                            disabled={group1.length == 0}
                        >
                            <RxArrowLeft />
                        </button>
                        <button
                            className="block rounded border p-2"
                            onClick={handleGroup1Right}
                            disabled={values.length == 0}
                        >
                            <RxDoubleArrowRight />
                        </button>
                        <button
                            className="block rounded border p-2"
                            onClick={handleGroup1Left}
                            disabled={group1.length == 0}
                        >
                            <RxDoubleArrowLeft />
                        </button>
                    </div>
                    <div className="space-y-2">
                        <h1 className="font-bold">payer report group1</h1>
                        <div
                            className="min-h-52 h-52 min-w-[200px] space-y-2 overflow-hidden overflow-y-scroll border-2 "
                            onClick={Selected}
                        >
                            {group1.map((value, i) => (
                                <p
                                    id={i}
                                    key={i}
                                    className="cursor-pointer pl-2"
                                >
                                    {value}
                                </p>
                            ))}
                        </div>
                    </div>
                </aside>
                <aside className="flex  space-x-3">
                    <div className="space-y-2">
                        <h1 className="font-bold">choose payers</h1>
                        <div
                            className="parent2 min-h-52 h-52 min-w-[200px] space-y-2 overflow-hidden overflow-y-scroll border-2 "
                            onMouseUp={Selected2}
                        >
                            {values.map((value, i) => (
                                <p
                                    id={i}
                                    key={i}
                                    className="cursor-pointer pl-2"
                                >
                                    {value}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="mt-7 space-y-1">
                        <button
                            className="block rounded border p-2"
                            onClick={handleSelectedRight2}
                            disabled={values.length == 0}
                        >
                            <RxArrowRight />
                        </button>
                        <button
                            className="block rounded border p-2"
                            onClick={handleSelectedLeft2}
                            disabled={group2.length == 0}
                        >
                            <RxArrowLeft />
                        </button>
                        <button
                            className="block rounded border p-2"
                            onClick={handleGroup2Right}
                            disabled={values.length == 0}
                        >
                            <RxDoubleArrowRight />
                        </button>
                        <button
                            className="block rounded border p-2"
                            onClick={handleGroup2Left}
                            disabled={group2.length == 0}
                        >
                            <RxDoubleArrowLeft />
                        </button>
                    </div>
                    <div className="space-y-2">
                        <h1 className="font-bold">payer report group2</h1>
                        <div
                            className="min-h-52 h-52 min-w-[200px] space-y-2 overflow-hidden overflow-y-scroll border-2 "
                            onMouseUp={Selected2}
                        >
                            {group2.map((value, i) => (
                                <p
                                    id={i}
                                    key={i}
                                    className="cursor-pointer pl-2"
                                >
                                    {value}
                                </p>
                            ))}
                        </div>
                    </div>
                </aside>
            </section>
        </div>
    );
};

export default Filters;

const filters = [
    "medicare",
    "medicare partA",
    "medicare partB",
    "medicare hospice",
    "medicare outpatient",
    "walver",
    "insurance",
    "medicare",
    "medicare",
    "medicare",
];
