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
          <div className="rounded border-[5px] border-t-[20px] border-[#6b3e9280] ">
            <h1>Add Associate</h1>
            <div className="flex w-full items-center justify-between">
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                suscipit doloribus sunt nemo, alias distinctio odio unde
                reiciendis, nostrum, porro sint eos quia minus aliquid eum fugit
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                suscipit doloribus sunt nemo, alias distinctio odio unde
                reiciendis, nostrum, porro sint eos quia minus aliquid eum fugit
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                suscipit doloribus sunt nemo, alias distinctio odio unde
                reiciendis, nostrum, porro sint eos quia minus aliquid eum fugit
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                suscipit doloribus sunt nemo, alias distinctio odio unde
                reiciendis, nostrum, porro sint eos quia minus aliquid eum fugit
                repellendus rerum vero.
              </div>
              <div className="border-l-2 pl-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,
                obcaecati libero labore similique aut pariatur at dolores dolor
                exercitationem? Debitis et dignissimos quod, molestiae facere
                harum assumenda obcaecati. Necessitatibus, quidem. obcaecati
                libero labore similique aut pariatur at dolores dolor
                exercitationem? Debitis et dignissimos quod, molestiae facere
                harum assumenda obcaecati. Necessitatibus, quidem. obcaecati
                libero labore similique aut pariatur at dolores dolor
                exercitationem? Debitis et dignissimos quod, molestiae facere
                harum assumenda obcaecati. Necessitatibus, quidem. obcaecati
                libero labore similique aut pariatur at dolores dolor
                exercitationem? Debitis et dignissimos quod, molestiae facere
                harum assumenda obcaecati. Necessitatibus, quidem.
              </div>
            </div>
          </div>
          {/* <ModalBody>
                </ModalBody> */}

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
