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
const OtherServices = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div className="">
            <section>
                <button onClick={onOpen}>
                    <h1 className="capitalize text-orange-500 underline">
                        view other services
                    </h1>
                </button>
                <Modal isOpen={isOpen} onClose={onClose} size="lg">
                    <ModalOverlay />
                    <ModalContent>
                        <div className="w-full rounded border-[2px] border-t-[20px] border-secondary-blue p-4 capitalize ">
                            <ModalHeader>other services</ModalHeader>
                            <ModalBody className=" space-y-4">
                                <table className="ar">
                                    <thead>
                                        <tr>
                                            <th>service date</th>
                                            <th>service</th>
                                            <th>associate name</th>
                                            <th>time in / out</th>
                                            <th>status</th>
                                            <th>billable</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                            className="
                                        bg-gray-500"
                                        >
                                            <td colSpan={6}>
                                                no records to display
                                            </td>
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

export default OtherServices;
