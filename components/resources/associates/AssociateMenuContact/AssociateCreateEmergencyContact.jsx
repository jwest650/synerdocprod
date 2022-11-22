import {
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
  useDisclosure,
} from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';
import { FcEmptyTrash } from 'react-icons/fc';
import { FiTrash2 } from 'react-icons/fi';
import TableSelect from '../../../structure/TableSelect';

const AssociateCreateEmergencyContact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleForm = (e) => {
    e.preventDefault();
    onClose();
  };
  return (
    <>
      <span
        onClick={onOpen}
        className="btn-primary flex cursor-pointer items-center gap-1"
      >
        <BiPlus className="scale-150" />
        <span>Create Emergency Contact</span>
      </span>
      <Modal isOpen={isOpen} size={'5xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            <form action="" onSubmit={handleForm}>
              <h1 className="verdana18 font-semibold">
                Add Emergency Contact Info
              </h1>
              <div className="mt-16 flex flex-col items-center lg:flex-row lg:items-start">
                <div className="mr-3 w-full border-primary-gray  lg:border-r">
                  <div className="flex items-start">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-blue text-sm font-medium text-white">
                      1
                    </span>
                    <div>
                      <div className="flex w-[100%] flex-col items-center justify-center px-3">
                        <div className="my-2 flex items-center">
                          <p className="w-[165px] text-right font-medium">
                            <span className="text-primary-orange">*</span>
                            Relationship:
                          </p>
                          <div className="ml-3">
                            <TableSelect
                              styles={{ width: '100%' }}
                              options={[
                                'Daughter',
                                'Sister',
                                'Father',
                                'Brother',
                                'Uncle',
                                'Aunty',
                                'Nephew',
                                'Niece',
                                'Other',
                              ]}
                            />
                          </div>
                        </div>

                        <div className="my-2 flex items-center">
                          <p className="ml-6 w-[150px] text-right font-medium">
                            <span className="text-primary-orange">*</span>
                            First Name:
                          </p>{' '}
                          <div className="ml-4 w-28 pt-0.5">
                            <input
                              type="text"
                              placeholder="222 Hwy 48"
                              className="input-primary mx-2 w-48 md:mx-0"
                            />
                          </div>
                        </div>
                        <div className="my-2 flex items-center">
                          <p className="ml-6 w-[150px] text-right font-medium">
                            <span className="text-primary-orange">*</span>
                            Last Name:
                          </p>{' '}
                          <div className="ml-4 w-28 pt-0.5">
                            <input
                              type="text"
                              placeholder="222 Hwy 48"
                              className="input-primary mx-2 w-48 md:mx-0"
                            />
                          </div>
                        </div>
                        <div className="my-2 flex items-center">
                          <p className="ml-6 w-[150px] text-right font-medium">
                            Priority:
                          </p>{' '}
                          <div className="ml-4 w-28 pt-0.5">
                            <input
                              type="text"
                              className="input-primary mx-2 w-24 md:mx-0"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-14 flex items-start">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-blue text-sm font-medium text-white">
                      2
                    </span>
                    <div>
                      <div className="flex w-[100%] flex-col items-center justify-center px-3">
                        <div className="my-2 flex items-center">
                          <p className="w-[150px] text-right font-medium">
                            Address Type:
                          </p>
                          <div className="ml-3">
                            <TableSelect
                              styles={{ width: '100%' }}
                              options={['Home', 'Option2']}
                            />
                          </div>
                        </div>
                        <div className="my-2 flex items-center">
                          <p className="ml-6 w-[150px] text-right font-medium">
                            Address1:
                          </p>{' '}
                          <div className="ml-4 w-28 pt-0.5">
                            <input
                              type="text"
                              placeholder="123 Muse Street"
                              className="input-primary mx-2 w-48 md:mx-0"
                            />
                          </div>
                        </div>
                        <div className="my-2 flex items-center">
                          <p className="ml-6 w-[150px] text-right font-medium">
                            Address2:
                          </p>{' '}
                          <div className="ml-4 w-28 pt-0.5">
                            <input
                              type="text"
                              placeholder=""
                              className="input-primary mx-2 w-48 md:mx-0"
                            />
                          </div>
                        </div>
                        <div className="my-2 flex items-center">
                          <p className="ml-5 w-[150px] text-right font-medium">
                            {' '}
                            <span className="text-primary-orange">*</span>{' '}
                            City/State/Zip:{' '}
                          </p>{' '}
                          <div className="ml-4 flex w-28 items-center gap-2 pt-0.5">
                            <input
                              type="text"
                              placeholder="Saline"
                              className="input-primary w-20"
                            />{' '}
                            <TableSelect
                              styles={{ width: '100%' }}
                              options={['LA', 'Option1']}
                            />
                            <input
                              type="text"
                              placeholder="71070"
                              className="input-primary w-16"
                            />{' '}
                          </div>
                        </div>
                        <input
                          type="text"
                          placeholder=""
                          className="input-primary ml-[151px] mt-2 w-20"
                        />{' '}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-14 w-full space-y-14 lg:mt-0">
                  <div className="flex items-start">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-blue text-sm font-medium text-white">
                      3
                    </span>
                    <div>
                      <div className="flex w-[100%] flex-col items-center justify-center px-3">
                        <div className="my-2 flex items-center">
                          <p className="w-[150px] text-right font-medium">
                            Phone Type:
                          </p>
                          <div className="ml-3">
                            <TableSelect
                              styles={{ width: '100%' }}
                              options={['Option1', 'Option2']}
                            />
                          </div>
                        </div>

                        <div className="my-2 flex items-center">
                          <p className="ml-6 w-[150px] text-right font-medium">
                            Phone:
                          </p>{' '}
                          <div className="ml-4 flex w-28 items-center gap-1 pt-0.5">
                            (
                            <input type="text" className="input-primary w-14" />
                            )
                            <input type="text" className="input-primary w-14" />
                            -
                            <input
                              type="text"
                              placeholder=""
                              className="input-primary w-14"
                            />
                            ext.
                          </div>
                        </div>
                        <input
                          type="text"
                          placeholder=""
                          className="input-primary ml-40 w-14"
                        />
                        <div className="ntn-primary ml-24 mt-7">Add Phone</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className="mt-4 flex h-5 w-5 items-center justify-center rounded-full bg-primary-blue text-sm font-medium text-white lg:mt-0">
                      4
                    </span>
                    <table className=" mx-auto mt-5 w-fit overflow-auto px-3 shadow-md">
                      <thead className="thead-primary">
                        <tr>
                          <th className="th-first">Preferred </th>
                          <th className="th-middle">Phone Type</th>
                          <th className="th-middle">Phone</th>
                          <th className="th-last"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="w-full bg-[#e6ebf85d]">
                          <td className="td-primary w-10 px-4">
                            <div className="flex items-center justify-center">
                              <input
                                type="checkbox"
                                className="input-primary"
                              />
                            </div>
                          </td>
                          <td className="td-primary w-60 px-2">Mobile</td>
                          <td className="td-primary w-64 px-4">
                            (318) 576-9999{' '}
                          </td>

                          <td className="td-primary px-4">
                            <FcEmptyTrash className="scale-150" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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

export default AssociateCreateEmergencyContact;
