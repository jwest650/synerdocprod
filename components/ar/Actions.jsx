import React from "react";
import { useState } from "react";
import { CiSettings } from "react-icons/ci";

const Actions = ({ icon1, icon2 }) => {
    const [show, setshow] = useState(false);
    return (
        <div
            className="flex h-full min-w-[80px] cursor-pointer items-center justify-center space-x-2 text-xl"
            onMouseLeave={() => setshow(false)}
        >
            {show && <span className="table-action-anim"> {icon1}</span>}
            <CiSettings onMouseEnter={() => setshow(true)} />
            {show && <span className="table-action-anim"> {icon2}</span>}
        </div>
    );
};

export default Actions;
