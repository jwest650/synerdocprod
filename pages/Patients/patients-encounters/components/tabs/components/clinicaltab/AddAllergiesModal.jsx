import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Input,
  Select,
  Checkbox,
  Textarea,
} from '@chakra-ui/react'
import { BsPlus } from 'react-icons/bs'

const AddAllergiesModal = ({ openAddAllergy, setOpenAddAllergy }) => {
  const data = [1, 1, 1, 1]
  return (
    <div>
      <Modal
        isOpen={openAddAllergy}
        onClose={() => setOpenAddAllergy(false)}
        className='p-5'
      >
        <ModalOverlay />
        <ModalContent maxWidth={900} className='verdana13 '>
          <div className='w-full rounded border-[2px] border-t-[20px] border-light-blue p-4 pb-10 '>
            <ModalBody>
              <div>
                <h1 className=' verdana18  font-bold'>Add Allergies</h1>
              </div>

              <div>
                <div className='my-2 mt-2 flex items-start'>
                  <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
                    <span className='font-bold text-secondary-color'>*</span>
                    Allergy:
                  </p>

                  <div className='mt-[1px] flex'>
                    <Select size='xs' width={'200px'}>
                      <option>select </option>
                      <option>select </option>
                      <option>select </option>
                      <option>select </option>
                    </Select>

                    <button
                      className='ml-3 flex items-center capitalize text-orange-500 underline'
                      // onClick={() => setOpenAddVitalSign(true)}
                    >
                      <BsPlus className='verdana16  text-green-500' />
                      add different Allergy
                    </button>
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
                    End Date:
                  </p>

                  <div className='mt-[1px]'>
                    <Input type='date' size='xs' width={'200px'} />
                  </div>
                </div>
              </div>

              <div className='flex justify-center'>
                <div className='my-3 '>
                  <button
                    className='btn-save'
                    onClick={() => setOpenAddAllergy(false)}
                  >
                    save/close
                  </button>
                  <button className='btn-save ml-3'>save/Add</button>
                  <button
                    className='btn-cancel ml-3'
                    onClick={() => setOpenAddAllergy(false)}
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

export default AddAllergiesModal
