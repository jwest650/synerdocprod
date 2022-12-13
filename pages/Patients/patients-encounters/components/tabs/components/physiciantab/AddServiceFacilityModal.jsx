import {
  Checkbox,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Input,
  Select,
} from '@chakra-ui/react'

const AddServiceFacilityModal = ({
  openAddServiceFacility,
  setOpenAddServiceFacility,
}) => {
  let data = [1, 1, 1, 1, 1]

  return (
    <div>
      <Modal
        isOpen={openAddServiceFacility}
        onClose={() => setOpenAddServiceFacility(false)}
        className='p-5'
      >
        <ModalOverlay />
        <ModalContent maxWidth={900} className='verdana13 '>
          <div className='w-full rounded border-[2px] border-t-[20px] border-light-blue p-4 pb-10 '>
            <ModalBody>
              <div className='mb-3'>
                <h1 className=' verdana18  font-bold'>Add Facility</h1>
                <p>add information and save</p>
              </div>

              <div>
                <div className='my-2 flex '>
                  <p className='mr-3 w-[30%] text-right font-semibold'>
                    <span className='text-orange-600'>*</span>
                    Facility Name:
                  </p>

                  <div className='flex w-[70%] items-center'>
                    <div>
                      <input type='text' className='input-primary' />
                    </div>
                  </div>
                </div>
                <div className='my-2 flex '>
                  <p className='mr-3 w-[30%] text-right font-semibold'>
                    <span className='text-orange-600'>*</span>
                    Facility Type:
                  </p>

                  <div className='flex w-[70%] items-center'>
                    <div>
                      <Select size='xs' className='input-primary'>
                        <option value=''>Select</option>
                        <option value=''>Select</option>
                        <option value=''>Select</option>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className='my-2 flex '>
                  <p className='mr-3 w-[30%] text-right font-semibold'>
                    Email:
                  </p>

                  <div className='flex w-[70%] items-center'>
                    <input type='text' className='input-primary' />
                  </div>
                </div>
                <div className='my-2 flex '>
                  <p className='mr-3 w-[30%] text-right font-semibold'>
                    Sales Rep:
                  </p>

                  <div className='flex w-[70%] items-center'>
                    <div>
                      <Select size='xs' className='input-primary'>
                        <option value=''>Select</option>
                        <option value=''>Select</option>
                        <option value=''>Select</option>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className='my-2 flex '>
                  <p className='mr-3 w-[30%] text-right font-semibold'>
                    <span className='text-orange-600'>*</span>
                    Start Date:
                  </p>

                  <div className='flex w-[70%] items-center'>
                    <input type='date' className='input-primary' />
                  </div>
                </div>
                <div className='my-2 flex '>
                  <p className='mr-3 w-[30%] text-right font-semibold'>
                    End Date:
                  </p>

                  <div className='flex w-[70%] items-center'>
                    <input type='date' className='input-primary' />
                  </div>
                </div>
              </div>
              <div>
                <div className='flex items-center justify-center py-3'>
                  <button
                    className='btn-save'
                    onClick={() => setOpenAddServiceFacility(false)}
                  >
                    Save
                  </button>
                  <button
                    className='btn-cancel my-2 ml-3'
                    onClick={() => setOpenAddServiceFacility(false)}
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

export default AddServiceFacilityModal
