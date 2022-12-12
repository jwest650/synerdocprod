import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Input,
  Select,
  Checkbox,
} from '@chakra-ui/react'

const AddVendorModal = ({ openAddVendor, setOpenAddVendor }) => {
  const data = [1, 1, 1, 1]
  return (
    <div>
      <Modal
        isOpen={openAddVendor}
        onClose={() => setOpenAddVendor(false)}
        className='p-5'
      >
        <ModalOverlay />
        <ModalContent maxWidth={900} className='verdana13 '>
          <div className='w-full rounded border-[2px] border-t-[20px] border-light-blue p-4 pb-10 '>
            <ModalBody>
              <div>
                <h1 className=' verdana18  font-bold'>Add Vendor</h1>
              </div>

              <div>
                <div className='my-2 mt-2 flex items-start'>
                  <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
                    <span className='font-bold text-secondary-color'>*</span>
                    Vendor:
                  </p>

                  <div className='mt-[1px]'>
                    <Select size='xs' width={'200px'}>
                      <option>select</option>
                      <option>select</option>
                      <option>select</option>
                      <option>select</option>
                      <option>select</option>
                    </Select>
                  </div>
                </div>
                <div className='my-2 mt-2 flex items-start'>
                  <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
                    <span className='font-bold text-secondary-color'>*</span>
                    Start Date:
                  </p>

                  <div className='mt-[1px]'>
                    <Input type='date' size='xs' width={'200px'} />
                  </div>
                </div>
                <div className='my-2 mt-2 flex items-start'>
                  <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
                    <span className='font-bold text-secondary-color'>*</span>
                    End Date:
                  </p>

                  <div className='mt-[1px]'>
                    <Input type='date' size='xs' width={'200px'} />
                  </div>
                </div>
                <div className='my-2 mt-2 flex items-start'>
                  <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
                    <span className='font-bold text-secondary-color'>*</span>
                    Sequence:
                  </p>

                  <div className='mt-[1px]'>
                    <Select size='xs' width={'200px'}>
                      <option>2665 Gorverment </option>
                      <option>2665 Gorverment </option>
                      <option>2665 Gorverment </option>
                      <option>2665 Gorverment </option>
                    </Select>
                  </div>
                </div>

                <div className='my-2 mt-2 flex items-start'>
                  <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
                    Prefered:
                  </p>

                  <div className='mt-[1px]'>
                    <Checkbox />
                  </div>
                </div>
              </div>

              <div className='flex justify-center'>
                <div className='my-3 '>
                  <button
                    className='rounded bg-secondary-color px-4 py-1 text-white shadow'
                    onClick={() => setOpenAddVendor(false)}
                  >
                    Save
                  </button>
                  <button
                    className='ml-3 rounded bg-secondary-color px-4 py-1 text-white shadow'
                    onClick={() => setOpenAddVendor(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </ModalBody>
          </div>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default AddVendorModal
