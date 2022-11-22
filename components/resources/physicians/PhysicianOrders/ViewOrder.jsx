import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { BsEye } from 'react-icons/bs';

const ViewOrder = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <span onClick={onOpen}>
        <BsEye />
      </span>
      <Modal isOpen={isOpen} size={'5xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            <h2 className="mt-3 text-2xl font-medium">Order Details</h2>
            <button
              onClick={onClose}
              className="mt-10 rounded bg-gray-500 px-4 py-1 text-white shadow outline-none"
            >
              Close
            </button>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ViewOrder;
