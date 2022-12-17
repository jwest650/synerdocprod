import {
  Modal,
  ModalContent,
  ModalOverlay,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import CalendarComp from '../../structure/CalendarComp';
import TableSelect from '../../structure/TableSelect';

const Reassign = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleForm = (e) => {
    e.preventDefault();
    onClose();
  };
  return (
    <>
      <Tooltip
        hasArrow
        label={`Reassign Extra Availability/Unavailability`}
        fontSize="11px"
        color="white"
      >
        <span
          onClick={onOpen}
          className="btn-primary flex cursor-pointer items-center gap-1"
        >
          <BiPlus className="scale-150" />
          <span>Reassign</span>
        </span>
      </Tooltip>
      <Modal isOpen={isOpen} size={'xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-secondary-blue p-4 pb-10 ">
            <form action="" onSubmit={handleForm}>
              <div className="mt-4">
                <div className="mt-6 flex w-full flex-col items-center gap-3.5">
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <label className="flex w-[35%]  justify-end">
                      <span className="text-primary-orange">*</span>
                      Associate to Assign
                    </label>
                    <div className=" flex w-[65%] items-center gap-1">
                      <TableSelect options={['<--select-->', 'Peggy Oppong']} />
                    </div>
                  </div>

                  <div className="flex w-full items-center justify-center gap-3 ">
                    <label htmlFor="" className="flex w-[35%] justify-end">
                      <span className="text-primary-orange">*</span>
                      Start date:
                    </label>

                    <div className=" flex w-[65%] items-center gap-2">
                      <CalendarComp setDate={setStartDate} date={startDate} />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <label htmlFor="" className="flex w-[35%] justify-end">
                      End date:
                    </label>
                    <div className=" flex w-[65%] items-center gap-2">
                      <CalendarComp setDate={setEndDate} date={endDate} />
                    </div>
                  </div>
                </div>

                <h3 className="verdana14 my-8 text-center font-semibold">
                  Schedules to Reassign
                </h3>
                <table className="w-full overflow-x-scroll">
                  <thead className="thead-primary">
                    <tr>
                      <th className="th-first">
                        <div className="flex items-center">
                          <input type="checkbox" className="input-primary" />
                        </div>
                      </th>
                      <th className="th-middle">Associate</th>
                      <th className="th-middle">Patient</th>
                      <th className="th-middle">Service Date</th>
                      <th className="th-middle">Time In</th>
                      <th className="th-middle">Time Out</th>
                      <th className="th-last">Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="odd:bg-secondary-blue">
                      <td className="td-primary" colSpan="77">
                        No records to display
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-8 flex w-full justify-end gap-3">
                <button type="submit" className="btn-primary w-16">
                  Save
                </button>
                <button type="button" onClick={onClose} className="btn-cancel">
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

export default Reassign;
