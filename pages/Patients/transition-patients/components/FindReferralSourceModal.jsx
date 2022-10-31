import {
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Checkbox,
} from '@chakra-ui/react';
import { useState } from 'react';
import AddReferralSourceModal from './AddReferralSourceModal';

const FindReferralSourceModal = ({ openFindReferral, setOpenFindReferral }) => {
  let data = [1, 1, 1, 1, 1];
  const [openAddReferral, setOpenAddReferral] = useState(false);

  return (
    <div>
      <Modal
        isOpen={openFindReferral}
        onClose={() => setOpenFindReferral(false)}
        className='p-5'
      >
        <ModalOverlay />
        <ModalContent maxWidth={700}>
          <ModalHeader>
            Find Referral Source
            <p className='text-sm text-gray-600'>
              Find referral source/add referral source if not found.
            </p>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className='flex justify-between'>
              <label htmlFor='#' className='w-[40%]'>
                First/Last:{' '}
              </label>
              <div className='flex w-[60%]'>
                <Input placeholder='small size' size='sm' mr={'3'} />
                <Input placeholder='small size' size='sm' />
              </div>
            </div>
            <div className='my-2 flex '>
              <label htmlFor='#' className='w-[40%]'>
                Facility Name/Referral Company:{' '}
              </label>
              <div className='w-[60%]'>
                <Input placeholder='small size' size='sm' />
              </div>
            </div>

            <div className='flex justify-end'>
              <Button colorScheme='gray' size={'sm'} my={3}>
                Search
              </Button>
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
                <Button colorScheme='gray' size={'sm'} mr={3}>
                  Save
                </Button>
                <Button colorScheme='gray' size={'sm'}>
                  Cancel
                </Button>
              </div>

              <div className='flex justify-end'>
                <button
                  onClick={() => setOpenAddReferral(true)}
                  className='dark:text-[#E77654px-6 my-2 cursor-pointer rounded bg-[#E77654] py-1 px-5 text-sm capitalize text-[#fff]'
                >
                  add referral source
                </button>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Add Modal */}
      <AddReferralSourceModal
        openAddReferral={openAddReferral}
        setOpenAddReferral={setOpenAddReferral}
      />
    </div>
  );
};

export default FindReferralSourceModal;
