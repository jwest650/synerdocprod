import {
  Input,
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
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
        className="btn-primary ml-5 flex w-fit cursor-pointer items-center justify-center gap-2"
      >
        <BsCloudUpload className="scale-125" />
        <span>Upload Picture</span>
      </span>
<<<<<<< HEAD
      <Modal isOpen={isOpen} size={'5xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            <form action="" onSubmit={handleForm}>
              <h2 className="verdana18 font-semibold tracking-wider">
                Upload File
              </h2>
              <div className="mt-10 flex w-full justify-center">
                <Input
                  onChange={onImageChange}
                  className="w-40"
                  w="fit-content"
                  p="1"
                  h="fit-content"
=======
      <Modal isOpen={isOpen} size={'lg'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-secondary-blue p-4 pb-10 ">
            <form action="" onSubmit={handleForm}>
              <h2 className="verdana16 font-semibold">Upload File</h2>
              <div className="mt-10 flex w-full justify-center">
                <input
                  onChange={onImageChange}
                  className="input-primary w-48"
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
                  type="file"
                />
              </div>
              <div className="mt-8 flex w-full justify-end gap-3">
                <button
                  type="submit"
                  className="rounded bg-primary-blue px-4 py-1 text-white shadow"
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
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AssociateUploadPic;
