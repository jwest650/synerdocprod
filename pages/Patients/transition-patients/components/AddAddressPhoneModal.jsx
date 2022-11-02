import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React from 'react';

const AddAddressPhoneModal = ({ openReAdmit, setOpenReAdmit }) => {
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
            <div className='w-full rounded border-[2px] border-t-[20px] border-[#6b3e9280] p-4 pb-10 '>
              <ModalHeader>
                <h1>Add Address/Phone Info</h1>
                <p>add information and save</p>
              </ModalHeader>
              <ModalBody></ModalBody>
            </div>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default AddAddressPhoneModal;
