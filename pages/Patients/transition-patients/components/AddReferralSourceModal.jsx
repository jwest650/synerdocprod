import {
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Checkbox,
} from '@chakra-ui/react'

const AddReferralSourceModal = ({ openAddReferral, setOpenAddReferral }) => {
  return (
    <div>
      <Modal
        isOpen={openAddReferral}
        onClose={() => setOpenAddReferral(false)}
        className='p-5'
      >
        <ModalOverlay />
        <ModalContent maxWidth={900}>
          <div className='w-full rounded border-[2px] border-t-[20px] border-primary-color p-4 pb-10 '>
            <div>
              <ModalHeader>
                Add Referral
                <p className='text-sm text-gray-600'>add referal details</p>
              </ModalHeader>
            </div>
            {/* <ModalCloseButton /> */}
            <ModalBody>
              <div className='my-2 flex'>
                <p className='mr-3 w-[20%] text-right font-semibold'>
                  <span className='font-bold text-secondary-color'>*</span>
                  Referral Type:
                </p>

                <div className='w-[70%]'>
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
              </div>

              <div className='my-2 flex'>
                <p className='mr-3 w-[20%] text-right font-semibold'>
                  <span className='font-bold text-secondary-color'>*</span>
                  First Name:
                </p>

                <div className='w-[70%]'>
                  <Input placeholder='small size' size='sm' />
                </div>
              </div>

              <div className='my-2 flex'>
                <p className='mr-3 w-[20%] text-right font-semibold'>
                  Middle initial:
                </p>

                <div className='w-[70%]'>
                  <Input placeholder='small size' size='sm' />
                </div>
              </div>

              <div className='my-2 flex'>
                <p className='mr-3 w-[20%] text-right font-semibold'>
                  <span className='font-bold text-secondary-color'>*</span>Last
                  Name:
                </p>

                <div className='w-[70%]'>
                  <Input placeholder='small size' size='sm' />
                </div>
              </div>
              <div className='my-2 flex'>
                <p className='mr-3 w-[20%] text-right font-semibold'>Email:</p>

                <div className='w-[70%]'>
                  <Input placeholder='small size' type={'email'} size='sm' />
                </div>
              </div>

              <div className='my-2 flex'>
                <p className='mr-3 w-[20%] text-right font-semibold'>
                  Sales Rep:
                </p>

                <div className='w-[70%]'>
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
              </div>

              <div className='my-2 flex'>
                <p className='mr-3 w-[20%] text-right font-semibold'>
                  <span className='font-bold text-secondary-color'>*</span>
                  Start:
                </p>

                <div className='w-[70%]'>
                  <Input
                    placeholder='Select Date and Time'
                    size='sm'
                    type='date'
                  />
                </div>
              </div>

              <div className='my-2 flex'>
                <p className='mr-3 w-[20%] text-right font-semibold'>
                  End Date:
                </p>

                <div className='w-[70%]'>
                  <Input
                    placeholder='Select Date and Time'
                    size='sm'
                    type='date'
                  />
                </div>
              </div>

              <div className='my-2 flex'>
                <p className='mr-3 w-[20%] text-right font-semibold'>
                  Physician Group:
                </p>

                <div className='w-[70%]'>
                  <Input placeholder='small size' size='sm' />
                </div>
              </div>
              <div className='my-2 flex'>
                <p className='mr-3 w-[20%] text-right font-semibold'>
                  Specialty:
                </p>

                <div className='w-[70%]'>
                  <Input placeholder='small size' size='sm' />
                </div>
              </div>

              <div className='my-2 flex'>
                <p className='mr-3 w-[20%] text-right font-semibold'>Title:</p>

                <div className='w-[70%]'>
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
              </div>
            </ModalBody>

            <div className='mx-auto p-5'>
              <button className='rounded bg-secondary-color px-4 py-1 text-white shadow'>
                Save
              </button>
              <button className='ml-3 rounded bg-secondary-color px-4 py-1 text-white shadow'>
                Cancel
              </button>
            </div>
          </div>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default AddReferralSourceModal
