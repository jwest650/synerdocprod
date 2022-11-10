import {
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
  useDisclosure,
} from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';

const PhysicianOrderCreateOrder = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <span
        onClick={onOpen}
        className="flex cursor-pointer items-center gap-1 rounded bg-orange-600 py-1 px-2 text-white"
      >
        <BiPlus />
        <span className="text-sm">Create Orders</span>
      </span>
      <Modal isOpen={isOpen} size={'5xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            <div className="flex w-fit items-center gap-2">
              <span className="">Order Type:</span>
              <div className="">
                <Select
                  css={{ backgroundColor: '#c6d8ffe1', border: 'none' }}
                  className="cursor-pointer shadow outline-none"
                  size="xs"
                >
                  <option value="option1" className="text-gray-800">
                    option1
                  </option>
                  <option value="option2" className="text-gray-800">
                    option2
                  </option>
                  <option value="option3" className="text-gray-800">
                    option3
                  </option>
                </Select>
              </div>
            </div>
            <button
              onClick={onClose}
              className="mt-20 rounded bg-gray-500 px-4 py-1 text-white shadow outline-none"
            >
              Close
            </button>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PhysicianOrderCreateOrder;
