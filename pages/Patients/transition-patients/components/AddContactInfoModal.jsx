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
} from '@chakra-ui/react';
import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

const AddContactInfoModal = ({ openAddContactInfo, setOpenAddContactInfo }) => {
  let data = [1, 1];

  return (
    <div>
      <Modal
        isOpen={openAddContactInfo}
        onClose={() => setOpenAddContactInfo(false)}
        className='p-5'
      >
        <ModalOverlay />
        <ModalContent maxWidth={700}>
          <div className='w-full rounded border-[2px] border-t-[20px] border-[#6b3e9280] p-4 pb-10 '>
            <ModalHeader>
              <h1>Add Address/Phone Info</h1>
              <p className='text-sm'>add information and save</p>
            </ModalHeader>
            {/* <ModalCloseButton /> */}
            <ModalBody>
              <section className='justify-betweeen flex'>
                <div className='flex-1 border-r-2 p-2'>
                  <div className='my-5 flex'>
                    <div className='w-[150px]'>
                      <label htmlFor='#'>
                        <span className='font-bold text-orange-500'>*</span>
                        Address Type:
                      </label>
                    </div>
                    <div>
                      <Select size='xs' marginRight={5}>
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

                  <div className='my-5 flex'>
                    <div className='w-[150px]'>
                      <label htmlFor='#'>
                        <span className='font-bold text-orange-500'>*</span>
                        Address 1:
                      </label>
                    </div>
                    <div>
                      <Input size={'xs'} />
                    </div>
                  </div>

                  <div className='my-5 flex'>
                    <div className='w-[150px]'>
                      <label htmlFor='#'>Address 2:</label>
                    </div>
                    <div>
                      <Input size={'xs'} />
                    </div>
                  </div>

                  <div className='my-5 flex'>
                    <div className='w-[150px]'>
                      <label htmlFor='#'>
                        <span className='font-bold text-orange-500'>*</span>
                        City/State/Zip:
                      </label>
                    </div>
                    <div className='flex'>
                      <Input size={'xs'} />

                      <div className='ml-1 flex-1'>
                        <Select size='xs'>
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

                      <Input size={'xs'} value='2334' className='ml-1' />
                    </div>
                  </div>

                  <div className='my-5 flex'>
                    <div className='w-[150px]'>
                      <label htmlFor='#'>Phone :</label>
                    </div>
                    <div>
                      <Select size='xs' marginRight={5}>
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

                  <div className='my-5 flex'>
                    <div className='w-[150px]'>
                      <label htmlFor='#'>Phone Type:</label>
                    </div>
                    <div className='flex'>
                      <Input size={'xs'} value='2334' />
                      <Input size={'xs'} value='2334' className='ml-3' />
                      <Input size={'xs'} value='2334' className='ml-3' />
                    </div>
                  </div>
                  <div className='my-3 flex items-end justify-end'>
                    <button className='rounded bg-[#32164A] px-4 py-1 text-white shadow'>
                      add contact
                    </button>
                  </div>
                </div>

                <div className='flex w-[100%] flex-1 flex-col justify-between p-2'>
                  <table className=' min-w-full overflow-auto'>
                    <thead className='border-b bg-[#32164A] text-[18px] tracking-wider text-white'>
                      <tr>
                        <th className=' border-gray-100  pl-2 text-left'>
                          Preffered
                        </th>
                        <th className=' border-gray-100  pl-2 text-left'>
                          Phone Type
                        </th>
                        <th className=' border-gray-100  pl-2 text-left'>
                          Phone
                        </th>
                        <th className=' border-gray-100  pl-2 text-left'></th>
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
                          <td className='border border-gray-400'>
                            <Checkbox></Checkbox>
                          </td>
                          <td className='border border-gray-400'>Home</td>
                          <td className='border border-gray-400'>233454545</td>
                          <td
                            // className='border border-gray-400'
                            className=' max-h-[20px] min-w-[80px] cursor-pointer border  border-gray-400 py-1 px-2 font-medium'
                          >
                            <FiTrash2 />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className='my-3 flex items-end justify-end'>
                    <div>
                      <button className='rounded bg-[#32164A] px-4 py-1 text-white shadow'>
                        Save
                      </button>
                      <button className='ml-3 rounded bg-[#32164A] px-4 py-1 text-white shadow'>
                        Continue
                      </button>
                      <button className='ml-3 rounded bg-[#32164A] px-4 py-1 text-white shadow'>
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
  );
};

export default AddContactInfoModal;
