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
    Checkbox,
} from "@chakra-ui/react";
import { collectorData } from "../../../assets/ardata";
import { useState } from "react";
import Details from "./Details";
import Detailstwo from "./Detailstwo";
const CreateCollectorModal = ({ isOpen, onClose }) => {
    const [showBtn, setshowBtn] = useState(false);
    const [level, setlevel] = useState("");
    const [option, setoption] = useState({
        assign: false,
        payer: false,
        payerCate: false,
        encounter: false,
        team: false,
    });
    const handleCategory = () => {
        if (level.toLowerCase() == "all payer categories") {
            setoption({
                assign: true,
                payer: false,
                payerCate: false,
                encounter: false,
                team: false,
            });
            setshowBtn(true);
        }
        if (level.toLowerCase() == "single payer category") {
            setoption({
                payer: false,
                encounter: false,
                team: false,
                assign: true,
                payerCate: true,
            });
            setshowBtn(true);
        }
        if (level.toLowerCase() == "payer") {
            setoption({
                payer: false,
                encounter: false,
                team: false,
                assign: true,
                payerCate: true,
            });
            setshowBtn(true);
        }
        if (level.toLowerCase() == "patient encounter") {
            setoption({
                payer: false,
                team: false,
                payerCate: false,
                assign: true,
                encounter: true,
            });
            setshowBtn(true);
        }
        if (level.toLowerCase() == "team") {
            setoption({
                payer: false,
                encounter: false,

                payerCate: true,
                assign: true,
                team: true,
            });
            setshowBtn(true);
        }
    };

    const handleReset = () => {
        setoption({
            assign: false,
            payer: false,
            payerCate: false,
            encounter: false,
            team: false,
        });
        setshowBtn(false);
        onClose();
    };

    const HandleLevelChange = (e) => {
        setlevel(e.target.value);
        setoption({
            assign: false,
            payer: false,
            payerCate: false,
            encounter: false,
            team: false,
        });
        setshowBtn(false);
    };
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
                <ModalOverlay />
                <ModalContent>
                    <div className="w-full rounded border-[2px] border-t-[20px] border-secondary-blue p-4  ">
                        <ModalHeader>Add Collector Assignment</ModalHeader>
                        <ModalBody
                            className="flex  justify-center space-x-3  "
                            p={"20px"}
                        >
                            <section className="space-y-4 text-right">
                                <div className=" capitalize">
                                    <label htmlFor="" className="font-bold">
                                        <span className="text-orange-500">
                                            *
                                        </span>{" "}
                                        agency:
                                    </label>
                                </div>
                                <div className="capitalize">
                                    <label htmlFor="" className="font-bold">
                                        <span className="text-orange-500">
                                            *
                                        </span>{" "}
                                        level:
                                    </label>
                                </div>
                                <Details option={option} />
                            </section>
                            <section className="space-y-2 text-right">
                                <div>
                                    <Select
                                        placeholder="Select Agency"
                                        className="input-shadow"
                                        size="xs"
                                        w={300}
                                    >
                                        {collectorData.agency.map((val, i) => {
                                            return (
                                                <option value="option1" key={i}>
                                                    {val}
                                                </option>
                                            );
                                        })}
                                    </Select>
                                </div>

                                <div>
                                    <Select
                                        placeholder="Select Level"
                                        className="input-shadow"
                                        size="xs"
                                        w={300}
                                        onChange={HandleLevelChange}
                                    >
                                        {collectorData.level.map((val, i) => {
                                            return (
                                                <option value={val} key={i}>
                                                    {val}
                                                </option>
                                            );
                                        })}
                                    </Select>
                                </div>
                                <Detailstwo
                                    option={option}
                                    collectorData={collectorData}
                                />
                            </section>
                        </ModalBody>

                        <ModalFooter className="space-x-2 ">
                            <>
                                {!showBtn ? (
                                    <button
                                        className="modal-btn"
                                        onClick={handleCategory}
                                    >
                                        Continue
                                    </button>
                                ) : (
                                    <>
                                        <button
                                            className="modal-btn"
                                            onClick={handleReset}
                                        >
                                            Save/Add More
                                        </button>{" "}
                                        <button
                                            className="modal-btn"
                                            onClick={handleReset}
                                        >
                                            Save/Close
                                        </button>
                                    </>
                                )}

                                <button
                                    className="modal-cancel"
                                    onClick={handleReset}
                                >
                                    Cancel
                                </button>
                            </>
                        </ModalFooter>
                    </div>
                </ModalContent>
            </Modal>
        </>
    );
};

export default CreateCollectorModal;
