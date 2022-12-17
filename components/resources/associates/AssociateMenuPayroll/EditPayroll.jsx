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

const EditPayroll = ({ option, category }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [federalDeductions, setFederalDeductions] = useState(0);
  const [stateDeductions, setStateDeductions] = useState(0);
  // console.log(federalDeductions);
  // console.log(stateDeductions);
  return (
    <>
      <span
        onClick={onOpen}
        className="mr-4 flex cursor-pointer items-center justify-center border-r border-primary-gray py-2 pr-4"
      >
        <FcEditImage className="scale-150" />
      </span>
      <Modal isOpen={isOpen} size={'lg'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
<<<<<<< HEAD
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10">
=======
          <div className="w-full rounded border-[2px] border-t-[20px] border-secondary-blue p-4 pb-10">
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
            <h1 className="verdana16 font-semibold">Edit Payroll</h1>
            <div className="mt-7 w-full space-y-3 pl-5">
              <div className="flex items-center gap-3 ">
                <p className="ml-[115px] flex items-start">
                  <span className="text-primary-orange">*</span>Type:
                </p>
                <div>
                  <TableSelect options={['Select', 'Option1', 'Option2']} />
                </div>
              </div>
              <div className="flex items-center gap-3 ">
                <p className="ml-[10px] flex items-start">
                  <span className="text-primary-orange">*</span>Federal Filling
                  Status:
                </p>
                <div>
                  <TableSelect options={['Select', 'Option1', 'Option2']} />
                </div>
              </div>
              <div className="flex items-center gap-3 ">
                <p className="ml-[23px] flex items-start">
                  <span className="text-primary-orange">*</span>Federal
                  Deductions:
                </p>
                <div>
                  <NumberInputComp setValue={setFederalDeductions} />
                </div>
              </div>

              <div className="flex items-center gap-3 pt-1 ">
                <p className="ml-[24px] flex items-start">
                  <span className="text-primary-orange">*</span>State Filling
                  Status:
                </p>
                <div>
                  <TableSelect options={['Select', 'Option1', 'Option2']} />
                </div>
              </div>

              <div className="flex items-center gap-3 ">
                <p className="ml-[37px] flex items-start">
                  <span className="text-primary-orange">*</span>State
                  Deductions:
                </p>
                <div>
                  <NumberInputComp setValue={setStateDeductions} />
                </div>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <p className="ml-[82px] flex items-start">
                  <span className="text-primary-orange">*</span>Start Date:
                </p>
                <div>
                  <input type="date" disabled className="input-primary w-fit" />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <p className="ml-[3px] flex items-start">
                  Skip WB check for rates:
                </p>
                <div>
                  <input type="checkbox" className="input-primary" />
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

export default EditPayroll;
