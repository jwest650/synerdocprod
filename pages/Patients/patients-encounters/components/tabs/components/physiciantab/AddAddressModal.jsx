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

const AddAddressModal = ({ openAddAdress, setOpenAddAdress }) => {
  let data = [1, 1, 1, 1]
  return (
    <div className='verdana13 '>
      <Modal
        isOpen={openAddAdress}
        onClose={() => setOpenAddAdress(false)}
        className='p-5'
      >
        <ModalOverlay />
        <ModalContent maxWidth={900}>
          <div className='w-full rounded border-[2px] border-t-[20px] border-light-blue p-4 pb-10 '>
            <ModalHeader>
              <h1 className='verdana18  text-center font-bold capitalize text-black dark:text-white'>
                Add Adress For Orders
              </h1>
              <hr />
            </ModalHeader>
            <ModalBody>
              <section>
                <div>
                  <div className='flex items-center justify-center py-2'>
                    <Radio>John taylor street, American House, No 1223</Radio>
                  </div>
                </div>

                <div className='my-3 flex justify-center'>
                  <div>
                    <div>
                      <button
                        className='btn-save'
                        onClick={() => setOpenAddAdress(false)}
                      >
                        Save
                      </button>
                      <button
                        className='btn-cancel ml-3'
                        onClick={() => setOpenAddAdress(false)}
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

export default AddAddressModal
