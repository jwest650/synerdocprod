import { Select, Input, Checkbox } from '@chakra-ui/react';
import { useState } from 'react';
import AddReferralSourceContactModal from './AddReferralSourceContactModal';
import FindReferralSourceModal from './FindReferralSourceModal';

const CreateReferralForm = () => {
  let data = [1, 1, 1, 1];
  const [openFindReferral, setOpenFindReferral] = useState(false);
  const [openAddReferralContact, setOpenAddReferralContact] = useState(false);

  return (
    <div>
      <section>
        <h1 className="verdana18 mt-3 font-bold capitalize text-black dark:text-white">
          Create Referral
        </h1>
        <hr />

        <div className="py-2">
          <p className="verdana12">Add a new referral into the system</p>
          <h1 className="verdana16 mt-8 border-b font-bold">Agency</h1>
        </div>
        {/* <hr /> */}
        <div className=" flex  items-center justify-between">
          <div className="my-2 flex items-center">
            <p className="verdana13 mr-3 w-[200px] text-right font-semibold">
              <span className="font-bold text-secondary-color ">*</span>Agency:
            </p>
            <Select size="xs" fontSize="13px">
              <option value="option1" className="text-gray-800">
                Option 1
              </option>
              <option value="option2" className="text-gray-800">
                Option 2
              </option>
              <option value="option3" className="text-gray-800">
                Option 3
              </option>
            </Select>
          </div>

          <div className="my-2 flex items-center">
            <p className="verdana13 mr-3 w-[200px] text-right font-semibold">
              <span className="font-bold text-secondary-color">*</span>Agency
              Type:{' '}
            </p>
            <Select size="xs" fontSize="13px">
              <option value="option1" className="text-gray-800">
                Option 1
              </option>
              <option value="option2" className="text-gray-800">
                Option 2
              </option>
              <option value="option3" className="text-gray-800">
                Option 3
              </option>
            </Select>
          </div>
        </div>
      </section>
      <section>
        {/* Referral Source */}
        <section className=" mt-5 ">
          <div className=" py-4">
            <h1 className="verdana16 mt-5 border-b font-bold">
              Referral Source
            </h1>
          </div>
          {/* <hr /> */}
          <div className="my-2 flex items-center">
            <p className="verdana13 mr-3 w-[200px] text-right font-semibold">
              <span className="font-bold text-secondary-color">*</span>
              Referral Source:{' '}
            </p>
            <div>
              <Select size="xs" marginRight={5}>
                <option value="option1" className="text-gray-800">
                  Option 1
                </option>
                <option value="option2" className="text-gray-800">
                  Option 2
                </option>
                <option value="option3" className="text-gray-800">
                  Option 3
                </option>
              </Select>
            </div>
            <div className="ml-3">
              <button
                onClick={() => setOpenFindReferral(true)}
                className=" verdana13 cursor-pointer rounded bg-secondary-color py-[2px]  px-3 capitalize text-[#fff] dark:text-[#E77654]"
              >
                find referral source
              </button>
            </div>
          </div>
          <div className="my-2 flex items-center">
            <p className="verdana13 mr-3 w-[200px] text-right font-semibold">
              Referral Phone:
            </p>
            <p className="verdana13 text-gray-500">w: (3434)-343445</p>
          </div>
          <div className="my-2 -mt-7 flex items-center">
            <p className="verdana13 mr-3 w-[200px] text-right font-semibold">
              Referral History:
            </p>
            <div className="mt-10">
              <table className=" min-w-full overflow-auto">
                <thead className="verdana10 border-b bg-primary-color tracking-wider text-white">
                  <tr>
                    <th className=" border border-primary-gray border-t-primary-blue border-l-primary-blue px-2  pl-2 text-left"></th>
                    <th className=" border border-primary-gray border-t-primary-blue px-2  pl-2 text-left">
                      30 days
                    </th>
                    <th className=" border border-primary-gray border-t-primary-blue px-2  pl-2 text-left">
                      60 days
                    </th>
                    <th className=" border border-primary-gray border-t-primary-blue px-2  pl-2 text-left">
                      90 days
                    </th>
                  </tr>
                </thead>
                <tbody className="verdana10">
                  <tr className="border">
                    <td className="border border-gray-400 px-2">Admits</td>
                    <td className="border border-gray-400 px-2">0</td>
                    <td className="border border-gray-400 px-2">0</td>
                    <td className="border border-gray-400 px-2">0</td>
                  </tr>
                  <tr className="border bg-[#eee]">
                    <td className="border border-gray-400 px-2">Non Admits</td>
                    <td className="border border-gray-400 px-2">0</td>
                    <td className="border border-gray-400 px-2">0</td>
                    <td className="border border-gray-400 px-2">0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="my-2 flex items-center">
            <p className="verdana13 mr-3 w-[200px] text-right font-semibold">
              Mode of Delivery:
            </p>
            <div>
              <Select size="xs" marginRight={5}>
                <option value="option1" className="text-gray-800">
                  Option 1
                </option>
                <option value="option2" className="text-gray-800">
                  Option 2
                </option>
                <option value="option3" className="text-gray-800">
                  Option 3
                </option>
              </Select>
            </div>
          </div>
          <div className="my-2 flex items-center">
            <p className="verdana13 mr-3 w-[200px] text-right font-semibold">
              Sales Rep:
            </p>
            <div>
              <Select size="xs" marginRight={5}>
                <option value="option1" className="text-gray-800">
                  Option 1
                </option>
                <option value="option2" className="text-gray-800">
                  Option 2
                </option>
                <option value="option3" className="text-gray-800">
                  Option 3
                </option>
              </Select>
            </div>
          </div>
        </section>
        {/* Referral Source Contact */}
        <section className="mt-10 ">
          <div className="my-2 flex items-center">
            <p className="verdana13 mr-3 w-[200px] text-right font-semibold">
              Referral Source Contact:
            </p>
            <div>
              <Select size="xs" marginRight={5}>
                <option value="option1" className="text-gray-800">
                  Option 1
                </option>
                <option value="option2" className="text-gray-800">
                  Option 2
                </option>
                <option value="option3" className="text-gray-800">
                  Option 3
                </option>
              </Select>
            </div>

            <div className="ml-3">
              <button
                onClick={() => setOpenAddReferralContact(true)}
                className="verdana13 cursor-pointer rounded bg-secondary-color  py-[2px] px-3 capitalize text-[#fff] dark:text-[#E77654]"
              >
                add referral source contact
              </button>
            </div>
          </div>

          <div className="my-2 flex items-center">
            <p className="verdana13 mr-3 w-[200px]  text-right font-semibold">
              Phone 1:
            </p>
            <div className="flex items-center">
              <div>
                <Select size="xs">
                  <option value="option1" className="text-gray-800">
                    Option 1
                  </option>
                  <option value="option2" className="text-gray-800">
                    Option 2
                  </option>
                  <option value="option3" className="text-gray-800">
                    Option 3
                  </option>
                </Select>
              </div>
              <p className="verdana13 ml-3 text-gray-500">(343)-343-445</p>
              <div className="ml-3">
                <Input size={'xs'} />
              </div>
            </div>
          </div>
          <div className="my-2 flex items-center">
            <p className="verdana13 mr-3 w-[200px] text-right font-semibold">
              Phone 2:
            </p>
            <div className="flex items-center">
              <div>
                <Select size="xs">
                  <option value="option1" className="text-gray-800">
                    Option 1
                  </option>
                  <option value="option2" className="text-gray-800">
                    Option 2
                  </option>
                  <option value="option3" className="text-gray-800">
                    Option 3
                  </option>
                </Select>
              </div>
              <p className="verdana13 ml-3 text-gray-500">(343)-343-445</p>
              <div className="ml-3">
                <Input size={'xs'} />
              </div>
            </div>
          </div>
          <div className="my-2 flex items-center">
            <p className="verdana13 mr-3 w-[200px] text-right font-semibold">
              Email:
            </p>
            <div>
              <Input size={'xs'} />
            </div>
          </div>

          <div className="my-2 flex items-center">
            <p className="verdana13 mr-3 w-[200px] text-right font-semibold">
              Information:
            </p>
            <div>
              <Input size={'xs'} />
            </div>
          </div>
        </section>
      </section>
      {/* Initial Referral Information */}
      <section>
        <div className=" py-3 ">
          <h1 className="verdana16 mt-8 border-b text-2xl font-bold">
            Initial Referral Information
          </h1>
          {/* <hr /> */}
          <div className="my-2 flex items-center">
            <p className="verdana13 mr-3 w-[200px] text-right font-semibold">
              <span className="font-bold text-secondary-color">*</span>
              Payer Category:
            </p>
            <div>
              <Select size="xs" marginRight={5}>
                <option value="option1" className="text-gray-800">
                  Option 1
                </option>
                <option value="option2" className="text-gray-800">
                  Option 2
                </option>
                <option value="option3" className="text-gray-800">
                  Option 3
                </option>
              </Select>
            </div>
          </div>
          <div className="my-2 flex items-center">
            <p className="verdana13 mr-3 w-[200px] text-right font-semibold">
              Referral Date:
            </p>
            <div>
              <Input size={'xs'} type="date" />
            </div>
          </div>

          <div className="my-2 flex items-center">
            <p className="verdana13 mr-3 w-[200px] text-right font-semibold">
              Requested start of care:
            </p>
            <div>
              <Input size={'xs'} type="date" />
            </div>
          </div>

          <div className="my-2 flex items-center">
            <p className="verdana13 mr-3 w-[200px] text-right font-semibold">
              Admission Source:
            </p>
            <div>
              <Select size="xs" marginRight={5}>
                <option value="option1" className="text-gray-800">
                  Option 1
                </option>
                <option value="option2" className="text-gray-800">
                  Option 2
                </option>
                <option value="option3" className="text-gray-800">
                  Option 3
                </option>
              </Select>
            </div>
          </div>

          <div className="my-2 flex items-center">
            <p className="verdana13 mr-3 w-[200px] text-right font-semibold">
              Admission Type:
            </p>
            <div>
              <Select size="xs" marginRight={5}>
                <option value="option1" className="text-gray-800">
                  Option 1
                </option>
                <option value="option2" className="text-gray-800">
                  Option 2
                </option>
                <option value="option3" className="text-gray-800">
                  Option 3
                </option>
              </Select>
            </div>
          </div>

          <div className="my-2 mt-4 flex items-start">
            <p className="verdana13 mr-3 w-[200px] text-right font-semibold">
              <span className="font-bold text-secondary-color">*</span>
              Descipline:
            </p>

            <div className="mt-1">
              <table className=" min-w-full overflow-auto">
                <thead className="verdana10 border-b bg-primary-color tracking-wider text-white">
                  <tr>
                    <th className=" border border-primary-gray border-l-primary-blue border-t-primary-blue px-2  pl-2 text-left"></th>
                    <th className=" border border-primary-gray border-t-primary-blue px-2  pl-2 text-left">
                      Descipline
                    </th>
                    <th className=" border border-primary-gray border-t-primary-blue px-2  pl-2 text-left">
                      Active Associates
                    </th>
                    <th className=" border border-primary-gray border-r-primary-blue border-t-primary-blue px-2  pl-2 text-left">
                      Associates In Zip Code
                    </th>
                  </tr>
                </thead>
                <tbody className="verdana10">
                  <tr className="border">
                    <td className="border border-primary-gray px-2">
                      <Checkbox></Checkbox>
                    </td>
                    <td className="border border-primary-gray px-2">
                      Skilled Nurse
                    </td>
                    <td className="border border-primary-gray px-2">9</td>
                    <td className="border border-primary-gray px-2">0</td>
                  </tr>
                  <tr className="border">
                    <td className="border border-primary-gray px-2">
                      <Checkbox></Checkbox>
                    </td>
                    <td className="border border-primary-gray px-2">
                      Skilled Nurse
                    </td>
                    <td className="border border-primary-gray px-2">9</td>
                    <td className="border border-primary-gray px-2">0</td>
                  </tr>
                  <tr className="border">
                    <td className="border border-primary-gray px-2">
                      <Checkbox defaultChecked></Checkbox>
                    </td>
                    <td className="border border-primary-gray px-2">
                      Skilled Nurse
                    </td>
                    <td className="border border-primary-gray px-2">9</td>
                    <td className="border border-primary-gray px-2">0</td>
                  </tr>
                  <tr className="border">
                    <td className="border border-primary-gray px-2">
                      <Checkbox></Checkbox>
                    </td>
                    <td className="border border-primary-gray px-2">
                      Skilled Nurse
                    </td>
                    <td className="border border-primary-gray px-2">9</td>
                    <td className="border border-primary-gray px-2">0</td>
                  </tr>
                </tbody>
              </table>

              <div className="verdana13 mt-3">
                <Checkbox>
                  <span className="verdana13">Decline Referral</span>
                </Checkbox>
                <br />
                <Checkbox defaultChecked>
                  <span className="verdana13">Continue Referral</span>
                </Checkbox>
                <br />
                <button
                  className="my-3 rounded  bg-primary-orange px-2 text-white shadow-md"
                  // onClick={() => step < 4 && setStep(step + 1)}
                >
                  save and continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Search Modal */}
      <FindReferralSourceModal
        openFindReferral={openFindReferral}
        setOpenFindReferral={setOpenFindReferral}
      />
      {/* Add Modal */}
      <AddReferralSourceContactModal
        openAddReferralContact={openAddReferralContact}
        setOpenAddReferralContact={setOpenAddReferralContact}
      />
    </div>
  );
};

export default CreateReferralForm;
