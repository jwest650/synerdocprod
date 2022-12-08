import React from 'react';

const TextFormFields = () => {
  return (
    <div className="mt-7 flex w-full flex-col items-center gap-3.5">
      <div className="flex w-full items-center justify-center gap-3 ">
        <p className="flex w-[48%]  justify-end">Comments:</p>
        <div className=" flex w-[52%] gap-2">
          <textarea className="w-60 rounded border border-secondary-blue shadow-sm" />
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-3 ">
        <p className="flex w-[48%] justify-end">Evaluated by:</p>
        <div className=" flex w-[52%] items-center gap-2">
          <input type="text" className="input-primary w-60" />
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-3 ">
        <p className="flex w-[48%] justify-end">Date:</p>
        <div className=" flex w-[52%] items-center gap-2">
          <input type="date" className="input-primary" />
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-3 ">
        <p className="flex w-[48%] justify-end">Employee&apos;s Comments:</p>
        <div className=" flex w-[52%] ">
          <textarea className="input-primary w-60" />{' '}
        </div>
      </div>

      <div className="flex w-full justify-center gap-3 ">
        <p className="flex w-[48%] justify-end">
          This evaluation has been discussed with employee?:
        </p>
        <div className=" flex w-[52%] flex-col">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="yes" className="input-primary" />
            <label htmlFor="yes">Yes</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="no" className="input-primary" />
            <label htmlFor="no">No (explain below)</label>
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-center gap-3 ">
        <p className="flex w-[48%] justify-end">Explanation:</p>
        <div className=" flex w-[52%] ">
          <textarea type="text" className="input-primary w-60" />
        </div>
      </div>
    </div>
  );
};

export default TextFormFields;
