import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Select,
} from "@chakra-ui/react";
const CreateCollectorModal = ({ isOpen, onClose }) => {
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Collector Assignment</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <div>
                            <label htmlFor="">
                                {" "}
                                <span>*</span>Agency:
                            </label>
                            <Select placeholder="Select option" size="sm">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </Select>
                        </div>
                        <div>
                            <label htmlFor="">
                                {" "}
                                <span>*</span>Level:
                            </label>
                            <Select placeholder="Select option" size="sm">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </Select>
                        </div>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="red" mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button variant="ghost">Continue</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default CreateCollectorModal;
