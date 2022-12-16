import {
  Modal,
  ModalContent,
  ModalOverlay,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react';
import TableSelect from '../../../structure/TableSelect';
import { statesAbbreviation } from '../associateDatatwo';

const AssEditContactInfo = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleForm = (e) => {
    e.preventDefault();
    onClose();
  };
  return (
    <>
      <Tooltip
        hasArrow
        label={`Edit Contact Info`}
        fontSize="11px"
        color="white"
      >
        <span
          onClick={onOpen}
          className="cursor-pointer text-primary-orange underline"
        >
          [Edit]
        </span>
      </Tooltip>
      <Modal isOpen={isOpen} size={'5xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-secondary-blue p-4 pb-10 ">
            <form action="" onSubmit={handleForm}>
              <h1 className="verdana16 font-semibold">
                Edit Address/Phone Info
              </h1>
              <p>
                Select an address type and enter address details. Then add
                relevant phone numbers. Finally, hit &quot;Save&quot;
              </p>

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
                        </div>
                      </div>
                    </div>
                  </div>

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

export default AssEditContactInfo;
