import React from "react";

const invoices = () => {
    return (
        <div className="space-y-2 p-5 capitalize">
            <section className="flex items-center justify-between">
                <h1 className="text-2xl capitalize">invoices</h1>

                <aside className="flex items-center space-x-40">
                    <div className="space-x-2">
                        <label htmlFor="">show my responsiilty only:</label>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div className="space-x-2">
                        <select name="" id="" className="w-[200px] text-black">
                            <option value="">pdf</option>
                        </select>
                        <button className="border px-3">Export</button>
                    </div>
                </aside>
            </section>
            <section className="flex items-center justify-between">
                <aside className="space-y-2">
                    <div className="space-x-2">
                        <label htmlFor="">invoice type:</label>
                        <select name="" id="" className="w-[200px] text-black">
                            <option value="">open invoice balances</option>
                        </select>
                    </div>
                    <div className="space-x-2">
                        <label htmlFor="">agency:</label>
                        <select name="" id="" className="w-[200px] text-black">
                            <option value="">all</option>
                        </select>
                    </div>
                    <div className="space-x-2">
                        <label htmlFor="">balance amt.from:</label>
                        <input type="text" className="w-20" />
                        <label htmlFor="">to:</label>
                        <input type="text" className="w-20" />
                    </div>
                    <div className="space-x-2">
                        <label htmlFor="">note type:</label>
                        <select name="" id="" className="w-[200px] text-black">
                            <option value="">all</option>
                        </select>
                    </div>
                </aside>
                <aside className="space-y-2">
                    <div className="space-x-2">
                        <label htmlFor="">age by:</label>
                        <select name="" id="" className="w-[200px] text-black">
                            <option value="">organization standard</option>
                        </select>
                    </div>
                    <div className="space-x-2">
                        <label htmlFor="">agency type:</label>
                        <select name="" id="" className="w-[200px] text-black">
                            <option value="">all</option>
                        </select>
                    </div>
                    <div className="space-x-2">
                        <label htmlFor="">to date from:</label>
                        <input type="text" className="w-20" />
                        <label htmlFor="">to:</label>
                        <input type="text" className="w-20" />
                    </div>
                    <div className="space-x-2">
                        <label htmlFor="">note from:</label>
                        <input type="text" className="w-20" />
                        <label htmlFor="">to:</label>
                        <input type="text" className="w-20" />
                    </div>
                </aside>
                <aside className="space-y-2">
                    <div className="space-x-2">
                        <label htmlFor="">reporting group:</label>
                        <select name="" id="" className="w-[200px] text-black">
                            <option value="">all</option>
                        </select>
                    </div>
                    <div className="space-x-2">
                        <label htmlFor="">payer category:</label>
                        <select name="" id="" className="w-[200px] text-black">
                            <option value="">all</option>
                        </select>
                    </div>
                    <div className="space-x-2">
                        <label htmlFor="">inv dates from:</label>
                        <input type="text" className="w-20" />
                        <label htmlFor="">to:</label>
                        <input type="text" className="w-20" />
                    </div>
                    <div className="space-x-2">
                        <label htmlFor="">note to pull:</label>
                        <select name="" id="" className="w-[200px] text-black">
                            <option value="">latest note applied</option>
                        </select>
                    </div>
                </aside>
            </section>
            <section className="ml-auto flex w-fit items-center space-x-2">
                <div className="w-[210px]">
                    <input
                        type="text"
                        placeholder="Enter Patient first or last name"
                        className="w-full pl-2"
                    />
                </div>
                <div className="w-[210px]">
                    <input
                        type="text"
                        placeholder="Enter Payer name"
                        className="w-full pl-2"
                    />
                </div>
                <div className="w-[210px]">
                    <input
                        type="text"
                        placeholder="Enter invioce #"
                        className="w-full pl-2"
                    />
                </div>
                <button className="border px-2">Search</button>
            </section>
            <hr />
            {/* table */}
            <section>
                <table>
                    <thead></thead>
                </table>
            </section>
        </div>
    );
};

export default invoices;
