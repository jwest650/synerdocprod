import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { FcEditImage } from 'react-icons/fc';
import TableSelect from '../../../structure/TableSelect';

const EditComplianceItem = ({ option, category }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <span
        onClick={onOpen}
        className="flex cursor-pointer items-center justify-center "
      >
        <FcEditImage />
      </span>
      <Modal isOpen={isOpen} size={'lg'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10">
            <h1 className="verdana16 font-semibold">Edit Compliance Item</h1>
            <p className="verdana11">Edit the compliance item details</p>
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
                    value={option?.item}
                    disabled
                    className="input-primary"
                  />
                </div>
              </div>
              <div className="flex items-start gap-3">
                <p className="ml-[85px] flex items-start">
                  <span className="text-primary-orange">*</span>Result:
                </p>
                <div>
                  <TableSelect
                    options={
                      category === 'Employment Requirements'
                        ? ['Select', 'Pass', 'Fail']
                        : [
                            'Select',
                            'Declined',
                            'Series 1 Completed',
                            'Series 2 Completed',
                            'Series 3 Completed',
                          ]
                    }
                  />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <p className="ml-5 flex items-start">
                  <span className="text-primary-orange">*</span>Completed Date:
                </p>
                <div>
                  <input type="date" className="input-primary" />
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

export default EditComplianceItem;
