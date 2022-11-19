import {
  Checkbox,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Select,
} from '@chakra-ui/react'
import React from 'react'

const EditClinicalAssociateModal = ({
  openEditClinicalAssociate,
  setOpenEditClinicalAssociate,
}) => {
  const data = [1, 1, 1, 1]

  return (
    <div>
      <div>
        <Modal
          isOpen={openEditClinicalAssociate}
          onClose={() => setOpenEditClinicalAssociate(false)}
          className='p-5'
        >
          <ModalOverlay />
          <ModalContent maxWidth={900} className='verdana13 '>
            <div className='w-full rounded border-[2px] border-t-[20px] border-light-blue p-4 pb-10 '>
              {/* <ModalCloseButton /> */}
              <ModalBody className='mx-auto w-[70%]'>
                <div className='mb-3'>
                  <h1 className=' verdana18  font-bold'>Edit Clinical Team</h1>
                  <p className='verdana13 '>eidt information and save</p>
                </div>

                <section>
                  <table className='w-[100%]'>
                    <thead className='thead-primary'>
                      <tr>
                        <th className='th-first '></th>
                        <th className='th-middle'>Associates</th>
                        <th className='th-middle'>Discipline</th>
                        <th className='th-last w-[150px] text-center'>
                          Is primary for Discipline
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item, i) => (
                        <tr
                          key={i}
                          className={`border  ${
                            i % 2 === 0 && 'bg-[#eeeeee]'
                          } `}
                        >
                          <td className='td-primary'>
                            <Checkbox />
                          </td>
                          <td className='td-primary'>tomas Dongo</td>
                          <td className='td-primary'>James Moore</td>
                          <td className='td-primary'>
                            <Checkbox />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </section>
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
    </div>
  )
}

export default EditClinicalAssociateModal
