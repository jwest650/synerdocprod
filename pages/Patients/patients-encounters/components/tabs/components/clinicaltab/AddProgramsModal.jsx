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

const AddProgramsModal = ({ openAddPrograms, setOpenAddPrograms }) => {
  const data = []
  return (
    <div>
      <div>
        <Modal
          isOpen={openAddPrograms}
          onClose={() => setOpenAddPrograms(false)}
          className='p-5'
        >
          <ModalOverlay />
          <ModalContent maxWidth={900} className='verdana13 '>
            <div className='w-full rounded border-[2px] border-t-[20px] border-light-blue p-4 pb-10 '>
              {/* <ModalCloseButton /> */}
              <ModalBody>
                <div className='mb-3'>
                  <h1 className=' verdana18  font-bold'>Add Programs</h1>
                  <p className='verdana13 '>
                    Select or remove programs, edit start and end dates.
                  </p>
                </div>

                <section>
                  <table className='min-w-full overflow-auto'>
                    <thead className='thead-primary'>
                      <tr>
                        <th className=' th-first'>
                          <Checkbox />
                        </th>
                        <th className=' th-middle'>Program</th>
                        <th className=' th-middle'>Start Date</th>
                        <th className=' th-last'>End Date</th>
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
                          <td className='td-primary'>12/12/19</td>
                          <td className='td-primary'>23/23/19</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className='w-full bg-gray-400 p-2'>
                    No programs to display
                  </p>
                </section>
                <div className='flex justify-end'>
                  <div className='my-3 ml-auto '>
                    <button
                      className='btn-save'
                      onClick={() => setOpenAddPrograms(false)}
                    >
                      Save
                    </button>
                    <button
                      className='btn-cancel ml-3'
                      onClick={() => setOpenAddPrograms(false)}
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

export default AddProgramsModal
