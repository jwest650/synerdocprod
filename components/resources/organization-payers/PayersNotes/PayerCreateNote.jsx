import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import TableSelect from '../../../structure/TableSelect';

const PayerCreateNote = ({ setDocument }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newDocument, setNewDocument] = useState(null);

  const handleForm = (e) => {
    e.preventDefault();
    setDocument(newDocument);
    onClose();
  };

  const onFileChange = (e) => {
    setNewDocument(e.target.files);
  };
  return (
    <>
      <span
        onClick={onOpen}
        className="btn-primary flex cursor-pointer items-center gap-1"
      >
        <BiPlus className="scale-150" />
        <span className="verdana11">Create Note</span>
      </span>
      <Modal isOpen={isOpen} size={'xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            <form action="" onSubmit={handleForm}>
              <h1 className="verdana18 font-semibold">Create Note</h1>
              <div className="mt-7 w-full space-y-3 pl-5">
                <div className="flex items-center gap-3">
                  <p className="flex items-start">
                    <span className="text-primary-orange">*</span>Note Type:
                  </p>
                  <div>
                    <TableSelect options={['General', 'Option2']} />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <p className="ml-2 flex items-start">Document:</p>
                  <div>
                    <input
                      type="file"
                      className="w-56 rounded border border-secondary-blue shadow"
                      onChange={onFileChange}
                    />
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <p className="ml-9 flex items-start">
                    <span className="text-primary-orange">*</span>Note:
                  </p>
                  <div>
                    <textarea
                      className="input-primary"
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex w-full justify-end gap-3">
                <button
                  type="submit"
<<<<<<< HEAD
                  className="rounded bg-[#0141CF] px-4 py-1 text-white shadow"
=======
                  className="rounded bg-primary-blue px-4 py-1 text-white shadow"
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
                >
                  Save
                </button>
                <button
                  onClick={onClose}
                  className="rounded bg-gray-500 px-4 py-1 text-white shadow"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PayerCreateNote;
