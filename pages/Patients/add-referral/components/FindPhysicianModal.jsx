import {
  Checkbox,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React from 'react';

const FindPhysicianModal = ({ openFindPhysician, setOpenFindPhysician }) => {
  let data = [1, 1, 1, 1];
  return (
    <div>
      <Modal
        isOpen={openFindPhysician}
        onClose={() => setOpenFindPhysician(false)}
        className='p-5'
      >
        <ModalOverlay />
        <ModalContent maxWidth={700}>
          <div className='w-full rounded border-[2px] border-t-[20px] border-[#6b3e9280] p-4 pb-10 '>
            <ModalHeader>
              <h1 className='text-2xl font-bold capitalize text-black dark:text-white'>
                Find Physician
              </h1>
              <p>search or add physician</p>
              <hr />
            </ModalHeader>
            {/* <ModalCloseButton /> */}
            <ModalBody>
              <section>
                <div>
                  <div className='flex py-2'>
                    <div className='w-[150px]'>
                      <h1 className='mr-5'>Last/First: </h1>
                    </div>
                    <div className='flex w-[100%]'>
                      <Input size={'xs'} type='text' />
                      <Input size={'xs'} className='ml-3' type='text' />
                    </div>
                  </div>
                  <div className='my-2 flex justify-end'>
                    <button className='rounded bg-[#32164A] px-4 py-1 text-white shadow'>Searh</button>
                  </div>
                </div>

                <table className=' min-w-full overflow-auto'>
                  <thead className='border-b bg-[#32164A] text-[18px] tracking-wider text-white'>
                    <tr>
                      <th className=' border-gray-100  pl-2 text-left'>
                        Select
                      </th>
                      <th className=' border-gray-100  pl-2 text-left'>Name</th>
                      <th className=' border-gray-100  pl-2 text-left'>Type</th>
                      <th className=' border-gray-100  pl-2 text-left'>
                        Preffered Phone
                      </th>
                      <th className=' border-gray-100  pl-2 text-left'>
                        Referral Address
                      </th>
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
                        <td className='border border-gray-400'>Nick, Jones</td>
                        <td className='border border-gray-400'>23/12/05</td>
                        <td className='border border-gray-400'>Male</td>
                        <td className='border border-gray-400'>Pending</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className='my-3 flex justify-end'>
                  <div>
                    <div>
                      <button className='rounded bg-[#32164A] px-4 py-1 text-white shadow'>Save</button>
                      <button className='ml-3 rounded bg-[#32164A] px-4 py-1 text-white shadow'>
                        Cancel
                      </button>
                    </div>
                    <button className='rounded bg-[#32164A] my-2 px-4 py-1 text-white shadow'>
                      add physician
                    </button>
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

export default FindPhysicianModal;
