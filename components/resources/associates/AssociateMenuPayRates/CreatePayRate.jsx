import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';
import TableSelect from '../../../structure/TableSelect';

const CreatePayRate = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <span
        onClick={onOpen}
        className="btn-primary flex cursor-pointer items-center justify-center gap-1 "
      >
        <BiPlus className="scale-150" />
        <span>Create Pay Rate</span>
      </span>
      <Modal isOpen={isOpen} size={'lg'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10">
            <h1 className="verdana16 font-semibold">Create Payroll</h1>
            <div className="mt-7 ">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-blue text-white">
                1
              </div>
              <div className="flex items-center gap-3 ">
                <p className="ml-[115px] flex items-start">
                  <span className="text-primary-orange">*</span>Type:
                </p>
                <div>
                  <TableSelect options={['Select', 'Option1', 'Option2']} />
                </div>
              </div>
            </div>

            <div className="mt-8 flex w-full justify-center gap-4">
              <button onClick={onClose} className="btn-secondary ">
                Next
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

export default CreatePayRate;
