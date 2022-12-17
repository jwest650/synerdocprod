import React from "react";
import { useState } from "react";

const Tooltip = ({ message, children }) => {
    const [show, setshow] = useState(false);

    return (
        <div className="relative ">
            <section
                onMouseEnter={() => setshow(true)}
                onMouseLeave={() => setshow(false)}
            >
                {children}
            </section>
            {show && (
                <section className="absolute left-3 w-52 rounded border-2 border-t-[10px] border-secondary-blue bg-white p-[1px]">
                    <p>{message}</p>
                </section>
            )}
        </div>
    );
};

export default Tooltip;
