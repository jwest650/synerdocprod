import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { FcDeleteDatabase, FcEmptyTrash, FcPlus } from 'react-icons/fc';

const RemoveDeduction = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <span
        onClick={onOpen}
        className="flex cursor-pointer items-center justify-center "
      >
        <FcEmptyTrash className="scale-150" />
      </span>
      <Modal isOpen={isOpen} size={'lg'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-secondary-blue p-4 pb-10">
            <h1 className="verdana16 font-semibold">
              Delete Payroll Deduction?
            </h1>
            <div className="mt-8 flex w-full justify-center gap-3">
              <button className="verdana12 rounded bg-primary-orange px-5 py-1 text-white shadow">
                Yes
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

export default RemoveDeduction;
