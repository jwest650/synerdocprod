import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { FcEmptyTrash } from 'react-icons/fc';
import TableSelect from '../../../structure/TableSelect';

const FacilityEditAddressInfo = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleForm = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <>
      <span
        onClick={onOpen}
        className="verdana10 flex cursor-pointer items-center text-primary-orange underline"
      >
        [Edit]
      </span>
      <Modal isOpen={isOpen} size={'5xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            <form action="" onSubmit={handleForm}>
              <h1 className="verdana18 font-semibold">
                Edit Address/Phone Info
              </h1>
              <p className="verdana12">
                Edit existing address and phone number details.{' '}
              </p>
              <div className="mt-16 flex flex-col items-center lg:flex-row lg:items-start">
                <div className="mr-3 w-[65%] border-primary-gray lg:border-r">
                  <div className="flex items-start">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-blue text-sm font-semibold text-white">
                      1
                    </span>
                    <div>
                      <div className="flex w-[100%] flex-col items-center justify-center px-3">
                        <div className="my-2 flex items-center">
                          <p className="w-[150px] text-right font-medium">
                            <span className="text-primary-orange">*</span>
                            Address Type:
                          </p>
                          <div className="ml-3">
                            <TableSelect
                              styles={{ width: '100%' }}
                              options={['Work', 'Option2']}
                            />
                          </div>
                        </div>

                        <div className="my-2 flex items-center">
                          <p className="ml-1 w-[150px] text-right font-medium">
                            <span className="text-primary-orange">*</span>
                            Address1:
                          </p>{' '}
                          <div className="ml-4 w-28 pt-0.5">
                            <input
                              type="text"
                              placeholder="222 Tom Carson Road"
                              className="input-primary mx-2 w-48"
                            />
                          </div>
                        </div>
                        <div className="my-2 flex items-center">
                          <p className="ml-1 w-[150px] text-right font-medium">
                            Address2:
                          </p>{' '}
                          <div className="ml-4 w-28 pt-0.5">
                            <input
                              type="text"
                              className="input-primary mx-2 w-48"
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
                            <div className="min-w-[60px]">
                              <TableSelect
                                styles={{ width: '100%' }}
                                options={['LA', 'Option2']}
                              />
                            </div>
                            <input
                              type="text"
                              placeholder="71070"
                              className="input-primary w-16"
                            />{' '}
                            <input
                              type="text"
                              placeholder=""
                              className="input-primary w-16"
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
                        <div className="my-2 flex items-center">
                          <p className="w-[150px] text-right font-semibold">
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
                          <p className="ml-6 w-[150px] text-right font-semibold">
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
                            <input
                              type="text"
                              placeholder=""
                              className="input-primary w-14"
                            />
                          </div>
                        </div>
                        <div className="btn-primary ml-24 mt-4">Add Phone</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 flex gap-5 lg:mt-1 lg:block">
                  <span className="mt-4 flex h-5 w-5 items-center justify-center rounded-full bg-primary-blue text-sm font-semibold text-white lg:mt-0">
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
                        <td className="td-primary w-32 px-2">Fax</td>
                        <td className="td-primary w-56 px-4">
                          (318) 576-9999{' '}
                        </td>
                        <td className="td-primary px-4">
                          <FcEmptyTrash className="scale-150" />
                        </td>
                      </tr>
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

export default FacilityEditAddressInfo;
