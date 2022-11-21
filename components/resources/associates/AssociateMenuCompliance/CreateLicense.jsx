import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';
import TableSelect from '../../../structure/TableSelect';

const CreateLicense = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <span
        onClick={onOpen}
        className="btn-primary flex cursor-pointer items-center justify-center "
      >
        <BiPlus />
        <span>Create License/Certification</span>
      </span>
      <Modal isOpen={isOpen} size={'lg'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10">
            <h1 className="verdana16 font-semibold">
              Create License/Certification
            </h1>
            <p className="verdana11">Create a new license/certification.</p>
            <div className="mt-7 w-full space-y-3 pl-5">
              <div className="flex items-center gap-3">
                <p className="ml-[107px] flex items-start">
                  <span className="text-primary-orange">*</span>Type:
                </p>
                <div>
                  <TableSelect options={['Select', 'Option2', 'Option3']} />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <p className="ml-[85px] flex items-start">
                  <span className="text-primary-orange">*</span>Number:
                </p>
                <div>
                  <input type="text" className="input-primary" />
                </div>
              </div>
              <div className="flex items-start gap-3">
                <p className="ml-[102px] flex items-start">
                  <span className="text-primary-orange">*</span>State:
                </p>
                <div>
                  <TableSelect options={['Select', 'Option2', 'Option3']} />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <p className="ml-[66px] flex items-start">
                  <span className="text-primary-orange">*</span>Issue Date:
                </p>
                <div>
                  <input type="date" className="input-primary" />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <p className="ml-9 flex items-start">
                  <span className="text-primary-orange">*</span>Expiration Date:
                </p>
                <div>
                  <input type="date" className="input-primary" />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <p className="ml-24 flex items-start">
                  <span className="text-primary-orange">*</span>Status:
                </p>
                <div>
                  <TableSelect options={['Select', 'Option2', 'Option3']} />
                </div>
              </div>
            </div>

            <div className="mt-8 flex w-full justify-center gap-3">
              <button onClick={onClose} className="btn-secondary ">
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

export default CreateLicense;
