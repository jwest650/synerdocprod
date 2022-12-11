import {
  Checkbox,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Radio,
  Select,
} from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import AddServiceFacilityModal from './AddServiceFacilityModal'

const AddFacilityStay = ({ openAddFacilityStay, setOpenAddFacilityStay }) => {
  let data = [1, 1, 1, 1]
  const [openAddServiceFacility, setOpenAddServiceFacility] = useState(false)

  return (
    <div className='verdana13 '>
      <Modal
        isOpen={openAddFacilityStay}
        onClose={() => setOpenAddFacilityStay(false)}
        className='p-5'
      >
        <ModalOverlay />
        <ModalContent maxWidth={900}>
          <div className='w-full rounded border-[2px] border-t-[20px] border-light-blue p-4 pb-10 '>
            <ModalHeader>
              <h1 className='verdana18  font-bold capitalize text-black dark:text-white'>
                Add Last Facility Stay
              </h1>
              <hr />
            </ModalHeader>
            <ModalBody>
              <section>
                <div>
                  <div className='my-2 flex '>
                    <p className='mr-3 w-[30%] text-right font-semibold'>
                      <span className='text-orange-600'>*</span>
                      Facility Name:
                    </p>

                    <div className='flex w-[70%] items-center'>
                      <div>
                        <Select size='xs'>
                          <option value=''>Select</option>
                          <option value=''>Select</option>
                          <option value=''>Select</option>
                        </Select>
                      </div>
                      <button
                        className='btn-primary ml-3'
                        onClick={() => setOpenAddServiceFacility(true)}
                      >
                        Add Facilty
                      </button>
                    </div>
                  </div>
                  <div className='my-2 flex '>
                    <p className='mr-3 w-[30%] text-right font-semibold'>
                      <span className='text-orange-600'>*</span>
                      Admit Date:
                    </p>

                    <div className='flex w-[70%] items-center'>
                      <input type='date' className='input-primary' />
                    </div>
                  </div>
                  <div className='my-2 flex '>
                    <p className='mr-3 w-[30%] text-right font-semibold'>
                      <span className='text-orange-600'>*</span>
                      Discharge Date:
                    </p>

                    <div className='flex w-[70%] items-center'>
                      <input type='date' className='input-primary' />
                    </div>
                  </div>
                </div>

                <div className='my-3 flex justify-center'>
                  <div>
                    <div>
                      <button className='rounded bg-secondary-color px-4 py-1 text-white shadow'>
                        Save
                      </button>
                      <button className='ml-3 rounded bg-secondary-color px-4 py-1 text-white shadow'>
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </ModalBody>
          </div>
        </ModalContent>
      </Modal>

      <AddServiceFacilityModal
        openAddServiceFacility={openAddServiceFacility}
        setOpenAddServiceFacility={setOpenAddServiceFacility}
      />
    </div>
  )
}

export default AddFacilityStay
