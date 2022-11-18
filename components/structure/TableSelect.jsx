import { Select } from '@chakra-ui/react';
import { MdOutlineArrowDropDown } from 'react-icons/md';

// options --> an array of all the options for a category
// setSelectedOption --> You'll have to define a state for the particular category and pass it's setState to the setSelectedOption prop for this component
const TableSelect = ({ setSelectedOption, options }) => {
  return (
    <Select
      onChange={(e) => setSelectedOption(e.target.value)}
      icon={<MdOutlineArrowDropDown />}
      iconColor="gray"
      width="fit-content"
      css={{
        backgroundColor: 'c6d8ffe1',
        border: 'none',
        fontSize: '12px',
        fontFamily: 'Arial',
      }}
      className="cursor-pointer shadow outline-none"
      size="xs"
    >
      {options?.map((option, index) => (
        <option key={index} value={option} className="text-gray-800">
          {option}
        </option>
      ))}
    </Select>
  );
};

export default TableSelect;
