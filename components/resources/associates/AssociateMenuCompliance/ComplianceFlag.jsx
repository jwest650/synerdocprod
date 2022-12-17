import {
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FcAcceptDatabase } from 'react-icons/fc';

const ComplianceFlag = ({ setFlaggedMessage }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    setFlaggedMessage(message);
    onClose();
  };
  return (
    <>
      <span
        onClick={onOpen}
        className="flex cursor-pointer items-center justify-center "
      >
        <FcAcceptDatabase />
      </span>
      <Modal isOpen={isOpen} size={'lg'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10">
            <h1 className="verdana16 font-semibold">
              Set Compliance as Not Needed
            </h1>

            <div className="mt-14 flex items-center gap-3">
              <p className="ml-16 flex items-start">Narrative:</p>
              <div>
                <input
                  type="text"
                  onChange={(e) => setMessage(e.target.value)}
                  className="input-primary"
                />
              </div>
            </div>

            <div className="mt-8 flex w-full justify-center gap-3">
              <button
                onClick={handleSubmit}
                className="verdana12 rounded bg-primary-orange px-4 py-1 text-white shadow"
              >
                Save
              </button>
              <button
                onClick={onClose}
                className="verdana12 rounded bg-gray-500 px-4 py-1 text-white shadow"
              >
                Cancel
              </button>
            </div>
          </div>
          {/* </div> */}
          {/* </div> */}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ComplianceFlag;
