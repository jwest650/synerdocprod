import {
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
  useDisclosure,
} from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';
import { FiTrash2 } from 'react-icons/fi';

const AssociateCreateReports = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleForm = (e) => {
    e.preventDefault();
    onClose();
  };
  return (
    <>
      <span
        onClick={onOpen}
        className="flex cursor-pointer items-center gap-1 rounded bg-orange-600 py-1 px-2 text-white"
      >
        <BiPlus className="scale-125" />
        <span className="text-sm">Create Reports</span>
      </span>
      <Modal isOpen={isOpen} size={'5xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            {/* <ModalBody> */}
            <form action="" onSubmit={handleForm}>
              <h1 className="text-xl font-semibold">
                Add Associate/Phone Info
              </h1>
              <p>
                Select an address type and enter address details. Then add
                relevant phone numbers. Finally, hit &quot;Save&quot;
              </p>
              <div className="mt-16 flex flex-col items-center lg:flex-row lg:items-start">
                <div className="mr-3 w-[65%] border-primary-gray lg:border-r">
                  <div className="flex items-start">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-blue text-sm font-semibold text-white">
                      1
                    </span>
                    <div>
                      <div className="flex w-[100%] flex-col items-center justify-center px-3">
                        <div className="my-2 flex">
                          <p className="w-[150px] text-right font-semibold">
                            <span className="text-primary-orange">*</span>
                            Address Type:
                          </p>
                          <div className="ml-3">
                            <Select
                              css={{
                                backgroundColor: '#c6d8ffe1',
                                border: 'none',
                              }}
                              className="shadow outline-none"
                              size="xs"
                            >
                              <option value="option1" className="text-gray-800">
                                Home{' '}
                              </option>
                              <option value="option1" className="text-gray-800">
                                Option2{' '}
                              </option>
                            </Select>
                          </div>
                        </div>

                        <div className="my-2 flex">
                          <p className="ml-6 w-[150px] text-right font-semibold">
                            <span className="text-primary-orange">*</span>
                            Address1:
                          </p>{' '}
                          <div className="ml-4 w-28 pt-0.5">
                            <input
                              type="text"
                              placeholder="222 Hwy 48"
                              className="mx-2 w-48 rounded bg-[#c6d8ffe1] px-2 text-center shadow outline-none md:mx-0"
                            />
                          </div>
                        </div>
                        <div className="my-2 flex">
                          <p className="ml-6 w-[150px] text-right font-semibold">
                            Address2:
                          </p>{' '}
                          <div className="ml-4 w-28 pt-0.5">
                            <input
                              type="text"
                              className="mx-2 w-48 rounded bg-[#c6d8ffe1] px-2 text-center shadow outline-none md:mx-0"
                            />
                          </div>
                        </div>
                        <div className="my-2 flex">
                          <p className="ml-5 w-[150px] text-right font-semibold">
                            {' '}
                            <span className="text-primary-orange">*</span>{' '}
                            City/State/Zip:{' '}
                          </p>{' '}
                          <div className="ml-4 flex w-28 items-center gap-2 pt-0.5">
                            <input
                              type="text"
                              placeholder="Saline"
                              className="w-20 rounded bg-[#c6d8ffe1] px-2 text-center shadow outline-none"
                            />{' '}
                            <Select
                              css={{
                                backgroundColor: '#c6d8ffe1',
                                border: 'none',
                                width: '60px',
                              }}
                              className="shadow outline-none"
                              size="xs"
                            >
                              <option value="option1" className="text-gray-800">
                                LA{' '}
                              </option>
                              <option value="option1" className="text-gray-800">
                                Option2{' '}
                              </option>
                            </Select>
                            <input
                              type="text"
                              placeholder="71070"
                              className="w-16 rounded bg-[#c6d8ffe1] px-2 text-center shadow outline-none"
                            />{' '}
                            <input
                              type="text"
                              placeholder=""
                              className="w-16 rounded bg-[#c6d8ffe1] px-2 text-center shadow outline-none"
                            />{' '}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-14 flex items-start">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-blue text-sm font-semibold text-white">
                      2
                    </span>
                    <div>
                      <div className="flex w-[100%] flex-col items-center justify-center px-3">
                        <div className="my-2 flex">
                          <p className="w-[150px] text-right font-semibold">
                            Phone Type:
                          </p>
                          <div className="ml-3">
                            <Select
                              css={{
                                backgroundColor: '#c6d8ffe1',
                                border: 'none',
                              }}
                              className="shadow outline-none"
                              size="xs"
                            >
                              <option value="option1" className="text-gray-800">
                                Option1{' '}
                              </option>
                              <option value="option1" className="text-gray-800">
                                Option2{' '}
                              </option>
                            </Select>
                          </div>
                        </div>

                        <div className="my-2 flex">
                          <p className="ml-6 w-[150px] text-right font-semibold">
                            Phone:
                          </p>{' '}
                          <div className="ml-4 flex w-28 items-center gap-2 pt-0.5">
                            (
                            <input
                              type="text"
                              className="w-14 rounded bg-[#c6d8ffe1] px-2 text-center shadow outline-none"
                            />
                            )
                            <input
                              type="text"
                              className="w-14 rounded bg-[#c6d8ffe1] px-2 text-center shadow outline-none"
                            />
                            -
                            <input
                              type="text"
                              placeholder=""
                              className="w-14 rounded bg-[#c6d8ffe1] px-2 text-center shadow outline-none"
                            />
                            ext.
                            <input
                              type="text"
                              placeholder=""
                              className="w-14 rounded bg-[#c6d8ffe1] px-2 text-center shadow outline-none"
                            />
                          </div>
                        </div>
                        <div className="ml-24 mt-4 rounded bg-primary-orange px-3 py-1 text-white shadow-md">
                          Add Phone
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 flex gap-5 lg:mt-1 lg:block">
                  <span className="mt-4 flex h-5 w-5 items-center justify-center rounded-full bg-primary-blue text-sm font-semibold text-white lg:mt-0">
                    3
                  </span>
                  <table className=" mx-auto mt-5 w-fit overflow-auto px-3 shadow-md">
                    <thead className="border-b bg-primary-blue text-[15px] tracking-wider text-white">
                      <tr>
                        <th className="border border-primary-gray border-t-primary-blue border-l-primary-blue px-4 text-left">
                          Preferred{' '}
                        </th>
                        <th className=" border border-primary-gray border-t-primary-blue pl-2 text-left">
                          Phone Type
                        </th>
                        <th className=" border border-primary-gray border-t-primary-blue pl-2 text-left">
                          Phone
                        </th>

                        <th className="border border-primary-gray border-t-primary-blue border-r-primary-blue pl-2 text-left"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="w-full bg-[#e6ebf85d]">
                        <td className="w-10 border border-gray-400 py-2 px-4">
                          <input type="checkbox" />
                        </td>
                        <td className="w-10 border border-gray-400 px-2">
                          Mobile
                        </td>
                        <td className="w-64 border border-gray-400 px-4">
                          (318) 576-9999{' '}
                        </td>

                        <td className="border border-gray-400 px-4">
                          <FiTrash2 className="scale-125 text-primary-orange" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-14 flex w-full justify-end gap-3">
                <button
                  type="submit"
                  className="rounded bg-primary-blue px-4 py-1 text-white shadow"
                >
                  Save
                </button>
                <button
                  onClick={onClose}
                  className="rounded bg-gray-500 px-4 py-1 text-white shadow"
                >
                  Cancel
                </button>
              </div>
            </form>
            {/* </ModalBody> */}
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AssociateCreateReports;
