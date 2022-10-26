<<<<<<< HEAD
import React from 'react';
import { invoice } from '../../assets/ardata';

const invoices = () => {
  return (
    <div className="ar space-y-2 p-5 capitalize">
      <section className="flex items-center justify-between">
        <h1 className="text-2xl capitalize">invoices</h1>

        <aside className="flex items-center space-x-40">
          <div className="space-x-2">
            <label htmlFor="">show my responsiilty only:</label>
            <input type="checkbox" name="" id="" />
          </div>
          <div className="space-x-2">
            <select name="" id="" className="w-[200px] text-black">
              <option value="">pdf</option>
            </select>
            <button className="border px-3">Export</button>
          </div>
        </aside>
      </section>
      <section className="flex items-center justify-between">
        <aside className="space-y-2">
          <div className="space-x-2">
            <label htmlFor="">invoice type:</label>
            <select name="" id="" className="w-[200px] text-black">
              <option value="">open invoice balances</option>
            </select>
          </div>
          <div className="space-x-2">
            <label htmlFor="">agency:</label>
            <select name="" id="" className="w-[200px] text-black">
              <option value="">all</option>
            </select>
          </div>
          <div className="space-x-2">
            <label htmlFor="">balance amt.from:</label>
            <input type="text" className="w-20" />
            <label htmlFor="">to:</label>
            <input type="text" className="w-20" />
          </div>
          <div className="space-x-2">
            <label htmlFor="">note type:</label>
            <select name="" id="" className="w-[200px] text-black">
              <option value="">all</option>
            </select>
          </div>
        </aside>
        <aside className="space-y-2">
          <div className="space-x-2">
            <label htmlFor="">age by:</label>
            <select name="" id="" className="w-[200px] text-black">
              <option value="">organization standard</option>
            </select>
          </div>
          <div className="space-x-2">
            <label htmlFor="">agency type:</label>
            <select name="" id="" className="w-[200px] text-black">
              <option value="">all</option>
            </select>
          </div>
          <div className="space-x-2">
            <label htmlFor="">to date from:</label>
            <input type="text" className="w-20" />
            <label htmlFor="">to:</label>
            <input type="text" className="w-20" />
          </div>
          <div className="space-x-2">
            <label htmlFor="">note from:</label>
            <input type="text" className="w-20" />
            <label htmlFor="">to:</label>
            <input type="text" className="w-20" />
          </div>
        </aside>
        <aside className="space-y-2">
          <div className="space-x-2">
            <label htmlFor="">reporting group:</label>
            <select name="" id="" className="w-[200px] text-black">
              <option value="">all</option>
            </select>
          </div>
          <div className="space-x-2">
            <label htmlFor="">payer category:</label>
            <select name="" id="" className="w-[200px] text-black">
              <option value="">all</option>
            </select>
          </div>
          <div className="space-x-2">
            <label htmlFor="">inv dates from:</label>
            <input type="text" className="w-20" />
            <label htmlFor="">to:</label>
            <input type="text" className="w-20" />
          </div>
          <div className="space-x-2">
            <label htmlFor="">note to pull:</label>
            <select name="" id="" className="w-[200px] text-black">
              <option value="">latest note applied</option>
            </select>
          </div>
        </aside>
      </section>
      <section className="ml-auto flex w-fit items-center space-x-2">
        <div className="w-[210px]">
          <input
            type="text"
            placeholder="Enter Patient first or last name"
            className="w-full pl-2"
          />
=======
import { Input, Select } from "@chakra-ui/react";
import React from "react";
import { invoice } from "../../assets/ardata";
import { FcCalendar } from "react-icons/fc";
const invoices = () => {
    return (
        <div className="ar background bodytext space-y-2 p-5 capitalize">
            <section className="flex items-center justify-between">
                <h1 className="head text-2xl capitalize">invoices</h1>

                <aside className="flex items-center space-x-40">
                    <div className="space-x-1">
                        <label htmlFor="">show my responsiilty only:</label>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div className="flex space-x-1">
                        <Select placeholder="Select option" size="sm">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                        <button className="border px-3">Export</button>
                    </div>
                </aside>
            </section>
            <section className="flex items-center justify-between">
                <aside className="space-y-2">
                    <div className="flex space-x-1">
                        <label htmlFor="">invoice type:</label>
                        <Select placeholder="Select option" size="sm">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </div>
                    <div className="flex space-x-1">
                        <label htmlFor="">agency:</label>
                        <Select placeholder="Select option" size="sm">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </div>
                    <div className="space-x-1">
                        <label htmlFor="">balance amt.from:</label>
                        <Input w={100} type="text" size="sm" />
                        <label htmlFor="">to:</label>
                        <Input w={100} type="text" size="sm" />
                    </div>
                    <div className="flex space-x-1">
                        <label htmlFor="">note type:</label>
                        <Select placeholder="Select option" size="sm">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </div>
                </aside>
                <aside className="space-y-2">
                    <div className="flex space-x-1">
                        <label htmlFor="">age by:</label>
                        <Select placeholder="Select option" size="sm">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </div>
                    <div className="flex space-x-1">
                        <label htmlFor="">agency type:</label>
                        <Select placeholder="Select option" size="sm">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </div>
                    <div className="space-x-1">
                        <label htmlFor="">to date from:</label>
                        <Input w={100} type="text" size="sm" />{" "}
                        <label htmlFor="">to:</label>
                        <Input w={100} type="text" size="sm" />{" "}
                    </div>
                    <div className="space-x-1">
                        <label htmlFor="">note from:</label>
                        <Input w={100} type="text" size="sm" />
                        <label htmlFor="">to:</label>
                        <Input w={100} type="text" size="sm" />
                    </div>
                </aside>
                <aside className="space-y-2">
                    <div className="flex space-x-1">
                        <label htmlFor="">reporting group:</label>
                        <Select placeholder="Select option" size="sm">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </div>
                    <div className="flex space-x-1">
                        <label htmlFor="">payer category:</label>
                        <Select placeholder="Select option" size="sm">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </div>
                    <div className="space-x-1">
                        <label htmlFor="">inv dates from:</label>
                        <Input w={100} type="text" size="sm" />
                        <label htmlFor="">to:</label>
                        <Input w={100} type="text" size="sm" />
                    </div>
                    <div className="flex space-x-1">
                        <label htmlFor="">note to pull:</label>
                        <Select placeholder="Select option" size="sm">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </div>
                </aside>
            </section>
            <section className="ml-auto flex w-fit items-center space-x-1">
                <div>
                    <Input
                        w={200}
                        type="text"
                        size="sm"
                        placeholder="Enter patient first or lastname"
                    />
                </div>
                <div>
                    <Input
                        w={200}
                        type="text"
                        size="sm"
                        placeholder="Enter payer name"
                    />
                </div>
                <div>
                    <Input
                        w={200}
                        type="text"
                        size="sm"
                        placeholder="Enter invoice"
                    />
                </div>
                <button className="border p-1 px-3">Search</button>
            </section>
            <hr />
            <div className="flex space-x-4">
                <p className=" text-orange-500">adjust balance to 0</p>
                <label htmlFor="">Update:</label>
                <Select placeholder="Select option" size="sm" w={200}>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </Select>
            </div>
            {/* table */}
            <section>
                <table className="w-full">
                    <thead>
                        <th>
                            <input type="checkbox" name="" id="" />
                        </th>
                        <th>patient name</th>
                        <th>invoice</th>
                        <th>current payer</th>
                        <th>invoice data</th>
                        <th>invoice range</th>
                        <th>payer resp</th>
                        <th>patient resp</th>
                        <th>total adj</th>
                        <th>total payment</th>
                        <th>balance</th>
                        <th>status</th>
                    </thead>
                    <tbody>
                        {invoice.map((value, i) => (
                            <tr key={i}>
                                <td>
                                    <input type="checkbox" name="" id="" />
                                </td>
                                <td>{value.patientname}</td>
                                <td>{value.invoice}</td>
                                <td>{value.currentpayer}</td>
                                <td>{value.invoicedata}</td>
                                <td>{value.invoicerange}</td>
                                <td>{value.payerresp}</td>
                                <td>{value.patientresp}</td>
                                <td>{value.totaladj}</td>
                                <td>{value.totalpayment}</td>
                                <td>{value.balance}</td>
                                <td>{value.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
>>>>>>> 737ce2443047f845121e9861cd76472424829708
        </div>
        <div className="w-[220px]">
          <input
            type="text"
            placeholder="Enter Payer name"
            className="w-full pl-2"
          />
        </div>
        <div className="w-[210px]">
          <input
            type="text"
            placeholder="Enter invioce #"
            className="w-full pl-2"
          />
        </div>
        <button className="border px-2">Search</button>
      </section>
      <hr />
      <div className="space-x-4">
        <a href="">adjust balance to zero</a>
        <label htmlFor="">Update:</label>
        <select name="" id="" className="text-black">
          <option value="">select an adjustment reason</option>
        </select>
      </div>
      {/* table */}
      <section>
        <table className="w-full">
          <thead>
            <th>
              <input type="checkbox" name="" id="" />
            </th>
            <th>patient name</th>
            <th>invoice</th>
            <th>current payer</th>
            <th>invoice data</th>
            <th>invoice range</th>
            <th>payer resp</th>
            <th>patient resp</th>
            <th>total adj</th>
            <th>total payment</th>
            <th>balance</th>
            <th>status</th>
          </thead>
          <tbody>
            {invoice.map((value, i) => (
              <tr key={i}>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>{value.patientname}</td>
                <td>{value.invoice}</td>
                <td>{value.currentpayer}</td>
                <td>{value.invoicedata}</td>
                <td>{value.invoicerange}</td>
                <td>{value.payerresp}</td>
                <td>{value.patientresp}</td>
                <td>{value.totaladj}</td>
                <td>{value.totalpayment}</td>
                <td>{value.balance}</td>
                <td>{value.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default invoices;
