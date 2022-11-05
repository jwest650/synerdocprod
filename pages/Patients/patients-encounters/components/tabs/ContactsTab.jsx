import React from "react";
import { BsPlus } from "react-icons/bs";
import { useDisclosure } from "@chakra-ui/react";

const ContactsTab = () => {
    return (
        <div className="capitalize">
            <article className="grid grid-cols-2 ">
                <section className="space-y-2">
                    <div className="flex items-center space-x-4">
                        <h1>address / phone info</h1>
                        <button className="flex items-center capitalize text-orange-500 underline">
                            <BsPlus className="text-xl text-green-500" />
                            add contact info
                        </button>
                        <button className="flex items-center capitalize text-orange-500 underline">
                            <BsPlus className="text-xl text-green-500" />
                            add service facility
                        </button>
                    </div>
                    <div className="flex space-x-5 border-t">
                        <aside>
                            <button className="text-orange-500">[Edit]</button>
                            <br />
                            <button className="text-orange-500">
                                [Delete]
                            </button>
                        </aside>
                        <aside className="grid w-full grid-cols-2 border-l capitalize">
                            <div>
                                <h1>home address</h1>
                                <div>
                                    <p>22222 hwy 1 bypass</p>
                                    <p>nichito la 7174</p>
                                </div>
                            </div>
                            <div>
                                <h1>phone</h1>
                                <div>
                                    <p>home:(318):399494</p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </section>
                <section className="space-y-2 border-l pl-3">
                    <div className="flex items-center space-x-4">
                        <h1>patient contacts</h1>
                        <button className="flex items-center capitalize text-orange-500 underline">
                            <BsPlus className="text-xl text-green-500" />
                            add patient contact
                        </button>
                    </div>
                    <div className="flex space-x-5 border-t">
                        <aside>
                            <button className="text-orange-500">[Edit]</button>
                            <br />
                            <button className="text-orange-500">
                                [Delete]
                            </button>
                            <br />
                            <button className="text-orange-500">[Edit]</button>
                        </aside>
                        <aside className="border-l capitalize">
                            <section>
                                <div className="flex items-center justify-between">
                                    <h1>james, jessel</h1>

                                    <p>brother</p>
                                </div>
                                <p>primary caregiver</p>
                            </section>
                            <section className="flex items-center justify-between">
                                <div>
                                    <h1>home address</h1>
                                    <div>
                                        <p>22222 hwy 1 bypass</p>
                                        <p>nichito la 7174</p>
                                    </div>
                                </div>
                                <div>
                                    {" "}
                                    <h1>phone</h1>
                                </div>
                            </section>
                        </aside>
                    </div>
                </section>
            </article>
        </div>
    );
};

export default ContactsTab;
