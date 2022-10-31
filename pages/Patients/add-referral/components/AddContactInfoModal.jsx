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

const AddContactInfoModa = ({ openAddContactInfo, setOpenAddContactInfo }) => {
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
          <ModalHeader>
            <h1>Add Address/Phone Info</h1>
            <p>add information and save</p>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <section className='justify-betweeen flex'>
              <div className='flex-1 border-r-2 p-2'>
                <div className='my-5 flex'>
                  <div className='w-[150px]'>
                    <label htmlFor='#'>Address Type:</label>
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
                    <label htmlFor='#'>Address 1:</label>
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
                    <label htmlFor='#'>City/State/Zip:</label>
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
                  <button className='rounded border px-3'>add contact</button>
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
                        className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
                      >
                        <td className='border border-gray-400'>
                          <Checkbox></Checkbox>
                        </td>
                        <td className='border border-gray-400'>Home</td>
                        <td className='border border-gray-400'>233454545</td>
                        <td className='border border-gray-400'></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className='my-3 flex items-end justify-end'>
                  <div>
                    <button className='rounded border px-3'>Save</button>
                    <button className='ml-3 rounded border px-3'>
                      Continue
                    </button>
                    <button className='ml-3 rounded border px-3'>Cancel</button>
                  </div>
                </div>
              </div>
            </section>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AddContactInfoModa;
