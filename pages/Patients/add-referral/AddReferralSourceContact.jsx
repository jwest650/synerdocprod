import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Select,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Checkbox,
} from '@chakra-ui/react';
import { useState } from 'react';

const AddReferralSourceContact = () => {
  return (
    <div>
      <section className='mx-auto mt-10 w-[80%]'>
        <div className='flex py-3'>
          <div className='w-[150px]'>
            <label htmlFor='#'>Referral Source Contact:</label>
          </div>
          <Select size='xs' maxWidth={500} marginRight={5}>
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

          <div>
            <button
              onClick={() => setOpenFindReferral(true)}
              className='dark:text-[#E77654px-6 cursor-pointer rounded bg-[#E77654] py-1 px-5 text-sm capitalize text-[#fff]'
            >
              add referral source contact
            </button>
          </div>
        </div>

        <div className='flex py-5'>
          <div className='w-[150px]'>
            <h1 className='mr-5'>Phone 1: </h1>
          </div>
          <div className='flex'>
            <div>
              <Select size='xs'>
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
            <p className='ml-3 text-gray-500'>(343)-343-445</p>
            <div className='ml-3'>
              <Input size={'xs'} />
            </div>
          </div>
        </div>
        <div className='flex py-5'>
          <div className='w-[150px]'>
            <h1 className='mr-5'>Phone 2: </h1>
          </div>
          <div className='flex'>
            <div>
              <Select size='xs'>
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
            <p className='ml-3 text-gray-500'>(343)-343-445</p>
            <div className='ml-3'>
              <Input size={'xs'} />
            </div>
          </div>
        </div>
        <div className='flex py-5'>
          <div className='w-[150px]'>
            <h1 className='mr-5'>Email: </h1>
          </div>
          <Input size={'xs'} maxWidth={500} />
        </div>
        <div className='flex py-5'>
          <div className='w-[150px]'>
            <h1 className='mr-5'>Information: </h1>
          </div>
          <Input size={'xs'} maxWidth={500} />
        </div>
      </section>
    </div>
  );
};

export default AddReferralSourceContact;
