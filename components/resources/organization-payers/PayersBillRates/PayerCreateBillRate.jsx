import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import { FcEditImage } from 'react-icons/fc';
import PayerCBR1 from './PayerCBR1';
import PayerCBR2 from './PayerCBR2';
import PayerCBR3 from './PayerCBR3';

const PayerCreateBillRate = ({ edit }) => {
  const [showModal, setShowModal] = useState(1);
  const [from, setFrom] = useState('');

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {edit && (
        <span
          onClick={onOpen}
          className="mr-3 border-r border-primary-gray py-2.5 pr-3"
        >
          <FcEditImage className="scale-150" />
        </span>
      )}
      {!edit && (
        <span
          onClick={onOpen}
          className="btn-primary flex cursor-pointer items-center gap-1"
        >
          <BiPlus className="scale-150" />
          <span>Create Bill Rate</span>
        </span>
      )}
      <Modal
        isOpen={isOpen}
        size={`${showModal === 1 ? '2xl' : showModal === 2 ? '5xl' : '6xl'}`}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <div className="verdana11 w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            {showModal === 1 && (
              <PayerCBR1
                onClose={onClose}
                from={from}
                setFrom={setFrom}
                setShowModal={setShowModal}
              />
            )}
            {showModal === 2 && (
              <PayerCBR2
                setFrom={setFrom}
                onClose={onClose}
                setShowModal={setShowModal}
              />
            )}
            {showModal === 3 && (
              <PayerCBR3
                onClose={onClose}
                setFrom={setFrom}
                setShowModal={setShowModal}
              />
            )}
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PayerCreateBillRate;
