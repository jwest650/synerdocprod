import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React from 'react';

const AddAddressPhoneModal = () => {
  return (
    <div>
      <div>
        <Modal
          isOpen={openReAdmit}
          onClose={() => setOpenReAdmit(false)}
          className='p-5'
        >
          <ModalOverlay />
          <ModalContent maxWidth={700}>
            <ModalHeader>
              <h1>Add Address/Phone Info</h1>
              <p>add information and save</p>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody></ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default AddAddressPhoneModal;
