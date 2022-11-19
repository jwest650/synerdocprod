import {
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
  useDisclosure,
} from '@chakra-ui/react';
import { BsDot } from 'react-icons/bs';
import { FcDeleteRow } from 'react-icons/fc';

const ActivePopup = ({ setActionType, noteId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAction = (action) => {
    setActionType(() => ({ action, noteId }));
    onClose();
  };
  return (
    <>
      <span
        onClick={onOpen}
        className="flex cursor-pointer items-center justify-center "
      >
        <FcDeleteRow className="scale-125 text-xl" />
      </span>
      <Modal isOpen={isOpen} size={'lg'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="rounded border border-black">
            <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1]">
              <div className="h-full rounded border border-black p-4 pb-10">
                <h1 className="verdana16 font-semibold">Edit Note</h1>
                <div className="verdana11 flex-col mt-2 flex">
                  <li className="flex items-center gap-1">
                    <BsDot className="scale-125 text-primary-orange" />{' '}
                    <p>
                      <span className="font-medium">Make Inactive:</span> Make
                      Note invinsible in the table
                    </p>
                  </li>
                  <li className="flex items-center gap-1">
                    <BsDot className="scale-125 text-primary-orange" />{' '}
                    <p>
                      <span className="font-medium">Delete Note:</span> Deletes
                      Note from table permanently
                    </p>
                  </li>
                </div>
                <div className="mt-8 flex w-full justify-center gap-3">
                  <button
                    onClick={() => handleAction('inactivate')}
                    className="btn-primary "
                  >
                    Make Inactive
                  </button>
                  <button
                    onClick={() => handleAction('delete')}
                    className="verdana11 rounded bg-gray-500 px-4 py-1 text-white shadow"
                  >
                    Delete Note
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ActivePopup;
