import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react';
import React from 'react';

const NumberInputComp = ({ setValue }) => {
  return (
    <NumberInput
      h="21px"
      w="84px"
      // border="none"
      // outline="none"
      // borderColor="#c6d8ffe1"
      // outlineColor="#c6d8ffe1"
      onChange={(valueString) => setValue(valueString)}
      // _focus="#c6d8ffe1"
      defaultValue={0}
      //   min={10}
      //   max={20}
    >
      <NumberInputField
        h="26px"
        className="border-2 border-secondary-blue shadow"
        // border="none"
        outline="none"
        borderColor="#c6d8ffe1"
      />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};

export default NumberInputComp;
