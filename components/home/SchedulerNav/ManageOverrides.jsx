import {
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';

const ManageOverrides = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleForm = (e) => {
    e.preventDefault();
    onClose();
  };
  return (
    <>
      <Tooltip
        hasArrow
        label={`Manage Extra Availability/Unavailability`}
        fontSize="11px"
        color="white"
      >
        <span
          onClick={onOpen}
          className="btn-primary flex cursor-pointer items-center gap-1"
        >
          <BiPlus className="scale-150" />
          <span>Manage Overrides</span>
        </span>
      </Tooltip>
      <Modal isOpen={isOpen} size={'xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-secondary-blue p-4 pb-10 ">
            <form action="" onSubmit={handleForm}>
              <h1 className="verdana16 font-semibold">
                Manage Associate Availability Overrides{' '}
              </h1>
              <p className="">
                View delete associate availability/unavailability.
              </p>
              <div className="mt-4">
                <h3 className="verdana14 my-4 text-center font-semibold">
                  Guest Guest
                </h3>
                <table className="w-full overflow-x-scroll">
                  <thead className="thead-primary">
                    <tr>
                      <th className="th-first">Type</th>
                      <th className="th-middle">Description</th>
                      <th className="th-middle">Start Date</th>
                      <th className="th-last">End Date</th>
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
                <button type="submit" className="btn-cancel">
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

export default ManageOverrides;
