import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { createContext } from 'react';

export const ModalContext = createContext({});

const ModalContainer = ({ openButton, size, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ModalContext.Provider value={{ onClose }}>
      <span onClick={onOpen} className="cursor-pointer">
        {openButton}
      </span>
      <Modal isOpen={isOpen} size={size ? size : 'lg'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
<<<<<<< HEAD
          <div className="verdana11 w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4">
=======
          <div className="verdana11 w-full rounded border-[2px] border-t-[20px] border-secondary-blue p-4">
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
            {children}
          </div>
        </ModalContent>
      </Modal>
    </ModalContext.Provider>
  );
};

export default ModalContainer;
