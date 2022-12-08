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
    Input,
} from "@chakra-ui/react";
import { FcCalendar, FcCheckmark } from "react-icons/fc";
const AddNoteModal = ({ isOpen, onClose }) => {
    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
                <ModalOverlay />
                <ModalContent>
                    <div className="w-full rounded border-[2px] border-t-[20px] border-secondary-blue p-4 capitalize ">
                        <ModalHeader>Add Note</ModalHeader>
                        <ModalBody className=" flex space-x-3 ">
                            <section className="space-y-2">
                                <div className=" space-x-3 text-right ">
                                    <label htmlFor="" className="font-bold">
                                        <span className="text-orange-500">
                                            *
                                        </span>{" "}
                                        note type:
                                    </label>
                                </div>
                                <div className=" space-x-3 text-right  ">
                                    <label htmlFor="" className=" font-bold">
                                        <span className="text-orange-500">
                                            *
                                        </span>{" "}
                                        payer:
                                    </label>
                                </div>
                                <div className=" space-x-3 text-right">
                                    <label htmlFor="" className="font-bold">
                                        follow-up date:
                                    </label>
                                </div>
                                <div className=" space-x-3 text-right font-bold">
                                    <label htmlFor="" className="font-bold">
                                        <span className="text-orange-500">
                                            *
                                        </span>{" "}
                                        note:
                                    </label>
                                    <p>abc</p>
                                    <FcCheckmark className="inline-block text-xl " />
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
                                <div className="flex items-center">
                                    <Input
                                        id="date"
                                        className="input-shadow"
                                        w={130}
                                        type="date"
                                        size="xs"
                                    />{" "}
                                    <label htmlFor="date" className="font-bold">
                                        <FcCalendar className="text-xl" />
                                    </label>
                                </div>

                                <textarea
                                    className="input-shadow border bg-transparent "
                                    name=""
                                    id=""
                                    cols="30"
                                    rows="6"
                                ></textarea>
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

export default AddNoteModal;
