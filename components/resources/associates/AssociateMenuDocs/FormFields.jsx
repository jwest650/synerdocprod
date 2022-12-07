import React from 'react';

const FormFields = ({ formObj, setFormObj }) => {
  return (
    <div className="mt-5 flex w-full justify-center gap-3">
      <div className="flex w-[48%] justify-end text-end">
        <h3>{formObj.title}</h3>
      </div>
      <ul className="w-[52%] space-y-1">
        {formObj.options.map((option, index) => (
          <li key={index} className="flex cursor-pointer items-center gap-2.5">
            <input
              type="checkbox"
              checked={option === formObj.selectedOption ? true : false}
              onChange={(e) =>
                e.target.checked &&
                setFormObj((prev) => ({
                  title: prev.title,
                  options: prev.options,
                  selectedOption: option,
                }))
              }
              id={option}
              className="input-primary"
            />
            <label htmlFor={option}>{option}</label>{' '}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormFields;
