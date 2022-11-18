import {
  Checkbox,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Textarea,
} from '@chakra-ui/react'
import React from 'react'

const EditDisasterPlan = ({
  openEditDisasterPlan,
  setOpenEditDisasterPlan,
}) => {
  const data = [1, 1, 1, 1]
  return (
    <div>
      <div>
        <Modal
          isOpen={openEditDisasterPlan}
          onClose={() => setOpenEditDisasterPlan(false)}
          className='p-5'
        >
          <ModalOverlay />
          <ModalContent maxWidth={900} className='verdana13 '>
            <div className='w-full rounded border-[2px] border-t-[20px] border-light-blue p-4 pb-10 '>
              {/* <ModalCloseButton /> */}
              <ModalBody>
                <div className='mb-3'>
                  <h1 className=' verdana18  font-bold'>Edit Disaster plan</h1>
                  <p className='verdana13 '>eidt information and save</p>
                </div>

                <section>
                  <table className='min-w-full overflow-auto'>
                    <thead>
                      <tr>
                        <th className=' w-[20px] pl-2 text-left'></th>
                        <th className=' pl-2 text-left'>Disaster plan</th>
                        <th className=' pl-2 text-left'>Plan Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((data, i) => (
                        <tr
                          key={i}
                          className={`border  ${
                            i % 2 === 0 && 'bg-[#eeeeee]'
                          } `}
                        >
                          <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                            <Checkbox />
                          </td>
                          <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                            Patients needs Assistance
                          </td>
                          <td className=' max-h-[20px] min-w-[50px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'>
                            <Textarea width={'100%'}></Textarea>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </section>
                <div className='flex justify-end'>
                  <div className='my-3 ml-auto '>
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
    </div>
  )
}

export default EditDisasterPlan
