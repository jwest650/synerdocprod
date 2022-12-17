import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import TableSelect from '../../../structure/TableSelect';
import NumberInputComp from './NumberInputComp';

const CreatePayroll = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [federalDeductions, setFederalDeductions] = useState(0);
  const [stateDeductions, setStateDeductions] = useState(0);

  return (
    <>
      <span
        onClick={onOpen}
        className="btn-primary flex cursor-pointer items-center justify-center gap-1 "
      >
        <BiPlus className="scale-150" />
        <span>Create Payroll</span>
      </span>
      <Modal isOpen={isOpen} size={'lg'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10">
            <h1 className="verdana16 font-semibold">Create Payroll</h1>
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
                  {/* <input type="text" disabled className="input-primary w-fit" /> */}
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
          {/* </div> */}
          {/* </div> */}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreatePayroll;
