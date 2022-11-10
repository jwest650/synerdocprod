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
} from '@chakra-ui/react'
import React from 'react'

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
        <ModalContent maxWidth={900}>
          <div className='w-full rounded border-[2px] border-t-[20px] border-primary-color p-4 pb-10 '>
            {/* <ModalCloseButton /> */}
            <ModalBody>
              <div className='mb-3'>
                <h1 className=' text-2xl font-bold'>
                  Add Patient Contact info
                </h1>
                <p>add information and save</p>
              </div>
              <section>
                <div className='my-2 flex'>
                  <p className='mr-3 w-[200px] text-right font-semibold'>
                    <span className='font-bold text-secondary-color'>*</span>
                    Relationship:
                  </p>

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
                  <p className='mr-3 w-[200px] text-right font-semibold'>
                    Contact Type:
                  </p>

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
                  <p className='mr-3 w-[200px] text-right font-semibold'>
                    <span className='font-bold text-secondary-color'>*</span>
                    First Name:
                  </p>

                  <div>
                    <Input size='xs' />
                  </div>
                </div>

                <div className='my-2 flex'>
                  <p className='mr-3 w-[200px] text-right font-semibold'>
                    <span className='font-bold text-secondary-color'>*</span>
                    Last Name:
                  </p>

                  <div>
                    <Input size='xs' />
                  </div>
                </div>

                <div className='my-2 flex'>
                  <p className='mr-3 w-[200px] text-right font-semibold'>
                    <span className='font-bold text-secondary-color'>*</span>
                    Date of Birth:
                  </p>

                  <div>
                    <Input size='xs' type='date' />
                  </div>
                </div>
                <div className='my-2 flex'>
                  <p className='mr-3 w-[200px] text-right font-semibold'>
                    Sequence:
                  </p>

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
                  <p className='mr-3 w-[200px] text-right font-semibold'>
                    Email:
                  </p>

                  <div>
                    <Input size='xs' type='text' />
                  </div>
                </div>
                <div className='my-2 flex'>
                  <p className='mr-3 w-[200px] text-right font-semibold'>
                    Misc information:
                  </p>

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
                <button className='rounded bg-secondary-color px-4 py-1 text-white shadow'>
                  Continue
                </button>
                <button className='ml-3 rounded bg-secondary-color px-4 py-1 text-white shadow'>
                  Cancel
                </button>
              </div>
            </ModalBody>
          </div>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default AddPatientContactModal
