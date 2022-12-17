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
const PayerInvoice = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div className="">
            <section>
                <button onClick={onOpen}>
                    <p className="text-orange-500">[Payer Review/Release]</p>
                </button>
                <Modal isOpen={isOpen} onClose={onClose} size="lg">
                    <ModalOverlay />
                    <ModalContent>
                        <div className="w-full rounded border-[2px] border-t-[20px] border-secondary-blue p-4 capitalize ">
                            <ModalHeader>
                                Payer Invoice Review/Release
                            </ModalHeader>
                            <ModalBody className="">
                                <table className="ar w-full capitalize">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>invoice review type</th>
                                            <th>completed date</th>
                                            <th>completed by</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <Checkbox />
                                            </td>
                                            <td>final billing review</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
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

export default PayerInvoice;
