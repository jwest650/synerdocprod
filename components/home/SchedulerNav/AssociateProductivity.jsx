import {
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';

const AssociateProductivity = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleForm = (e) => {
    e.preventDefault();
    onClose();
  };
  return (
    <>
      <Tooltip
        hasArrow
        label={`Create Extra Availability/Unavailability`}
        fontSize="11px"
        color="white"
      >
        <span
          onClick={onOpen}
          className="btn-primary flex cursor-pointer items-center gap-1"
        >
          <BiPlus className="scale-150" />
          <span>Associate Productivity</span>
        </span>
      </Tooltip>
      <Modal isOpen={isOpen} size={'xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-secondary-blue p-4 pb-10 ">
            <form action="" onSubmit={handleForm}>
              <h1 className="verdana16 font-semibold">
                Associate Productivity
              </h1>
              <div className="mt-8">
                <p className="">Service dates from 12/04/2022 to 12/11/2022</p>
                <h3 className="verdana14 my-4 text-center font-semibold">
                  Guest Guest
                </h3>
                <table className="w-full overflow-x-scroll">
                  <thead className="thead-primary">
                    <tr>
                      <th className="th-first">Agency</th>
                      <th className="th-middle">Week</th>
                      <th className="th-middle">Time</th>
                      <th className="th-last">Productivity</th>{' '}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="odd:bg-secondary-blue">
                      <td className="td-primary" colSpan="4">
                        No records to display
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-8 flex w-full justify-end gap-3">
                <button type="submit" className=" btn-cancel outline-none">
                  Close
                </button>
              </div>
            </form>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AssociateProductivity;
