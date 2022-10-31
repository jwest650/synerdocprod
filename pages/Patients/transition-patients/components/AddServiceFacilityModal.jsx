import {
  Checkbox,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Input,
} from '@chakra-ui/react';
import React from 'react';

const AddServiceFacilityModal = ({
  openAddServiceFacility,
  setOpenAddServiceFacility,
}) => {
  let data = [1, 1, 1, 1, 1];

  return (
    <div>
      <Modal
        isOpen={openAddServiceFacility}
        onClose={() => setOpenAddServiceFacility(false)}
        className='p-5'
      >
        <ModalOverlay />
        <ModalContent maxWidth={700}>
          <ModalHeader>
            <h1>Service Modal</h1>
            <p>add information and save</p>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className='my-2 flex '>
              <label htmlFor='#' className='w-[40%]'>
                Facility Name/Referral Company:{' '}
              </label>
              <div className='w-[60%]'>
                <Input placeholder='small size' size='sm' />
              </div>
            </div>

            <div className='flex justify-end'>
              <button className='my-2 cursor-pointer rounded border py-1 px-5 text-sm capitalize '>
                Search
              </button>
            </div>

            <div>
              <table className='mt-10 min-w-full overflow-auto'>
                <thead className='border-b bg-[#32164A] text-[18px] tracking-wider text-white'>
                  <tr>
                    <th className=' border-gray-100  pl-2 text-left'>Select</th>
                    <th className=' border-gray-100  pl-2 text-left'>Name</th>
                    <th className=' border-gray-100  pl-2 text-left'>Type</th>
                    <th className=' border-gray-100  pl-2 text-left'>
                      Preferred number
                    </th>
                    <th className=' border-gray-100  pl-2 text-left'>
                      Referral Address
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((data, i) => (
                    <tr
                      key={i}
                      className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
                    >
                      <td className='border border-gray-400'>
                        <Checkbox defaultChecked></Checkbox>
                      </td>
                      <td className='border border-gray-400'>John Mason</td>
                      <td className='border border-gray-400'>Others</td>
                      <td className='border border-gray-400'>054344455</td>
                      <td className='border border-gray-400'>CL, Miami</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className='ml-auto'>
              <div className='flex justify-end py-3'>
                <button
                  className='my-2 cursor-pointer rounded  border py-1 px-5 text-sm capitalize'
                  mr={3}
                >
                  Save
                </button>
                <button className='my-2 ml-3 cursor-pointer  rounded border py-1 px-5 text-sm capitalize'>
                  Cancel
                </button>
              </div>

              <div className='flex justify-end'>
                <button
                  // onClick={() => setOpenAddReferral(true)}
                  className='dark:text-[#E77654px-6 my-2 cursor-pointer rounded bg-[#E77654] py-1 px-5 text-sm capitalize text-[#fff]'
                >
                  add facility source
                </button>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AddServiceFacilityModal;
