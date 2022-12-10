import { Select, useDisclosure } from "@chakra-ui/react";
import React from "react";
import CbsaModal from "../../../../../components/ar/CbsaModal";
import InvoiceConditionCode from "../../../../../components/ar/InvoiceConditionCode";
import InvoiceMisc from "../../../../../components/ar/InvoiceMisc";
import InvoiceOccurenceCode from "../../../../../components/ar/InvoiceOccurenceCode";
import InvoiceOccurrenceSpan from "../../../../../components/ar/InvoiceOccurrenceSpan";
import InvioceRemarks from "../../../../../components/ar/InvoiceRemarks";
import InvoiceValueCode from "../../../../../components/ar/InvoiceValueCode";

const Payer = () => {
    return (
        <div className="space-y-2 p-5">
            <section>
                <div className="flex items-center justify-end  space-x-2">
                    <label htmlFor="" className="font-bold">
                        payer:
                    </label>
                    <Select
                        placeholder="Select option"
                        className="input-shadow"
                        size="xs"
                        w={130}
                    >
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </Select>
                </div>
                <h1 className="head">invoice payer coding</h1>
            </section>
            <section className="grid grid-cols-2 border-t-2">
                <article className="space-y-2 px-2">
                    <section>
                        <div className="flex items-center justify-between">
                            <h1 className="font-bold">condition code</h1>
                            <InvoiceConditionCode />
                        </div>
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th>sequence</th>
                                    <th>code</th>
                                    <th>condition code description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="bg-gray-500" colSpan={3}>
                                        no condition code for this invocie and
                                        payer
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <section>
                        <div className="flex items-center justify-between">
                            <h1 className="font-bold">
                                value codes and amounts
                            </h1>
                            <InvoiceValueCode />
                        </div>
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th>sequence</th>
                                    <th>code</th>
                                    <th>condition code description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="bg-gray-500" colSpan={3}>
                                        no condition code for this invocie and
                                        payer
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <div className=" flex items-center justify-between">
                        <h1 className="font-bold">invoice remarks</h1>
                        <InvioceRemarks />
                    </div>
                </article>
                <article className="space-y-2 border-l-2 px-2">
                    <section>
                        <div className="flex items-center justify-between">
                            <h1 className="font-bold">
                                occurrence code and dates
                            </h1>
                            <InvoiceOccurenceCode />
                        </div>
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th>sequence</th>
                                    <th>code</th>
                                    <th>condition code description</th>
                                    <th>occurrence date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="bg-gray-500" colSpan={4}>
                                        no condition code for this invocie and
                                        payer
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <section>
                        <div className="flex items-center justify-between">
                            <h1 className="font-bold">
                                occurrence codes and span date
                            </h1>
                            <InvoiceOccurrenceSpan />
                        </div>
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th>sequence</th>
                                    <th>code</th>
                                    <th>condition code description</th>
                                    <th>from date</th>
                                    <th>through date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="bg-gray-500" colSpan={5}>
                                        no condition code for this invocie and
                                        payer
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <h1 className="font-bold">other codes</h1>
                            <InvoiceMisc />
                        </div>
                        <article className="flex">
                            <div className="space-y-1 text-right font-bold">
                                <p>service authorization code:</p>
                                <p>delay reason code:</p>
                                <p>document control number:</p>
                                <p>unique tracking number:</p>
                                <p>alternate DCN:</p>
                            </div>
                            <div></div>
                        </article>
                    </div>
                </article>
            </section>
            <CbsaModal />
        </div>
    );
};

export default Payer;
