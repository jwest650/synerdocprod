import { Select } from "@chakra-ui/react";
import React from "react";

const Detailstwo = ({ option, collectorData }) => {
    return (
        <>
            {option.assign && (
                <div>
                    <Select
                        placeholder="Select Level"
                        className="input-shadow"
                        size="xs"
                        w={130}
                    >
                        {collectorData.assign.map((val, i) => {
                            return (
                                <option value="option1" key={i}>
                                    {val}
                                </option>
                            );
                        })}
                    </Select>
                </div>
            )}
            {option.payer && (
                <div>
                    <Select
                        placeholder="Select Level"
                        className="input-shadow"
                        size="xs"
                        w={130}
                    >
                        {collectorData.payer.map((val, i) => {
                            return (
                                <option value="option1" key={i}>
                                    {val}
                                </option>
                            );
                        })}
                    </Select>
                </div>
            )}
            {option.payerCate && (
                <div>
                    <Select
                        placeholder="Select Level"
                        className="input-shadow"
                        size="xs"
                        w={130}
                    >
                        {collectorData.payerCate.map((val, i) => {
                            return (
                                <option value="option1" key={i}>
                                    {val}
                                </option>
                            );
                        })}
                    </Select>
                </div>
            )}
            {option.encounter && (
                <div>
                    <Select
                        placeholder="Select Level"
                        className="input-shadow"
                        size="xs"
                        w={130}
                    >
                        {collectorData.encounter.map((val, i) => {
                            return (
                                <option value="option1" key={i}>
                                    {val}
                                </option>
                            );
                        })}
                    </Select>
                </div>
            )}
            {option.team && (
                <div>
                    <Select
                        placeholder="Select Level"
                        className="input-shadow"
                        size="xs"
                        w={130}
                    >
                        {collectorData.team.map((val, i) => {
                            return (
                                <option value="option1" key={i}>
                                    {val}
                                </option>
                            );
                        })}
                    </Select>
                </div>
            )}
        </>
    );
};

export default Detailstwo;
