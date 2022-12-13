import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Select,
} from '@chakra-ui/react'
import React from 'react'

const EditClinicalManagerModal = ({
  openEditClinical,
  setOpenEditClinical,
}) => {
  const data = [1, 1, 1, 1]

  return (
    <div>
      <div>
        <Modal
          isOpen={openEditClinical}
          onClose={() => setOpenEditClinical(false)}
          className='p-5'
        >
          <ModalOverlay />
          <ModalContent maxWidth={900} className='verdana13 '>
            <div className='w-full rounded border-[2px] border-t-[20px] border-light-blue p-4 pb-10 '>
              {/* <ModalCloseButton /> */}
              <ModalBody>
                <div className='mb-3'>
                  <h1 className=' verdana18  font-bold'>
                    Edit Manager Information
                  </h1>
                  <p className='verdana13 '>eidt information and save</p>
                </div>

                <section>
                  <div className='flex py-1'>
                    <div className='mr-3 w-[200px] text-right'>
                      <p className='font-semibold'>Case Manager: </p>
                    </div>
                    <div className='w-[400px]'>
                      <Select size='xs'>
                        <option value=''>John Bruce</option>
                        <option value=''>John Bruce</option>
                        <option value=''>John Bruce</option>
                        <option value=''>John Bruce</option>
                      </Select>
                    </div>
                  </div>

                  <div className='flex py-1'>
                    <div className='mr-3 w-[200px] text-right'>
                      <p className='font-semibold'>Clinical Manager: </p>
                    </div>
                    <div className='w-[400px]'>
                      <Select size='xs'>
                        <option value=''>John Bruce</option>
                        <option value=''>John Bruce</option>
                        <option value=''>John Bruce</option>
                        <option value=''>John Bruce</option>
                      </Select>
                    </div>
                  </div>
                </section>
                <div className='flex justify-center'>
                  <div className='my-3 '>
                    <button
                      className='btn-save'
                      onClick={() => setOpenEditClinical(false)}
                    >
                      Save
                    </button>
                    <button
                      className='btn-cancel ml-3'
                      onClick={() => setOpenEditClinical(false)}
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
    </div>
  )
}

export default EditClinicalManagerModal
