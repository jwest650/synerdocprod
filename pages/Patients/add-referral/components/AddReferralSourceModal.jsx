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
} from '@chakra-ui/react';

const AddReferralSourceModal = ({ openAddReferral, setOpenAddReferral }) => {
  return (
    <div>
      <Modal
        isOpen={openAddReferral}
        onClose={() => setOpenAddReferral(false)}
        className='p-5'
      >
        <ModalOverlay />
        <ModalContent maxWidth={700}>
          <div className='w-full rounded border-[2px] border-t-[20px] border-[#6b3e9280] p-4 pb-10 '>
            <div>
              <ModalHeader>
                Add Referral
                <p className='text-sm text-gray-600'>add referal details</p>
              </ModalHeader>
            </div>
            {/* <ModalCloseButton /> */}
            <ModalBody>
              <div className='my-2 flex'>
                <label htmlFor='#' className='w-[20%]'>
                  Referral Type:{' '}
                </label>
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
              <div className='my-2 flex '>
                <label htmlFor='#' className='w-[20%]'>
                  First Name:{' '}
                </label>
                <div className='w-[70%]'>
                  <Input placeholder='small size' size='sm' />
                </div>
              </div>
              <div className='my-2 flex '>
                <label htmlFor='#' className='w-[20%]'>
                  Middle initial:{' '}
                </label>
                <div className='w-[70%]'>
                  <Input placeholder='small size' size='sm' />
                </div>
              </div>
              <div className='my-2 flex '>
                <label htmlFor='#' className='w-[20%]'>
                  Last Name:{' '}
                </label>
                <div className='w-[70%]'>
                  <Input placeholder='small size' size='sm' />
                </div>
              </div>
              <div className='my-2 flex '>
                <label htmlFor='#' className='w-[20%]'>
                  Email:{' '}
                </label>
                <div className='w-[70%]'>
                  <Input placeholder='small size' type={'email'} size='sm' />
                </div>
              </div>
              <div className='my-2 flex'>
                <label htmlFor='#' className='w-[20%]'>
                  Sales Rep:{' '}
                </label>
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
              <div className='my-2 flex '>
                <label htmlFor='#' className='w-[20%]'>
                  Start:{' '}
                </label>
                <div className='w-[70%]'>
                  <Input
                    placeholder='Select Date and Time'
                    size='sm'
                    type='date'
                  />
                </div>
              </div>
              <div className='my-2 flex '>
                <label htmlFor='#' className='w-[20%]'>
                  End Date:{' '}
                </label>
                <div className='w-[70%]'>
                  <Input
                    placeholder='Select Date and Time'
                    size='sm'
                    type='date'
                  />
                </div>
              </div>
              <div className='my-2 flex '>
                <label htmlFor='#' className='w-[20%]'>
                  Physician Group:{' '}
                </label>
                <div className='w-[70%]'>
                  <Input placeholder='small size' size='sm' />
                </div>
              </div>
              <div className='my-2 flex'>
                <label htmlFor='#' className='w-[20%]'>
                  Specialty:{' '}
                </label>
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
                <label htmlFor='#' className='w-[20%]'>
                  Title:{' '}
                </label>
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
              <button className='rounded bg-[#32164A] px-4 py-1 text-white shadow'>
                Save
              </button>
              <button className='rounded ml-3 bg-[#32164A] px-4 py-1 text-white shadow'>
                Cancel
              </button>
            </div>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AddReferralSourceModal;
