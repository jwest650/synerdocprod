import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Input,
  Select,
  Checkbox,
} from '@chakra-ui/react'

const ActivatePatientModal = ({
  openActivatePatient,
  setOpenActivatePatient,
}) => {
  const data = [1, 1, 1, 1]
  return (
    <div>
      <Modal
        isOpen={openActivatePatient}
        onClose={() => setOpenActivatePatient(false)}
        className='p-5'
      >
        <ModalOverlay />
        <ModalContent maxWidth={900} className='verdana13 '>
          <div className='w-full rounded border-[2px] border-t-[20px] border-light-blue p-4 pb-10 '>
            <ModalBody>
              <div>
                <h1 className=' verdana18  font-bold'>Activate Patient</h1>
              </div>

              <div>
                <div className='my-2 mt-2 flex items-start'>
                  <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
                    <span className='font-bold text-secondary-color'>*</span>
                    Verbal SOC:
                  </p>

                  <div className='mt-[1px]'>
                    <Input type='date' size='xs' />
                  </div>
                </div>
                <div className='my-2 mt-2 flex items-start'>
                  <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
                    <span className='font-bold text-secondary-color'>*</span>
                    Start Of Care:
                  </p>

                  <div className='mt-[1px]'>
                    <Input type='date' size='xs' />
                  </div>
                </div>
                <div className='my-2 mt-2 flex items-start'>
                  <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
                    <span className='font-bold text-secondary-color'>*</span>
                    Residence:
                  </p>

                  <div className='mt-[1px]'>
                    <Select size='xs'>
                      <option>2665 Gorverment Road</option>
                      <option>2665 Gorverment Road</option>
                      <option>2665 Gorverment Road</option>
                      <option>2665 Gorverment Road</option>
                    </Select>
                  </div>
                </div>
                <div className='my-2 mt-2 flex items-start'>
                  <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
                    Admission Source:
                  </p>

                  <div className='mt-[1px]'>
                    <Select size='xs'>
                      <option>Transfer From Hospital</option>
                      <option>Transfer From Hospital</option>
                      <option>Transfer From Hospital</option>
                      <option>Transfer From Hospital</option>
                    </Select>
                  </div>
                </div>
                <div className='my-2 mt-2 flex items-start'>
                  <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
                    Admission Type:
                  </p>

                  <div className='mt-[1px]'>
                    <Select size='xs'>
                      <option>Elective</option>
                      <option>Elective</option>
                      <option>Elective</option>
                      <option>Elective</option>
                    </Select>
                  </div>
                </div>
                <div className='my-2 mt-2 flex items-start'>
                  <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
                    <span className='font-bold text-secondary-color'>*</span>
                    Level Of Care:
                  </p>

                  <div className='mt-[1px]'>
                    <Select size='xs'>
                      <option>Routine Care</option>
                      <option>Routine Care</option>
                      <option>Routine Care</option>
                      <option>Routine Care</option>
                    </Select>
                  </div>
                </div>
                <div className='my-2 mt-2 flex items-start'>
                  <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
                    <span className='font-bold text-secondary-color'>*</span>
                    Election Period:
                  </p>

                  <div className='mt-[1px]'>
                    <Input type='text' size='xs' />
                  </div>
                </div>
                <div className='my-2 mt-2 flex items-start'>
                  <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
                    Team:
                  </p>

                  <div className='mt-[1px]'>
                    <Select size='xs'>
                      <option>Team Bravo</option>
                      <option>Team Bravo</option>
                      <option>Team Bravo</option>
                      <option>Team Bravo</option>
                    </Select>
                  </div>
                </div>
                <div className='my-2 mt-2 flex items-start'>
                  <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
                    Exclude From Survey:
                  </p>

                  <div className='mt-[1px]'>
                    <Checkbox />
                  </div>
                </div>
              </div>

              <div className='flex justify-center'>
                <div className='my-3 '>
                  <button
                    className='btn-save'
                    onClick={() => setOpenActivatePatient(false)}
                  >
                    Save
                  </button>
                  <button
                    className='btn-cancel ml-3'
                    onClick={() => setOpenActivatePatient(false)}
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

export default ActivatePatientModal
