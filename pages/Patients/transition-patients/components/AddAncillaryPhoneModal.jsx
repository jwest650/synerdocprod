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
            <div className='w-full rounded border-[2px] border-t-[20px] border-[#6b3e9280] p-4 pb-10 '>
              <ModalHeader>
                <h1>Add Ancillary Phone Info</h1>
                <p>add information and save</p>
              </ModalHeader>
              {/* <ModalCloseButton /> */}
              <ModalBody>
                <section>
                  <div className='my-5 flex'>
                    <div className='w-[150px]'>
                      <label htmlFor='#'>
                        <span className='font-bold text-orange-500'>*</span>
                        Phone Type:
                      </label>
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
                      <label htmlFor='#'>
                        <span className='font-bold text-orange-500'>*</span>
                        Phone :
                      </label>
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
                  <button className='rounded bg-[#32164A] px-4 py-1 text-white shadow'>
                    Save
                  </button>
                  <button className='ml-3 rounded bg-[#32164A] px-4 py-1 text-white shadow'>
                    Cancel
                  </button>
                </div>
              </ModalBody>
            </div>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default AddAncillaryPhoneModal;
