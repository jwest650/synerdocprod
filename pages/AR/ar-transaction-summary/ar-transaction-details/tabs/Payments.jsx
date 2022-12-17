import React from "react";

const Payments = () => {
    return (
        <div className="ar p-5">
            <section>
                <table className="w-full capitalize ">
                    <thead>
                        <th>check/refrence #</th>
                        <th>deposit date</th>
                        <th>remit date</th>
                        <th>payment source</th>
                        <th>post date</th>
                        <th>payment type</th>
                        <th>amount</th>
                    </thead>
                    <tbody>
                        <tr className="bg-gray-500">
                            <td colSpan={7}>no accounts for this agency</td>
                        </tr>
                        <tr>
                            <th></th>
                            <th></th>
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

export default Payments;
