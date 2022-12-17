import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { BsDot } from 'react-icons/bs';
import { FcCancel, FcOk } from 'react-icons/fc';
import DeletePopup from '../../structure/DeletePopup';
import { uploadSeviceNotes } from '../homeData';

const CreatePayOnly = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <span
        onClick={onOpen}
        className="flex cursor-pointer items-center gap-2 text-primary-orange underline"
      >
        <BsDot className="scale-150 text-base text-black" />
        Educational Documents
      </span>
      <Modal isOpen={isOpen} size={'xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-secondary-blue p-4 pb-10 ">
            <h1 className="verdana18 font-semibold">Educational Documents</h1>
            <p className="my-10">No Educational Documents available</p>
            <div className="mt-4 flex w-full justify-end gap-3">
              <div
                onClick={onClose}
                className="cursor-pointer rounded bg-gray-500 px-4 py-1 text-white shadow"
              >
                Close
              </div>
            </div>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreatePayOnly;
