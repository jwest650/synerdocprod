import {
  Checkbox,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
} from '@chakra-ui/react'
import React from 'react'

const EditEncounterPhysicianModal = ({
  openEditEncounterPhysician,
  setOpenEditEncounterPhysician,
}) => {
  let data = [1, 1, 1, 1]
  return (
    <div className='verdana13 '>
      <Modal
        isOpen={openEditEncounterPhysician}
        onClose={() => setOpenEditEncounterPhysician(false)}
        className='p-5'
      >
        <ModalOverlay />
        <ModalContent maxWidth={900}>
          <div className='w-full rounded border-[2px] border-t-[20px] border-light-blue p-4 pb-10 '>
            <ModalHeader>
              <h1 className='verdana18  text-center font-bold capitalize text-black dark:text-white'>
                Edit Encounter Physician
              </h1>
              <hr />
            </ModalHeader>
            <ModalBody>
              <section>
                <div>
                  <div className='flex items-center justify-center py-2'>
                    <p className='verdana13 mr-3 w-[150px] text-right font-semibold'>
                      Physician Type:
                    </p>

                    <div className='ml-2 flex justify-end'>
                      <Select size={'xs'}>
                        <option value=''>Attending</option>
                        <option value=''>Attending</option>
                        <option value=''>Attending</option>
                        <option value=''>Attending</option>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className='my-3 flex justify-center'>
                  <div>
                    <div>
                      <button
                        className='rounded bg-secondary-color px-4 py-1 text-white shadow'
                        onClick={() => setOpenEditEncounterPhysician(false)}
                      >
                        Save
                      </button>
                      <button
                        className='ml-3 rounded bg-secondary-color px-4 py-1 text-white shadow'
                        onClick={() => setOpenEditEncounterPhysician(false)}
                      >
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
    </div>
  )
}

export default EditEncounterPhysicianModal
