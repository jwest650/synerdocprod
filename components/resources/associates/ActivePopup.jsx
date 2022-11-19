import {
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
  useDisclosure,
} from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';
import { FcDeleteRow } from 'react-icons/fc';

const ActivePopup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleForm = (e) => {
    e.preventDefault();
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
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            <form action="" onSubmit={handleForm}>
              <h1 className="verdana16 font-semibold">Edit Note</h1>
              <div className="verdana11 mt-2 flex flex-col">
                <li>Inactive: Make Note invinsible in the table</li>
                <li>Inactive: Delete Note from table permanently </li>
              </div>
              <div className="mt-8 flex w-full justify-center gap-3">
                <button type="submit" className="btn-secondary">
                  Inactivate
                </button>
                <button
                  onClick={onClose}
                  className="rounded bg-gray-500 px-4 py-1 text-white shadow"
                >
                  Delete
                </button>
              </div>
            </form>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ActivePopup;
