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
const InvoiceRemarks = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div>
            <section>
                <button className=" text-orange-500 underline" onClick={onOpen}>
                    [Edit]
                </button>
                <Modal isOpen={isOpen} onClose={onClose} size="xl">
                    <ModalOverlay />
                    <ModalContent>
                        <div className="w-full rounded border-[2px] border-t-[20px] border-secondary-blue p-4 capitalize ">
                            <ModalHeader>invoice remarks</ModalHeader>
                            <ModalBody className="ml-10 space-y-2">
                                <div className="flex space-x-2">
                                    <label htmlFor="" className="font-bold">
                                        remark 1:
                                    </label>
                                    <textarea
                                        className="input-shadow border"
                                        name=""
                                        id=""
                                        cols="30"
                                        rows="3"
                                    ></textarea>
                                </div>
                                <div className="flex space-x-2">
                                    <label htmlFor="" className="font-bold">
                                        remark 2:
                                    </label>
                                    <textarea
                                        className="input-shadow border"
                                        name=""
                                        id=""
                                        cols="30"
                                        rows="3"
                                    ></textarea>
                                </div>
                                <div className="flex space-x-2">
                                    <label htmlFor="" className="font-bold">
                                        remark 3:
                                    </label>
                                    <textarea
                                        className="input-shadow border"
                                        name=""
                                        id=""
                                        cols="30"
                                        rows="3"
                                    ></textarea>
                                </div>
                                <div className="flex space-x-2">
                                    <label htmlFor="" className="font-bold">
                                        remark 4:
                                    </label>
                                    <textarea
                                        className="input-shadow border"
                                        name=""
                                        id=""
                                        cols="30"
                                        rows="3"
                                    ></textarea>
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

export default InvoiceRemarks;
