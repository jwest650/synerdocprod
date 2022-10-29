import React from "react";
import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    useDisclosure,
} from "@chakra-ui/react";
import { BiPlus } from "react-icons/bi";

const CreateFacilites = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div>
            <span
                onClick={onOpen}
                className="flex cursor-pointer items-center gap-1 rounded bg-orange-600 py-1 px-2 text-white"
            >
                <BiPlus />
                <span className="text-sm">Create Facilites</span>
            </span>
            <Modal isOpen={isOpen} size={"2xl"} onClose={onClose}>
                <ModalOverlay />
                <ModalOverlay />
                <ModalContent>
                    <form action="" className=" space-y-4 p-5 capitalize">
                        <header className=" capitalize">
                            <h1 className="text-2xl font-bold">
                                add Facilites
                            </h1>
                            <p>add facility details</p>
                        </header>
                        <section className="ml-12 space-y-3">
                            <div className="flex items-center space-x-2">
                                <label htmlFor="">*facilites:</label>

                                <Input
                                    w={200}
                                    type="text"
                                    size="sm"
                                    placeholder=""
                                />
                            </div>
                            <div className="flex space-x-2">
                                <label htmlFor="">facility type:</label>{" "}
                                <Select
                                    placeholder="Select option"
                                    size="xs"
                                    w={120}
                                >
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Select>
                            </div>

                            <div className="space-x-2">
                                <label htmlFor="">email:</label>
                                <Input
                                    w={200}
                                    type="text"
                                    size="sm"
                                    placeholder=""
                                />
                            </div>
                            <div className="flex space-x-2">
                                <label htmlFor="">sales rep:</label>
                                <Select
                                    placeholder="Select option"
                                    size="xs"
                                    w={120}
                                >
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Select>
                            </div>

                            <div className="space-x-2">
                                <label htmlFor="">*start date:</label>
                                <Input
                                    w={200}
                                    type="date"
                                    size="sm"
                                    placeholder=""
                                />
                            </div>
                            <div className="space-x-2">
                                <label htmlFor="">end date:</label>
                                <Input
                                    w={200}
                                    type="date"
                                    size="sm"
                                    placeholder=""
                                />
                            </div>
                        </section>
                        <div className="flex justify-end space-x-3">
                            <button className="border p-1 px-3 capitalize">
                                save
                            </button>
                            <button
                                className="border p-1 px-3 capitalize"
                                onClick={onClose}
                            >
                                cancel
                            </button>
                        </div>
                    </form>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default CreateFacilites;
