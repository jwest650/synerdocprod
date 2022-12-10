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
                    <div className="w-full rounded border-[2px] border-t-[20px] border-secondary-blue p-4  ">
                        <ModalHeader>Add Collector Assignment</ModalHeader>
                        <ModalBody
                            className="flex justify-center space-x-5  "
                            p={"20px"}
                        >
                            <div className="space-y-3 capitalize">
                                <div className="font-semibold">
                                    <label htmlFor="">
                                        <span className="text-orange-500">
                                            *
                                        </span>{" "}
                                        Agency:
                                    </label>
                                </div>
                                <div className="font-semibold">
                                    {" "}
                                    <label htmlFor="">
                                        {" "}
                                        <span className="text-orange-500">
                                            *
                                        </span>{" "}
                                        Level:
                                    </label>
                                </div>
                                {(option.payer || option.single) && (
                                    <div className="font-semibold">
                                        {" "}
                                        <label htmlFor="">
                                            {" "}
                                            <span className="text-orange-500">
                                                *
                                            </span>{" "}
                                            assign to:
                                        </label>
                                    </div>
                                )}
                                {option.single && (
                                    <div className="font-semibold">
                                        {" "}
                                        <label htmlFor="">
                                            <span className="text-orange-500">
                                                *
                                            </span>{" "}
                                            payer category:
                                        </label>
                                    </div>
                                )}
                                {option.payer && (
                                    <div className="font-semibold">
                                        <label htmlFor="">
                                            <span className="text-orange-500">
                                                *
                                            </span>{" "}
                                            payer :
                                        </label>
                                    </div>
                                )}
                            </div>
                            <div className=" space-y-3 ">
                                <Select
                                    className="input-shadow"
                                    placeholder="Select Agency"
                                    size="xs"
                                >
                                    {collectorData.agency.map((value, i) => (
                                        <option value={value} key={i}>
                                            {value}
                                        </option>
                                    ))}
                                </Select>
                                <Select
                                    className="input-shadow"
                                    placeholder="Select Level"
                                    size="xs"
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
                                        className="input-shadow"
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
                                        className="input-shadow"
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
                                        className="input-shadow"
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
                                    <button className="modal-btn">
                                        Save / Add More
                                    </button>
                                    <button className="modal-btn">
                                        Save / Close
                                    </button>
                                    <button
                                        className="modal-cancel"
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
                                        className="modal-cancel"
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
                                        className="modal-btn"
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
