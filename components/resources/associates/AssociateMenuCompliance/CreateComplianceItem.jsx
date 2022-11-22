import {
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
  useDisclosure,
} from '@chakra-ui/react';
import { BsDot } from 'react-icons/bs';
import { FcPlus } from 'react-icons/fc';

const CreateComplianceItem = ({ category, option }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <span
        onClick={onOpen}
        className="flex cursor-pointer items-center justify-center "
      >
        <FcPlus />
      </span>
      <Modal isOpen={isOpen} size={'lg'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10">
            <h1 className="verdana16 font-semibold">Create Compliance Item</h1>
            <p className="verdana11">Create a new compliance item</p>

            <div className="mt-7 w-full space-y-3 pl-5">
              <div className="flex items-center gap-3">
                <p className="ml-16 flex items-start">
                  <span className="text-primary-orange">*</span>Category:
                </p>
                <div>
                  <input
                    type="text"
                    value={category}
                    disabled
                    className="input-primary w-fit"
                  />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <p className="ml-[85px] flex items-start">
                  <span className="text-primary-orange">*</span>Name:
                </p>
                <div>
                  <input
                    type="text"
                    value={option.item}
                    disabled
                    className="input-primary"
                  />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <p className="ml-8 flex items-start">
                  <span className="text-primary-orange">*</span>Renewal Date:
                </p>
                <div>
                  <input type="date" className="input-primary" />
                </div>
              </div>
            </div>

            <div className="mt-8 flex w-full justify-center gap-3">
              <button
                onClick={onClose}
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

export default CreateComplianceItem;
