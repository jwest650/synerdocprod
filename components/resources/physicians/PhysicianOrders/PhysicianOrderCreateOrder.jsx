import {
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
  useDisclosure,
} from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';
import TableSelect from '../../../structure/TableSelect';

const PhysicianOrderCreateOrder = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <span
        onClick={onOpen}
        className="btn-primary flex cursor-pointer items-center gap-1"
      >
        <BiPlus className="scale-150" />
        <span className="verdana11">Create Orders</span>
      </span>
      <Modal isOpen={isOpen} size={'xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            <div className="flex w-fit items-center gap-2">
              <span className="">Order Type:</span>
              <div className="">
                <TableSelect options={['Option1']} />{' '}
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
