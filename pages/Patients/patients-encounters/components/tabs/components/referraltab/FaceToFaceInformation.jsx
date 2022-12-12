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

const FaceToFaceInformation = ({
  openFaceToFaceInformation,
  setOpenFaceToFaceInformation,
}) => {
  const data = [1, 1, 1, 1]
  return (
    <div>
      <Modal
        isOpen={openFaceToFaceInformation}
        onClose={() => setOpenFaceToFaceInformation(false)}
        className='p-5'
      >
        <ModalOverlay />
        <ModalContent
          maxWidth={900}
          className='verdana13 h-[500px] overflow-y-auto'
        >
          <div className='w-full rounded border-[2px] border-t-[20px] border-light-blue p-4 pb-10 '>
            <ModalBody>
              <div>
                <h1 className=' verdana18 font-bold'>Face To Face</h1>
              </div>

              <div className='border-b-4'>
                <div className='my-2 mt-2 flex items-start'>
                  <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
                    Visit Date:
                  </p>

                  <div className='mt-[1px]'>
                    <Input type='date' size={'xs'} width='350px' />
                  </div>
                </div>
                <div className='my-2 mt-2 flex items-start'>
                  <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
                    Visit Comment:
                  </p>

                  <div className='mt-[1px]'>
                    <textarea
                      name=''
                      id=''
                      cols='40'
                      rows='5'
                      className='border'
                    ></textarea>
                  </div>
                </div>
              </div>

              <div>
                <h1>Physician Face to Face Encounter</h1>
                <div className='my-2 mt-2 flex items-start'>
                  <p className='verdana13 mr-3 w-[200px] font-semibold'>
                    Physician Type:
                  </p>

                  <div className='mt-[1px]'></div>
                </div>

                <div className='text-xs'>
                  <Checkbox>
                    Physician who cared for patient in acute or post-acute
                    facility conducted the face to face Encounter
                  </Checkbox>
                </div>
                <div className='text-xs'>
                  <Checkbox defaultChecked>
                    Physician who cared for patient in acute or post-acute
                    facility conducted the face to face Encounter
                  </Checkbox>
                </div>
                <div className='text-xs'>
                  <Checkbox>
                    Physician who cared for patient in acute or post-acute
                    facility conducted the face to face Encounter
                  </Checkbox>
                </div>

                <div className='my-2 mt-2  '>
                  <p className='verdana13 mr-3 w-[200px] font-semibold'>
                    Physician Attestation:
                  </p>

                  <div className='mt-[1px]'>
                    <p>
                      Physician who cared for patient in acute or post-acute
                      facility conducted the face to face EncounterPhysician who
                      cared for patient in acute or post-acute facility
                      conducted the face to face EncounterPhysician who cared
                      for patient in acute or post-acute facility conducted the
                      face to face Encounter
                    </p>
                  </div>

                  <textarea
                    name=''
                    id=''
                    cols='40'
                    rows='5'
                    className='w-full border'
                  ></textarea>
                </div>

                <div className='my-2 mt-2  '>
                  <p className='verdana13 mr-3   font-semibold'>
                    my Clinical findings support the need for the above service
                    because:
                  </p>

                  <textarea
                    name=''
                    id=''
                    cols='40'
                    rows='5'
                    className='w-full border'
                  ></textarea>
                </div>
                <div className='my-2 mt-2  '>
                  <p className='verdana13 mr-3   font-semibold'>
                    based on my findings i certify that the forllowing Home
                    Healt service are medically needed:
                  </p>

                  <Checkbox>Nursing</Checkbox>
                  <Checkbox>Therapies</Checkbox>
                </div>
                <div className='my-2 mt-2  '>
                  <p className='verdana13 mr-3   font-semibold'>
                    Additionally I Certify that the Clinical finding support
                    that this patient is homebound because:
                  </p>

                  <div>
                    <Checkbox className='mr-4  w-[50%]' defaultChecked>
                      Need assistant for all activities
                    </Checkbox>
                    <Checkbox>Residual Weakness</Checkbox>
                  </div>
                  <div>
                    <Checkbox className='mr-4  w-[50%]'>
                      Requires max assistance taxing effot to leave home
                    </Checkbox>
                    <Checkbox defaultChecked>Confusion</Checkbox>
                  </div>
                  <div>
                    <Checkbox className='mr-4  w-[50%]' defaultChecked>
                      Unsafe to go out alone
                    </Checkbox>
                    <Checkbox>Severe SOB</Checkbox>
                  </div>
                  <div>
                    <Checkbox className='mr-4  w-[50%]'>
                      SOB Upon exertion
                    </Checkbox>
                    <Checkbox>Decreased Endurance</Checkbox>
                  </div>
                </div>

                <div className='my-2 mt-2  '>
                  <p className='verdana13 mr-3 w-[200px] font-semibold'>
                    Other Reasons for Homebound:
                  </p>

                  <textarea
                    name=''
                    id=''
                    cols='40'
                    rows='5'
                    className='w-full border'
                  ></textarea>
                </div>
              </div>

              <div className='flex justify-center'>
                <div className='my-3 '>
                  <button
                    className='rounded bg-secondary-color px-4 py-1 text-white shadow'
                    onClick={() => setOpenFaceToFaceInformation(false)}
                  >
                    save
                  </button>

                  <button
                    className='ml-3 rounded bg-secondary-color px-4 py-1 text-white shadow'
                    onClick={() => setOpenFaceToFaceInformation(false)}
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

export default FaceToFaceInformation
