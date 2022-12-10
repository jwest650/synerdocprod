import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Input,
  Select,
  Textarea,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useState } from 'react'
import SelectPatientModal from './SelectPatientModal'

const UploadDocumentModal = ({ openUploadDocument, setOpenUploadDocument }) => {
  let data = [1, 1, 1, 1, 1]
  const [openSelectPatient, setOpenSelectPatient] = useState(false)
  const [patient, setPatient] = useState('')

  return (
    <div>
      <Modal
        isOpen={openUploadDocument}
        onClose={() => setOpenUploadDocument(false)}
        className='p-5'
      >
        <ModalOverlay />
        <ModalContent maxWidth={900} className='verdana13 '>
          <div className='w-full rounded border-[2px] border-t-[20px] border-light-blue p-4 pb-10 '>
            <ModalBody>
              <div>
                <h1 className=' verdana18  font-bold'>Upload Document</h1>
              </div>

              <div>
                <div className='my-2 flex items-center'>
                  <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
                    <span className='font-bold text-secondary-color'>*</span>
                    Select File:
                  </p>
                  <div>
                    <input type='file' name='' id='' />
                  </div>
                </div>
                <div className='my-2 flex items-center'>
                  <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
                    Attach To:
                  </p>
                  <div>
                    <Select
                      size='xs'
                      marginRight={5}
                      onChange={() => setOpenSelectPatient(true)}
                    >
                      <option value='option1' className='text-gray-800'>
                        Encounter
                      </option>
                      <option value='option2' className='text-gray-800'>
                        Patient
                      </option>
                    </Select>
                  </div>
                </div>
                {patient !== '' && (
                  <div className='my-2 flex items-center'>
                    <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
                      Name:
                    </p>
                    <div>
                      <p>{patient}</p>
                    </div>
                  </div>
                )}
                <div className='my-2 flex items-center'>
                  <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
                    <span className='font-bold text-secondary-color'>*</span>
                    Document Type:
                  </p>
                  <div>
                    <Select size='xs' marginRight={5}>
                      <option value='option1' className='text-gray-800'>
                        Select Type
                      </option>
                      <option value='option2' className='text-gray-800'>
                        Option 2
                      </option>
                      <option value='option3' className='text-gray-800'>
                        Option 3
                      </option>
                    </Select>
                  </div>
                </div>
                <div className='my-2 flex items-center'>
                  <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
                    <span className='font-bold text-secondary-color'>*</span>
                    Document Status:
                  </p>
                  <div>
                    <Select size='xs' marginRight={5}>
                      <option value='option1' className='text-gray-800'>
                        Select Status
                      </option>
                      <option value='option2' className='text-gray-800'>
                        Option 2
                      </option>
                      <option value='option3' className='text-gray-800'>
                        Option 3
                      </option>
                    </Select>
                  </div>
                </div>
                <div className='my-2 flex items-center'>
                  <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
                    <span className='font-bold text-secondary-color'>*</span>
                    Description:
                  </p>
                  <div>
                    <input type='text' className='input-primary' />
                  </div>
                </div>
                <div className='my-2 flex items-center'>
                  <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
                    <span className='font-bold text-secondary-color'>*</span>
                    Note:
                  </p>
                  <div>
                    <Textarea></Textarea>
                  </div>
                </div>
              </div>

              <div className='ml-3 mt-12 flex justify-center'>
                <button className='btn-primary ml-3'>Upload/Close</button>
                <button className='btn-primary ml-3'>Upload/Add More</button>
                <button className='btn-primary ml-3'>cancel</button>
              </div>
            </ModalBody>
          </div>
        </ModalContent>
      </Modal>

      <SelectPatientModal
        openSelectPatient={openSelectPatient}
        setOpenSelectPatient={setOpenSelectPatient}
        setPatient={setPatient}
      />
    </div>
  )
}

export default UploadDocumentModal
