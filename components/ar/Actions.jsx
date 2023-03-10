import React from "react";
import { useState } from "react";
import { FcSettings } from "react-icons/fc";

const Actions = ({ icon1, icon2 }) => {
    const [show, setshow] = useState(false);
    return (
        <div
            className="flex h-full min-w-[80px] cursor-pointer items-center justify-center space-x-2 text-sm"
            onMouseLeave={() => setshow(false)}
        >
            {show && <span className="table-action-anim"> {icon1}</span>}
            <FcSettings onMouseEnter={() => setshow(true)} />
            {show && <span className="table-action-anim"> {icon2}</span>}
        </div>
    );
};

export default Actions;
