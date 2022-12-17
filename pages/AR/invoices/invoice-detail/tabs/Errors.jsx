import React from "react";

const Errors = () => {
    return (
        <div className=" p-5">
            <section>
                <header className="flex  ">
                    <div className="flex flex-1 justify-center   space-x-1">
                        <h1 className="font-bold">payer:</h1>
                        <p>clover</p>
                    </div>
                    <p className=" text-orange-500 underline">
                        recheck invoice
                    </p>
                </header>
            </section>
            <h1 className="head">invoice errors</h1>

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
        error: "service not verified",
        solution: "check scheduling",
    },
    {
        error: "service not verified",
        solution: "verify service",
    },
    {
        error: "patient-payer id missing",
        solution: "check patient payer profile",
    },
    {
        error: "patient-payer eligiblity not met",
        solution: "check patient payer elegiblity",
    },
    {
        error: "pps data missing",
        solution: "verify service",
    },
    {
        error: "agency facilty missing",
        solution: "contact e solutions",
    },
];
