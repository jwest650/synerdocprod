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

const CreatePayer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div>
            <span
                onClick={onOpen}
                className="flex cursor-pointer items-center gap-1 rounded bg-orange-600 py-1 px-2 text-white"
            >
                <BiPlus />
                <span className="text-sm">Create Payer</span>
            </span>
            <Modal isOpen={isOpen} size={"2xl"} onClose={onClose}>
                <ModalOverlay />
                <ModalOverlay />
                <ModalContent>
                    <form action="" className=" space-y-4 p-5 capitalize">
                        <header className=" capitalize">
                            <h1 className="text-2xl font-bold">add Payer</h1>
                        </header>
                        <section className="ml-12 space-y-3">
                            <div className="flex items-center space-x-2">
                                <label htmlFor="">*Payer name:</label>

                                <Input
                                    w={200}
                                    type="text"
                                    size="sm"
                                    placeholder=""
                                />
                            </div>
                            <div className="flex space-x-2">
                                <label htmlFor="">*payer category:</label>{" "}
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
                            <div className="flex space-x-2">
                                <label htmlFor="">*oasis/his category:</label>{" "}
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

                            <div className="flex space-x-2">
                                <label htmlFor="">*claim filling type:</label>
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
                            <div className="flex space-x-2">
                                <label htmlFor="">*invoice type:</label>
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
                            <div className="flex space-x-2">
                                <label htmlFor="">*invoice cycle:</label>
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
                                <label htmlFor="">start date:</label>
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
                            <div className="space-x-2">
                                <label htmlFor="">payer email:</label>
                                <Input
                                    w={200}
                                    type="text"
                                    size="sm"
                                    placeholder=""
                                />
                            </div>
                            <div className="space-x-2">
                                <label htmlFor="">apply sales tax:</label>
                                <input type="checkbox" name="" id="" />
                            </div>
                        </section>
                        <div className="flex justify-end space-x-3">
                            <button className="border p-1 px-3 capitalize">
                                add
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

export default CreatePayer;
