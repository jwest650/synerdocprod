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
        <ModalContent maxWidth={700}>
          <div className='w-full rounded border-[2px] border-t-[20px] border-primary-color p-4 pb-10 '>
            <ModalHeader>
              Find Referral Source
              <p className='text-sm text-gray-600'>
                Find referral source/add referral source if not found.
              </p>
            </ModalHeader>
            {/* <ModalCloseButton /> */}
            <ModalBody>
              <section>
                <div className='flex py-3'>
                  <div className='w-[150px]'>
                    <label htmlFor='#'>
                      <span className='font-bold text-secondary-color'>*</span>
                      First/Middle/
                      <span className='font-bold text-secondary-color'>*</span>
                      Last:
                    </label>
                  </div>

                  <div className='flex items-center'>
                    <Input size={'xs'} />
                    <Input size={'xs'} className='ml-3' />
                    <Input size={'xs'} className='ml-3' />
                  </div>
                </div>

                <div className='flex py-2'>
                  <div className='w-[150px]'>
                    <h1 className='mr-5'>Phone 1: </h1>
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
                <div className='flex py-2'>
                  <div className='w-[150px]'>
                    <h1 className='mr-5'>Phone 2: </h1>
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
                <div className='flex py-2'>
                  <div className='w-[150px]'>
                    <h1 className='mr-5'>Information: </h1>
                  </div>
                  <Input size={'xs'} />
                </div>
                <div className='flex py-2'>
                  <div className='w-[150px]'>
                    <h1 className='mr-5'>Email: </h1>
                  </div>
                  <Input size={'xs'} />
                </div>
                <div className='flex py-2'>
                  <div className='w-[150px]'>
                    <h1 className='mr-5'>
                      <span className='font-bold text-secondary-color'>*</span>
                      Start Date:{' '}
                    </h1>
                  </div>
                  <Input size={'xs'} type='date' />
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
