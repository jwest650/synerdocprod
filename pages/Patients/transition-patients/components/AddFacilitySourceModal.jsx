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
} from '@chakra-ui/react'
import React from 'react'
import { FiTrash2 } from 'react-icons/fi'

const AddFacilitySourceModal = ({
  openFacilitySource,
  setOpenFacilitySource,
}) => {
  let data = [1, 1]
  return (
    <div>
      <Modal
        isOpen={openFacilitySource}
        onClose={() => setOpenFacilitySource(false)}
        className='p-5'
      >
        <ModalOverlay />
        <ModalContent minWidth={900} className='verdana13 '>
          <div className='w-full rounded border-[2px] border-t-[20px] border-light-blue p-4 pb-10 '>
            <ModalHeader>
              <h1 className='verdana18 '>Add Address/Phone Info</h1>
              <p className='text-sm'>add information and save</p>
            </ModalHeader>
            {/* <ModalCloseButton /> */}
            <ModalBody>
              <section className='justify-betweeen flex'>
                <div className=' w-[50%] border-r-2 p-2'>
                  <div className='my-2 flex'>
                    <p className='mr-3 w-[150px] text-right font-semibold'>
                      <span className='font-bold text-secondary-color'>*</span>
                      Address Type:
                    </p>

                    <div className=' w-[70%]'>
                      <Select size='xs' className='input-primary w-full  '>
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
                      <input className='input-primary w-full' size={'xs'} />
                    </div>
                  </div>

                  <div className='my-2 flex'>
                    <p className='mr-3 w-[150px] text-right font-semibold'>
                      Address 2:
                    </p>

                    <div className='flex w-[70%]'>
                      <input className='input-primary w-full' size={'xs'} />
                    </div>
                  </div>

                  <div className='my-2 flex'>
                    <p className='mr-3 w-[150px] text-right font-semibold'>
                      <span className='font-bold text-secondary-color'>*</span>
                      City/State/Zip:
                    </p>

                    <div className='flex w-[70%]'>
                      <input className='input-primary w-full' size={'xs'} />

                      <div className='ml-1 flex-1'>
                        <Select size='xs' className='input-primary w-full'>
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
                        className='input-primary ml-1 w-full'
                      />
                    </div>
                  </div>

                  <div className='my-2 flex'>
                    <p className='mr-3 w-[150px] text-right font-semibold'>
                      <span className='font-bold text-secondary-color'>*</span>
                      Place of Service :
                    </p>

                    <div className='flex w-[70%]'>
                      <Select
                        size='xs'
                        marginRight={5}
                        className='input-primary w-full'
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
                      <span className='font-bold text-secondary-color'>*</span>
                      Start Date:
                    </p>

                    <div className='flex w-[70%]'>
                      <input
                        className='input-primary w-full'
                        size={'xs'}
                        value='2334'
                        type={'date'}
                      />
                    </div>
                  </div>

                  <div className='my-2 flex'>
                    <p className='mr-3 w-[150px] text-right font-semibold'>
                      End Date:
                    </p>

                    <div className='flex w-[70%]'>
                      <input
                        className='input-primary w-full'
                        size={'xs'}
                        value='2334'
                        type={'date'}
                      />
                    </div>
                  </div>
                </div>

                <div className='flex flex-col justify-between p-2'>
                  <div>
                    <div className='my-2 flex'>
                      <p className='mr-3 w-[150px] text-right font-semibold'>
                        Phone Type:
                      </p>

                      <div className='flex w-[70%]'>
                        <Select size='xs' className='input-primary w-full '>
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
                        Phone :
                      </p>

                      <div className='flex w-[70%]'>
                        <input size={'xs'} value='2334' />
                        <input
                          size={'xs'}
                          value='2334'
                          className='input-primary ml-3 w-full'
                        />
                        <input
                          size={'xs'}
                          value='2334'
                          className='input-primary ml-3 w-full'
                        />
                      </div>
                    </div>

                    <div className='my-3 flex items-end justify-end'>
                      <button className='rounded bg-secondary-color px-4 py-1 text-white shadow'>
                        add contact
                      </button>
                    </div>
                  </div>

                  <table className=' min-w-full overflow-auto'>
                    <thead className='thead-primary'>
                      <tr>
                        <th className='th-first'>Preffered</th>
                        <th className='th-middle'>Phone Type</th>
                        <th className='th-middle'>Phone</th>
                        <th className='th-last'></th>
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
                          <td className='td-primary'>
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
                        onClick={() => setOpenFacilitySource(false)}
                      >
                        Save
                      </button>
                      <button
                        className='ml-3 rounded bg-secondary-color px-4 py-1 text-white shadow'
                        onClick={() => setOpenFacilitySource(false)}
                      >
                        Continue
                      </button>
                      <button
                        className='ml-3 rounded bg-secondary-color px-4 py-1 text-white shadow'
                        onClick={() => setOpenFacilitySource(false)}
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

export default AddFacilitySourceModal
