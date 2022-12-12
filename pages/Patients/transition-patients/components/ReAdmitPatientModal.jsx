import {
  Select,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Checkbox,
} from '@chakra-ui/react'
import { useState } from 'react'

const ReAdmitPatientModal = ({ openReAdmit, setOpenReAdmit }) => {
  return (
    <div>
      <Modal
        isOpen={openReAdmit}
        onClose={() => setOpenReAdmit(false)}
        className='p-5'
      >
        <ModalOverlay />
        <ModalContent maxWidth={900} className='verdana13 '>
          <div className='w-full rounded border-[2px] border-t-[20px] border-light-blue p-4 pb-10 '>
            <ModalHeader>
              <h1 className='verdana18 '>Re-Admit Patient</h1>
              <p className='verdana13 '>Additional information to copy along</p>
            </ModalHeader>
            {/* <ModalCloseButton /> */}
            <ModalBody>
              <div className='flex flex-col'>
                <Checkbox size='sm'>Include Medications (all)</Checkbox>
                <Checkbox size='sm'>Include Medications (active only)</Checkbox>
                <Checkbox size='sm'>Include Advance Directives</Checkbox>
                <Checkbox size='sm'>Include Disaster Plan</Checkbox>
                <Checkbox size='sm'>Include DME</Checkbox>
                <Checkbox size='sm'>Include Vendor</Checkbox>
                <Checkbox size='sm'>Include Vital</Checkbox>
                <Checkbox size='sm'>Include Vaccines</Checkbox>
                <Checkbox size='sm'>Include Allergies</Checkbox>
                <div className='my-3 flex justify-end'>
                  <button
                    className='rounded bg-secondary-color px-4 py-1 text-white shadow'
                    onClick={() => setOpenReAdmit(false)}
                  >
                    Continue
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

export default ReAdmitPatientModal
