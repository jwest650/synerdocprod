import {
  Input,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import TableSelect from '../../../structure/TableSelect';

const UploadDocument = ({ setFileProp }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [file, setFile] = useState(null);

  const handleForm = (e) => {
    e.preventDefault();
    setFileProp(file);
    onClose();
  };
  // console.log(file);

  const onImageChange = (event) => {
    setFile(event.target.files);
  };

  return (
    <>
      <span
        onClick={onOpen}
        className="btn-primary flex cursor-pointer items-center gap-1"
      >
        <BiPlus className="scale-150" />
        <span className="verdana11">Upload Document</span>
      </span>
      <Modal isOpen={isOpen} size={'xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            <form action="" onSubmit={handleForm}>
              <h1 className="verdana18 font-semibold">Upload File</h1>
              <div className="verdana12 mt-14">
                <div className="flex w-full flex-col items-center gap-3.5">
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[35%]  justify-end">
                      <span className="text-primary-orange">*</span>Select file:
                    </p>
                    <div className=" flex w-[65%] gap-2">
                      <input
                        onChange={onImageChange}
                        className="w-48 rounded border border-secondary-blue shadow-sm"
                        type="file"
                      />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[35%] justify-end">Attach to:</p>
                    <div className=" flex w-[65%] items-center gap-2">
                      <TableSelect options={['Payer', 'Option2']} />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[35%] justify-end">
                      {' '}
                      <span className="text-primary-orange">*</span>Document
                      Type:
                    </p>
                    <div className=" flex w-[65%] items-center gap-2">
                      <TableSelect options={['Select Type', 'Option2']} />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[35%] justify-end">
                      <span className="text-primary-orange">*</span> Document
                      Status:
                    </p>
                    <div className=" flex w-[65%] ">
                      <TableSelect options={['Complete', 'Option2']} />
                    </div>
                  </div>

                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[35%] justify-end">Description:</p>
                    <div className=" flex w-[65%] ">
                      <input
                        type="text"
                        placeholder="Payer Auth"
                        className="input-primary"
                      />
                    </div>
                  </div>

                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[35%] justify-end">Description:</p>
                    <div className=" flex w-[65%] ">
                      <textarea type="text" className="input-primary" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-14 flex w-full justify-end gap-3">
                <button
                  type="submit"
                  className="rounded bg-primary-blue px-4 py-1 text-white shadow"
                >
                  Upload/Close
                </button>
                <button
                  type="submit"
                  className="rounded bg-primary-blue px-4 py-1 text-white shadow"
                >
                  Upload/Add More
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

export default UploadDocument;
