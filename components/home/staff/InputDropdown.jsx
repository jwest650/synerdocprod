import { useState } from 'react';

const InputDropdown = ({ options, setSelectedOption, placeholder }) => {
  const [showList, setShowList] = useState(false);
  return (
    <div
      onMouseOver={() => setShowList(true)}
      onMouseLeave={() => setShowList(false)}
      className="relative flex items-center"
    >
      <input
        type="text"
        placeholder={placeholder}
        className="input-primary w-40"
      />
      {showList && (
        <div className="card-dropdown absolute top-5 z-10 min-w-[190px] whitespace-nowrap">
          <ul className=" mt-2 h-full w-full overflow-y-scroll rounded-t bg-white shadow-xl">
            {options.map((option, index) => (
              <li
                onClick={() => setSelectedOption && setSelectedOption(option)}
                key={index}
                className="flex cursor-pointer items-center gap-2 py-1 px-2 hover:bg-texiary-blue "
              >
                <span>{option}</span>
              </li>
            ))}
          </ul>
          <div className="flex h-6 w-full items-center justify-center rounded-b border-t bg-white shadow-xl">
            Items: <strong>{options.length}</strong>
          </div>
        </div>
      )}
    </div>
  );
};

export default InputDropdown;
