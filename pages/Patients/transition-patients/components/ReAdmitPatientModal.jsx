import {
  Select,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Checkbox,
} from '@chakra-ui/react';
import { useState } from 'react';

const ReAdmitPatientModal = ({ openReAdmit, setOpenReAdmit }) => {
  return (
    <div>
      <Modal
        isOpen={openReAdmit}
        onClose={() => setOpenReAdmit(false)}
        className='p-5'
      >
        <ModalOverlay />
        <ModalContent maxWidth={700}>
          <ModalHeader>
            <h1>Re-Admit Patient</h1>
            <p>Additional information to copy along</p>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ReAdmitPatientModal;
