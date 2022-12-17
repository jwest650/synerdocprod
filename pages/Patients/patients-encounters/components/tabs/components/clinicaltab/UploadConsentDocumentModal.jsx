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

const UploadConsentDocumentModal = ({
  openUploadConsentDocument,
  setOpenUploadConsentDocument,
}) => {
  const data = [1, 1, 1, 1]
  return (
    <div>
      <Modal
        isOpen={openUploadConsentDocument}
        onClose={() => setOpenUploadConsentDocument(false)}
        className='p-5'
      >
        <ModalOverlay />
        <ModalContent maxWidth={900} className='verdana13 '>
          <div className='w-full rounded border-[2px] border-t-[20px] border-light-blue p-4 pb-10 '>
            <ModalBody>
              <div>
                <h1 className=' verdana18  font-bold'>Upload file</h1>
              </div>

              <div>
                <div className='my-2 mt-2 flex items-start'>
                  <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
                    <span className='font-bold text-secondary-color'>*</span>
                    select file:
                  </p>

                  <div className='mt-[1px]'>
                    <input size='xs' type='file' />
                  </div>
                </div>

                <div className='my-2 mt-2 flex items-start'>
                  <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
                    Attach to:
                  </p>

                  <div className='mt-[1px]'>
                    <Select size='xs' width={'200px'}>
                      <option>Encounter</option>
                      <option>Patient</option>
                    </Select>
                  </div>
                </div>
                <div className='my-2 mt-2 flex items-start'>
                  <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
                    <span className='font-bold text-secondary-color'>*</span>
                    Document Type:
                  </p>

                  <div className='mt-[1px]'>
                    <Select size='xs' width={'200px'}>
                      <option>select </option>
                      <option>select </option>
                      <option>select </option>
                      <option>select </option>
                    </Select>
                  </div>
                </div>
                <div className='my-2 mt-2 flex items-start'>
                  <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
                    <span className='font-bold text-secondary-color'>*</span>
                    Document Status:
                  </p>

                  <div className='mt-[1px]'>
                    <Select size='xs' width={'200px'}>
                      <option>Select </option>
                      <option>Completed </option>
                      <option>Fax Failed </option>
                      <option>Fax Passed </option>
                      <option>Fax Sent </option>
                      <option>Generated </option>
                      <option>Incoming Fax </option>
                      <option>No Action Needed </option>
                      <option>Other </option>
                    </Select>
                  </div>
                </div>

                <div className='my-2 mt-2 flex items-start'>
                  <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
                    Description:
                  </p>

                  <div className='mt-[1px]'>
                    <Input size={'xs'} width='350px' />
                  </div>
                </div>
                <div className='my-2 mt-2 flex items-start'>
                  <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
                    Note:
                  </p>

                  <div className='mt-[1px]'>
                    <Textarea size={'xs'} width='350px' />
                  </div>
                </div>
              </div>

              <div className='flex justify-center'>
                <div className='my-3 '>
                  <button
                    className='btn-save'
                    onClick={() => setOpenUploadConsentDocument(false)}
                  >
                    upload/close
                  </button>
                  <button className='btn-save ml-3'>upload/Add More</button>
                  <button
                    className='btn-cancel ml-3'
                    onClick={() => setOpenUploadConsentDocument(false)}
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

export default UploadConsentDocumentModal
