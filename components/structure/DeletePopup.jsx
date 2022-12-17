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
  // set deleteIcon to true if you want to display a trash icon

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAction = (action) => {
    setAction !== undefined && setAction(action);
    onClose();
  };

  return (
    <>
      <span onClick={onOpen} className="cursor-pointer">
        {deleteIcon ? (
<<<<<<< HEAD
          <FcEmptyTrash className="scale-150" />
=======
          <FcEmptyTrash className="scale-110" />
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
        ) : (
          <span className="verdana10 text-primary-orange underline">
            [Delete]
          </span>
        )}
      </span>
      <Modal isOpen={isOpen} size={'md'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
<<<<<<< HEAD
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10">
=======
          <div className="w-full rounded border-[2px] border-t-[20px] border-secondary-blue p-4 pb-10">
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
            <h1 className="verdana12 font-semibold">
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
