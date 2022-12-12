import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Input,
  Select,
} from '@chakra-ui/react'
import Link from 'next/link'

const AddFormModal = ({ openAddForm, setOpenAddForm }) => {
  let data = [1, 1, 1, 1, 1]

  return (
    <div>
      <Modal
        isOpen={openAddForm}
        onClose={() => setOpenAddForm(false)}
        className='p-5'
      >
        <ModalOverlay />
        <ModalContent maxWidth={900} className='verdana13 '>
          <div className='w-full rounded border-[2px] border-t-[20px] border-light-blue p-4 pb-10 '>
            <ModalBody>
              <div>
                <h1 className=' verdana18  font-bold'>Add Form</h1>
                <p>Select a Form type</p>
              </div>

              <div className='mx-auto mb-1 flex w-[60%] items-center'>
                <p className=' font-bold'>Type:</p>
                <Select size={'xs'} className='ml-4'>
                  <option>Select</option>
                  <option>Infection control From</option>
                  <option>Medicare Secondary Payer</option>
                  <option>Military History Checklist</option>
                  <option>Patience Incidence Form</option>
                </Select>
              </div>

              <div className='ml-3 mt-5 flex justify-end'>
                <Link
                  href={'/Patients/patients-encounters/Form'}
                  className='btn-primary'
                >
                  continue
                </Link>
                <button
                  className='btn-primary ml-3'
                  onClick={() => setOpenAddForm(false)}
                >
                  cancel
                </button>
              </div>
            </ModalBody>
          </div>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default AddFormModal
