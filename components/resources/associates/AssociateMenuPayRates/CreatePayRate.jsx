import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import { payrateData } from '../../../../assets/data';
import TableSelect from '../../../structure/TableSelect';

const CreatePayRate = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show2, setShow2] = useState(false);

  const handleNav = () => {
    setShow2((current) => (current = !current));
  };
  const handleClose = () => {
    onClose();
    setShow2(false);
  };

  return (
    <>
      <span
        onClick={onOpen}
        className="btn-primary flex cursor-pointer items-center justify-center gap-1 "
      >
        <BiPlus className="scale-150" />
        <span>Create Pay Rate</span>
      </span>
      <Modal isOpen={isOpen} size={`${show2 ? '4xl' : 'lg'}`} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10">
            <h1 className="verdana16 font-semibold">Create Payroll</h1>

            <div className="mt-7 ">
              {show2 ? (
                <>
                  <div className="flex  items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-blue text-white">
                      2
                    </div>
                    <span>
                      Add Pay Rates for <strong>Registered Nurse </strong> to{' '}
                      <strong>McNaughton, Hillary</strong>{' '}
                    </span>
                  </div>
                  <table className="mt-3 w-full overflow-auto">
                    <thead className="thead-primary">
                      <tr className="verdana11">
                        <th className="th-first">Row</th>
                        <th className="th-middle">Service Description</th>
                        <th className="th-middle">Weekday Rate</th>
                        <th className="th-middle">Weekend Rate</th>
                        <th className="th-middle">Allow Override</th>
                        <th className="th-last">Start Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {payrateData.map((payrate, index) => (
                        <tr
                          key={index}
                          className="verdana12 w-full even:bg-[#e6ebf85d]"
                        >
                          <td className="td-primary">{index + 1}</td>
                          <td className="td-primary">{payrate.description}</td>
                          <td className="td-primary">{payrate.weekdayRate}</td>
                          <td className="td-primary">{payrate.weekendRate}</td>
                          <td className="td-primary">
                            <div className="flex justify-center">
                              <input
                                type="checkbox"
                                checked={payrate.allowOverride ? true : false}
                                className="input-primary w-fit"
                              />
                            </div>
                          </td>
                          <td className="td-primary">
                            <div className="flex justify-center">
                              <input
                                type="date"
                                className="input-primary h-[21px] w-[135px]"
                                value={payrate.startDate}
                              />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-blue text-white">
                      1
                    </div>
                    <span className="font-semibold">Select Pay Type</span>
                  </div>
                  <div className="mt-4 flex items-center gap-3 ">
                    <p className="ml-[115px] flex items-start">
                      <span className="text-primary-orange">*</span>Type:
                    </p>
                    <div>
                      <TableSelect options={['Select', 'Option1', 'Option2']} />
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="mt-10 flex w-full justify-center gap-4">
              {show2 ? (
                <>
                  <button
                    className="verdana13 rounded bg-gray-500 px-4 py-1 text-white shadow"
                    onClick={handleNav}
                  >
                    Back
                  </button>
                  <button
                    className="verdana13 rounded bg-primary-blue px-4 py-1 text-white shadow"
                    onClick={handleNav}
                  >
                    Save
                  </button>
                  <button
                    className="verdana13 rounded bg-gray-500 px-4 py-1 text-white shadow"
                    onClick={handleClose}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleNav}
                    className="verdana13 rounded bg-primary-orange px-4 py-1 text-white shadow"
                  >
                    Next
                  </button>
                  <button
                    onClick={handleClose}
                    className="verdana13 rounded bg-gray-500 px-4 py-1 text-white shadow"
                  >
                    Close
                  </button>
                </>
              )}
            </div>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreatePayRate;
