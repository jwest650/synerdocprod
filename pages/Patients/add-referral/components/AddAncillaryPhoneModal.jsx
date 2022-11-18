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
} from '@chakra-ui/react'
import React from 'react'

const AddAncillaryPhoneModal = ({
  openAddAncillaryPhone,
  setOpenAddAncillaryPhone,
}) => {
  return (
    <div className='verdana13 '>
      <div>
        <Modal
          isOpen={openAddAncillaryPhone}
          onClose={() => setOpenAddAncillaryPhone(false)}
          className='p-5'
        >
          <ModalOverlay />
          <ModalContent maxWidth={900}>
            <div className='w-full rounded border-[2px] border-t-[20px] border-light-blue p-4 pb-10 '>
              {/* <ModalCloseButton /> */}
              <ModalBody>
                <div className='mb-3'>
                  <h1 className=' verdana18  font-bold'>
                    Add Ancillary Phone Info
                  </h1>
                  <p className='verdana13 '>add information and save</p>
                </div>

                <section>
                  <div className='my-2 flex'>
                    <p className='verdana13 mr-3 w-[150px] text-right font-semibold'>
                      <span className='font-bold text-secondary-color'>*</span>
                      Phone Type:
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
                    <p className='verdana13 mr-3 w-[150px] text-right font-semibold'>
                      <span className='font-bold text-secondary-color'>*</span>
                      Phone:
                    </p>

                    <div className='flex'>
                      <Input size={'xs'} value='2334' />
                      <Input size={'xs'} value='2334' className='ml-3' />
                      <Input size={'xs'} value='2334' className='ml-3' />
                    </div>
                  </div>

                  <div className='my-2 flex'>
                    <p className='verdana13 mr-3 w-[150px] text-right font-semibold'>
                      Extension:
                    </p>

                    <div className='flex'>
                      <Input size={'xs'} value='2334' />
                    </div>
                  </div>
                  <div className='my-2 flex'>
                    <p className='verdana13 mr-3 w-[150px] text-right font-semibold'>
                      Description:
                    </p>

                    <div className='flex'>
                      <Textarea />
                    </div>
                  </div>
                </section>
                <div className='my-3 mx-auto w-52'>
                  <button className='rounded bg-secondary-color px-4 py-1 text-white shadow'>
                    Save
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
    </div>
  )
}

export default AddAncillaryPhoneModal
