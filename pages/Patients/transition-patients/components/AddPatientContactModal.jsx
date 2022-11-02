import {
  Checkbox,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Input,
  Textarea,
  Select,
} from '@chakra-ui/react';
import React from 'react';

const AddPatientContactModal = ({
  openPatientContact,
  setOpenPatientContact,
}) => {
  return (
    <div>
      <Modal
        isOpen={openPatientContact}
        onClose={() => setOpenPatientContact(false)}
        className='p-5'
      >
        <ModalOverlay />
        <ModalContent maxWidth={700}>
          <div className='w-full rounded border-[2px] border-t-[20px] border-[#6b3e9280] p-4 pb-10 '>
            <ModalHeader>
              <h1>Add Patient Contact info</h1>
              <p>add information and save</p>
            </ModalHeader>
            {/* <ModalCloseButton /> */}
            <ModalBody>
              <section>
                <div className='my-2 flex'>
                  <div className='w-[150px]'>
                    <label htmlFor='#'>
                      {' '}
                      <span className='font-bold text-orange-500'>*</span>
                      Relationship:
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

                <div className='my-2 flex'>
                  <div className='w-[150px]'>
                    <label htmlFor='#'>Contact Type:</label>
                  </div>
                  <div className='flex flex-col'>
                    <Checkbox defaultChecked>Primary Caregiver</Checkbox>
                    <Checkbox>Caregiver</Checkbox>
                    <Checkbox>Next of Kin</Checkbox>
                    <Checkbox>Emergency</Checkbox>
                    <Checkbox>Power of Attorney</Checkbox>
                    <Checkbox>Willing to provide all patient care</Checkbox>
                    <Checkbox>Berevement</Checkbox>
                    <Checkbox defaultChecked>Family Portal</Checkbox>
                  </div>
                </div>

                <div className='my-2 flex'>
                  <div className='w-[150px]'>
                    <label htmlFor='#'>
                      <span className='font-bold text-orange-500'>*</span>First
                      Name:
                    </label>
                  </div>
                  <div>
                    <Input size='xs' />
                  </div>
                </div>

                <div className='my-2 flex'>
                  <div className='w-[150px]'>
                    <label htmlFor='#'>
                      <span className='font-bold text-orange-500'>*</span>Last
                      Name:
                    </label>
                  </div>
                  <div>
                    <Input size='xs' />
                  </div>
                </div>

                <div className='my-2 flex'>
                  <div className='w-[150px]'>
                    <label htmlFor='#'>Date of Birth:</label>
                  </div>
                  <div>
                    <Input size='xs' type='date' />
                  </div>
                </div>

                <div className='my-2 flex'>
                  <div className='w-[150px]'>
                    <label htmlFor='#'>Sequence:</label>
                  </div>
                  <div>
                    <Select size='xs' marginRight={5}>
                      <option value='option1' className='text-gray-800'>
                        1
                      </option>
                      <option value='option2' className='text-gray-800'>
                        2
                      </option>
                      <option value='option3' className='text-gray-800'>
                        3
                      </option>
                    </Select>
                  </div>
                </div>

                <div className='my-2 flex'>
                  <div className='w-[150px]'>
                    <label htmlFor='#'>Email:</label>
                  </div>
                  <div>
                    <Input size='xs' type='date' />
                  </div>
                </div>

                <div className='my-2 flex'>
                  <div className='w-[150px]'>
                    <label htmlFor='#'>Misc information:</label>
                  </div>
                  <div>
                    <Textarea
                      placeholder='Here is a sample placeholder'
                      size='sm'
                      // resize={resize}
                    />
                  </div>
                </div>
              </section>
              <div className='flex justify-end py-3'>
                <button className='rounded bg-[#32164A] px-4 py-1 text-white shadow'>
                  Continue
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
  );
};

export default AddPatientContactModal;
