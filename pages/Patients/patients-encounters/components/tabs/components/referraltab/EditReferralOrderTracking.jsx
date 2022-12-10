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

const EditReferralOrderTracking = ({
  openEditOrderTracking,
  setOpenEditOrderTracking,
}) => {
  const data = [1, 1, 1, 1]
  return (
    <div>
      <Modal
        isOpen={openEditOrderTracking}
        onClose={() => setOpenEditOrderTracking(false)}
        className='p-5'
      >
        <ModalOverlay />
        <ModalContent maxWidth={900} className='verdana13 '>
          <div className='w-full rounded border-[2px] border-t-[20px] border-light-blue p-4 pb-10 '>
            <ModalBody>
              <div>
                <h1 className=' verdana18  text-center font-bold'>
                  Edit Referral Order Tracking Information
                </h1>
              </div>

              <div>
                <div className='my-2 mt-2 flex items-start'>
                  <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
                    Sent Date:
                  </p>

                  <div className='mt-[1px]'>
                    <Input type='date' size={'xs'} width='350px' />
                  </div>
                </div>
                <div className='my-2 mt-2 flex items-start'>
                  <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
                    Received Date:
                  </p>

                  <div className='mt-[1px]'>
                    <Input type='date' size={'xs'} width='350px' />
                  </div>
                </div>
                <div className='my-2 mt-2 flex items-start'>
                  <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
                    Received Not Needed:
                  </p>

                  <div className='mt-[1px]'>
                    <Checkbox />
                  </div>
                </div>
                <div className='my-2 mt-2 flex items-start'>
                  <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
                    Dates Changed By User:
                  </p>

                  <div className='mt-[1px]'></div>
                </div>
              </div>

              <div className='flex justify-center'>
                <div className='my-3 '>
                  <button className='rounded bg-secondary-color px-4 py-1 text-white shadow'>
                    save
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

export default EditReferralOrderTracking
