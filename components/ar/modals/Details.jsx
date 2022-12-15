import React from "react";

const Details = ({ option }) => {
    return (
        <>
            {option.assign && (
                <div className="capitalize">
                    <label htmlFor="" className="font-bold">
                        <span className="text-orange-500">*</span> assign to:
                    </label>
                </div>
            )}
            {option.payer && (
                <div className="capitalize">
                    <label htmlFor="" className="font-bold">
                        <span className="text-orange-500">*</span> payer :
                    </label>
                </div>
            )}
            {option.payerCate && (
                <div className="capitalize">
                    <label htmlFor="" className="font-bold">
                        <span className="text-orange-500">*</span> payer
                        category:
                    </label>
                </div>
            )}
            {option.encounter && (
                <div className="capitalize">
                    <label htmlFor="" className="font-bold">
                        <span className="text-orange-500">*</span> patient
                        encounter:
                    </label>
                </div>
            )}

            {option.team && (
                <div className="capitalize">
                    <label htmlFor="" className="font-bold">
                        <span className="text-orange-500">*</span> team:
                    </label>
                </div>
            )}
        </>
    );
};

export default Details;
