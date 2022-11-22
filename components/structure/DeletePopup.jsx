import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { FcEmptyTrash } from 'react-icons/fc';

const DeletePopup = ({ toDelete, setAction, deleteIcon }) => {
  // toDelete is a text of what is being deleted
  // define a state  and pass the setState to setAction prop to get the user action

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAction = (action) => {
    setAction !== undefined && setAction(action);
    onClose();
  };

  return (
    <>
      <span onClick={onOpen} className="">
        {deleteIcon ? (
          <FcEmptyTrash className="scale-150" />
        ) : (
          <span className="verdana10 text-primary-orange underline">
            [Delete]
          </span>
        )}
      </span>
      <Modal isOpen={isOpen} size={'lg'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10">
            <h1 className="verdana14 font-semibold">
              Are you sure you want to delete this {toDelete}?
            </h1>
            <div className="mt-8 flex w-full justify-center gap-3">
              <button
                onClick={() => handleAction('delete')}
                className="verdana12 rounded bg-primary-orange px-5 py-1 text-white shadow outline-none"
              >
                Yes
              </button>
              <button
                onClick={() => handleAction('cancel')}
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

export default DeletePopup;
