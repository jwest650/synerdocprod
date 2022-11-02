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

const CreatePhysicians = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleForm = (e) => {
        e.preventDefault();
        onClose();
    };

    return (
        <div>
            <span
                onClick={onOpen}
                className="flex cursor-pointer items-center gap-1 rounded bg-orange-600 py-1 px-2 text-white"
            >
                <BiPlus />
                <span className="text-sm">Create Associates</span>
            </span>
            <Modal isOpen={isOpen} size={"3xl"} onClose={onClose}>
                <ModalOverlay />
                <ModalOverlay />
                <ModalContent>
                    <div className="w-full rounded border-[2px] border-t-[20px] border-[#6b3e9280] p-4 pb-10 ">
                        <form
                            action=""
                            onSubmit={handleForm}
                            className=" space-y-4 p-5 capitalize"
                        >
                            <header className=" capitalize">
                                <h1 className="text-2xl font-bold">
                                    add physicians
                                </h1>
                                <p>
                                    select a specialty, title or physician
                                    details
                                </p>
                            </header>
                            <section className="flex items-center justify-between">
                                <aside className=" space-y-3">
                                    {" "}
                                    <div className="flex items-center space-x-2">
                                        <label htmlFor="">
                                            <span className="text-orange-500">
                                                *
                                            </span>{" "}
                                            first name:
                                        </label>

                                        <Input
                                            w={200}
                                            type="text"
                                            size="sm"
                                            placeholder="Enter first or lastname"
                                        />
                                    </div>
                                    <div className=" space-x-2">
                                        <label htmlFor="">middle:</label>{" "}
                                        <Input
                                            w={200}
                                            type="text"
                                            size="sm"
                                            placeholder="Enter first or lastname"
                                        />
                                    </div>
                                    <div className="space-x-2">
                                        <label htmlFor="">
                                            <span className="text-orange-500">
                                                *
                                            </span>{" "}
                                            lastname:
                                        </label>
                                        <Input
                                            w={200}
                                            type="text"
                                            size="sm"
                                            placeholder="Enter first or lastname"
                                        />
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <label htmlFor="">title:</label>
                                        <Select
                                            placeholder="Select option"
                                            size="xs"
                                            w={120}
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
                                        <label htmlFor="">specialty:</label>
                                        <Select
                                            placeholder="Select option"
                                            size="xs"
                                            w={120}
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
                                </aside>
                                <aside className=" space-y-3">
                                    <div className="space-x-2">
                                        <label htmlFor="">email:</label>
                                        <Input
                                            w={200}
                                            type="text"
                                            size="sm"
                                            placeholder=""
                                        />
                                    </div>
                                    <div className="space-x-2">
                                        <label htmlFor="">
                                            physician group:
                                        </label>
                                        <Input
                                            w={200}
                                            type="text"
                                            size="sm"
                                            placeholder=""
                                        />
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <label htmlFor="">sales rep:</label>
                                        <Select
                                            placeholder="Select option"
                                            size="xs"
                                            w={120}
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
                                    <div className="space-x-2">
                                        <label htmlFor="">
                                            <span className="text-orange-500">
                                                *
                                            </span>{" "}
                                            start date:
                                        </label>
                                        <Input
                                            w={120}
                                            type="date"
                                            size="xs"
                                            placeholder=""
                                        />
                                    </div>
                                    <div className="space-x-2">
                                        <label htmlFor="">end date:</label>
                                        <Input
                                            w={120}
                                            type="date"
                                            size="xs"
                                            placeholder=""
                                        />
                                    </div>
                                </aside>
                            </section>
                            <div className="mt-8 flex justify-end space-x-3">
                                <button
                                    type="submit"
                                    className="rounded bg-[#32164A] px-4 py-1 text-white shadow"
                                >
                                    Save
                                </button>
                                <button
                                    className="rounded bg-gray-500 px-4 py-1 text-white shadow"
                                    onClick={onClose}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default CreatePhysicians;
