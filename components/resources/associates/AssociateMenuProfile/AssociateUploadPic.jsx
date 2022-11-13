import {
  Input,
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import { BsCloudUpload } from 'react-icons/bs';

const AssociateUploadPic = ({ setAssociateImage }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [image, setImage] = useState('');
  const handleForm = (e) => {
    e.preventDefault();
    setAssociateImage(image);
    onClose();
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <>
      <span
        onClick={onOpen}
        className="flex w-fit cursor-pointer items-center justify-center gap-2 rounded bg-orange-600 py-1 px-4 text-white"
      >
        <BsCloudUpload className="scale-125" />
        <span className="text-sm">Upload Picture</span>
      </span>
      <Modal isOpen={isOpen} size={'5xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            <form action="" onSubmit={handleForm}>
              <h2 className="text-xl font-semibold tracking-wider">
                Upload File
              </h2>
              <div className="mt-10 flex w-full justify-center">
                {/* <label>
                  <span className="text-red-500">*</span>Select Image:
                </label> */}
                <Input
                  onChange={onImageChange}
                  className="w-40"
                  w="fit-content"
                  p="1"
                  h="fit-content"
                  type="file"
                />
              </div>
              <div className="mt-8 flex w-full justify-end gap-3">
                <button
                  type="submit"
                  className="rounded bg-[#0141CF] px-4 py-1 text-white shadow"
                >
                  Save
                </button>
                <div
                  onClick={onClose}
                  className="rounded bg-gray-500 px-4 py-1 text-white shadow"
                >
                  Cancel
                </div>
              </div>
            </form>
            {/* </ModalBody> */}
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AssociateUploadPic;
