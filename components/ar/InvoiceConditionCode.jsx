import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
const InvoiceConditionCode = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div>
            <section>
                <button className="text-orange-500" onClick={onOpen}>
                    {" "}
                    [Edit]
                </button>
                <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
                    <ModalOverlay />
                    <ModalContent>
                        <div className="w-full rounded border-[2px] border-t-[20px] border-secondary-blue p-4 capitalize ">
                            <ModalHeader>invoce condition codes</ModalHeader>
                            <ModalBody className="space-y-2 ">
                                <div className="flex">
                                    <textarea
                                        className="border"
                                        name=""
                                        id=""
                                        cols="50"
                                        rows="15"
                                    ></textarea>
                                    <div className=" ml-2 space-y-1">
                                        <button className="block rounded border p-2">
                                            {" "}
                                            <BiUpArrow />
                                        </button>
                                        <button className="block rounded border p-2">
                                            <BiDownArrow />
                                        </button>
                                        <button className="block rounded border p-2">
                                            <RxCross2 />
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-orange-500">*</span>
                                    <Select
                                        placeholder="Select option"
                                        className="input-shadow"
                                        size="xs"
                                        w={350}
                                    >
                                        <option value="option1">
                                            Option 1
                                        </option>
                                        <option value="option2">
                                            Option 2
                                        </option>
                                        <option value="option3">
                                            Option 3
                                        </option>
                                    </Select>
                                    <button className=" rounded border py-[2px] px-2">
                                        Add
                                    </button>
                                </div>
                            </ModalBody>

                            <ModalFooter className="space-x-2">
                                <button className="modal-btn">Save</button>
                                <button
                                    className="modal-cancel"
                                    onClick={onClose}
                                >
                                    Cancel
                                </button>
                            </ModalFooter>
                        </div>
                    </ModalContent>
                </Modal>
            </section>
        </div>
    );
};

export default InvoiceConditionCode;
