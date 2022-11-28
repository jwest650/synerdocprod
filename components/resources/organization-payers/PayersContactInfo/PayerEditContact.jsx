import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { FcEmptyTrash } from 'react-icons/fc';
import TableSelect from '../../../structure/TableSelect';

const PayerEditContact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleForm = (e) => {
    e.preventDefault();
    onClose();
  };
  return (
    <>
      <span
        onClick={onOpen}
        className="cursor-pointer  items-center text-primary-orange underline"
      >
        [Edit]
      </span>
      <Modal isOpen={isOpen} size={'5xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            <form action="" onSubmit={handleForm}>
              <h1 className="verdana18 font-semibold">
                Edit Referral Source Contact
              </h1>
              <p className="verdana12">
                Edit Referral Source Contact Information
              </p>
              <div className="verdana12  mt-16 flex flex-col items-center lg:flex-row lg:items-start">
                <div className="mr-3 w-[55%] border-primary-gray lg:border-r">
                  <div className="flex items-start">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-blue text-white">
                      1
                    </span>

                    <div>
                      <div className="ml-10 flex w-full flex-col items-center gap-3.5">
                        <div className="ml-1 flex w-full items-center justify-center gap-3 ">
                          <p className="flex w-[35%] justify-end">
                            <span className="text-primary-orange">*</span>
                            Contact Name:
                          </p>
                          <div className=" ml-2 flex w-[65%] items-center">
                            <input
                              type="text"
                              className="input-primary mx-0.5 w-48"
                            />
                          </div>
                        </div>

                        <div className="flex w-full items-center justify-center gap-3 ">
                          <p className="flex w-[35%] justify-end">
                            Contact Email:
                          </p>
                          <div className=" flex w-[65%] ">
                            <input
                              type="text"
                              placeholder="PO BOX  981106"
                              className="input-primary mx-2 w-48"
                            />{' '}
                          </div>
                        </div>

                        <div className="flex w-full items-center justify-center gap-3 ">
                          <p className="flex w-[35%] justify-end">
                            Department:
                          </p>
                          <div className=" flex w-[65%] items-center gap-2">
                            <input
                              type="text"
                              className="input-primary mx-2 w-48"
                            />{' '}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-14 flex items-start">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-blue text-white">
                      2
                    </span>

                    <div>
                      <div className="flex w-full flex-col items-center gap-3.5">
                        <div className="flex w-full items-center justify-center gap-3 ">
                          <p className="flex w-[35%]  justify-end">
                            Phone Type:
                          </p>
                          <div className=" flex w-[65%] items-center">
                            <TableSelect options={['Select', 'Option1']} />
                          </div>
                        </div>

                        <div className="flex w-full items-center justify-center gap-3 ">
                          <p className="flex w-[35%] justify-end"> Phone :</p>
                          <div className=" flex w-[65%] items-center gap-2">
                            (
                            <input type="text" className="input-primary w-16" />
                            )
                            <input type="text" className="input-primary w-16" />
                            -
                            <input type="text" className="input-primary w-16" />
                            ext.
                            <input type="text" className="input-primary w-16" />
                          </div>
                        </div>
                        <div className="btn-primary mr-10 cursor-pointer">
                          Add Phone
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 flex gap-5 lg:mt-1 lg:block">
                  <span className="mt-4 flex h-5 w-5 items-center justify-center rounded-full bg-primary-blue text-white lg:mt-0">
                    3
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
                        <td className="td-primary w-10">
                          <div className="flex items-center justify-center">
                            <input
                              type="checkbox"
                              className="input-primary flex items-center justify-center"
                            />
                          </div>
                        </td>
                        <td className="td-primary w-32 px-2">Work</td>
                        <td className="td-primary w-56 px-4">
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
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PayerEditContact;
