import {
  Modal,
  ModalContent,
  ModalOverlay,
<<<<<<< HEAD
  useDisclosure,
} from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';
import { FcEmptyTrash } from 'react-icons/fc';
import TableSelect from '../../../structure/TableSelect';

const AssociateCreateContactInfo = () => {
=======
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';
import TableSelect from '../../../structure/TableSelect';
import { statesAbbreviation } from '../associateDatatwo';

const AssociateCreateContactInfo = ({ setShowContactInfo }) => {
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleForm = (e) => {
    e.preventDefault();
    onClose();
<<<<<<< HEAD
  };
  return (
    <>
      <span
        onClick={onOpen}
        className="btn-primary flex cursor-pointer items-center gap-1"
      >
        <BiPlus className="scale-150" />
        <span>Create Contact Info</span>
      </span>
      <Modal isOpen={isOpen} size={'5xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
=======
    setShowContactInfo(true);
  };
  return (
    <>
      <Tooltip
        hasArrow
        label={`Create Contact Info`}
        fontSize="11px"
        color="white"
      >
        <span
          onClick={onOpen}
          className="btn-primary flex cursor-pointer items-center gap-1"
        >
          <BiPlus className="scale-150" />
          <span>Create Contact Info</span>
        </span>
      </Tooltip>
      <Modal isOpen={isOpen} size={'5xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-secondary-blue p-4 pb-10 ">
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
            <form action="" onSubmit={handleForm}>
              <h1 className="verdana16 font-semibold">
                Create Address/Phone Info
              </h1>
              <p>
                Select an address type and enter address details. Then add
                relevant phone numbers. Finally, hit &quot;Save&quot;
              </p>
<<<<<<< HEAD
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
                              options={['Home', 'Option2']}
                            />
                          </div>
                        </div>

                        <div className="my-2 flex items-center">
                          <p className="ml-6 w-[150px] text-right font-medium">
                            <span className="text-primary-orange">*</span>
                            Address1:
                          </p>{' '}
                          <div className="ml-4 w-28 pt-0.5">
                            <input
                              type="text"
                              placeholder="222 Hwy 48"
                              className="input-primary mx-2 w-48"
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
                            <TableSelect
                              styles={{ width: '100%' }}
                              options={['LA', 'Option2']}
                            />
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
=======

              <div className="verdana12 mt-10 flex h-full w-full flex-col items-start justify-center gap-12 text-sm md:grid md:grid-cols-6 md:gap-0">
                <div className="md:col-span-3">
                  <div className="flex w-full items-start gap-2 pb-5 ">
                    <div className="inline-flex h-5 min-w-[20px] max-w-[20px] items-center justify-center rounded-full bg-primary-blue text-white">
                      1
                    </div>

                    <div className="flex w-full flex-col items-center gap-3.5">
                      <div className="flex w-full items-center justify-center gap-3 ">
                        <label className="flex w-[30%]  justify-end">
                          <span className="text-primary-orange">*</span>
                          Address Type:
                        </label>
                        <div className=" flex w-[70%] items-center gap-1">
                          <TableSelect
                            options={[
                              '<--select-->',
                              'Home',
                              'Mobile',
                              'Fax',
                              'Work',
                            ]}
                          />
                        </div>
                      </div>

                      <div className="flex w-full items-center justify-center gap-3 ">
                        <label htmlFor="" className="flex w-[30%] justify-end">
                          <span className="text-primary-orange">*</span>
                          Address1:
                        </label>

                        <div className=" flex w-[70%] items-center gap-2">
                          <input type="text" className="input-primary" />
                        </div>
                      </div>
                      <div className="flex w-full items-center justify-center gap-3 ">
                        <label htmlFor="" className="flex w-[30%] justify-end">
                          Address2:
                        </label>

                        <div className=" flex w-[70%] items-center gap-2">
                          <input type="text" className="input-primary" />
                        </div>
                      </div>
                      <div className="flex w-full items-center justify-center gap-3 ">
                        <label htmlFor="" className="flex w-[30%] justify-end">
                          <span className="text-primary-orange">*</span>
                          City/State/Zip:
                        </label>
                        <div className=" flex w-[70%] items-center gap-2">
                          <input type="text" className="input-primary w-16" />

                          <TableSelect
                            styles={{ width: 'fit-content', height: '25px' }}
                            options={statesAbbreviation}
                          />
                          <input type="text" className="input-primary w-14" />
                          <input type="text" className="input-primary w-14" />
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
                        </div>
                      </div>
                    </div>
                  </div>
<<<<<<< HEAD
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
                  <table className=" mx-auto mt-3 w-fit overflow-auto px-3 shadow-md">
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
                        <td className="td-primary w-32 px-2">Mobile</td>
                        <td className="td-primary w-56 px-4">
                          (318) 576-9999{' '}
                        </td>

                        <td className="td-primary px-4">
                          <FcEmptyTrash className="scale-150" />
=======

                  <div className="mt-8 flex w-full items-start gap-2">
                    <div className="inline-flex h-5 min-w-[20px] max-w-[20px] items-center justify-center rounded-full bg-primary-blue text-white">
                      2
                    </div>

                    <div className="flex w-full flex-col items-center gap-3.5">
                      <div className="flex w-full items-center justify-center gap-3 ">
                        <label className="flex w-[30%]  justify-end">
                          Phone Type:
                        </label>
                        <div className="flex w-[70%] items-center">
                          <TableSelect
                            options={[
                              '<--select-->',
                              'Home',
                              'Mobile',
                              'Fax',
                              'Work',
                            ]}
                          />
                        </div>
                      </div>

                      <div className="flex w-full items-center justify-center gap-3 ">
                        <label htmlFor="" className="flex w-[30%] justify-end">
                          Phone:
                        </label>
                        <div className=" flex w-[70%] items-center gap-0.5">
                          (
                          <input type="text" className="input-primary w-16" />
                          )
                          <input type="text" className="input-primary w-14" />
                          - <input type="text" className="input-primary w-14" />
                          ext.{' '}
                          <input type="text" className="input-primary w-14" />
                        </div>
                      </div>
                      <div className="btn-primary mr-11">Add Phone</div>
                    </div>
                  </div>
                </div>
                <div className="flex h-full w-full items-start gap-2 px-4 md:col-span-3 md:border-l-2">
                  <div className="inline-flex h-5 min-w-[20px] max-w-[20px] items-center justify-center rounded-full bg-primary-blue text-white">
                    3
                  </div>

                  <table className="w-full">
                    <thead className="thead-primary">
                      <tr>
                        <th className="th-first">Preferred</th>
                        <th className="th-middle">Phone Type</th>
                        <th className="th-last">Phone</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-secondary-blue">
                        <td className="td-primary" colSpan={3}>
                          No records to display.
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
<<<<<<< HEAD

=======
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
              <div className="mt-14 flex w-full justify-end gap-3">
                <button
                  type="submit"
                  className="rounded bg-primary-blue px-4 py-1 text-white shadow"
                >
                  Save
                </button>
                <button
<<<<<<< HEAD
                  onClick={onClose}
=======
                  onClick={() => {
                    setShowContactInfo(true);
                    onClose();
                  }}
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
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

export default AssociateCreateContactInfo;
