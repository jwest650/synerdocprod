import {
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Input,
  Textarea,
  Checkbox,
} from '@chakra-ui/react'

const EditEncounterModal = ({ openEditEncounter, setOpenEditEncounter }) => {
  return (
    <div>
      <Modal
        isOpen={openEditEncounter}
        onClose={() => setOpenEditEncounter(false)}
        className='p-5'
      >
        <ModalOverlay />
        <ModalContent maxWidth={900}>
          <div className='w-full rounded border-[2px] border-t-[20px] border-light-blue p-4 pb-10 '>
            <div>
              <ModalHeader>Edit Encounter</ModalHeader>
            </div>
            <ModalBody>
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
                <div className='my-2 mt-2 flex items-start'>
                  <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
                    DNR:
                  </p>

                  <div className='mt-[1px]'>
                    <Select size='xs'>
                      <option>DNR</option>
                      <option>DNR</option>
                      <option>DNR</option>
                      <option>DNR</option>
                    </Select>
                  </div>
                </div>
                <div className='my-2 mt-2 flex items-start'>
                  <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
                    Advance Directives
                    <p>Naratives:</p>
                  </p>

                  <div className='mt-[1px]'>
                    <Textarea size='xs' />
                  </div>
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='my-3 '>
                  <button className='rounded bg-secondary-color px-4 py-1 text-white shadow'>
                    Save
                  </button>
                  <button className='ml-3 rounded bg-secondary-color px-4 py-1 text-white shadow'>
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

export default EditEncounterModal
