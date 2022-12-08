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
const InvoiceMisc = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div>
            <section>
                <button className=" text-orange-500 underline" onClick={onOpen}>
                    [Edit]
                </button>
                <Modal isOpen={isOpen} onClose={onClose} size="2xl">
                    <ModalOverlay />
                    <ModalContent>
                        <div className="w-full rounded border-[2px] border-t-[20px] border-secondary-blue p-4 capitalize ">
                            <ModalHeader>invoice misc codes </ModalHeader>
                            <ModalBody className="space-y-3">
                                <div className="flex items-center space-x-2">
                                    <label htmlFor="" className="font-bold">
                                        service authorization code:
                                    </label>
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
                                </div>
                                <div className="flex items-center space-x-2">
                                    <label htmlFor="" className="font-bold">
                                        delay reason code:
                                    </label>
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
                                </div>
                                <div className="flex items-center space-x-2">
                                    <label htmlFor="" className="font-bold">
                                        document control number:
                                    </label>
                                    <Input
                                        disabled
                                        className="input-shadow"
                                        id="to"
                                        w={300}
                                        type="text"
                                        size="xs"
                                        placeholder=""
                                    />
                                </div>
                                <div className="flex items-center space-x-2">
                                    <label htmlFor="" className="font-bold">
                                        unique tracking number:
                                    </label>
                                    <Input
                                        className="input-shadow"
                                        id="to"
                                        w={300}
                                        type="text"
                                        size="xs"
                                        placeholder=""
                                    />
                                    <span className="text-[10px] font-bold">
                                        (14 characters)
                                    </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <label htmlFor="" className="font-bold">
                                        alternate DCN:
                                    </label>
                                    <Input
                                        className="input-shadow"
                                        id="to"
                                        w={300}
                                        type="text"
                                        size="xs"
                                        placeholder=""
                                    />
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

export default InvoiceMisc;
