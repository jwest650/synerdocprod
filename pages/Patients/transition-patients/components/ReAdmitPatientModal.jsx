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
        <ModalContent maxWidth={700}>
          <div className='w-full rounded border-[2px] border-t-[20px] border-primary-color p-4 pb-10 '>
            <ModalHeader>
              <h1>Re-Admit Patient</h1>
              <p>Additional information to copy along</p>
            </ModalHeader>
            {/* <ModalCloseButton /> */}
            <ModalBody>
              <div className='flex flex-col'>
                <Checkbox>Include Medications (all)</Checkbox>
                <Checkbox>Include Medications (active only)</Checkbox>
                <Checkbox>Include Advance Directives</Checkbox>
                <Checkbox>Include Disaster Plan</Checkbox>
                <Checkbox>Include DME</Checkbox>
                <Checkbox>Include Vendor</Checkbox>
                <Checkbox>Include Vital</Checkbox>
                <Checkbox>Include Vaccines</Checkbox>
                <Checkbox>Include Allergies</Checkbox>
                <div className='my-3 flex justify-end'>
                  <button className='rounded bg-secondary-color px-4 py-1 text-white shadow'>
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
