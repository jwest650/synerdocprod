<<<<<<< HEAD
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
import { useState } from "react";
import { FcPlanner } from "react-icons/fc";

const CalendarComp = ({ setDate, date }) => {
    const [showCal, setShowCal] = useState(false);

    const handleChange = (e) => {
        setDate && setDate(e.value.toLocaleDateString());
    };
    return (
        <>
            <div
                className="relative"
                onMouseOver={() => setShowCal(true)}
                onMouseLeave={() => setShowCal(false)}
            >
                <div className="flex items-center gap-1.5">
                    <input
                        type="text"
                        placeholder="mm/dd/yyyy"
                        disabled
                        value={date}
                        onChange={() => true}
                        className="input-date cursor-pointer disabled:bg-white"
                    />
                    <FcPlanner className="scale-125 text-lg" />
                </div>
                <div
                    className={`absolute left-0 top-[22px] z-10 flex flex-col ${
                        showCal ? "date-anim inline-flex" : "hidden"
                    }`}
                >
                    <CalendarComponent
                        onChange={handleChange}
                        value={date}
                        cssClass="cal-primary"
                        showTodayButton={false}
                    />
                    <div className="-mt-1 flex items-center justify-end rounded-b bg-[#c6d8ff] p-1 px-3">
                        <span
                            className={`cursor-pointer rounded px-2 py-1 hover:bg-primary-blue hover:text-white ${
                                date === new Date().toLocaleDateString() &&
                                "bg-primary-blue text-white"
                            } `}
                            onClick={() =>
                                setDate(new Date().toLocaleDateString())
                            }
                        >
                            Today
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
=======
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import { useState } from 'react';
import { FcPlanner } from 'react-icons/fc';

const CalendarComp = ({ setDate, date }) => {
  const [showCal, setShowCal] = useState(false);

  const handleChange = (e) => {
    setDate && setDate(e.value.toLocaleDateString());
  };
  return (
    <div
      className=""
      onMouseOver={() => setShowCal(true)}
      onMouseLeave={() => setShowCal(false)}
    >
      <div className="relative flex items-center gap-1.5">
        <input
          type="text"
          placeholder="mm/dd/yyyy"
          disabled
          value={date}
          onChange={() => true}
          className="input-date cursor-pointer disabled:bg-white"
        />
        <FcPlanner className="scale-125 text-lg" />
      </div>
      <div
        className={`absolute z-10 flex flex-col ${
          showCal ? 'date-anim inline-flex' : 'hidden'
        }`}
      >
        <CalendarComponent
          onChange={handleChange}
          value={date}
          cssClass="cal-primary"
          showTodayButton={false}
        />
        <div className="-mt-1 flex items-center justify-end rounded-b bg-[#87b6ac] p-1 px-3">
          <span
            className={`cursor-pointer rounded px-2 py-1 hover:bg-primary-blue hover:text-white ${
              date === new Date().toLocaleDateString() &&
              'bg-primary-blue text-white'
            } `}
            onClick={() => setDate(new Date().toLocaleDateString())}
          >
            Today
          </span>
        </div>
      </div>
    </div>
  );
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
};
export default CalendarComp;
