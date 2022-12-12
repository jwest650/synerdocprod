import {
  Checkbox,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Select,
} from '@chakra-ui/react'
import React from 'react'
import { FiTrash2 } from 'react-icons/fi'

const AddContactInfoModal = ({ openAddContactInfo, setOpenAddContactInfo }) => {
  let data = [1, 1]

  return (
    <div>
      <Modal
        isOpen={openAddContactInfo}
        onClose={() => setOpenAddContactInfo(false)}
        className='p-5'
      >
        <ModalOverlay />
        <ModalContent maxWidth={900} className='verdana13 '>
          <div className=' rounded border-[2px] border-t-[20px] border-light-blue p-4 pb-10 '>
            <ModalBody>
              <div className='mb-3'>
                <h1 className=' verdana18  font-bold'>
                  Add Address/Phone Info
                </h1>
                <p>add information and save</p>
              </div>

              <section className='justify-betweeen flex'>
                <div className=' w-[60%] border-r-2 p-2'>
                  <div className='my-2 flex'>
                    <p className='mr-3 w-[150px] text-right font-semibold'>
                      <span className='font-bold text-secondary-color'>*</span>
                      Address Type:
                    </p>

                    <div className='flex w-[70%]'>
                      <Select size='xs' className='input-primary'>
                        <option value='option1' className='text-gray-800'>
                          Option 1
                        </option>
                        <option value='option2' className='text-gray-800'>
                          Option 2
                        </option>
                        <option value='option3' className='text-gray-800'>
                          Option 3
                        </option>
                      </Select>
                    </div>
                  </div>

                  <div className='my-2 flex'>
                    <p className='mr-3 w-[150px] text-right font-semibold'>
                      <span className='font-bold text-secondary-color'>*</span>
                      Address 1:
                    </p>

                    <div className='flex w-[70%]'>
                      <input className='input-primary' size={'xs'} />
                    </div>
                  </div>

                  <div className='my-2 flex'>
                    <p className='mr-3 w-[150px] text-right font-semibold'>
                      Address 2:
                    </p>

                    <div className='flex w-[70%]'>
                      <input className='input-primary' size={'xs'} />
                    </div>
                  </div>
                  <div className='my-2 flex'>
                    <p className='mr-3 w-[150px] text-right font-semibold'>
                      <span className='font-bold text-secondary-color'>*</span>
                      City/State/Zip:
                    </p>

                    <div className='flex w-[70%]'>
                      <input className='input-primary' size={'xs'} />

                      <div className='ml-1 flex-1'>
                        <Select size='xs' className='input-primary'>
                          <option value='option1' className='text-gray-800'>
                            La
                          </option>
                          <option value='option2' className='text-gray-800'>
                            Option 2
                          </option>
                          <option value='option3' className='text-gray-800'>
                            Option 3
                          </option>
                        </Select>
                      </div>

                      <input
                        size={'xs'}
                        value='2334'
                        className='input-primary ml-1 w-[50px]'
                      />
                    </div>
                  </div>
                  <div className='my-2 flex'>
                    <p className='mr-3 w-[150px] text-right font-semibold'>
                      Phone :
                    </p>

                    <div className=' w-[70%]'>
                      <Select
                        size='xs'
                        marginRight={5}
                        className='input-primary'
                      >
                        <option value='option1' className='text-gray-800'>
                          select
                        </option>
                        <option value='option2' className='text-gray-800'>
                          Option 2
                        </option>
                        <option value='option3' className='text-gray-800'>
                          Option 3
                        </option>
                      </Select>
                    </div>
                  </div>
                  <div className='my-2 flex'>
                    <p className='mr-3 w-[150px] text-right font-semibold'>
                      Phone Type:
                    </p>

                    <div className='flex w-[70%]'>
                      <input
                        className='input-primary w-[50px]'
                        size={'xs'}
                        value='2334'
                      />
                      <input
                        size={'xs'}
                        value='2334'
                        className='input-primary ml-1 w-[50px]'
                      />
                      <input
                        size={'xs'}
                        value='2334'
                        className='input-primary ml-1 w-[50px]'
                      />
                    </div>
                  </div>

                  <div className='my-3 flex items-end justify-end'>
                    <button className='rounded bg-secondary-color px-4 py-1 text-white shadow'>
                      add contact
                    </button>
                  </div>
                </div>

                <div className=' flex   flex-1 flex-col justify-between p-2'>
                  <table className=' min-w-full overflow-auto text-xs'>
                    <thead className='thead-primary'>
                      <tr>
                        <th className='th-first'>Preffered</th>
                        <th className=' th-middle'>Phone Type</th>
                        <th className=' th-middle'>Phone</th>
                        <th className=' th-last'></th>
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
                            <Checkbox></Checkbox>
                          </td>
                          <td className='td-primary'>Home</td>
                          <td className='td-primary'>233454545</td>
                          <td
                            // className='border border-gray-400'
                            className=' td-primary'
                          >
                            <FiTrash2 />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className='my-3 flex items-end justify-end'>
                    <div>
                      <button
                        className='rounded bg-secondary-color px-4 py-1 text-white shadow'
                        onClick={() => setOpenAddContactInfo(false)}
                      >
                        Save
                      </button>
                      <button
                        className='ml-3 rounded bg-secondary-color px-4 py-1 text-white shadow'
                        onClick={() => setOpenAddContactInfo(false)}
                      >
                        Continue
                      </button>
                      <button
                        className='ml-3 rounded bg-secondary-color px-4 py-1 text-white shadow'
                        onClick={() => setOpenAddContactInfo(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </ModalBody>
          </div>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default AddContactInfoModal
