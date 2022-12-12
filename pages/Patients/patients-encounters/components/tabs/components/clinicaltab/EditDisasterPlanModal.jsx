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
import { GrTableAdd } from 'react-icons/gr'

const EditDisasterPlanModal = ({
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
                    <thead className='thead-primary'>
                      <tr>
                        <th className=' th-first'></th>
                        <th className=' th-middle'>Disaster plan</th>
                        <th className=' th-middle'>Plan Details</th>
                        <th className=' th-last'></th>
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
                          <td className='td-primary'>
                            <Checkbox />
                          </td>
                          <td className='td-primary'>
                            Patients needs Assistance
                          </td>
                          <td className='td-primary'>
                            <Textarea
                              width={'100%'}
                              backgroundColor='white'
                            ></Textarea>
                          </td>
                          <td className='td-primary'>
                            <GrTableAdd />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </section>
                <div className='flex justify-end'>
                  <div className='my-3 ml-auto '>
                    <button
                      className='rounded bg-secondary-color px-4 py-1 text-white shadow'
                      onClick={() => setOpenEditDisasterPlan(false)}
                    >
                      Save
                    </button>
                    <button
                      className='ml-3 rounded bg-secondary-color px-4 py-1 text-white shadow'
                      onClick={() => setOpenEditDisasterPlan(false)}
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
    </div>
  )
}

export default EditDisasterPlanModal
