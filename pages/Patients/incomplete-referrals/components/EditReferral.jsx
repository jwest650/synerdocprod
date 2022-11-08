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
} from '@chakra-ui/react'

const EditReferral = ({ openAddReferral, setOpenAddReferral }) => {
  return (
    <div>
      <Modal
        isOpen={openAddReferral}
        onClose={() => setOpenAddReferral(false)}
        className='p-5'
      >
        <ModalOverlay />
        <ModalContent maxWidth={700}>
          <div className='w-full rounded border-[2px] border-t-[20px] border-primary-color p-4 pb-10 '>
            <div>
              <ModalHeader>
                Edit Referral
                <p className='text-sm text-gray-600'>add referal details</p>
              </ModalHeader>
            </div>
            <ModalBody>
              <div className='my-2 flex'>
                <label htmlFor='#' className='w-[20%]'>
                  <span className='font-bold text-secondary-color'>*</span>{' '}
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
                  <span className='font-bold text-secondary-color'>*</span>{' '}
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
                  <span className='font-bold text-secondary-color'>*</span> Last
                  Name:{' '}
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
                  <span className='font-bold text-secondary-color'>*</span>{' '}
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
              <Button colorScheme='gray' size={'sm'} mr={'3'}>
                Save
              </Button>
              <Button colorScheme='gray' size={'sm'}>
                Cancel
              </Button>
            </div>
          </div>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default EditReferral
