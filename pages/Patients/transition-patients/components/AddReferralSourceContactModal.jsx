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
} from '@chakra-ui/react'
import { useState } from 'react'

const AddReferralSourceContactModal = ({
  openAddReferralContact,
  setOpenAddReferralContact,
}) => {
  return (
    <div>
      <Modal
        isOpen={openAddReferralContact}
        onClose={() => setOpenAddReferralContact(false)}
        className='p-5'
      >
        <ModalOverlay />
        <ModalContent maxWidth={900}>
          <div className='w-full rounded border-[2px] border-t-[20px] border-light-blue p-4 pb-10 '>
            <ModalHeader>
              Add Referral Source Contact
              <p className='text-sm text-gray-600'>
                Find referral source/add referral source if not found.
              </p>
            </ModalHeader>
            {/* <ModalCloseButton /> */}
            <ModalBody>
              <section>
                <div className='my-2 flex'>
                  <div className='mr-3 w-[25%] text-right font-semibold'>
                    <p>
                      <span className='font-bold text-secondary-color'>*</span>
                      First/Middle/
                      <span className='font-bold text-secondary-color'>*</span>
                      Last:
                    </p>
                  </div>

                  <div className='flex items-center'>
                    <Input size={'xs'} />
                    <Input size={'xs'} className='ml-3' />
                    <Input size={'xs'} className='ml-3' />
                  </div>
                </div>
                <div className='my-2 flex'>
                  <div className='mr-3 w-[25%] text-right font-semibold'>
                    <p>Phone 1:</p>
                  </div>

                  <div className='flex'>
                    <div>
                      <Select size='xs'>
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
                    <p className='ml-3 text-gray-500'>(343)-343-445</p>
                    <div className='ml-3'>
                      <Input size={'xs'} />
                    </div>
                  </div>
                </div>

                <div className='my-2 flex'>
                  <div className='mr-3 w-[25%] text-right font-semibold'>
                    <p>Phone 2:</p>
                  </div>

                  <div className='flex'>
                    <div>
                      <Select size='xs'>
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
                    <p className='ml-3 text-gray-500'>(343)-343-445</p>
                    <div className='ml-3'>
                      <Input size={'xs'} />
                    </div>
                  </div>
                </div>

                <div className='my-2 flex'>
                  <div className='mr-3 w-[25%] text-right font-semibold'>
                    <p>Information:</p>
                  </div>

                  <div className='w-[70%]'>
                    <Input size={'xs'} />
                  </div>
                </div>
                <div className='my-2 flex'>
                  <div className='mr-3 w-[25%] text-right font-semibold'>
                    <p>Email:</p>
                  </div>

                  <div className='w-[70%]'>
                    <Input size={'xs'} />
                  </div>
                </div>
                <div className='my-2 flex'>
                  <div className='mr-3 w-[25%] text-right font-semibold'>
                    <p>
                      <span className='font-bold text-secondary-color'>*</span>
                      Start Date:
                    </p>
                  </div>

                  <div className='w-[70%]'>
                    <Input size={'xs'} />
                  </div>
                </div>
              </section>
              <div className='flex justify-end py-3'>
                <button className='rounded bg-secondary-color px-4 py-1 text-white shadow'>
                  Save
                </button>
                <button className='ml-2 rounded bg-secondary-color px-4 py-1 text-white shadow'>
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

export default AddReferralSourceContactModal
