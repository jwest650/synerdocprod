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
} from "@chakra-ui/react";
import { collectorData } from "../../assets/ardata";
import { useState } from "react";
const CreateCollectorModal = ({ isOpen, onClose }) => {
    const [level, setlevel] = useState("");
    const [option, setoption] = useState({
        payer: false,
        single: false,
    });
    const handleCategory = () => {
        if (level.toLowerCase() == "single payer category") {
            setoption({ single: true, payer: false });
        } else if (level.toLowerCase() == "payer") {
            setoption({ single: false, payer: true });
        } else {
            setoption({ single: false, payer: false });
        }
    };

    const HandleLevelChange = (e) => {
        setlevel(e.target.value);
        setoption({ single: false, payer: false });
    };

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
                <ModalOverlay />
                <ModalContent>
                    <div className="w-full rounded border-[2px] border-t-[20px] border-[#6b3e9280] p-4  ">
                        <ModalHeader>Add Collector Assignment</ModalHeader>
                        <ModalBody
                            className="flex justify-center space-x-5  "
                            p={"20px"}
                        >
                            <div className="space-y-3 capitalize">
                                <div>
                                    <label htmlFor="">
                                        {" "}
                                        <span className="text-orange-500">
                                            *
                                        </span>
                                        Agency:
                                    </label>
                                </div>
                                <div>
                                    {" "}
                                    <label htmlFor="">
                                        {" "}
                                        <span className="text-orange-500">
                                            *
                                        </span>
                                        Level:
                                    </label>
                                </div>
                                {(option.payer || option.single) && (
                                    <div>
                                        {" "}
                                        <label htmlFor="">
                                            {" "}
                                            <span className="text-orange-500">
                                                *
                                            </span>
                                            assign to:
                                        </label>
                                    </div>
                                )}
                                {option.single && (
                                    <div>
                                        {" "}
                                        <label htmlFor="">
                                            {" "}
                                            <span className="text-orange-500">
                                                *
                                            </span>
                                            payer category:
                                        </label>
                                    </div>
                                )}
                                {option.payer && (
                                    <div>
                                        {" "}
                                        <label htmlFor="">
                                            {" "}
                                            <span className="text-orange-500">
                                                *
                                            </span>
                                            payer :
                                        </label>
                                    </div>
                                )}
                            </div>
                            <div className=" space-y-3 ">
                                <Select
                                    placeholder="Select Agency"
                                    size="xs"
                                    bg={"#d4c3e480"}
                                >
                                    {collectorData.agency.map((value, i) => (
                                        <option value={value} key={i}>
                                            {value}
                                        </option>
                                    ))}
                                </Select>
                                <Select
                                    placeholder="Select Level"
                                    size="xs"
                                    bg={"#d4c3e480"}
                                    onChange={HandleLevelChange}
                                >
                                    {collectorData.level.map((value, i) => (
                                        <option value={value} key={i}>
                                            {value}
                                        </option>
                                    ))}
                                </Select>
                                {(option.single || option.payer) && (
                                    <Select
                                        placeholder="Select Associate Category"
                                        size="xs"
                                        bg={"#d4c3e480"}
                                    >
                                        {collectorData.asign.map((value, i) => (
                                            <option value={value} key={i}>
                                                {value}
                                            </option>
                                        ))}
                                    </Select>
                                )}
                                {option.single && (
                                    <Select
                                        placeholder="Select Payer Category"
                                        size="xs"
                                        bg={"#d4c3e480"}
                                    >
                                        {collectorData.payerCate.map(
                                            (value, i) => (
                                                <option value={value} key={i}>
                                                    {value}
                                                </option>
                                            )
                                        )}
                                    </Select>
                                )}

                                {option.payer && (
                                    <Select
                                        placeholder="Select Payer "
                                        size="xs"
                                        bg={"#d4c3e480"}
                                    >
                                        {collectorData.payer.map((value, i) => (
                                            <option value={value} key={i}>
                                                {value}
                                            </option>
                                        ))}
                                    </Select>
                                )}
                            </div>
                        </ModalBody>

                        <ModalFooter className="space-x-2 ">
                            {option.single || option.payer ? (
                                <>
                                    <button className="rounded bg-[#32164A]  px-3 text-white">
                                        Save/Add More
                                    </button>
                                    <button className="rounded bg-[#32164A]  px-3 text-white">
                                        Save/Close
                                    </button>
                                    <button
                                        className="rounded bg-gray-500  px-3 text-white"
                                        onClick={() => {
                                            setoption({
                                                payer: false,
                                                single: false,
                                            });
                                            onClose();
                                        }}
                                    >
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button
                                        className="rounded bg-gray-500  px-3 text-white"
                                        onClick={() => {
                                            setoption({
                                                payer: false,
                                                single: false,
                                            });
                                            onClose();
                                        }}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="rounded bg-[#32164A]  px-3 text-white"
                                        onClick={handleCategory}
                                    >
                                        Continue
                                    </button>
                                </>
                            )}
                        </ModalFooter>
                    </div>
                </ModalContent>
            </Modal>
        </>
    );
};

export default CreateCollectorModal;
