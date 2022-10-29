import { Checkbox } from '@chakra-ui/react';
import React from 'react';

const ReAdmitPatientModal = () => {
  return (
    <div>
      <h1>Re-Admit Patient</h1>
      <p>Additional information to copy along</p>

      <div>
        <Checkbox>Include Medications (all)</Checkbox>
        <Checkbox>Include Medications (active only)</Checkbox>
        <Checkbox>Include Advance Directives</Checkbox>
        <Checkbox>Include Disaster Plan</Checkbox>
        <Checkbox>Include DME</Checkbox>
        <Checkbox>Include Vendor</Checkbox>
        <Checkbox>Include Vital</Checkbox>
        <Checkbox>Include Vaccines</Checkbox>
        <Checkbox>Include Allergies</Checkbox>
        <div className='my-3 flex justify-end'>
          <button className='rounded border px-3'>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default ReAdmitPatientModal;
