import { Select } from '@chakra-ui/react';
import { MdOutlineArrowDropDown } from 'react-icons/md';

// options --> an array of all the options for a category
// setSelectedOption --> You'll have to define a state for the particular category and pass it's setState to the setSelectedOption prop for this component

const TableSelect = ({ setSelectedOption, options, styles }) => {
  return (
    <Select
      onChange={(e) =>
        setSelectedOption !== undefined && setSelectedOption(e.target.value)
      }
      icon={<MdOutlineArrowDropDown />}
      iconColor="gray"
      width="fit-content"
<<<<<<< HEAD
      borderColor="#c6d8ffe1"
      borderRadius="4px"
      outline="none"
      backgroundColor="c6d8ffe1"
      fontSize="11px"
=======
      borderColor="#e8f8f4cc"
      borderRadius="2px"
      backgroundColor="#87b6accc"
      fontSize="11px"
      focusBorderColor="#87b6accc"
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
      height="23px"
      fontFamily="Arial"
      className="cursor-pointer shadow outline-none"
      {...styles}
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
