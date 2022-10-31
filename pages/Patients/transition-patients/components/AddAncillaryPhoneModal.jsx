import {
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';

const AddAncillaryPhoneModal = ({
  openAddAncillaryPhone,
  setOpenAddAncillaryPhone,
}) => {
  return (
    <div>
      <div>
        <Modal
          isOpen={openAddAncillaryPhone}
          onClose={() => setOpenAddAncillaryPhone(false)}
          className='p-5'
        >
          <ModalOverlay />
          <ModalContent maxWidth={700}>
            <ModalHeader>
              <h1>Add Ancillary Phone Info</h1>
              <p>add information and save</p>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <section>
                <div className='my-5 flex'>
                  <div className='w-[150px]'>
                    <label htmlFor='#'>Phone Type:</label>
                  </div>
                  <div>
                    <Select size='xs' marginRight={5}>
                      <option value='option1' className='text-gray-800'>
                        Option 1
                      </option>
                      <option value='option2' className='text-gray-800'>
                        Option 2
                      </option>
                      <option value='option3' className='text-gray-800'>
                        Option 3
                      </option>
                    </Select>
                  </div>
                </div>

                <div className='my-5 flex'>
                  <div className='w-[150px]'>
                    <label htmlFor='#'>Phone :</label>
                  </div>
                  <div className='flex'>
                    <Input size={'xs'} value='2334' />
                    <Input size={'xs'} value='2334' className='ml-3' />
                    <Input size={'xs'} value='2334' className='ml-3' />
                  </div>
                </div>

                <div className='my-5 flex'>
                  <div className='w-[150px]'>
                    <label htmlFor='#'>Extension:</label>
                  </div>
                  <div className='flex'>
                    <Input size={'xs'} value='2334' />
                  </div>
                </div>

                <div className='my-5 flex'>
                  <div className='w-[150px]'>
                    <label htmlFor='#'>Description:</label>
                  </div>
                  <div className='flex'>
                    <Textarea />
                  </div>
                </div>
              </section>
              <div className='my-3 mx-auto w-52'>
                <button className='rounded border px-3'>Save</button>
                <button className='ml-3 rounded border px-3'>Cancel</button>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default AddAncillaryPhoneModal;
