import React from "react";
import {
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    useDisclosure,
} from "@chakra-ui/react";
const CbsaModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div>
            <section>
                <button
                    className="uppercase text-orange-500 underline"
                    onClick={onOpen}
                >
                    view cbsa
                </button>
                <Modal isOpen={isOpen} onClose={onClose} size="xs">
                    <ModalOverlay />
                    <ModalContent>
                        <div className="w-full rounded border-[2px] border-t-[20px] border-secondary-blue p-4 capitalize ">
                            <ModalHeader>CBSA</ModalHeader>
                            <ModalBody className="flex items-center justify-center">
                                <label
                                    htmlFor=""
                                    className="mr-3 font-bold uppercase"
                                >
                                    cbsa:
                                </label>
                                <p>321987</p>
                            </ModalBody>
                        </div>
                    </ModalContent>
                </Modal>
            </section>
        </div>
    );
};

export default CbsaModal;
