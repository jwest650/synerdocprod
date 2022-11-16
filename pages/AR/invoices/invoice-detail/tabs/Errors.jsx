import React from "react";

const Errors = () => {
    return (
        <div className=" p-5">
            <section>
                <header className="flex  ">
                    <div className="flex flex-1 justify-center   space-x-1">
                        <h1>payer:</h1>
                        <p>medicare part a (PPS) - CGS</p>
                    </div>
                    <p className=" text-orange-500 underline">
                        recheck invoice
                    </p>
                </header>
            </section>
            <h1 className="text-xl font-bold">invoice errors</h1>

            <section>
                <table className=" w-full">
                    <thead>
                        <tr>
                            <th>errors</th>
                            <th>solution</th>
                            <th>service</th>
                            <th>service date</th>
                            <th>time in</th>
                            <th>time out</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((val, i) => (
                            <tr key={i}>
                                <td>{val.error}</td>
                                <td className="text-orange-500">
                                    {val.solution}
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default Errors;

const data = [
    {
        error: "invoice payer box not checked",
        solution: "payer review/release",
    },
];
