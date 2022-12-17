import { useRef, useState } from 'react';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import useDisplay from '../../hooks/useDisplay';
import MoreAddressInfo from './MoreAddressInfo';

const InputDropdown = ({
  options,
  selectedOption,
  setSelectedOption,
  placeholder,
  from,
}) => {
  const [showList, setShowList] = useState(false);
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [inputText, setInputText] = useState('');
  const popupRef = useRef(null);
  const inputRef = useRef(null);
  useDisplay(popupRef, setShowList, inputRef);
  console.log(inputText);
  return (
    <div className="relative flex items-center">
      <input
        ref={inputRef}
        onClick={() => setShowList(true)}
        type="text"
        placeholder={placeholder}
        value={inputText === '' ? selectedOption : inputText}
        onChange={(e) => {
          setInputText(e.target.value);
          setSelectedOption(e.target.value);
        }}
        className="input-primary w-40"
        onMouseOver={() => setShowMoreInfo(true)}
        onMouseLeave={() => setShowMoreInfo(false)}
      />
      <i
        onClick={() => setShowList(true)}
        className="absolute right-0 flex h-5 cursor-pointer items-center justify-center bg-secondary-blue px-1.5 py-[2px] shadow"
      >
        <MdOutlineArrowDropDown className="scale-150 " />
      </i>
      {inputText && showMoreInfo && <MoreAddressInfo />}
      {showList && (
        <div
          ref={popupRef}
          className="card-dropdown absolute top-5 z-10 min-w-[190px] whitespace-nowrap"
        >
          {from === 'Patient' ? (
            <div className="mt-1 flex h-6 w-full items-center justify-between rounded-t border-b bg-white px-4 shadow-xl">
              <span>Patient Name</span>
              <span>SOC Date</span>
            </div>
          ) : null}
          <ul
            className={`h-full w-full overflow-y-scroll ${
              from === 'Patient' ? '' : 'mt-1 rounded-t'
            } bg-white shadow-xl`}
          >
            {options?.map((option, index) => (
              <li
                onClick={() => {
                  setSelectedOption && setSelectedOption(option);
                  setInputText(option);
                }}
                key={index}
                className="flex cursor-pointer items-center gap-10 py-1 px-2 hover:bg-texiary-blue "
              >
                <span>{option}</span>
                {from === 'Patient' && (
                  <span>{new Date().toLocaleDateString()}</span>
                )}
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
