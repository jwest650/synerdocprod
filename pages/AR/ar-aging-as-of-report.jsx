import React from "react";

const ArAgingAsOfReport = () => {
    return (
        <div className="space-y-5 p-5">
            <section className="flex items-center justify-between  capitalize">
                <h1 className="text-2xl">Ar Aging As Of Report</h1>
                <div className="space-x-2">
                    <label htmlFor="">ar as of date:</label>
                    <input type="date" name="" id="" className="text-black" />
                </div>
                <div className="space-x-2">
                    <select name="" id="" className="text-black">
                        <option value="">spreadsheet w/notes</option>
                    </select>
                    <button className="border  px-2">Export</button>
                </div>
            </section>
            <section className="flex items-center justify-between capitalize">
                <div className="space-x-2">
                    <label htmlFor="">agency:</label>
                    <select name="" id="" className="text-black">
                        <option value="">louisiana love</option>
                    </select>
                </div>
                <div className="space-x-2">
                    <label htmlFor="">agency type:</label>
                    <select name="" id="" className="text-black">
                        <option value="">home health</option>
                    </select>
                </div>
                <div className="space-x-2">
                    <label htmlFor="">age by:</label>
                    <select name="" id="" className="text-black">
                        <option value="">organization standard</option>
                    </select>
                </div>
            </section>
            <hr />
        </div>
    );
};

export default ArAgingAsOfReport;
