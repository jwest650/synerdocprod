import React from "react";
import {
    Checkbox,
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
const GrossAdjustment = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div className="">
            <section>
                <button onClick={onOpen}>
                    <p className="text-orange-500 underline" htmlFor="">
                        Gross Adj
                    </p>
                </button>
                <Modal isOpen={isOpen} onClose={onClose} size="lg">
                    <ModalOverlay />
                    <ModalContent>
                        <div className="w-full rounded border-[2px] border-t-[20px] border-secondary-blue p-4 capitalize ">
                            <ModalHeader>
                                gross adjustment invoice #1
                            </ModalHeader>
                            <ModalBody className=" space-y-4">
                                <aside className="ml-12 flex items-center space-x-2">
                                    <div className="space-y-2 text-right font-bold capitalize">
                                        <p>patient name:</p>
                                        <p>invoice #:</p>
                                        <p>billing status:</p>
                                        <p>current payer:</p>
                                    </div>
                                    <div className="space-y-2">
                                        <p>akinton, dorothy</p>
                                        <p>1</p>
                                        <p>original</p>
                                        <p>clover</p>
                                    </div>
                                </aside>
                                <aside className="space-y-3">
                                    <div className="flex items-center space-x-2">
                                        <p className="font-bold capitalize">
                                            <span className="text-orange-500">
                                                *
                                            </span>{" "}
                                            adjustment reason:
                                        </p>
                                        <Select
                                            placeholder="Select option"
                                            className="input-shadow"
                                            size="xs"
                                            w={200}
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
                                        <p className="font-bold capitalize">
                                            <span className="text-orange-500">
                                                *
                                            </span>{" "}
                                            adjustment amount:
                                        </p>
                                        <Input
                                            w={200}
                                            type="text"
                                            className="input-shadow"
                                            size="xs"
                                            placeholder=""
                                        />
                                    </div>
                                </aside>
                            </ModalBody>
                            <ModalFooter className="space-x-2">
                                <button className="modal-btn">
                                    Save/Close
                                </button>
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

export default GrossAdjustment;
