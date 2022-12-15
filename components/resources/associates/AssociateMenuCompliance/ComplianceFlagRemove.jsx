import {
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
  useDisclosure,
} from '@chakra-ui/react';
import { BsDot } from 'react-icons/bs';
import { FcAcceptDatabase, FcDeleteDatabase, FcPlus } from 'react-icons/fc';

const ComplianceFlagRemove = ({ setFlaggedMessage }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <span
        onClick={onOpen}
        className="flex cursor-pointer items-center justify-center "
      >
        <FcDeleteDatabase />
      </span>
      <Modal isOpen={isOpen} size={'lg'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-secondary-blue p-4 pb-10">
            <h1 className="verdana16 font-semibold">
              Undo compliance not needed
            </h1>

            <div className="mt-8 flex w-full justify-center gap-3">
              <button
                onClick={() => {
                  setFlaggedMessage('');
                  onClose();
                }}
                className="verdana12 rounded bg-primary-orange px-4 py-1 text-white shadow"
              >
                Ok
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

export default ComplianceFlagRemove;
