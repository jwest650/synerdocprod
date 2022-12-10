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
const AdjustTrasaction = ({ isOpen, onClose }) => {
    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
                <ModalOverlay />
                <ModalContent>
                    <div className="w-full rounded border-[2px] border-t-[20px] border-secondary-blue p-4 capitalize ">
                        <ModalHeader>
                            Add Transaction Coding Overrides
                        </ModalHeader>
                        <ModalBody className=" flex space-x-3 ">
                            <section className="space-y-2">
                                <div className=" tex-right space-x-3 ">
                                    <label htmlFor="" className="font-bold">
                                        <span className="text-orange-500">
                                            *
                                        </span>{" "}
                                        hcpc modifier Code 1:
                                    </label>
                                </div>
                                <div className=" space-x-3 text-right  ">
                                    <label htmlFor="" className=" font-bold">
                                        hcpc modifier Code 2:
                                    </label>
                                </div>
                                <div className=" space-x-3 text-right">
                                    <label htmlFor="" className="font-bold">
                                        hcpc modifier Code 3:
                                    </label>
                                </div>
                                <div className=" space-x-3 text-right">
                                    <label htmlFor="" className="font-bold">
                                        hcpc modifier Code 4:
                                    </label>
                                </div>
                            </section>
                            <section className="space-y-1 ">
                                <Select
                                    w={130}
                                    placeholder="Select option"
                                    size="xs"
                                    border
                                    className="input-shadow"
                                >
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Select>
                                <Select
                                    w={130}
                                    placeholder="Select option"
                                    size="xs"
                                    border
                                    className="input-shadow"
                                >
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Select>
                                <Select
                                    w={130}
                                    placeholder="Select option"
                                    size="xs"
                                    border
                                    className="input-shadow"
                                >
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Select>
                                <Select
                                    w={130}
                                    placeholder="Select option"
                                    size="xs"
                                    border
                                    className="input-shadow"
                                >
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Select>
                            </section>
                        </ModalBody>

                        <ModalFooter className="space-x-2">
                            <button className="modal-btn">Save</button>
                            <button className="modal-cancel" onClick={onClose}>
                                Cancel
                            </button>
                        </ModalFooter>
                    </div>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default AdjustTrasaction;
