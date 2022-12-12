import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Input,
  Select,
  Checkbox,
} from '@chakra-ui/react'

const ScheduleServiceModal = ({
  openScheduleService,
  setOpenScheduleService,
}) => {
  const data = [1, 1, 1, 1]
  return (
    <div>
      <Modal
        isOpen={openScheduleService}
        onClose={() => setOpenScheduleService(false)}
        className='p-5'
      >
        <ModalOverlay />
        <ModalContent maxWidth={900} className='verdana13 '>
          <div className='w-full rounded border-[2px] border-t-[20px] border-light-blue p-4 pb-10 '>
            <ModalBody>
              <div>
                <h1 className=' verdana18  font-bold'>
                  Schedule Initial Service
                </h1>
              </div>

              <div className='my-2 mt-4 flex items-start'>
                <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
                  <span className='font-bold text-secondary-color'>*</span>
                  Descipline:
                </p>

                <div className='mt-1'>
                  <table className=' min-w-full overflow-auto'>
                    <thead className='thead-primary'>
                      <tr>
                        <th className=' th-first'></th>
                        <th className=' th-middle'>Discipline</th>
                        <th className=' th-middle'>Service</th>
                        <th className=' th-last'>Requested Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='td-primary'>
                          <Checkbox></Checkbox>
                        </td>
                        <td className='td-primary'>Skilled Nurse</td>
                        <td className='td-primary'>RN Assesment</td>
                        <td className='td-primary'>
                          <Input size='xs' type='date' />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='my-3 '>
                  <button
                    className='rounded bg-secondary-color px-4 py-1 text-white shadow'
                    onClick={() => setOpenScheduleService(false)}
                  >
                    Save
                  </button>
                  <button
                    className='ml-3 rounded bg-secondary-color px-4 py-1 text-white shadow'
                    onClick={() => setOpenScheduleService(false)}
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

export default ScheduleServiceModal
