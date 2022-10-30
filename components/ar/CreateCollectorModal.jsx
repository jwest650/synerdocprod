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
            <Modal isOpen={isOpen} onClose={onClose} size={"xl"} p={"10px"}>
                <ModalOverlay />
                <ModalContent>
                    <div className="h-10 bg-[#6b3e9280]">
                        <ModalCloseButton />
                    </div>
                    <ModalHeader>Add Collector Assignment</ModalHeader>

                    <ModalBody className="flex justify-center space-x-5  ">
                        <div className="space-y-3">
                            <div>
                                <label htmlFor="">
                                    {" "}
                                    <span className="text-orange-500">*</span>
                                    Agency:
                                </label>
                            </div>
                            <div>
                                {" "}
                                <label htmlFor="">
                                    {" "}
                                    <span className="text-orange-500">*</span>
                                    Level:
                                </label>
                            </div>
                        </div>
                        <div className=" space-y-3">
                            <Select
                                placeholder="Select option"
                                size="xs"
                                bg={"#d4c3e480"}
                            >
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </Select>
                            <Select
                                placeholder="Select option"
                                size="xs"
                                bg={"#d4c3e480"}
                            >
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
