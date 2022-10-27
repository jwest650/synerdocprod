import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';

const CreateAssociate = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <span
        onClick={onOpen}
        className="flex cursor-pointer items-center gap-1 rounded bg-orange-600 py-1 px-2 text-white"
      >
        <BiPlus />
        <span className="text-sm">Create Associates</span>
      </span>
      <Modal isOpen={isOpen} size={'xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          {/* <div className="absolute top-[-14px] right-0 bg-red-300"> */}
          {/* <ModalCloseButton /> */}
          {/* </div> */}
          <div className="laborder-[5px] rounded border-t-[20px] border-[#6b3e9280] p-4 ">
            {/* <ModalBody> */}
            <form action="">
              <h1>Add Associate</h1>
              <div className="flex h-full w-full items-center justify-between">
                <div className="w-full">
                  <h2 className="border-b-2 font-semibold">Personal</h2>
                  <ul>
                    <li className="">
                      <span>1</span>
                      div
                    </li>
                  </ul>
                </div>
                <div className="ml-4 w-full border-l-2 pl-4">
                  <h2 className="border-b-2 font-semibold">Employment</h2>
                </div>
              </div>
            </form>
            {/* </ModalBody> */}
          </div>

          {/* <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateAssociate;
