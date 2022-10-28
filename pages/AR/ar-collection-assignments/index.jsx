import Image from "next/image";
import React, { useState } from "react";
import { ar } from "../../../assets/ardata";
import { RiDeleteBin5Line } from "react-icons/ri";
import { RiEdit2Line } from "react-icons/ri";
import { BsPlus } from "react-icons/bs";
import { Select, useDisclosure } from "@chakra-ui/react";
import CreateCollectorModal from "../../../components/ar/CreateCollectorModal";

const ARCollectionAssignments = () => {
<<<<<<< HEAD
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <div className="ar  bodytext h-full p-5">
            <CreateCollectorModal isOpen={isOpen} onClose={onClose} />
            <div className="space-y-5">
                <section className="flex items-center space-x-5">
                    <h1 className="head text-2xl font-bold capitalize">
                        collector assignments
                    </h1>
                    <div
                        className="create-bg flex cursor-pointer items-center space-x-1"
                        onClick={onOpen}
                    >
                        <BsPlus />
                        <h1 className="text-sm capitalize">assign collector</h1>
                    </div>
                </section>
                <hr />
                {/* table */}
                <section>
                    <table className="w-full border-collapse capitalize">
                        <thead>
                            <tr>
                                <th>agency</th>
                                <th>payer category</th>
                                <th>payer</th>
                                <th>team</th>
                                <th>patient</th>
                                <th>admit date</th>
                                <th>associate</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <Select
                                        placeholder="Select option"
                                        size="xs"
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
                                </td>
                            </tr>
                            {ar.map((value, i) => (
                                <tr key={i}>
                                    <td>{value.agency}</td>
                                    <td>{value.payerCate}</td>
                                    <td>{value.payer}</td>
                                    <td>{value.team}</td>
                                    <td>{value.team}</td>
                                    <td>{value.admitDate}</td>
                                    <td>{value.associate}</td>
                                    <td>
                                        <RiDeleteBin5Line className="inline-block" />
=======
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="ar  bodytext h-full p-5">
      <CreateCollectorModal isOpen={isOpen} onClose={onClose} />
      <div className="space-y-5">
        <section className="flex items-center space-x-5">
          <h1 className="head text-2xl font-bold capitalize">
            collector assignments
          </h1>
          <div
            className="create-bg flex cursor-pointer items-center space-x-1"
            onClick={onOpen}
          >
            <BsPlus className="text-2xl" />
            <h1 className="capitalize">assign collector</h1>
          </div>
        </section>
        <hr />
        {/* table */}
        <section>
          <table className="w-full border-collapse capitalize">
            <thead>
              <th>agency</th>
              <th>payer category</th>
              <th>payer</th>
              <th>team</th>
              <th>patient</th>
              <th>admit date</th>
              <th>associate</th>
              <th>actions</th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Select placeholder="Select option" size="sm">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </td>
              </tr>
              {ar.map((value, i) => (
                <tr key={i}>
                  <td>{value.agency}</td>
                  <td>{value.payerCate}</td>
                  <td>{value.payer}</td>
                  <td>{value.team}</td>
                  <td>{value.team}</td>
                  <td>{value.admitDate}</td>
                  <td>{value.associate}</td>
                  <td>
                    <RiDeleteBin5Line className="inline-block" />
>>>>>>> c000e1afcee8b54c537811828d6dc8e188144821

                                        <RiEdit2Line className="inline-block" />
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan="8">displaying page 1 of 1</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </div>
    );
};

export default ARCollectionAssignments;
