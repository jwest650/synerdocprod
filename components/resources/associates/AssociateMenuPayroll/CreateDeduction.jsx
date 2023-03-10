import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import { FcEditImage } from 'react-icons/fc';
import TableSelect from '../../../structure/TableSelect';
import NumberInputComp from './NumberInputComp';

const CreateDeduction = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <span
        onClick={onOpen}
        className="btn-primary flex cursor-pointer items-center justify-center gap-1 "
      >
        <BiPlus className="scale-150" />
        <span>Create Deduction</span>
      </span>
      <Modal isOpen={isOpen} size={'lg'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
<<<<<<< HEAD
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10">
=======
          <div className="w-full rounded border-[2px] border-t-[20px] border-secondary-blue p-4 pb-10">
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
            <h1 className="verdana16 font-semibold">
              Create Payroll Deduction
            </h1>
            <p className="verdana11 text-primary-gray">
              Select a deduction type and enter amount/percentage details
            </p>
            <div className="mt-7 w-full space-y-3 pl-5">
              <div className="flex items-center gap-3 ">
                <p className="ml-[70px] flex items-start">
                  <span className="text-primary-orange">*</span>Deduction:
                </p>
                <div>
                  <TableSelect options={['Cell Phone', 'Option2', 'Option3']} />
                </div>
              </div>
              <div className="flex items-center gap-3 ">
                <p className="ml-[83px] flex items-start">
                  <span className="text-primary-orange">*</span>Amount:
                </p>
                <div>
                  <input type="text" className="input-primary" />{' '}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <p className="ml-[66px] flex items-start">
                  <span className="text-primary-orange">*</span>Start Date:
                </p>
                <div>
                  <input type="date" className="input-primary w-fit" />
                </div>
              </div>
              <div className="flex items-center gap-3 pt-1">
                <p className="ml-[82px] flex items-start">End Date:</p>
                <div>
                  <input type="date" className="input-primary" />
                </div>
              </div>
            </div>

            <div className="mt-8 flex w-full justify-center gap-4">
              <button onClick={onClose} className="btn-secondary ">
                Save
              </button>
              <button
                onClick={onClose}
                className="verdana12 rounded bg-gray-500 px-4 py-1 text-white shadow"
              >
                Cancel
              </button>
            </div>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateDeduction;
